import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PoliticaPrivacidad() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">{t("privacy.title")}</h1>
      <p className="max-w-2xl text-gray-300 mb-8">{t("privacy.body")}</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-[#00ff87] text-black font-semibold rounded-xl hover:scale-105 transition"
      >
        {t("privacy.back")}
      </button>
    </div>
  );
}
