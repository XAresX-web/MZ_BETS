// src/pages/GraciasPro.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GraciasPro() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-black overflow-hidden text-white px-6">
      {/* Fondo de dólares animados */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/dolares.gif')] bg-cover bg-center opacity-10 animate-pulse" />
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#ffc107] drop-shadow-xl">
          ¡Gracias por tu compra PRO!
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Tu acceso está casi listo. Haz clic en el botón de abajo para
          completar tu activación exclusiva.
        </p>

        <a
          href="https://forms.gle/5gAV79UpivwAvXL87"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1db954] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
        >
          Acceder a mis beneficios <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  );
}
