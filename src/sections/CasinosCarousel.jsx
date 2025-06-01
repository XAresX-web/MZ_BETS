// src/sections/CasinoCarousel.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const casinos = [
  { name: "Bet365", svg: "/svgs/bet365.png" },
  { name: "1xBet", svg: "/svgs/1xbet.png" },
  { name: "Betfair", svg: "/svgs/betfair.png" },
  { name: "Codere", svg: "/svgs/codere.png" },
  { name: "CalienteMX", svg: "/svgs/calientemx.png" },
  { name: "Winpot", svg: "/svgs/winpot.png" },
  { name: "Playdoit", svg: "/svgs/playdoit.png" },
  { name: "Betsson", svg: "/svgs/betsson.png" },
  { name: "Melbet", svg: "/svgs/melbet.png" },
  { name: "Sportium", svg: "/svgs/sportium.png" },
  { name: "10Bet", svg: "/svgs/10bet.png" },
];

export default function CasinoCarousel() {
  return (
    <Marquee speed={40} gradient={false} className="py-3">
      {casinos.map((casino, idx) => (
        <div key={idx} className="mx-6 flex items-center min-w-[100px]">
          <img
            src={casino.svg}
            alt={casino.name}
            className="h-14 w-auto transition-all duration-300"
          />
        </div>
      ))}
    </Marquee>
  );
}
