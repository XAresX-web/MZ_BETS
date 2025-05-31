import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const content = {
  es: {
    title: "Política de Privacidad",
    body: `MZ BETS recopila datos mínimos como correos electrónicos y estadísticas de uso. Nunca compartimos tu información personal con terceros. Utilizamos cookies para mejorar la experiencia.`,
    back: "Volver al inicio",
  },
  en: {
    title: "Privacy Policy",
    body: `MZ BETS collects minimal data such as emails and usage stats. We never share your personal information with third parties. We use cookies to enhance the user experience.`,
    back: "Back to home",
  },
  pt: {
    title: "Política de Privacidade",
    body: `MZ BETS coleta dados mínimos, como e-mails e estatísticas de uso. Nunca compartilhamos suas informações pessoais com terceiros. Usamos cookies para melhorar a experiência do usuário.`,
    back: "Voltar ao início",
  },
};

export default function PoliticaPrivacidad() {
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
