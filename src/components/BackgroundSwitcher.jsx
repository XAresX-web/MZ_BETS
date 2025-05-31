// src/components/BackgroundSwitcher.jsx
import React from "react";

export default function BackgroundSwitcher({ children }) {
  return (
    <div className="relative bg-[#0e0e0e] min-h-screen overflow-hidden text-white">
      {/* Fondo con partículas verdes suaves */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-[#1db954]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-[#1db954]/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 🔥 Importante: aquí ya no encerramos en ningún DIV extra */}
      {children}
    </div>
  );
}
