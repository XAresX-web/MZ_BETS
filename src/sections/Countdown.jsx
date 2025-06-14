import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Countdown({ minutes = 15 }) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : minutes * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <section className="relative py-24 px-4 text-white text-center bg-[#0b0b0b] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[300px] h-[300px] bg-[#1db954]/20 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-md mx-auto border border-[#1db954]/30 rounded-3xl p-8 bg-[#111111]/60 backdrop-blur-md shadow-[0_0_30px_#1db95440] relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-widest text-[#1db954] font-semibold mb-4"
        >
          {t("countdown.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-mono text-[#1db954] drop-shadow-[0_0_25px_#1db954] tracking-widest animate-pulse"
        >
          {formatTime(timeLeft)}
        </motion.div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#1db95450] to-transparent" />

        <p className="mt-4 text-sm text-gray-400">{t("countdown.subtitle")}</p>
      </div>
    </section>
  );
}
