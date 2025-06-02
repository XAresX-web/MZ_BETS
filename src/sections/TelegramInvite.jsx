// src/sections/FreeCTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import es from "../locales/es.json";
import en from "../locales/en.json";
import pt from "../locales/pt.json";
import cn from "../locales/cn.json";

const translations = { es, en, pt, cn };

export default function FreeCTA({ lang = "es" }) {
  const t = translations[lang]?.freeCTA || translations["es"].freeCTA;

  const CrownSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="#ffc107"
      className="animate-crown"
    >
      <path d="M2 6l4.5 4.5L12 2l5.5 8.5L22 6l-2 14H4L2 6zm2.24 2.36L4.96 18h14.08l.72-9.64-4.25 3.94L12 5.77l-4.51 6.53-3.25-3.94z" />
    </svg>
  );

  return (
    <section className="py-20 px-6 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-4 leading-snug"
      >
        {t.title.split("VIP")[0]}
        <span className="text-[#ffc107] relative inline-block whitespace-nowrap">
          VI
          <span className="relative inline-block pl-0.5">
            P
            <span className="absolute -top-3 left-1/2 -translate-x-1/2">
              <CrownSVG />
            </span>
          </span>
        </span>
        ?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-300 max-w-xl mx-auto leading-relaxed mb-8"
      >
        {t.subtitle}
      </motion.p>

      <motion.a
        href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2F%2BT4ruxE92sVRkZTAx%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacEzC_H7-hh4iFvn939PeYkN5HuoGiU_mTerLXv_v2gb_JbbD38np_vEZjbaA_aem_pKvNoaqYZGozScy0G_nAog&e=AT058U3xMdIlF3cDumYq4UBHrz4I2c3CAaIbH3i08JZn05rzsUDp262jtWkGBkIxlOf6dHL1zmS6Z4SbHTXYRPSkQEFOyGig3IP-MN4IF-RKxvekR6CskSw"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="inline-flex items-center justify-center gap-2 bg-[#ffc107] text-black font-bold px-8 py-4 rounded-full shadow-lg text-lg animate-float-glow hover:shadow-[#ffc107]/60 transition-all duration-300"
      >
        <Send size={20} className="inline" /> {t.button}
      </motion.a>
    </section>
  );
}
