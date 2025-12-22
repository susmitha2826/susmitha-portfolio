import React from "react";
import { motion } from "framer-motion";

function ContactCard({ icon, label, value, href, external }) {
  const content = (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-lg md:text-xl flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-0.5 md:mb-1">{label}</p>
        <p className="text-gray-200 text-sm md:text-base font-medium truncate">{value}</p>
      </div>
      {href && (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </div>
  );

  const className = "block p-4 md:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-white/20 hover:bg-white/10 transition-all";

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default ContactCard;