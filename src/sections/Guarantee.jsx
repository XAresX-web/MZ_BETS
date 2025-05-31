import React from "react";
import { ShieldCheck, Lock, Trophy, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Guarantee() {
  return (
    <section className="py-24 px-6 text-white text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider text-[#1db954] neon-glow">
          Seguridad Garantizada
          <BadgeCheck size={16} />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6">
          Compra con confianza total
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg md:text-xl">
          Protegido por tecnología segura, garantía de resultados, y membresía
          verificada.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1a1a] border border-[#1db954]/30 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition"
        >
          <ShieldCheck
            size={48}
            className="mx-auto text-[#1db954] animate-pulse drop-shadow-[0_0_15px_#1db954]"
          />
          <h3 className="text-xl font-bold mt-4">Garantía de Resultados</h3>
          <p className="text-gray-400 mt-2">
            Si no mejoras tus apuestas en 7 días, puedes solicitar un reembolso
            completo. Sin letras pequeñas.
          </p>
          <div className="mt-4 text-xs uppercase text-[#1db954] font-bold tracking-widest">
            Protección 7 días
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#1a1a1a] border border-[#1db954]/30 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition"
        >
          <Lock
            size={48}
            className="mx-auto text-[#1db954] animate-pulse drop-shadow-[0_0_15px_#1db954]"
          />
          <h3 className="text-xl font-bold mt-4">Pago 100% Seguro</h3>
          <p className="text-gray-400 mt-2">
            Procesado por{" "}
            <span className="text-white font-semibold">Stripe</span>, la
            plataforma más segura del mundo. Cifrado SSL de nivel bancario.
          </p>
          <div className="mt-4 text-xs uppercase text-[#1db954] font-bold tracking-widest">
            Encriptación avanzada
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-[#1db954]/30 p-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition"
        >
          <Trophy
            size={48}
            className="mx-auto text-[#1db954] animate-pulse drop-shadow-[0_0_15px_#1db954]"
          />
          <h3 className="text-xl font-bold mt-4">Resultados Reales</h3>
          <p className="text-gray-400 mt-2">
            Nuestros usuarios VIP reportan una mejora significativa en sus
            ganancias. Comprobado semanalmente.
          </p>
          <div className="mt-4 text-xs uppercase text-[#1db954] font-bold tracking-widest">
            Comprobado por MZ BETS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
