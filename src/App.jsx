// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundSwitcher from "./components/BackgroundSwitcher";
import MZBetsLanding from "./pages/MZBetsLanding";
import Terminos from "./pages/Terminos";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { lang } = useLanguage();

  // 🔁 Detectar si hay hash #planes al cargar y hacer scroll
  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash === "#planes") {
        const section = document.getElementById("planes");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300); // delay para asegurar que todo esté montado
  }, []);

  return (
    <div className="bg-graphite min-h-screen text-white">
      <BackgroundSwitcher fondoInicial="particulas">
        <Router>
          <Routes>
            <Route path="*" element={<MZBetsLanding lang={lang} />} />
            <Route path="/" element={<MZBetsLanding lang={lang} />} />
            <Route path="/terminos" element={<Terminos lang={lang} />} />
            <Route
              path="/privacidad"
              element={<PoliticaPrivacidad lang={lang} />}
            />
          </Routes>
        </Router>
      </BackgroundSwitcher>
    </div>
  );
}
