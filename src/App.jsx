// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundSwitcher from "./components/BackgroundSwitcher";
import MZBetsLanding from "./pages/MZBetsLanding";
import Terminos from "./pages/Terminos";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { lang } = useLanguage();

  return (
    <div className="bg-graphite min-h-screen text-white">
      <BackgroundSwitcher fondoInicial="particulas">
        <Router>
          <Routes>
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
