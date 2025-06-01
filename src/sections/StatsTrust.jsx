// src/sections/StatsTrust.jsx
import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Trophy } from "lucide-react";
import CountUp from "react-countup";

// Importar traducciones por idioma
import es from "../locales/es.json";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

const translations = { es, en, pt };

export default function StatsTrust({ lang }) {
  const t = translations[lang]?.stats || translations["es"].stats;

  const icons = [
    <Users size={28} />,
    <Trophy size={28} />,
    <ShieldCheck size={28} />,
  ];
  const stats = [t.stat1, t.stat2, t.stat3];

  return (
    <section className="py-24 px-6 text-center bg-transparent">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-16"
      >
        {t.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#101010] to-[#1a1a1a] border border-white/10 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#1db954]/10 border border-[#1db954]/30 text-[#1db954] rounded-full mb-5">
              {icons[i]}
            </div>
            <p className="text-4xl font-extrabold text-white drop-shadow-sm">
              <CountUp
                end={stat.value}
                duration={2}
                separator=","
                suffix={stat.suffix || ""}
              />
            </p>
            <p className="text-sm text-gray-400 mt-2 leading-snug">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
