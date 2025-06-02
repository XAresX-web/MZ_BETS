import Stripe from "stripe";

const stripe = new Stripe(
  "ssk_live_51RV5boLn2X7paUwsGgAlz48a1e8sdjKYxhNdYDajrpAo599zLtw5XdLaZorStNmexWXC0uA6Zix3pzKaWW2UmzxO00DOGvFUCf"
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método no permitido");
  }

  const { priceId, planKey, periodo, customerEmail } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: `${req.headers.origin}/gracias-${planKey}`,
      cancel_url: `${req.headers.origin}#planes`,
      customer_email: customerEmail,
      metadata: {
        plan: planKey,
        periodo,
      },
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
