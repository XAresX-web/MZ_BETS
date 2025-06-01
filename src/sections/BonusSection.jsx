import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BonusSection() {
  const { t } = useTranslation();
  const bonuses = t("bonus.items", { returnObjects: true });

  return (
    <section className="py-20 px-6 text-center text-white">
      <div className="flex items-center justify-center mb-6 gap-3">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="text-[#ffc107]"
        >
          <Gift size={36} />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-[#ffc107]"
        >
          {t("bonus.headline")}
        </motion.h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {bonuses.map((bonus, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl backdrop-blur-md transition-all"
          >
            <div className="absolute top-0 right-0 bg-[#1db954] text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
              GRATIS
            </div>
            <h4 className="text-lg font-bold text-[#ffc107] mb-1">
              {bonus.title}
            </h4>
            <p className="text-sm text-white/70 mb-2 italic">
              {bonus.description}
            </p>
            <p className="text-white font-bold text-right">
              <span className="line-through text-red-400">{bonus.value}</span>
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-white/40 mt-6">{t("bonus.note")}</p>
    </section>
  );
}
