import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import userImg from "./user.png";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const impactItems = [
  "Building scalable React applications",
  "Designing production-ready UI systems",
  "Developing full-stack web apps",
  "Optimizing performance & UX",
  "Writing clean, maintainable code",
];

const techItems = [
  "⚛ React",
  "🟣 Node.js",
  "🎨 Tailwind CSS",
  "⚡ JavaScript",
  "🧠 TypeScript",
  "🍃 MongoDB",
  "🚀 Express.js",
  "🌿 Git & GitHub",
  "🤖 AI / LLM",
];


const generateFloatingTech = () => {
  const items = [
    "⚛ React",
    "🟣 Node.js",
    // "🎨 Tailwind CSS",
    // "⚡ JavaScript",
    // "🌿 Git",
    "🍃 MongoDB",
    // "🚀 Express.js",
    // "🧠 TypeScript",
    "🤖 AI / LLM",
  ];

  return items.map((label, index) => ({
    label,
    x: (index % 3) * 110 - 140 + Math.random() * 20,
    y: Math.floor(index / 3) * 90 - 60 + Math.random() * 20,
    duration: 18 + Math.random() * 10,
  }));
};

const scrollToSection = (id, setMobileMenuOpen) => {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    if (setMobileMenuOpen) setMobileMenuOpen(false);
  }
};

// Animated Space Background with Stars
function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      {/* Static stars layer */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            boxShadow: '0 0 10px 2px rgba(255,255,255,0.8)',
          }}
          animate={{
            x: [0, 300],
            y: [0, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 5,
            repeatDelay: 10,
          }}
        />
      ))}
    </div>
  );
}

// Floating Planets SVG
function FloatingPlanets() {
  const planets = [
    { size: 120, color: "#8b5cf6", x: 15, y: 20, duration: 20 },
    { size: 80, color: "#3b82f6", x: 80, y: 30, duration: 25 },
    { size: 60, color: "#10b981", x: 85, y: 70, duration: 18 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {planets.map((planet, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${planet.x}%`,
            top: `${planet.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: 360,
          }}
          transition={{
            duration: planet.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width={planet.size} height={planet.size} viewBox="0 0 100 100">
            <defs>
              <radialGradient id={`planet-gradient-${i}`}>
                <stop offset="0%" stopColor={planet.color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={planet.color} stopOpacity="0.2" />
              </radialGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill={`url(#planet-gradient-${i})`}
              opacity="0.3"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="8"
              fill="none"
              stroke={planet.color}
              strokeWidth="2"
              opacity="0.4"
              transform="rotate(-20 50 50)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// Orbiting Satellites
function OrbitingSatellites() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="relative"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
            }}
          >
            <svg
              className="absolute inset-0"
              viewBox="0 0 100 100"
              style={{ opacity: 0.1 }}
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="url(#orbit-gradient)"
                strokeWidth="0.5"
                strokeDasharray="2 4"
              />
              <defs>
                <linearGradient id="orbit-gradient">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400"
              style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Mouse Repel Component - Elements move away from cursor
function MouseRepelElement({ children, className, strength = 30 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // Repel effect - maximum distance of 200px for detection
      if (distance < 200) {
        const force = (200 - distance) / 200;
        const pushX = -(distanceX / distance) * force * strength;
        const pushY = -(distanceY / distance) * force * strength;
        setOffset({ x: pushX, y: pushY });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}

// Custom Cursor
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-blue-400/50 pointer-events-none z-50 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-50 hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
          x: 12,
          y: 12,
        }}
      />
    </>
  );
}

export default function SpacePortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const floatingTech = generateFloatingTech();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionElements = sections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add twinkle animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden" style={{ cursor: 'none' }}>
      <SpaceBackground />
      <FloatingPlanets />
      <OrbitingSatellites />
      <CustomCursor />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/40 backdrop-blur-2xl border-b border-blue-500/20' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md"
                  animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <img
                  src={userImg}
                  alt="Susmitha"
                  className="relative w-10 h-10 rounded-full object-cover border-2 border-blue-400/50"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Susmitha Gopireddy
                </h1>
                <p className="text-xs text-gray-400">Full Stack Developer</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative text-sm font-medium transition-colors ${activeSection === section.id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  )}
                </button>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59,130,246,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">Hire Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-white rounded-full"
                />
              </div>
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-blue-500/20 mt-4"
              >
                <div className="py-4 space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id, setMobileMenuOpen)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-500/10 rounded-lg transition-colors"
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-[#020617]"
      >
        {/* Background Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Availability Badge */}
              <MouseRepelElement strength={20}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-green-400">
                    Available for Opportunities
                  </span>
                </div>
              </MouseRepelElement>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gray-200">Hi, I’m</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Susmitha
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                MERN Stack Developer building
                <span className="text-blue-400 font-semibold">
                  {" "}scalable, production-ready web applications
                </span>{" "}
                using <span className="text-purple-400 font-semibold">React</span>,{" "}
                <span className="text-pink-400 font-semibold">Node.js</span>,{" "}
                <span className="text-green-400 font-semibold">MongoDB</span>, and
                <span className="text-indigo-400 font-semibold"> AI / LLM integrations</span>.
              </p>


              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <MouseRepelElement strength={15}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("projects")}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-lg shadow-xl relative overflow-hidden"
                  >
                    Explore Projects
                  </motion.button>
                </MouseRepelElement>

                <MouseRepelElement strength={15}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 bg-white/5 border border-blue-400/30 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Let’s Connect
                  </motion.button>
                </MouseRepelElement>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/20">
                <StatCard number="2+" label="Years Experience" />
                <StatCard number="10+" label="Projects Built" />
                <StatCard number="5+" label="Tech Stacks" />
              </div>
            </motion.div>

            {/* RIGHT SIDE – MISSION CONTROL UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <MouseRepelElement strength={30}>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 shadow-2xl"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-400">Mission Control</span>
                    <span className="text-xs text-green-400">
                      ● System Online
                    </span>
                  </div>

                  {/* Animated Terminal */}
                  <div className="bg-black/40 rounded-lg p-4 text-sm font-mono text-green-400 space-y-2">
                    <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
                      ✔ Initializing system...
                    </motion.p>
                    <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 0.8 }}>
                      ✔ Loading tech stack...
                    </motion.p>
                    <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 1.6 }}>
                      ✔ Deployment complete 🚀
                    </motion.p>
                  </div>


                  {/* Status */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">
                      Deployment Successful
                    </span>
                  </div>

                  {/* Floating Tech Badges */}
                  {floatingTech.map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute text-sm text-blue-400 bg-white/5 border border-blue-400/20 rounded-full px-3 py-1 backdrop-blur-md"
                      style={{
                        right: item.x,
                        top: item.y,
                      }}
                      animate={{
                        y: [0, -12, 0],
                        x: [0, 8, 0],
                        rotate: 360,
                      }}
                      transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                    >
                      {item.label}
                    </motion.div>
                  ))}


                </motion.div>
              </MouseRepelElement>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative overflow-hidden bg-[#020617] border-y border-blue-500/20 py-6">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />

        {/* ROW 1 — WHAT YOU BUILD */}
        <motion.div
          className="flex gap-6 whitespace-nowrap mb-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...impactItems, ...impactItems].map((item, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-full bg-white/5 border border-blue-400/20 text-blue-300 text-sm font-semibold backdrop-blur-md"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* ROW 2 — TECH STACK (reverse direction) */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...techItems, ...techItems].map((item, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-full bg-white/5 border border-purple-400/20 text-purple-300 text-sm font-semibold backdrop-blur-md"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </section>



      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Passionate Full Stack Developer creating innovative AI-powered healthcare solutions.
              Working at VirtuScribe Solutions, I transform complex challenges into elegant,
              scalable applications using React, Node.js, and cutting-edge AI technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <MouseRepelElement strength={25}>
              <HighlightCard
                icon={<CodeIcon />}
                title="Problem Solver"
                description="Expert in identifying bottlenecks and optimizing workflows for maximum efficiency"
                delay={0}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={25}>
              <HighlightCard
                icon={<RocketIcon />}
                title="Fast Learner"
                description="Quickly adapt to new technologies and frameworks to deliver cutting-edge solutions"
                delay={0.1}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={25}>
              <HighlightCard
                icon={<TeamIcon />}
                title="Team Player"
                description="Collaborative mindset with excellent communication for cross-functional teams"
                delay={0.2}
              />
            </MouseRepelElement>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <MouseRepelElement strength={20}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition" />
                <div className="relative bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl flex-shrink-0">
                      🎓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Bachelor of Technology</h3>
                      <p className="text-gray-300 mb-1">Computer Science and Engineering</p>
                      <p className="text-sm text-gray-400">Visvodaya Engineering College, JNTUA • CGPA: 8.02/10 • 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </MouseRepelElement>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies powering my development journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MouseRepelElement strength={20}>
              <BentoSkillCard
                title="Frontend"
                icon="⚛️"
                skills={["React.js", "TypeScript", "Tailwind CSS", "Next.js"]}
                gradient="from-blue-500 to-cyan-500"
                className="lg:col-span-2 lg:row-span-2"
                delay={0}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={20}>
              <BentoSkillCard
                title="Backend"
                icon="⚙️"
                skills={["Node.js", "Express", "Nest.js", "REST APIs"]}
                gradient="from-purple-500 to-pink-500"
                className="lg:col-span-2"
                delay={0.1}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={15}>
              <BentoSkillCard
                title="Database"
                icon="🗄️"
                skills={["MongoDB", "PostgreSQL"]}
                gradient="from-emerald-500 to-teal-500"
                delay={0.2}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={15}>
              <BentoSkillCard
                title="Cloud"
                icon="☁️"
                skills={["AWS S3", "Lambda", "Jenkins"]}
                gradient="from-orange-500 to-red-500"
                delay={0.3}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={20}>
              <BentoSkillCard
                title="AI/ML"
                icon="🤖"
                skills={["OpenAI", "Whisper", "LLM Integration"]}
                gradient="from-violet-500 to-purple-500"
                className="lg:col-span-2"
                delay={0.4}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={15}>
              <BentoSkillCard
                title="Tools"
                icon="🛠️"
                skills={["Git", "VS Code", "Postman"]}
                gradient="from-amber-500 to-yellow-500"
                delay={0.5}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={15}>
              <BentoSkillCard
                title="Security"
                icon="🔐"
                skills={["OAuth 2.0", "JWT", "RBAC"]}
                gradient="from-rose-500 to-pink-500"
                delay={0.6}
              />
            </MouseRepelElement>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">Real-world applications making an impact</p>
          </motion.div>

          <div className="space-y-8">
            <MouseRepelElement strength={30}>
              <ShowcaseProject
                number="01"
                title="AI-Powered Medical Transcription System"
                description="Revolutionary desktop application converting radiologists' voice dictations into accurate medical reports using OpenAI Whisper with real-time processing and secure data handling."
                tags={["Python", "Node.js", "MongoDB", "OpenAI Whisper", "Electron"]}
                gradient="from-blue-500 to-cyan-500"
                impact={["95% accuracy", "70% faster reports", "Reduced workload"]}
                delay={0}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={30}>
              <ShowcaseProject
                number="02"
                title="Healthcare Workflow Management Platform"
                description="Comprehensive React dashboard with role-based access control, real-time tracking, and automated CI/CD pipelines for improved operational efficiency."
                tags={["React.js", "Node.js", "MongoDB", "AWS S3", "Jenkins"]}
                gradient="from-purple-500 to-pink-500"
                impact={["40% visibility increase", "Automated deployments", "Enhanced security"]}
                delay={0.1}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={30}>
              <ShowcaseProject
                number="03"
                title="Radiology Report Generator"
                description="Sophisticated backend services with RESTful APIs for automated radiology report generation, integrated with cloud storage and secure authentication."
                tags={["Nest.js", "TypeScript", "MongoDB", "AWS S3", "OAuth 2.0"]}
                gradient="from-emerald-500 to-teal-500"
                impact={["Secure storage", "Real-time performance", "Scalable architecture"]}
                delay={0.2}
              />
            </MouseRepelElement>

            <MouseRepelElement strength={30}>
              <ShowcaseProject
                number="04"
                title="Healthcare HR & Attendance System"
                description="Full-stack platform for managing employee attendance, shift scheduling, and HR workflows in healthcare environments."
                tags={["HTML/CSS", "JavaScript", "Node.js", "MongoDB", "AWS S3"]}
                gradient="from-amber-500 to-orange-500"
                impact={["Streamlined HR", "Automated shifts", "Cloud storage"]}
                delay={0.3}
              />
            </MouseRepelElement>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            <MouseRepelElement strength={25}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="md:pl-20">
                  <motion.div
                    className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-950"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(59,130,246,0.7)',
                        '0 0 0 10px rgba(59,130,246,0)',
                        '0 0 0 0 rgba(59,130,246,0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition" />
                    <div className="relative bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold">Junior Software Developer</h3>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Current</span>
                          </div>
                          <p className="text-lg text-blue-400 mb-1">VirtuScribe Solutions</p>
                          <p className="text-gray-400">Hyderabad, India</p>
                        </div>
                        <div className="text-gray-300 bg-white/5 px-4 py-2 rounded-lg self-start border border-blue-500/20">
                          Sep 2023 - Present
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          "Led development of AI-powered medical transcription system using OpenAI Whisper, processing 1000+ daily dictations",
                          "Built scalable REST APIs with Node.js and Express.js, serving 500+ concurrent users",
                          "Implemented CI/CD pipelines with Jenkins, reducing deployment time by 60%",
                          "Developed secure authentication systems with OAuth 2.0 and JWT for HIPAA compliance",
                          "Collaborated with cross-functional teams to deliver 4 major healthcare applications"
                        ].map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <p className="text-gray-300">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </MouseRepelElement>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Actively seeking Full Stack Developer opportunities. Let's build something amazing together!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <MouseRepelElement strength={20}>
              <ContactCard
                icon={<EmailIcon />}
                title="Email"
                value="susmithagopireddy26@gmail.com"
                href="mailto:susmithagopireddy26@gmail.com"
                gradient="from-blue-500 to-cyan-500"
              />
            </MouseRepelElement>

            <MouseRepelElement strength={20}>
              <ContactCard
                icon={<LinkedInIcon />}
                title="LinkedIn"
                value="Connect with me"
                href="https://www.linkedin.com/in/susmitha-gopireddy-471091237/"
                gradient="from-blue-600 to-blue-700"
                external
              />
            </MouseRepelElement>

            <MouseRepelElement strength={20}>
              <ContactCard
                icon={<GitHubIcon />}
                title="GitHub"
                value="Check out my code"
                href="https://github.com/susmitha2826"
                gradient="from-purple-600 to-pink-600"
                external
              />
            </MouseRepelElement>

            <MouseRepelElement strength={20}>
              <ContactCard
                icon={<LocationIcon />}
                title="Location"
                value="Hyderabad, India"
                gradient="from-emerald-500 to-teal-500"
              />
            </MouseRepelElement>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-500/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-400">
            © 2024 Susmitha Gopireddy. Crafted with 💙 using React & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center"
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
        {number}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </motion.div>
  );
}

function HighlightCard({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition" />
      <div className="relative bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function BentoSkillCard({ title, icon, skills, gradient, className = "", delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`group relative ${className}`}
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition`} />
      <div className="relative h-full bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
        <div className={`text-3xl mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200 border border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ShowcaseProject({ number, title, description, tags, gradient, impact, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition`} />
      <div className="relative bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
        <div className="flex items-start gap-6">
          <div className={`text-6xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-30`}>
            {number}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">{title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {impact.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ContactCard({ icon, title, value, href, gradient, external }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{title}</p>
        <p className="text-gray-200 font-medium truncate">{value}</p>
      </div>
      {href && (
        <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </div>
  );

  const className = "block p-6 bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all";

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      className={className}
    >
      {content}
    </motion.div>
  );
}

// SVG Icon Components
function CodeIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}