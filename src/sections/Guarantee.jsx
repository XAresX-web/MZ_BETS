import React from "react";
import { ShieldCheck, Lock, Trophy, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Guarantee() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 text-white text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider text-[#1db954] neon-glow">
          {t("guarantee.titleBadge")} <BadgeCheck size={16} />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6">
          {t("guarantee.title")}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg md:text-xl">
          {t("guarantee.subtitle")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* 1. Garantía de resultados */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1a1a] border border-[#1db954]/30 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition"
        >
          <ShieldCheck
            size={48}
            className="mx-auto text-[#1db954] animate-pulse drop-shadow-[0_0_15px_#1db954]"
          />
          <h3 className="text-xl font-bold mt-4">
            {t("guarantee.card1.title")}
          </h3>
          <p className="text-gray-400 mt-2">
            {t("guarantee.card1.description")}
          </p>
          <div className="mt-4 text-xs uppercase text-[#1db954] font-bold tracking-widest">
            {t("guarantee.card1.badge")}
          </div>
        </motion.div>

        {/* 2. Pago seguro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#1a1a1a] border border-[#1db954]/30 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition"
        >
          <Lock
            size={48}
            className="mx-auto text-[#1db954] animate-pulse drop-shadow-[0_0_15px_#1db954]"
          />
          <h3 className="text-xl font-bold mt-4">
            {t("guarantee.card2.title")}
          </h3>
          <p className="text-gray-400 mt-2">
            {t("guarantee.card2.description")}
          </p>
          <div className="mt-4 text-xs uppercase text-[#1db954] font-bold tracking-widest">
            {t("guarantee.card2.badge")}
          </div>
        </motion.div>

        {/* 3. Resultados reales */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-[#1db954]/30 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition"
        >
          <Trophy
            size={48}
            className="mx-auto text-[#1db954] animate-pulse drop-shadow-[0_0_15px_#1db954]"
          />
          <h3 className="text-xl font-bold mt-4">
            {t("guarantee.card3.title")}
          </h3>
          <p className="text-gray-400 mt-2">
            {t("guarantee.card3.description")}
          </p>
          <div className="mt-4 text-xs uppercase text-[#1db954] font-bold tracking-widest">
            {t("guarantee.card3.badge")}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
