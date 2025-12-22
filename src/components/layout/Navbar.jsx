import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "../../data/section";
import { scrollToSection } from "../../utils/scrollToSection";

function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-md opacity-50" />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="profile"
              className={`relative rounded-full border-2 border-white/20 object-cover transition-all duration-500 ${
                isScrolled ? "w-9 h-9 md:w-10 md:h-10" : "w-11 h-11 md:w-14 md:h-14"
              }`}
            />
          </div>
          <div className={`transition-all duration-500 ${isScrolled ? "opacity-100" : "opacity-0 md:opacity-0 w-0"}`}>
            <p className="font-semibold text-sm whitespace-nowrap">Susmitha G.</p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === s.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeSection === s.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
        >
          <span>Let's Talk</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white rounded-full origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white rounded-full origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {sections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(s.id, setMobileMenuOpen)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === s.id
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {s.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact", setMobileMenuOpen); }}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-base font-medium"
              >
                <span>Let's Talk</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;