// src/sections/ChatTestimonials.jsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const chatTestimonials = {
  es: [
    {
      msg: "🔥 Bro, desde que estoy en el VIP de MZ BETS llevo 7 aciertos seguidos. Literal pagué mi renta con esto 😳",
      time: "09:21 PM",
    },
    {
      msg: "La neta pensé que era fake como todos, pero el bot me manda picks a tiempo y ya van 3 días de puro verde 💸",
      time: "12:47 PM",
    },
    {
      msg: "Amo cómo explican todo, incluso para los que no somos expertos. Y sí pagan 💯",
      time: "10:03 AM",
    },
    {
      msg: "Nunca había tenido tanta seguridad apostando. Siento que por fin juego con ventaja 📊",
      time: "06:32 PM",
    },
    {
      msg: "Siempre había perdido dinero en apuestas. MZ BETS fue el cambio. Estoy recomendando a todos mis compas 🔥",
      time: "08:55 AM",
    },
    {
      msg: "Hermano, el VIP de MZ es como tener un tipster personal 24/7. Nunca había ganado tan seguido 🧠📲",
      time: "10:44 PM",
    },
    {
      msg: "🔥 Me llegaron 3 señales hoy y todas verdes. Estoy que no me la creo jajajaja",
      time: "01:18 PM",
    },
    {
      msg: "Me encanta que los mensajes parecen de un amigo, pero cada uno trae dinero 💸✅",
      time: "03:33 PM",
    },
    {
      msg: "Soy nuevo, pero ya doblé lo que invertí el primer día. No tiene sentido lo bueno que es esto 🤯",
      time: "07:09 PM",
    },
    {
      msg: "Antes jugaba por impulso, ahora con estrategia. Me siento como un trader del deporte 📊⚽",
      time: "09:45 AM",
    },
    {
      msg: "Llevo 1 semana y ya estoy recuperando mis pérdidas. Gracias MZ 🙏",
      time: "05:27 PM",
    },
    {
      msg: "Esto no es magia, es estrategia pura. Me encanta aprender con ustedes 🎯",
      time: "11:16 AM",
    },
  ],
  en: [
    {
      msg: "Man, this bot is no joke. 5 wins in a row last week. I’m finally making consistent money 🤑📈",
      time: "11:04 AM",
    },
    {
      msg: "Was skeptical at first, but MZ BETS is the real deal. Feels like having a pro coach.",
      time: "03:17 PM",
    },
    {
      msg: "The streak analyzer is a gem. Helped me stop betting emotionally and stick to logic 🔍📉",
      time: "04:29 PM",
    },
    {
      msg: "Paid my entire semester tuition with just one week of wins. Forever loyal 💚",
      time: "07:45 PM",
    },
    {
      msg: "Even as a total beginner, I’m profiting. This community is gold.",
      time: "01:22 PM",
    },
    {
      msg: "Bro, it’s like a cheat code for betting. Stats + alerts = profit 📲🧠",
      time: "10:21 AM",
    },
    {
      msg: "I’ve tried dozens of betting groups. This is the only one that actually works.",
      time: "05:11 PM",
    },
    {
      msg: "Just got my 4th green in a row. MZ BETS is different 🟢🟢🟢🟢",
      time: "02:38 PM",
    },
    {
      msg: "Love the Telegram style delivery. Fast, clean, and profitable.",
      time: "06:50 PM",
    },
    {
      msg: "I no longer chase losses. MZ taught me patience and value 💡📊",
      time: "08:27 AM",
    },
    {
      msg: "This feels like insider info, but it’s just smart data. Impressed.",
      time: "01:33 PM",
    },
    {
      msg: "From broke to back on track. MZ saved my betting life.",
      time: "11:50 AM",
    },
  ],
  pt: [
    {
      msg: "Cara, isso é surreal. Já fiz lucro 3 dias seguidos com os sinais do VIP 💸",
      time: "09:15 AM",
    },
    {
      msg: "Achei que era mais um golpe, mas realmente funciona. Estou viciado nisso 🔥",
      time: "11:30 AM",
    },
    {
      msg: "Me sinto mais confiante com cada aposta. Os dados são muito precisos 📊",
      time: "03:45 PM",
    },
    {
      msg: "Já paguei duas contas com os lucros dessa semana. Inacreditável! 💰",
      time: "05:50 PM",
    },
    {
      msg: "O grupo de MZ BETS é o único que entrega resultados reais.",
      time: "12:10 PM",
    },
    {
      msg: "O bot me ajuda a decidir o que apostar. É como um assistente de apostas 🤖",
      time: "10:12 AM",
    },
    {
      msg: "Nunca imaginei que ia ganhar tanto com apostas esportivas.",
      time: "06:25 PM",
    },
    {
      msg: "Os sinais são rápidos, claros e lucrativos. Top demais!",
      time: "02:40 PM",
    },
    {
      msg: "Recomendei pro meu irmão e ele também já tá ganhando.",
      time: "07:30 PM",
    },
    {
      msg: "Não é mágica, é inteligência de dados. Sensacional 📈",
      time: "08:15 AM",
    },
    {
      msg: "Investimento mais inteligente que já fiz. Vale cada centavo.",
      time: "11:11 AM",
    },
    {
      msg: "Finalmente entendi como apostar de forma profissional.",
      time: "03:03 PM",
    },
  ],
};

export default function ChatTestimonials({ lang }) {
  const testimonials = chatTestimonials[lang] || chatTestimonials.es;
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
        {lang === "es"
          ? "Mensajes Reales de Usuarios"
          : lang === "pt"
          ? "Mensagens Reais de Usuários"
          : "Real User Messages"}
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
