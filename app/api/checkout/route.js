import Stripe from "stripe";
import products from "@/lib/data/products.json";

const stripe = new Stripe(process.env.PRIVATE_STRIPE);

export async function POST(req) {
  try {
    const { cart, locale } = await req.json();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const line_items = cart.map((item) => {
      const product = products.find((p) => p.id === item.id);

      if (!product) {
        throw new Error("Produit invalide");
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name || item.id,
            images: [`${baseUrl}${product.images[0]}`],
          },
          unit_amount: Number(product.priceStripe), // ✅ prix serveur sécurisé
        },
        quantity: item.qty,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/panier`,
      billing_address_collection: "required",
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
