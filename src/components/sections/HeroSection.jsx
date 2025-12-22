import React from "react";
import { motion } from "framer-motion";
import { FloatingParticles, Stat } from "../common";
import { scrollToSection } from "../../utils/scrollToSection";

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <FloatingParticles />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 md:space-y-8 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-gray-300">Available for opportunities</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Susmitha
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            A <span className="text-white font-medium">Full Stack Developer</span> with hands-on experience building
            <span className="text-blue-400"> AI-powered applications</span> using
            <span className="text-emerald-400"> LLMs</span>, speech-to-text models, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-white/5 transition-all text-center"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-2 md:pt-4">
            <Stat number="2+" label="Years Exp." />
            <Stat number="4+" label="Projects" />
            <Stat number="100%" label="Satisfaction" />
          </div>
        </motion.div>

        {/* Code Card - Hidden on mobile, shown on lg */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <pre className="text-sm font-mono leading-relaxed">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-white">=</span> {"{"}
                  {"\n"}  <span className="text-emerald-300">name</span>:{" "}
                  <span className="text-amber-300">"Susmitha"</span>,
                  {"\n"}  <span className="text-emerald-300">role</span>:{" "}
                  <span className="text-amber-300">"Full Stack Dev"</span>,
                  {"\n"}  <span className="text-emerald-300">skills</span>: [
                  {"\n"}    <span className="text-amber-300">"React"</span>,
                  {"\n"}    <span className="text-amber-300">"Node.js"</span>,
                  {"\n"}    <span className="text-amber-300">"MongoDB"</span>,
                  {"\n"}    <span className="text-amber-300">"AWS"</span>
                  {"\n"}  ],
                  {"\n"}  <span className="text-emerald-300">passionate</span>:{" "}
                  <span className="text-blue-400">true</span>
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;