import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const content = {
  es: {
    title: "¿Qué incluye cada plan?",
    subtitle: "Descubre la diferencia entre los planes y elige tu ventaja.",
    columns: ["Beneficio", "Gratis", "Básico", "Pro", "Élite"],
    features: [
      {
        label: "Tips diarios",
        free: "Limitado",
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Alertas diarias",
        free: "Limitado",
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Análisis IA exclusivos",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Bot avanzado",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Picks personalizados",
        free: false,
        basic: false,
        pro: false,
        elite: true,
      },
      {
        label: "Canal VIP privado",
        free: false,
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Resultados verificados",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Consultas semanales",
        free: false,
        basic: "Limitado",
        pro: "Limitado",
        elite: true,
      },
      {
        label: "Acceso a comunidad",
        free: true,
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Soporte prioritario",
        free: false,
        basic: "Limitado",
        pro: true,
        elite: true,
      },
    ],
  },
  en: {
    title: "What’s included in each plan?",
    subtitle: "Compare the plans and choose your edge.",
    columns: ["Feature", "Free", "Basic", "Pro", "Elite"],
    features: [
      {
        label: "Daily tips",
        free: "Limited",
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Daily alerts",
        free: "Limited",
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Exclusive AI analysis",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Advanced bot",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Custom picks",
        free: false,
        basic: false,
        pro: false,
        elite: true,
      },
      {
        label: "Private VIP channel",
        free: false,
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Verified results",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Weekly consultations",
        free: false,
        basic: "Limited",
        pro: "Limited",
        elite: true,
      },
      {
        label: "Community access",
        free: true,
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Top-level support",
        free: false,
        basic: "Limited",
        pro: true,
        elite: true,
      },
    ],
  },
  pt: {
    title: "O que cada plano inclui?",
    subtitle: "Compare os planos e escolha sua vantagem.",
    columns: ["Benefício", "Grátis", "Básico", "Pro", "Elite"],
    features: [
      {
        label: "Dicas diárias",
        free: "Limitado",
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Alertas diárias",
        free: "Limitado",
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Análises exclusivas com IA",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Bot avançado",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Picks personalizados",
        free: false,
        basic: false,
        pro: false,
        elite: true,
      },
      {
        label: "Canal VIP privado",
        free: false,
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Resultados verificados",
        free: false,
        basic: false,
        pro: true,
        elite: true,
      },
      {
        label: "Consultas semanais",
        free: false,
        basic: "Limitado",
        pro: "Limitado",
        elite: true,
      },
      {
        label: "Acesso à comunidade",
        free: true,
        basic: true,
        pro: true,
        elite: true,
      },
      {
        label: "Suporte de alto nível",
        free: false,
        basic: "Limitado",
        pro: true,
        elite: true,
      },
    ],
  },
};

export default function PlansComparison({ lang = "es" }) {
  const t = content[lang] || content.es;

  const renderCell = (value) => {
    if (value === true) {
      return <CheckCircle className="text-[#1db954]" />;
    } else if (value === false) {
      return <XCircle className="text-red-500" />;
    } else {
      return (
        <span
          className="text-yellow-400 font-semibold text-sm whitespace-nowrap"
          title="Acceso limitado"
        >
          {value}
        </span>
      );
    }
  };

  return (
    <section className="py-24 px-4 text-white text-center relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        {t.title}
      </motion.h2>
      <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
        {t.subtitle}
      </p>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[720px] w-full mx-auto table-fixed border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[#1db954] uppercase text-sm">
              {t.columns.map((col, i) => (
                <th
                  key={i}
                  className={`px-4 py-2 ${
                    i === 0 ? "text-left" : "text-center"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.features.map((item, idx) => (
              <tr
                key={idx}
                className="bg-[#1a1a1a] text-sm text-white rounded-2xl shadow-md"
              >
                <td className="text-left px-4 py-4 font-medium border-l-4 border-[#1db954] rounded-l-2xl whitespace-nowrap">
                  {item.label}
                </td>

                {/* Gratis */}
                <td>
                  <div className="flex justify-center px-2 py-3">
                    {renderCell(item.free)}
                  </div>
                </td>

                {/* Básico */}
                <td>
                  <div className="flex justify-center px-2 py-3">
                    {renderCell(item.basic)}
                  </div>
                </td>

                {/* Pro */}
                <td>
                  <div className="flex justify-center px-2 py-3">
                    {renderCell(item.pro)}
                  </div>
                </td>

                {/* Elite */}
                <td className="rounded-r-2xl">
                  <div className="flex justify-center px-2 py-3">
                    {renderCell(item.elite)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
