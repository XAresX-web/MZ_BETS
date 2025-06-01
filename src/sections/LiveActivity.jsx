// src/sections/LiveActivity.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, Zap, Trophy, Eye } from "lucide-react";

const messages = [
  {
    icon: <Zap size={18} />,
    text: "Juan de CDMX acaba de activar el Plan Élite",
  },
  {
    icon: <Eye size={18} />,
    text: "589 personas están viendo esta página en este momento",
  },
  {
    icon: <Trophy size={18} />,
    text: "Ana de Monterrey ganó $11,240 ayer con nuestras señales",
  },
  { icon: <Zap size={18} />, text: "Pedro activó el Plan Pro hace 3 minutos" },
  {
    icon: <Trophy size={18} />,
    text: "Carlos recibió un bono exclusivo por activar el plan Básico",
  },
  {
    icon: <Zap size={18} />,
    text: "Alan de Guadalajara activó su cuenta VIP hace un momento",
  },
  {
    icon: <Eye size={18} />,
    text: "53 usuarios han comprado hoy un plan en MZ BETS",
  },
];

const animationVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

export default function LiveActivity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const next = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(next);
  }, []);

  return (
    <section className="relative h-[120px] sm:h-[140px] overflow-hidden flex justify-center items-center text-white">
      <div className="relative z-10 max-w-lg w-full px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="relative flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-4 rounded-xl shadow-xl backdrop-blur-md"
          >
            {/* Efecto de luz solo dentro */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-[#1db954]/10 to-transparent blur-lg animate-pulse opacity-20 pointer-events-none z-0" />

            {/* Indicador LIVE + icono */}
            <div className="relative z-10 flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <div className="bg-[#1db954]/10 p-2 rounded-full text-[#1db954]">
                {messages[index].icon}
              </div>
            </div>

            <p className="relative z-10 text-white/90 text-sm md:text-base">
              {messages[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
