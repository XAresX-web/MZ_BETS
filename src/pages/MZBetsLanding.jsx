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
import BonusSection from "../sections/BonusSection";
import LiveActivity from "../sections/LiveActivity";
import PromoBanner from "../components/PromoBanner";
import CasinosCarousel from "../sections/CasinosCarousel";
import ComingSoonNotice from "../sections/ComingSoonNotice";
import FaqSection from "../sections/FaqSection";

export default function MZBetsLanding() {
  const [lang, setLang] = useState("es");
  const { theme, setTheme } = useTheme();

  const ctaText = {
    es: "⚡ Acceso VIP",
    en: "⚡ VIP Access",
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} />

      {/* 🎯 Cintillo Promocional */}
      <div className="w-full py-1 px-0 text-black text-sm font-semibold text-justify animate-pulse z-50 bg-gradient-to-r from-[#0e3e2f] via-[#1db954] to-[#145f3d]">
        {/* 🎯 Cintillo Promocional */}
        <PromoBanner lang={lang} />
      </div>

      <Hero lang={lang} />
      <CasinosCarousel />
      <StatsTrust lang={lang} />
      <Benefits lang={lang} />
      <ComingSoonNotice />
      <Plans lang={lang} />
      <TelegramInvite lang="es" link="https://t.me/tucanal" />
      <LiveActivity />
      <PlansComparison />
      <Testimonials lang={lang} />
      <Guarantee />
      <BonusSection />
      <Countdown lang="es" minutes={15} />
      <FlagsCarousel />
      <FaqSection />
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
