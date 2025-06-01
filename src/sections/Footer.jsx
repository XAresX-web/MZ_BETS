import React from "react";
import { Instagram, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "es";

  const links = {
    instagram:
      "https://www.instagram.com/mz_bets_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    telegram: "https://t.me/tu_canal",

    // PDFs por idioma
    terms: {
      es: "/docs/terms-es.pdf",
      en: "/docs/terms-en.pdf",
      pt: "/docs/terms-pt.pdf",
      cn: "/docs/terms-cn.pdf",
    },
    privacy: {
      es: "/docs/privacy-es.pdf",
      en: "/docs/privacy-en.pdf",
      pt: "/docs/privacy-pt.pdf",
      cn: "/docs/privacy-cn.pdf",
    },
  };

  const selectedLang = links.terms[lang] ? lang : "es";

  return (
    <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 text-gray-400 py-10 pb-28 text-center text-sm px-4">
      <p className="mb-6">© 2025 MZ BETS. {t("footer.rights")}</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
        {/* Redes sociales */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff87] transition-colors flex items-center gap-1"
          >
            <Instagram size={18} /> Instagram
          </a>
          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff87] transition-colors flex items-center gap-1"
          >
            <Send size={18} /> Telegram
          </a>
        </div>

        {/* Enlaces legales */}
        <div className="flex gap-6">
          <a
            href={links.terms[selectedLang]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff87] transition-colors"
          >
            {t("footer.terms")}
          </a>
          <a
            href={links.privacy[selectedLang]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff87] transition-colors"
          >
            {t("footer.privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
