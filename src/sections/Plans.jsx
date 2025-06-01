import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import plansData from "../data/plansData";
import stripePriceTable from "../data/stripePriceTable";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_live_51RV5boLn2X7paUwsm5WgzuSYZf8P954wMs8jBpBPXjxM4586p6VV03MSk6atvXMMHMNcQNLWBMYRLjHrBFHFO9Av00Wmof0unN"
); // tu clave pública real

export default function Plans() {
  const [mode, setMode] = useState("mensual");
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const data = plansData[lang] || plansData.es;

  const handleCheckout = async (planIndex) => {
    const stripe = await stripePromise;
    const priceId = stripePriceTable[mode][planIndex];

    if (!priceId) {
      alert("Error al seleccionar el plan.");
      return;
    }

    await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      successUrl: `${window.location.origin}/gracias`,
      cancelUrl: `${window.location.origin}#planes`,
    });
  };

  return (
    <section id="planes" className="py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight relative"
      >
        <span className="relative z-10">{t("plans.title")}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#1db954] to-[#ffc107] blur-xl opacity-10 rounded" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-400 text-center mt-2 max-w-xl mx-auto leading-relaxed text-lg"
      >
        {t("plans.subtitle")}
      </motion.p>

      <div className="flex justify-center gap-4 mb-12 mt-8 flex-wrap">
        {["mensual", "trimestral", "anual"].map((period) => (
          <button
            key={period}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              mode === period
                ? "bg-[#ffc107] text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setMode(period)}
          >
            {t(`plans.periods.${period}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data[mode].map((plan, index) => {
          const isPopular = index === 1;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl shadow-lg transition-all border backdrop-blur-md ${
                isPopular
                  ? "bg-white/10 border-[#33ff77] z-10"
                  : "bg-white/5 border-white/10 hover:border-[#ffc107]"
              }`}
            >
              {isPopular && (
                <>
                  <div className="absolute inset-0 rounded-2xl bg-[#33ff77]/20 blur-2xl animate-glow -z-10" />
                  <span className="absolute top-4 right-4 text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#ffc107]/90 text-black tracking-wider shadow-lg ring-2 ring-[#ffc107]/50 backdrop-blur-md animate-glow-popular">
                    {t("plans.labels.popular")}
                  </span>
                </>
              )}

              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide">
                {plan.title}
              </h3>

              <p className="text-4xl font-black text-[#1db954] mb-1 flex justify-center items-baseline gap-1">
                {plan.price}
                {plan.currency && (
                  <span className="text-sm text-gray-400 font-medium tracking-wide">
                    {plan.currency}
                  </span>
                )}
              </p>

              {plan.originalPrice && (
                <p className="text-xs text-white/50 line-through mb-1">
                  {plan.originalPrice}
                </p>
              )}

              <p className="text-sm text-white/70 mb-4 italic">
                {t(`plans.labels.plan${index}`)}
              </p>

              <ul className="text-left text-gray-300 mb-8 space-y-3 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <CheckCircle className="text-[#ffc107] w-4 h-4 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(index)}
                className="inline-flex items-center justify-center gap-2 bg-[#ffc107] text-black font-bold py-2 px-6 rounded-full hover:brightness-110 transition-all"
              >
                {t("plans.buy")} <ArrowRight size={16} />
              </button>

              <p className="text-xs text-white/50 mt-2">
                🚀 {t("plans.labels.footnote")}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
