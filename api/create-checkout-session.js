import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { priceId, planKey } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/gracias/${planKey}`,
      cancel_url: `${req.headers.origin}/#planes`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error al crear la sesión:", error.message);
    res.status(500).json({ error: "Error al crear la sesión de pago" });
  }
}
