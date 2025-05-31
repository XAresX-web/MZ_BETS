import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const content = {
  es: {
    title: "Términos y Condiciones",
    body: `Al acceder a MZ BETS, aceptas cumplir estos términos. Los servicios ofrecidos son informativos. No garantizamos resultados ni somos responsables por decisiones tomadas con base en nuestros análisis.`,
    back: "Volver al inicio",
  },
  en: {
    title: "Terms & Conditions",
    body: `By accessing MZ BETS, you agree to abide by these terms. The services provided are for informational purposes. We do not guarantee results or take responsibility for decisions made based on our analysis.`,
    back: "Back to home",
  },
  pt: {
    title: "Termos e Condições",
    body: `Ao acessar o MZ BETS, você concorda em cumprir estes termos. Os serviços oferecidos são informativos. Não garantimos resultados nem nos responsabilizamos por decisões tomadas com base em nossas análises.`,
    back: "Voltar ao início",
  },
};

export default function Terminos() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const t = content[lang] || content.es;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="max-w-2xl text-gray-300 mb-8">{t.body}</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-[#00ff87] text-black font-semibold rounded-xl hover:scale-105 transition"
      >
        {t.back}
      </button>
    </div>
  );
}
