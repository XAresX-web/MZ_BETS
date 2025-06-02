import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const { priceId, planKey } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/gracias-${planKey}`,
      cancel_url: `${req.headers.origin}/#planes`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("❌ Error en Stripe:", err);
    return res.status(500).json({ error: "Error creating session" });
  }
}
