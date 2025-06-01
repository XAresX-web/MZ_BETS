// src/pages/GraciasElite.jsx
import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function GraciasElite() {
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 90,
        spread: 90,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        shapes: ["square"],
        colors: ["#00ff00", "#ffd700", "#1db954"],
        scalar: 1.5,
      });
    }, 150);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 text-center">
      <CheckCircle size={48} className="text-[#ff2e63] mb-6" />
      <h1 className="text-4xl font-extrabold mb-4">
        ¡Eres parte del Plan ÉLITE de MZ BETS!
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        ¡Has desbloqueado todos los beneficios! Picks personalizados, grupo
        élite y acceso prioritario.
      </p>
      <p className="text-sm text-gray-400 max-w-xl mb-8">
        Para confirmar tu membresía, completa el formulario. Te daremos acceso
        inmediato a todo el contenido ÉLITE.
      </p>

      <a
        href="https://forms.gle/TU_ENLACE_ELITE"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ffc107] text-black font-bold py-3 px-8 rounded-full hover:brightness-110 transition"
      >
        Solicitar acceso ÉLITE 💸
      </a>

      <p className="text-xs text-white/40 mt-12 max-w-sm">
        * Nuestro equipo validará tu acceso VIP. Bienvenido a la zona de
        ganadores.
      </p>
    </section>
  );
}
