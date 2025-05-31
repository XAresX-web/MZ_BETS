import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const text = {
  es: {
    title: "¿Aún no estás listo para unirte?",
    subtitle:
      "Únete gratis a nuestro canal de Telegram y recibe el mejor contenido gratuito con los mejores resutados.",
    button: "Entrar al canal gratuito",
  },
  en: {
    title: "Not ready to join yet?",
    subtitle: "Join our free Telegram channel and get exclusive content.",
    button: "Join free channel",
  },
  pt: {
    title: "Ainda não pronto para entrar?",
    subtitle:
      "Entre no nosso canal gratuito do Telegram e receba conteúdo exclusivo.",
    button: "Entrar no canal gratuito",
  },
};

export default function TelegramInvite({
  lang = "es",
  link = "https://t.me/tucanal",
}) {
  const t = text[lang] || text.es;

  return (
    <section className="py-24 px-6 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-4"
      >
        {t.title}
      </motion.h2>
      <p className="text-gray-400 text-base md:text-lg mb-8">{t.subtitle}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-black bg-[#1db954] relative shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#1db954] focus:outline-none"
      >
        <span className="absolute inset-0 rounded-full bg-[#1db954]/30 blur-xl animate-ping opacity-40"></span>
        <Send size={18} className="relative z-10" />
        <span className="relative z-10">{t.button}</span>
      </a>
    </section>
  );
}
