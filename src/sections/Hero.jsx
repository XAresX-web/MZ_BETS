// src/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

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
          <span className="relative z-10">{t("hero.title")}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#1db954] via-white to-[#1db954] blur-xl opacity-20 animate-pulse rounded" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.a
          href="#planes"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block mt-10 py-3 px-10 rounded-full text-lg font-extrabold text-black bg-[#ffc107] shadow-md overflow-hidden z-10"
        >
          {/* Borde giratorio brillante en loop */}
          <span className="absolute inset-0 rounded-full border-2 border-yellow-400 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-yellow-400 before:animate-glow-ring z-0"></span>

          {/* Shimmer automático */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70 animate-shimmer rounded-full z-0" />

          <span className="relative z-10">{t("hero.button")}</span>
        </motion.a>
      </div>
    </section>
  );
}
