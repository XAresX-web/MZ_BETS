// src/pages/GraciasBasico.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

export default function GraciasBasico() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 text-center">
      <CheckCircle size={48} className="text-[#ffc107] mb-6" />
      <h1 className="text-4xl font-extrabold mb-4">
        ¡Gracias por adquirir el Plan Básico!
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Tu compra se ha procesado correctamente. Este plan no incluye acceso
        VIP, pero muy pronto recibirás tips exclusivos directo en tu correo.
      </p>

      <a
        href="https://forms.gle/TU_ENLACE_BASICO"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ffc107] text-black font-bold py-3 px-8 rounded-full hover:brightness-110 transition"
      >
        Confirmar mi acceso
      </a>

      <p className="text-xs text-white/40 mt-12 max-w-sm">
        * Revisión manual en menos de 24h. Revisa tu correo para nuevos
        beneficios cada día.
      </p>
    </section>
  );
}
