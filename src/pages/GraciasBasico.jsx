// src/pages/GraciasBasico.jsx
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { ArrowRight } from "lucide-react";

export default function GraciasBasico() {
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 2,
        spread: 70,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#ffc107", "#ffffff"],
      });
    }, 150);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Emoji lluvia y piso */}
      <div className="emoji-rain absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="emoji-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2.5}s`,
              animationDuration: `${2.5 + Math.random()}s`,
            }}
          >
            💵
          </div>
        ))}
      </div>

      {/* Piso de billetes acumulados */}
      <div className="absolute bottom-0 left-0 w-full flex flex-wrap justify-center items-end gap-1 px-4 py-3 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="text-xl sm:text-2xl md:text-3xl"
            style={{
              animation: `fadeIn 1s ease ${i * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            💵
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="z-10 text-center max-w-xl">
        <h1 className="text-4xl font-extrabold mb-6 text-[#ffc107]">
          ¡Gracias por tu compra BÁSICO!
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Tu suscripción se activó con éxito. Valida tu acceso completando este
          breve formulario.
        </p>

        <a
          href="https://forms.gle/5gAV79UpivwAvXL87"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#ffc107] text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-all"
        >
          Confirmar acceso <ArrowRight size={18} />
        </a>
      </div>

      {/* Estilos */}
      <style>{`
        .emoji-drop {
          position: absolute;
          top: -2rem;
          font-size: 1.8rem;
          animation-name: fallOnce;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
        }

        @keyframes fallOnce {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(90vh); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
