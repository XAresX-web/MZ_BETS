// src/sections/ChatTestimonials.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ChatTestimonials({ lang }) {
  const { t, i18n } = useTranslation();

  // Cambia el idioma activamente con react-i18next
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  // Accede a las traducciones desde i18next
  const testimonials = t("chatTestimonials.testimonials", {
    returnObjects: true,
  });
  const title = t("chatTestimonials.title");

  const groupSize = 3;
  const grouped = Array.from(
    { length: Math.ceil(testimonials.length / groupSize) },
    (_, i) => testimonials.slice(i * groupSize, i * groupSize + groupSize)
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white text-center mb-10"
      >
        {title}
      </motion.h3>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <Slider {...settings}>
          {grouped.map((group, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-6 md:gap-x-8"
            >
              {group.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative bg-[#1a1a1a] text-white px-6 py-5 rounded-2xl shadow-xl mb-6 md:mb-0 before:absolute before:bottom-[-6px] before:left-5 before:w-3 before:h-3 before:bg-[#1a1a1a] before:rotate-45 before:rounded-sm"
                >
                  <p className="text-sm leading-snug whitespace-pre-line">
                    {item.msg}
                  </p>
                  <div className="text-white/50 text-[10px] flex justify-end gap-1 mt-3 items-center">
                    <span>{item.time}</span>
                    <span className="text-blue-400">✓✓</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
