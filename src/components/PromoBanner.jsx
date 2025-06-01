import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";

const getMidnight = () => {
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return midnight;
};

export default function PromoBanner() {
  const { t } = useTranslation();

  return (
    <div className="w-full backdrop-blur-md bg-[#133d2f] text-[#ffc107] font-semibold py-1 px-3 text-xs sm:text-sm shadow-md z-50">
      <div className="max-w-screen-lg mx-auto text-center flex flex-col sm:flex-row sm:justify-center sm:items-center gap-1 leading-tight">
        <p className="leading-snug">
          <motion.span
            animate={{ y: [0, -2, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mr-1"
          >
            🎁
          </motion.span>
          {t("promo.start")}{" "}
          <span className="text-white font-semibold">{t("promo.vip")}</span>{" "}
          {t("promo.discount")}
        </p>

        <div className="flex justify-center items-center gap-2 text-[11px] sm:text-sm">
          <span>{t("promo.onlyToday")}</span>
          <span className="bg-[#ffc107] text-black px-3 py-0.5 rounded-full font-bold tracking-wide">
            ⏳ <Countdown date={getMidnight()} daysInHours />
          </span>
        </div>
      </div>
    </div>
  );
}
