import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  TrendingUp,
  Bot,
  ShieldCheck,
  BarChart2,
  Users,
  Activity,
} from "lucide-react";

const icons = [
  <TrendingUp size={28} />,
  <Bot size={28} />,
  <ShieldCheck size={28} />,
  <BarChart2 size={28} />,
  <Users size={28} />,
  <Activity size={28} />,
];

export default function Benefits() {
  const { t } = useTranslation();
  const benefits = t("benefits.items", { returnObjects: true });

  return (
    <section className="py-24 px-4 md:px-10">
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-white relative inline-block">
          <span className="relative z-10">{t("benefits.title")}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#1db954] to-[#1db954] blur-xl opacity-10 rounded" />
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: i * 0.1 }}
            className="glassmorphism border border-white/10 hover:border-[#ffc107] p-6 rounded-2xl shadow-2xl backdrop-blur-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur mb-4 text-[#1db954]">
              {icons[i]}
            </div>
            <h4 className="text-xl font-bold mb-2 text-white">{b.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
