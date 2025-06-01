import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ComingSoonNotice() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 text-center text-white relative z-10">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#1db954]/10 via-[#1db954]/20 to-transparent blur-2xl animate-pulse z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-red-600 shadow-[0_0_15px_#ff4d4d] z-20 flex items-center justify-center"
          >
            <AlertTriangle className="text-yellow-300" size={24} />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-extrabold text-[#1db954] mb-6 tracking-wide animate-pulse"
          >
            {t("comingSoon.title")}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/80 text-sm md:text-base leading-relaxed mb-6"
          >
            {t("comingSoon.description1")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-white/70 text-sm md:text-base leading-relaxed mb-6"
          >
            {t("comingSoon.description2")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-white/40 italic"
          >
            {t("comingSoon.footer")}
            <br />
            <span className="uppercase text-[#1db954] font-semibold tracking-wider">
              {t("comingSoon.wait")}
            </span>
          </motion.p>
        </motion.div>

        <Sparkles
          className="absolute top-2 right-4 text-[#1db954]/20 animate-spin-slow"
          size={28}
        />
        <Sparkles
          className="absolute bottom-2 left-4 text-[#1db954]/10 animate-spin-slower"
          size={24}
        />
      </div>
    </section>
  );
}
