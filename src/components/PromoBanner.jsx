import { motion } from "framer-motion";
import Countdown from "react-countdown";

const getMidnight = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return midnight;
};

const promoContent = {
  es: {
    text: (
      <>
        <motion.span
          animate={{ y: [0, -2, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          🎁
        </motion.span>{" "}
        PROMO EXCLUSIVA: Accede al{" "}
        <span className="text-white font-semibold">paquete VIP PRO</span> con{" "}
        <span className="text-[#33ff77] font-semibold">30% OFF</span>
      </>
    ),
    sub: "🔥 Solo por hoy",
  },
};

export default function PromoBanner({ lang = "es" }) {
  const t = promoContent[lang] || promoContent.es;

  return (
    <div className="w-full backdrop-blur-md bg-[#133d2f] text-[#ffc107] font-semibold py-1 px-3 text-xs sm:text-sm shadow-md z-50">
      <div className="max-w-screen-lg mx-auto text-center flex flex-col sm:flex-row sm:justify-center sm:items-center gap-1 leading-tight">
        <p className="leading-snug">{t.text}</p>
        <div className="flex justify-center items-center gap-2 text-[11px] sm:text-sm">
          <span>{t.sub}</span>
          <span className="bg-[#ffc107] text-black px-3 py-0.5 rounded-full font-bold tracking-wide">
            ⏳ <Countdown date={getMidnight()} daysInHours />
          </span>
        </div>
      </div>
    </div>
  );
}
