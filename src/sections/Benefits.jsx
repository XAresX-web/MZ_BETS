import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Bot,
  ShieldCheck,
  BarChart2,
  Users,
  Activity,
} from "lucide-react";

export default function Benefits({ lang }) {
  const benefits = {
    es: [
      {
        icon: <TrendingUp size={28} />,
        title: "Predicciones IA Diarias",
        desc: "Recibe apuestas optimizadas todos los días con inteligencia artificial avanzada.",
      },
      {
        icon: <Bot size={28} />,
        title: "Bot Inteligente en Telegram",
        desc: "Recibe alertas automáticas en tiempo real con oportunidades de alto valor.",
      },
      {
        icon: <ShieldCheck size={28} />,
        title: "Acceso a Grupos VIP",
        desc: "Únete a una comunidad privada de apostadores profesionales con soporte 24/7.",
      },
      {
        icon: <BarChart2 size={28} />,
        title: "Análisis de Valor y Rachas",
        desc: "Visualiza tus rachas ganadoras y descubre cuándo apostar con ventaja matemática.",
      },
      {
        icon: <Users size={28} />,
        title: "Soporte Personalizado",
        desc: "Nuestro equipo te guía paso a paso para maximizar tus ganancias.",
      },
      {
        icon: <Activity size={28} />,
        title: "Panel de Estadísticas Premium",
        desc: "Consulta gráficos detallados, resultados, ROI, picks anteriores y más.",
      },
    ],
    en: [
      {
        icon: <TrendingUp size={28} />,
        title: "Daily AI Predictions",
        desc: "Receive optimized betting picks daily powered by advanced AI.",
      },
      {
        icon: <Bot size={28} />,
        title: "Smart Telegram Bot",
        desc: "Get instant smart alerts when high-value bets are detected.",
      },
      {
        icon: <ShieldCheck size={28} />,
        title: "Access to VIP Groups",
        desc: "Join an exclusive group of elite bettors with 24/7 professional support.",
      },
      {
        icon: <BarChart2 size={28} />,
        title: "Value & Streak Analysis",
        desc: "Track your winning streaks and analyze when you have the edge.",
      },
      {
        icon: <Users size={28} />,
        title: "Custom Support",
        desc: "Our team helps you step-by-step to maximize your profits.",
      },
      {
        icon: <Activity size={28} />,
        title: "Premium Stats Panel",
        desc: "Check detailed charts, ROI, winrates and previous picks anytime.",
      },
    ],
  };

  const t = {
    es: "Beneficios Exclusivos de MZ BETS",
    en: "Exclusive MZ BETS Benefits",
  };

  return (
    <section className="py-24 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-white relative inline-block">
        <span className="relative z-10">{t[lang]}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#1db954] to-[#1db954] blur-xl opacity-10 rounded" />
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        {benefits[lang].map((b, i) => (
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
              {b.icon}
            </div>
            <h4 className="text-xl font-bold mb-2 text-white">{b.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
