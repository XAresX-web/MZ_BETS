// src/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
  const content = {
    es: {
      title: "ELIGE TU PLAN GANADOR",
      subtitle: "Potencia tus apuestas deportivas con inteligencia",
      button: "Ver Planes",
    },
    en: {
      title: "CHOOSE YOUR WINNING PLAN",
      subtitle: "Boost your sports betting with intelligence",
      button: "See Plans",
    },
  };

  const t = content[lang] || content.es;

  return (
    <section className="relative py-32 px-6 text-center">
      {/* Efectos laterales dopamínicos */}
      <div className="absolute top-0 left-[-120px] w-[300px] h-[300px] bg-[#1db954]/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-[-120px] w-[300px] h-[300px] bg-[#1db954]/20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight relative inline-block"
        >
          <span className="relative z-10">{t.title}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#1db954] via-white to-[#1db954] blur-xl opacity-20 animate-pulse rounded" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <motion.a
          href="#planes"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block mt-10 bg-[#ffc107] text-black font-extrabold py-3 px-10 rounded-full text-lg shadow-md hover:shadow-[#ffc107]/50 transition-all duration-300"
        >
          {t.button} ⚡
        </motion.a>
      </div>
    </section>
  );
}
