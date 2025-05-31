// src/pages/MZBetsLanding.jsx
import React, { useState } from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import StatsTrust from "../sections/StatsTrust";
import Benefits from "../sections/Benefits";
import Plans from "../sections/Plans";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import { useTheme } from "../components/ThemeProvider";
import FlagsCarousel from "../sections/FlagsCarousel";
import Guarantee from "../sections/Guarantee";
import PlansComparison from "../sections/PlansComparison";
import Countdown from "../sections/Countdown";
import TelegramInvite from "../sections/TelegramInvite";

export default function MZBetsLanding() {
  const [lang, setLang] = useState("es");
  const { theme, setTheme } = useTheme();

  const promoContent = {
    es: "🎁 PROMO EXCLUSIVA: Accede al paquete VIP PRO con 30% OFF solo por hoy 🔥",
    en: "🎁 EXCLUSIVE PROMO: Get 30% OFF VIP PRO access today only 🔥",
  };

  const ctaText = {
    es: "⚡ Acceso VIP",
    en: "⚡ VIP Access",
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} />

      {/* 🎯 Cintillo Promocional */}
      <div className="w-full py-2 px-4 bg-[#1db954] text-black text-sm font-semibold text-center animate-pulse z-50">
        {promoContent[lang]}
      </div>

      <Hero lang={lang} />
      <StatsTrust lang={lang} />
      <Benefits lang={lang} />
      <Plans lang={lang} />
      <TelegramInvite lang="es" link="https://t.me/tucanal" />
      <PlansComparison />
      <Testimonials lang={lang} />
      <Guarantee />
      <Countdown lang="es" minutes={15} />
      <FlagsCarousel />
      <Footer lang={lang} />

      {/* CTA flotante fijo */}
      <a
        href="#planes"
        className="fixed inset-x-0 bottom-6 mx-auto w-fit bg-[#ffc107] text-black font-bold px-6 py-3 rounded-full shadow-lg z-50 animate-float-glow transition-all text-center"
      >
        {ctaText[lang]}
      </a>
    </>
  );
}
