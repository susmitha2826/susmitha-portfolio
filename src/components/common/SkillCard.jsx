import React from "react";
import { motion } from "framer-motion";

const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  emerald: "from-emerald-500 to-emerald-600",
  purple: "from-purple-500 to-purple-600",
  amber: "from-amber-500 to-amber-600",
  rose: "from-rose-500 to-rose-600",
  cyan: "from-cyan-500 to-cyan-600",
};

const barColors = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  purple: "bg-purple-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  cyan: "bg-cyan-500",
};

function SkillCard({ icon, title, skills, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative"
    >
      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 backdrop-blur-sm hover:border-white/20 transition-colors">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center text-lg md:text-xl mb-3 md:mb-4`}>
          {icon}
        </div>
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{title}</h3>
        <div className="space-y-2 md:space-y-3">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-xs md:text-sm mb-1">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: delay + 0.2 }}
                  className={`h-full ${barColors[color]} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;