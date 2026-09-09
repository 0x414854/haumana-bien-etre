import Stripe from "stripe";

const stripe = new Stripe(process.env.PRIVATE_STRIPE);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return Response.json(
        {
          error: "Session ID manquant",
        },
        {
          status: 400,
        },
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "line_items.data.price.product"],
    });

    // Vérification importante
    if (session.payment_status !== "paid") {
      return Response.json(
        {
          error: "Le paiement n'est pas validé",
          paymentStatus: session.payment_status,
        },
        {
          status: 403,
        },
      );
    }

    return Response.json({
      sessionId: session.id,

      paymentStatus: session.payment_status,

      paymentIntent: session.payment_intent,

      amountSubtotal: session.amount_subtotal,

      amountTotal: session.amount_total,

      currency: session.currency,

      customer: {
        name: session.customer_details?.name,
        email: session.customer_details?.email,
        phone: session.customer_details?.phone,

        address: session.customer_details?.address,
      },

      items: session.line_items?.data.map((item) => ({
        id: item.id,

        name: item.description,

        quantity: item.quantity,

        amountTotal: item.amount_total,

        amountSubtotal: item.amount_subtotal,

        currency: item.currency,

        image: item.price?.product?.images?.[0] || null,
      })),
    });
  } catch (error) {
    console.error("Erreur Stripe:", error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
