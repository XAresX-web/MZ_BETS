// src/sections/PlansComparison.jsx
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PlansComparison() {
  const { t } = useTranslation();

  const title = t("plansTable.title");
  const subtitle = t("plansTable.subtitle");
  const columns = t("plansTable.columns", { returnObjects: true });
  const features = t("plansTable.features", { returnObjects: true });

  const renderCell = (value) => {
    if (value === true) return <CheckCircle className="text-[#1db954]" />;
    if (value === false) return <XCircle className="text-red-500" />;
    return (
      <span
        className="text-yellow-400 font-semibold text-sm whitespace-nowrap"
        title="Acceso limitado"
      >
        {value}
      </span>
    );
  };

  return (
    <section className="py-24 px-4 text-white text-center relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        {title}
      </motion.h2>
      <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">{subtitle}</p>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[720px] w-full mx-auto table-fixed border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[#1db954] uppercase text-sm">
              {columns.map((col, i) => (
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
            {features.map((item, idx) => (
              <tr
                key={idx}
                className="bg-[#1a1a1a] text-sm text-white rounded-2xl shadow-md"
              >
                <td className="text-left px-4 py-4 font-medium border-l-4 border-[#1db954] rounded-l-2xl whitespace-nowrap">
                  {item.label}
                </td>
                <td>
                  <div className="flex justify-center px-2 py-3">
                    {renderCell(item.free)}
                  </div>
                </td>
                <td>
                  <div className="flex justify-center px-2 py-3">
                    {renderCell(item.basic)}
                  </div>
                </td>
                <td>
                  <div className="flex justify-center px-2 py-3">
                    {renderCell(item.pro)}
                  </div>
                </td>
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
