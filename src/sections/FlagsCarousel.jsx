import React from "react";
import { useTranslation } from "react-i18next";

const countryCodes = [
  "en",
  "gb",
  "ca",
  "au",
  "nz",
  "ie", // Inglés
  "es",
  "mx",
  "ar",
  "co",
  "cl",
  "pe",
  "ve",
  "ec",
  "gt",
  "cu",
  "bo",
  "do",
  "hn",
  "py",
  "sv",
  "ni",
  "cr",
  "pa",
  "uy",
  "pr", // Español
  "pt",
  "br",
  "ao",
  "mz",
  "cv",
  "gw",
  "tl",
  "st", // Portugués
];

export default function FlagCarousel() {
  const { t } = useTranslation();

  return (
    <div className="bg-transparent py-8 border-b border-white/10 text-center">
      <p className="text-sm md:text-base text-gray-400 font-medium mb-6">
        {t("flags.text")}
      </p>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-slide whitespace-nowrap w-max">
          {countryCodes.concat(countryCodes).map((code, index) => (
            <img
              key={index}
              src={`/flags/${code}.svg`}
              alt={code.toUpperCase()}
              className="w-10 h-auto rounded shadow-md transition-transform duration-500 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
