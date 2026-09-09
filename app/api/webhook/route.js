import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

const stripe = new Stripe(process.env.PRIVATE_STRIPE);

export async function POST(req) {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Signature Stripe manquante", {
      status: 400,
    });
  }

  let event;

  /* =========================
VÉRIFICATION STRIPE
========================= */

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.error("Erreur signature webhook:", error.message);

    return new Response(`Webhook Error: ${error.message}`, {
      status: 400,
    });
  }

  /* =========================
ÉVÉNEMENTS STRIPE
========================= */

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;

        if (session.payment_status === "paid") {
          await saveOrder(session);
        }

        break;
      }

      default:
        console.log("Événement Stripe non géré:", event.type);
    }

    return Response.json({
      received: true,
    });
  } catch (error) {
    console.error("Erreur traitement webhook:", error);

    return new Response("Erreur serveur", {
      status: 500,
    });
  }
}

/* =========================
ENREGISTRER LA COMMANDE
========================= */

async function saveOrder(session) {
  const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  /* =========================
VÉRIFIER SI EXISTE
========================= */

  const { data: existingOrder, error: existingError } = await supabaseAdmin
    .from("orders")
    .select("id")
    .eq("stripe_session_id", fullSession.id)
    .maybeSingle();

  if (existingError) {
    throw existingError;
  }

  if (existingOrder) {
    console.log("Commande déjà enregistrée:", fullSession.id);

    return;
  }

  /* =========================
CRÉER LA COMMANDE
========================= */

  const { data: order, error: orderError } = await supabaseAdmin
    .from("orders")
    .insert({
      stripe_session_id: fullSession.id,

      stripe_payment_intent: fullSession.payment_intent,

      payment_status: fullSession.payment_status,

      status: "paid",

      amount_subtotal: fullSession.amount_subtotal,

      amount_total: fullSession.amount_total,

      currency: fullSession.currency,

      /* CLIENT */

      customer_name: fullSession.customer_details?.name,

      customer_email: fullSession.customer_details?.email,

      customer_phone: fullSession.customer_details?.phone,

      customer_address: fullSession.customer_details?.address,

      /* AUTRES */

      locale: fullSession.metadata?.locale || null,
    })
    .select()
    .single();

  if (orderError) {
    console.error("Erreur création commande:", orderError);

    throw orderError;
  }

  /* =========================
PRODUITS
========================= */

  const orderItems = fullSession.line_items.data.map((item) => ({
    order_id: order.id,

    stripe_line_item_id: item.id,

    product_name: item.description,

    quantity: item.quantity,

    unit_amount: Math.round(item.amount_total / item.quantity),

    total_amount: item.amount_total,

    currency: item.currency,

    product_image: item.price?.product?.images?.[0] || null,
  }));

  /* =========================
ENREGISTRER LES PRODUITS
========================= */

  const { error: itemsError } = await supabaseAdmin
    .from("order_items")
    .insert(orderItems);

  if (itemsError) {
    console.error("Erreur produits:", itemsError);

    throw itemsError;
  }

  console.log("Commande enregistrée:", order.id);
}
