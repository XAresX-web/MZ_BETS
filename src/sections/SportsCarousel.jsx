import React from "react";
import Marquee from "react-fast-marquee";

const sports = [
  { name: "Fútbol", svg: "/svgs/soccer.svg" },
  { name: "Baloncesto", svg: "/svgs/basket.svg" },
  { name: "Tenis", svg: "/svgs/tennis.svg" },
  { name: "Béisbol", svg: "/svgs/baseball.svg" },
  { name: "Boxeo", svg: "/svgs/boxing.svg" },
  { name: "eSports", svg: "/svgs/esports.svg" },
];

export default function SportsCarousel() {
  return (
    <section className="py-6 bg-black/80 backdrop-blur-md">
      <h3 className="text-center text-white text-sm font-semibold mb-2">
        DEPORTES EN LOS QUE APOSTAMOS
      </h3>
      <Marquee direction="right" speed={40} gradient={false}>
        {sports.map((sport, idx) => (
          <div key={idx} className="mx-6 flex items-center">
            <img
              src={sport.svg}
              alt={sport.name}
              className="h-10 w-auto grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
