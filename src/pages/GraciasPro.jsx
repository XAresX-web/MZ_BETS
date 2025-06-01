import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function GraciasPro() {
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
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 text-center overflow-hidden">
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

      <CheckCircle size={48} className="text-[#ffc107] mb-6 z-10" />
      <h1 className="text-4xl font-extrabold mb-4 z-10">
        ¡Has activado el Plan PRO de MZ BETS!
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-4 z-10">
        Acceso inmediato a tips exclusivos, grupo privado y nuestro bot
        inteligente de apuestas.
      </p>
      <p className="text-sm text-gray-400 max-w-xl mb-8 z-10">
        Completa el formulario para validar tu membresía y darte acceso
        completo.
      </p>

      <a
        href="https://forms.gle/zbfyqGpRPxRv8vbd7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#ffc107] text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition z-10"
      >
        Solicitar acceso PRO <ArrowRight size={18} />
      </a>

      <p className="text-xs text-white/40 mt-12 max-w-sm z-10">
        * Validaremos tu información para darte acceso VIP cuanto antes.
      </p>

      <style>{`
        .emoji-drop {
          position: absolute;
          top: -100px;
          font-size: 1.8rem;
          opacity: 0;
          animation-name: fallOnce;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
        }

        @keyframes fallOnce {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
