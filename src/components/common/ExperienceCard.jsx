import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ title, company, location, period, highlights, current }) {
  return (
    <div className="relative pl-0 md:pl-20">
      <div className="hidden md:block absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-[#0a0a0f]" />
      
      <motion.div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl md:rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <h3 className="text-lg md:text-xl font-bold">{title}</h3>
                {current && (
                  <span className="px-2 py-0.5 text-[10px] md:text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-sm md:text-base">{company}</p>
              <p className="text-gray-500 text-xs md:text-sm">{location}</p>
            </div>
            <span className="text-xs md:text-sm text-gray-400 bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-full self-start">{period}</span>
          </div>
          <ul className="space-y-2 md:space-y-3">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 md:mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceCard;