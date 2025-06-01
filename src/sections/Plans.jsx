// src/sections/Plans.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const plansData = {
  es: {
    mensual: [
      {
        title: "BÁSICO",
        price: "$29",
        currency: "USD",
        originalPrice: null,
        features: [
          "Tips y alertas diarias",
          "Análisis exclusivos",
          "Acceso a comunidad VIP",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$49",
        currency: "USD",
        originalPrice: "$70",
        features: [
          "Plan Básico",
          "Análisis + IA",
          "Bot pronosticador avanzado en Telegram",
          "Soporte exclusivo",
          "Resultados verificados",
        ],
        link: "#",
      },
      {
        title: "ÉLITE",
        price: "$99",
        currency: "USD",
        originalPrice: null,
        features: [
          "Todo incluido",
          "Picks personalizados",
          "Acceso anticipado a picks VIP y actualizaciones",
          "Soporte 1:1",
        ],
        link: "#",
      },
    ],
    trimestral: [
      {
        title: "BÁSICO",
        price: "$74",
        currency: "USD",
        originalPrice: "$87",
        features: [
          "Tips y alertas diarias",
          "Análisis exclusivos",
          "Acceso a comunidad VIP",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$125",
        currency: "USD",
        originalPrice: "$147",
        features: [
          "Plan Básico",
          "Análisis + IA",
          "Bot pronosticador avanzado en Telegram",
          "Soporte exclusivo",
          "Resultados verificados",
        ],
        link: "#",
      },
      {
        title: "ÉLITE",
        price: "$252",
        currency: "USD",
        originalPrice: "$297",
        features: [
          "Todo incluido",
          "Picks personalizados",
          "Acceso anticipado a picks VIP y actualizaciones",
          "Soporte 1:1",
        ],
        link: "#",
      },
    ],
    anual: [
      {
        title: "BÁSICO",
        price: "$244",
        currency: "USD",
        originalPrice: "$348",
        features: [
          "Tips y alertas diarias",
          "Análisis exclusivos",
          "Acceso a comunidad VIP",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$412",
        currency: "USD",
        originalPrice: "$588",
        features: [
          "Plan Básico",
          "Análisis + IA",
          "Bot pronosticador avanzado en Telegram",
          "Soporte exclusivo",
          "Resultados verificados",
        ],
        link: "#",
      },
      {
        title: "ÉLITE",
        price: "$832",
        currency: "USD",
        originalPrice: "$1,188",
        features: [
          "Todo incluido",
          "Picks personalizados",
          "Acceso anticipado a picks VIP y actualizaciones",
          "Soporte 1:1",
        ],
        link: "#",
      },
    ],
  },

  en: {
    mensual: [
      {
        title: "BASIC",
        price: "$29",
        currency: "USD",
        originalPrice: null,
        features: [
          "Daily tips and alerts",
          "Exclusive analysis",
          "Access to VIP community",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$49",
        currency: "USD",
        originalPrice: "$70",
        features: [
          "Basic Plan",
          "AI-powered analysis",
          "Advanced prediction bot on Telegram",
          "Exclusive support",
          "Verified results",
        ],
        link: "#",
      },
      {
        title: "ELITE",
        price: "$99",
        currency: "USD",
        originalPrice: null,
        features: [
          "All included",
          "Custom picks",
          "Early access to VIP picks and updates",
          "1:1 Support",
        ],
        link: "#",
      },
    ],
    trimestral: [
      {
        title: "BASIC",
        price: "$74",
        currency: "USD",
        originalPrice: "$87",
        features: [
          "Daily tips and alerts",
          "Exclusive analysis",
          "Access to VIP community",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$125",
        currency: "USD",
        originalPrice: "$147",
        features: [
          "Basic Plan",
          "AI-powered analysis",
          "Advanced prediction bot on Telegram",
          "Exclusive support",
          "Verified results",
        ],
        link: "#",
      },
      {
        title: "ELITE",
        price: "$252",
        currency: "USD",
        originalPrice: "$297",
        features: [
          "All included",
          "Custom picks",
          "Early access to VIP picks and updates",
          "1:1 Support",
        ],
        link: "#",
      },
    ],
    anual: [
      {
        title: "BASIC",
        price: "$244",
        currency: "USD",
        originalPrice: "$348",
        features: [
          "Daily tips and alerts",
          "Exclusive analysis",
          "Access to VIP community",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$412",
        currency: "USD",
        originalPrice: "$588",
        features: [
          "Basic Plan",
          "AI-powered analysis",
          "Advanced prediction bot on Telegram",
          "Exclusive support",
          "Verified results",
        ],
        link: "#",
      },
      {
        title: "ELITE",
        price: "$832",
        currency: "USD",
        originalPrice: "$1,188",
        features: [
          "All included",
          "Custom picks",
          "Early access to VIP picks and updates",
          "1:1 Support",
        ],
        link: "#",
      },
    ],
  },

  pt: {
    mensual: [
      {
        title: "BÁSICO",
        price: "$29",
        currency: "USD",
        originalPrice: null,
        features: [
          "Dicas e alertas diários",
          "Análises exclusivas",
          "Acesso à comunidade VIP",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$49",
        currency: "USD",
        originalPrice: "$70",
        features: [
          "Plano Básico",
          "Análise com IA",
          "Bot avançado de previsões no Telegram",
          "Suporte exclusivo",
          "Resultados verificados",
        ],
        link: "#",
      },
      {
        title: "ELITE",
        price: "$99",
        currency: "USD",
        originalPrice: null,
        features: [
          "Tudo incluído",
          "Picks personalizados",
          "Acesso antecipado a picks VIP e atualizações",
          "Suporte 1:1",
        ],
        link: "#",
      },
    ],
    trimestral: [
      {
        title: "BÁSICO",
        price: "$74",
        currency: "USD",
        originalPrice: "$87",
        features: [
          "Dicas e alertas diários",
          "Análises exclusivas",
          "Acesso à comunidade VIP",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$125",
        currency: "USD",
        originalPrice: "$147",
        features: [
          "Plano Básico",
          "Análise com IA",
          "Bot avançado de previsões no Telegram",
          "Suporte exclusivo",
          "Resultados verificados",
        ],
        link: "#",
      },
      {
        title: "ELITE",
        price: "$252",
        currency: "USD",
        originalPrice: "$297",
        features: [
          "Tudo incluído",
          "Picks personalizados",
          "Acesso antecipado a picks VIP e atualizações",
          "Suporte 1:1",
        ],
        link: "#",
      },
    ],
    anual: [
      {
        title: "BÁSICO",
        price: "$244",
        currency: "USD",
        originalPrice: "$348",
        features: [
          "Dicas e alertas diários",
          "Análises exclusivas",
          "Acesso à comunidade VIP",
        ],
        link: "#",
      },
      {
        title: "PRO",
        price: "$412",
        currency: "USD",
        originalPrice: "$588",
        features: [
          "Plano Básico",
          "Análise com IA",
          "Bot avançado de previsões no Telegram",
          "Suporte exclusivo",
          "Resultados verificados",
        ],
        link: "#",
      },
      {
        title: "ELITE",
        price: "$832",
        currency: "USD",
        originalPrice: "$1,188",
        features: [
          "Tudo incluído",
          "Picks personalizados",
          "Acesso antecipado a picks VIP e atualizações",
          "Suporte 1:1",
        ],
        link: "#",
      },
    ],
  },
};

export default function Plans({ lang }) {
  const [mode, setMode] = useState("mensual");

  const t = {
    es: {
      title: "Elige tu plan ganador",
      subtitle:
        "Elige tu plan y empieza a ganar hoy. El mejor momento fue ayer. El segundo mejor momento es ahora.",
      buy: "Comprar",
      mensual: "Mensual",
      trimestral: "Trimestral -15%",
      anual: "Anual -30%",
    },
    en: {
      title: "Choose your winning plan",
      buy: "Buy now",
      mensual: "Monthly",
      trimestral: "Quarterly -15%",
      anual: "Annual -30%",
    },
  };

  return (
    <section id="planes" className="py-24 px-6 text-center">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight relative"
      >
        <span className="relative z-10">{t[lang].title}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#1db954] to-[#ffc107] blur-xl opacity-10 rounded" />
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-400 text-center mt-2 max-w-xl mx-auto leading-relaxed text-lg"
      >
        Elige tu plan y empieza a{" "}
        <span className="text-[#ffc107] font-semibold">ganar</span> hoy.
        <br />
        <span className="text-[#ffc107] font-semibold">
          El mejor momento fue ayer. El segundo mejor momento es{" "}
          <span className="underline underline-offset-4">ahora</span>.
        </span>
      </motion.p>

      {/* Botones de modalidad */}
      <div className="flex justify-center gap-4 mb-12 mt-8 flex-wrap">
        {["mensual", "trimestral", "anual"].map((planKey) => (
          <button
            key={planKey}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              mode === planKey
                ? "bg-[#ffc107] text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setMode(planKey)}
          >
            {t[lang][planKey]}
          </button>
        ))}
      </div>

      {/* Tarjetas de planes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plansData[lang][mode].map((plan, index) => {
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
                    {lang === "es" ? "Más popular" : "Most popular"}
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
                {index === 0
                  ? lang === "es"
                    ? "Para empezar con ventaja"
                    : "For getting started"
                  : index === 1
                  ? lang === "es"
                    ? "Potencia tus resultados"
                    : "Boost your success"
                  : lang === "es"
                  ? "Máximo rendimiento garantizado"
                  : "Ultimate performance"}
              </p>

              <ul className="text-left text-gray-300 mb-8 space-y-3 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <CheckCircle className="text-[#ffc107] w-4 h-4 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                className="inline-flex items-center justify-center gap-2 bg-[#ffc107] text-black font-bold py-2 px-6 rounded-full hover:brightness-110 transition-all"
              >
                {t[lang].buy} <ArrowRight size={16} />
              </a>

              <p className="text-xs text-white/50 mt-2">
                🚀{" "}
                {lang === "es"
                  ? "Acceso inmediato · Cancela cuando quieras"
                  : "Instant access · Cancel anytime"}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
