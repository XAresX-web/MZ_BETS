import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";
import pt from "./locales/pt.json";
import cn from "./locales/cn.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    pt: { translation: pt },
    cn: { translation: cn },
  },
  lng: localStorage.getItem("lang") || "es", // idioma persistente
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng); // guarda selección
});

export default i18n;
