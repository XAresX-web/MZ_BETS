import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const text = {
  es: {
    title: "¿Aún no estás listo para ser VIP?",
    subtitle:
      "Únete gratis a nuestro canal de Telegram y accede a contenido gratuito de alto valor: tips diarios, alertas de alta precisión y nuestro curso básico de apuestas deportivas. ¡Solo por hoy!",
    button: "Entrar al canal gratuito",
  },
  en: {
    title: "Not ready to join yet?",
    subtitle:
      "Join our free Telegram channel and get daily tips, high-accuracy alerts, and our basic betting course. Only today!",
    button: "Join free channel",
  },
  pt: {
    title: "Ainda não pronto para entrar?",
    subtitle:
      "Entre no nosso canal gratuito do Telegram e receba dicas diárias, alertas de alta precisão e nosso curso básico de apostas. Só hoje!",
    button: "Entrar no canal gratuito",
  },
};

export default function FreeCTA({ lang = "es" }) {
  const t = text[lang] || text.es;

  const CrownSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="#ffc107"
      className="animate-crown"
    >
      <path d="M2 6l4.5 4.5L12 2l5.5 8.5L22 6l-2 14H4L2 6zm2.24 2.36L4.96 18h14.08l.72-9.64-4.25 3.94L12 5.77l-4.51 6.53-3.25-3.94z" />
    </svg>
  );

  return (
    <section className="py-20 px-6 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-4 leading-snug"
      >
        ¿Aún no estás listo para ser{" "}
        <span className="text-[#ffc107] relative inline-block whitespace-nowrap">
          VI
          <span className="relative inline-block pl-0.5">
            P
            <span className="absolute -top-3 left-1/2 -translate-x-1/2">
              <CrownSVG />
            </span>
          </span>
        </span>
        ?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-300 max-w-xl mx-auto leading-relaxed mb-8"
      >
        {t.subtitle}
      </motion.p>

      <motion.a
        href="https://t.me/tucanal" // Tu enlace real
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="inline-flex items-center justify-center gap-2 bg-[#ffc107] text-black font-bold px-8 py-4 rounded-full shadow-lg text-lg animate-float-glow hover:shadow-[#ffc107]/60 transition-all duration-300"
      >
        <Send size={20} className="inline" /> {t.button}
      </motion.a>
    </section>
  );
}
