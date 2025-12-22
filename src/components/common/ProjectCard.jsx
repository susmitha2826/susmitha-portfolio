import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ number, title, description, tags, gradient, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl md:rounded-3xl blur-lg opacity-0 group-hover:opacity-25 transition-opacity`} />
      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-sm hover:border-white/20 transition-all">
        <span className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-20`}>
          {number}
        </span>
        <h3 className="text-lg md:text-xl font-bold mt-1 md:mt-2 mb-2 md:mb-3 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs bg-white/10 text-gray-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;