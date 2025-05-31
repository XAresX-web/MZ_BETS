// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

// Ruta a las banderas en public/
const languages = {
  es: { label: "ES", flag: "/flags/es.svg" },
  en: { label: "EN", flag: "/flags/en.svg" },
  pt: { label: "PT", flag: "/flags/pt.svg" },
};

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative z-[100] flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-sm">
      <h1 className="text-2xl font-extrabold text-[#00ff87]">
        MZ <span className="text-white">BETS</span>
      </h1>

      <div className="relative z-[101] flex items-center gap-3" ref={menuRef}>
        {/* Ícono decorativo del mundito */}
        <Globe className="text-[#00ff87] animate-spin-y" size={18} />

        {/* Botón de idioma actual */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-white/20 rounded text-sm text-white"
        >
          <img
            src={languages[lang].flag}
            alt={lang}
            className="w-5 h-auto rounded-sm"
          />
          {languages[lang].label}
        </button>

        {/* Menú desplegable ajustado */}
        {open && (
          <div className="absolute right-0 top-10 bg-[#1a1a1a] border border-white/20 rounded shadow-lg w-[70px] py-1">
            {Object.entries(languages).map(([code, { label, flag }]) => (
              <button
                key={code}
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 w-full px-2 py-2 text-sm text-white hover:bg-white/10 ${
                  lang === code ? "bg-white/10" : ""
                }`}
              >
                <img src={flag} alt={label} className="w-5 h-auto rounded-sm" />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
