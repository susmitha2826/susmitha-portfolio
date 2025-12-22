import React from "react";
import { motion } from "framer-motion";

function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <motion.div
        className="absolute w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-48 md:w-80 h-48 md:h-80 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}

export default GradientOrbs;