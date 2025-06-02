export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método no permitido");
  }

  try {
    console.log("BODY RECIBIDO:", req.body); // 👈 Para depurar
    const { priceId, planKey, periodo, customerEmail } = req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: `${req.headers.origin}/gracias-${planKey}`,
      cancel_url: `${req.headers.origin}/#planes`,
      customer_email: customerEmail,
      metadata: {
        plan: planKey,
        periodo,
      },
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Error Stripe:", error); // 👈 Muy útil
    res.status(500).send("A server error occurred");
  }
}
