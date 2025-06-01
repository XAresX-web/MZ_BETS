// src/pages/GraciasPro.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

export default function GraciasPro() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 text-center">
      <CheckCircle size={48} className="text-[#1db954] mb-6" />
      <h1 className="text-4xl font-extrabold mb-4">
        ¡Bienvenido al Plan PRO de MZ BETS!
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Tu pago fue exitoso. Para proteger nuestra comunidad, el acceso VIP se
        gestiona con validación manual.
      </p>
      <p className="text-sm text-gray-400 max-w-xl mb-8">
        Completa el siguiente formulario con tus datos y te daremos acceso al
        canal exclusivo PRO.
      </p>

      <a
        href="https://forms.gle/TU_ENLACE_PRO"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ffc107] text-black font-bold py-3 px-8 rounded-full hover:brightness-110 transition"
      >
        Solicitar acceso VIP PRO
      </a>

      <p className="text-xs text-white/40 mt-12 max-w-sm">
        * Validación en menos de 24h. Recibirás tu enlace exclusivo por correo o
        Telegram.
      </p>
    </section>
  );
}
