import React from "react";
import { motion } from "framer-motion";

function EducationSection() {
  return (
    <section id="education" className="relative py-16 md:py-32 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl md:rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Bachelor of Technology</h3>
                  <p className="text-base md:text-lg text-gray-300 mb-1">Computer Science and Engineering</p>
                  <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">Visvodaya Engineering College, JNTUA</p>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                    <span className="px-2 md:px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full">CGPA: 8.02 / 10</span>
                    <span className="text-gray-500">May 2023</span>
                    <span className="text-gray-500">Kavali, AP, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSection;