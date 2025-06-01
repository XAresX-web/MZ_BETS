import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Zap,
} from "lucide-react";

const faqs = [
  {
    question: "¿Qué recibo exactamente al activar un plan?",
    answer:
      "Accedes de inmediato a nuestro canal privado con tips diarios, análisis avanzados, comunidad VIP y más de $347 USD en bonos exclusivos. Cada plan tiene beneficios escalables (Básico, Pro o Élite).",
    icon: <CheckCircle className="text-[#1db954]" size={20} />,
  },
  {
    question: "¿Cómo se entregan los tips y señales?",
    answer:
      "Recibirás las señales directamente en un canal privado y en tu panel personalizado (cuando se active). Las enviamos en tiempo real, con instrucciones claras y recomendación de cuotas y stake.",
    icon: <Zap className="text-yellow-400" size={20} />,
  },
  {
    question: "¿Es un pago único o suscripción mensual?",
    answer:
      "Es una suscripción mensual, trimestral o anual. Puedes cancelarla en cualquier momento desde tu panel. No hay contratos, ni letras pequeñas. Control total para ti.",
    icon: <CreditCard className="text-white/70" size={20} />,
  },
  {
    question: "¿Puedo confiar en ustedes? ¿Es seguro?",
    answer:
      "Totalmente. Usamos Stripe como pasarela de pago segura y contamos con cientos de usuarios activos satisfechos. No almacenamos tus datos personales ni bancarios.",
    icon: <ShieldCheck className="text-blue-400" size={20} />,
  },
  {
    question: "¿Qué pasa si no gano dinero?",
    answer:
      "Los resultados pueden variar. Nuestro equipo analiza y estudia el mercado constantemente, pero no podemos garantizar ganancias. Sin embargo, brindamos herramientas reales y educación para ayudarte a mejorar.",
    icon: <ShieldCheck className="text-white/60" size={20} />,
  },
  {
    question: "¿Cómo accedo a los bonos gratis?",
    answer:
      "Los bonos se activan automáticamente después del pago. Accederás a cursos premium, ebooks, herramientas y canales secretos sin pagar nada extra.",
    icon: <CheckCircle className="text-[#1db954]" size={20} />,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 px-6 text-white bg-black relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-12 text-[#1db954]"
        >
          ❓ Preguntas Frecuentes
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-lg transition-all"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left gap-4"
              >
                <div className="flex items-center gap-2">
                  {faq.icon}
                  <span className="font-semibold text-base md:text-lg">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-sm text-white/70 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Botón de soporte al final */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://t.me/TU_USUARIO" // reemplaza con tu usuario real
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#229ED9] hover:bg-[#1b88be] text-white font-semibold shadow-lg transition-all duration-300 animate-pulseSlow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.046 18.305c-.337 0-.278-.126-.396-.445l-1.018-3.365 7.86-4.673c.366-.223.687-.102.416.14l-6.317 5.678-.256 3.768c-.038.555-.213.697-.573.697zM9.848 13.992l-.368 3.096c-.021.175-.122.215-.205.042l-.858-1.808-2.29-1.02c-.185-.082-.179-.225.019-.293l10.765-3.888c.202-.074.371.037.312.276l-1.884 8.042c-.056.24-.184.297-.39.224l-5.802-2.679z" />
            </svg>
            Soporte por Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
