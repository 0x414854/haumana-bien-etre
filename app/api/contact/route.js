import { contactRequestTemplate } from "@/app/components/mail/contactRequestTemplate";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

// 🌟 Rate limit en mémoire
const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 5; // max 5 requêtes
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip) {
  const now = Date.now();
  if (!rateLimitMap.has(ip)) rateLimitMap.set(ip, []);
  const requests = rateLimitMap
    .get(ip)
    .filter((t) => now - t < RATE_LIMIT_WINDOW);
  if (requests.length >= RATE_LIMIT_MAX) return false;
  requests.push(now);
  rateLimitMap.set(ip, requests);
  return true;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // 🔹 Rate limit
    if (!checkRateLimit(ip)) {
      return Response.json(
        {
          success: false,
          code: "error_rate_limit",
        },
        { status: 429 }
      );
    }

    // 🔹 Honeypot
    if (body.website) {
      return Response.json(
        { success: false, code: "error_bot_detected" },
        { status: 400 }
      );
    }

    // 🔹 Limite longueur pour anti spam
    if (
      body.firstName.length > 50 ||
      body.lastName.length > 50 ||
      body.message.length > 1000
    ) {
      return Response.json(
        { success: false, code: "error_length" },
        { status: 400 }
      );
    }

    // 1️⃣ Enregistrer en DB
    const { error } = await supabase.from("contact_requests").insert([
      {
        first_name: body.firstName,
        last_name: body.lastName,
        phone: body.phone,
        email: body.email,
        service: body.service,
        message: body.message,
        accept_policy: body.acceptPolicy,
        recontact: body.recontact,
      },
    ]);

    if (error) {
      console.error(error);
      return Response.json({ error: "Database error" }, { status: 500 });
    }

    // 2️⃣ Envoyer email via Resend
    await resend.emails.send({
      from: "Site Haumana <onboarding@resend.dev>", // à changer après vérification domaine
      to: "ath.tes@proton.me",
      subject: `Nouvelle demande de contact - ${body.firstName} ${body.lastName}`,
      html: contactRequestTemplate({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        service: body.service,
        message: body.message,
      }),
    });

    return Response.json({
      success: true,
      code: "success_form_sent",
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      {
        success: false,
        code: "error_db",
      },
      { status: 500 }
    );
  }
}
