import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import userImg from "./user.png";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];


const colors = {
  cream: "#FAF7F2",
  charcoal: "#1a1a1a",
  accent: "#FF6B35",
  sage: "#7D8471",
  blush: "#E8D5C4",
  ink: "#2D2D2D",
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

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `rgba(${100 + Math.random() * 155}, ${150 + Math.random() * 105}, 255, ${0.3 + Math.random() * 0.4})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient orbs
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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans overflow-x-hidden">
      {/* Custom cursor glow - hidden on mobile */}
      <div
        className="hidden md:block fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
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
                // src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                src={userImg}
                alt="profile"
                className={`relative rounded-full border-2 border-white/20 object-cover transition-all duration-500 ${isScrolled ? "w-9 h-9 md:w-10 md:h-10" : "w-11 h-11 md:w-14 md:h-14"
                  }`}
              />
            </div>
            <div className={`transition-all duration-500 ${isScrolled ? "opacity-100" : "opacity-0 md:opacity-0 w-0"}`}>
              <p className="font-semibold text-sm whitespace-nowrap">SUSMITHA GOPIREDDY.</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeSection === s.id
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
                    className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${activeSection === s.id
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

      <main className="relative">
        <GradientOrbs />

        {/* Hero Section */}
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
                    {/* <span className="ml-4 text-xs text-gray-500 font-mono">portfolio.jsx</span> */}
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
              {/* <span className="text-xs uppercase tracking-widest">Scroll</span> */}
              {/* <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg> */}
            </motion.div>
          </motion.div>
        </section>
        
        {/* Marquee Section */}
        <div
          className="py-8 overflow-hidden"
          style={{ background: colors.charcoal }}
        >
          <div className="marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-12 px-6">
                {["React.js", "Node.js", "MongoDB", "TypeScript", "AWS", "AI/LLM", "Express.js", "Nest.js"].map((tech) => (
                  <span key={tech} className="text-xl md:text-2xl font-light tracking-wide" style={{ color: colors.cream }}>
                    {tech} <span style={{ color: colors.accent }}>✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="relative py-16 md:py-32">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              {/* <span className="text-blue-400 text-xs md:text-sm font-medium uppercase tracking-widest">Expertise</span> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Skills & Technologies</h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
                Proficient in modern web technologies with a focus on building secure, scalable healthcare applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <SkillCard
                icon="🎨"
                title="Frontend Development"
                skills={[
                  { name: "React.js", level: 90 },
                  { name: "TypeScript", level: 85 },
                  { name: "JavaScript (ES6+)", level: 92 },
                  { name: "HTML5 / CSS3", level: 95 },
                ]}
                color="blue"
                delay={0}
              />
              <SkillCard
                icon="⚙️"
                title="Backend Development"
                skills={[
                  { name: "Node.js", level: 88 },
                  { name: "Express.js", level: 85 },
                  { name: "Nest.js", level: 75 },
                  { name: "RESTful APIs", level: 90 },
                ]}
                color="emerald"
                delay={0.1}
              />
              <SkillCard
                icon="🗄️"
                title="Database & Cloud"
                skills={[
                  { name: "MongoDB", level: 88 },
                  { name: "AWS (S3, Lambda)", level: 78 },
                  { name: "Jenkins CI/CD", level: 82 },
                ]}
                color="purple"
                delay={0.2}
              />
              <SkillCard
                icon="🔐"
                title="Security"
                skills={[
                  { name: "OAuth 2.0", level: 85 },
                  { name: "JWT Authentication", level: 88 },
                  { name: "RBAC", level: 82 },
                  { name: "API Security", level: 85 },
                ]}
                color="amber"
                delay={0.3}
              />
              <SkillCard
                icon="🛠️"
                title="Tools & Workflow"
                skills={[
                  { name: "Git / GitHub", level: 92 },
                  { name: "VS Code", level: 95 },
                  { name: "Postman", level: 88 },
                ]}
                color="rose"
                delay={0.4}
              />
              <SkillCard
                icon="🤖"
                title="AI & LLM Integration"
                skills={[
                  { name: "LLM Integration (OpenAI)", level: 80 },
                  { name: "Prompt Engineering", level: 85 },
                  { name: "Speech-to-Text (Whisper)", level: 88 },
                  { name: "AI API Integration", level: 90 },
                ]}
                color="cyan"
                delay={0.5}
              />
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="relative py-16 md:py-32 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              {/* <span className="text-emerald-400 text-xs md:text-sm font-medium uppercase tracking-widest">Portfolio</span> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Featured Projects</h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
                Real-world healthcare applications built with modern technologies and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <ProjectCard
                number="01"
                title="AI-Powered Medical Transcription"
                description="Desktop application converting radiologists' dictated reports into accurate text using OpenAI Whisper, with real-time Python-Node.js integration."
                tags={["Python", "Node.js", "MongoDB", "OpenAI Whisper"]}
                gradient="from-blue-500 to-cyan-500"
                delay={0}
              />
              <ProjectCard
                number="02"
                title="User Management & Workflow System"
                description="React-based dashboard improving workflow visibility with secure REST APIs, role-based access control, and automated deployments."
                tags={["React.js", "Node.js", "MongoDB", "AWS S3"]}
                gradient="from-emerald-500 to-teal-500"
                delay={0.1}
              />
              <ProjectCard
                number="03"
                title="Healthcare HR Platform"
                description="Comprehensive web platform for attendance tracking, shift scheduling, and HR workflows in healthcare environments."
                tags={["HTML/CSS", "Node.js", "MongoDB", "AWS S3"]}
                gradient="from-purple-500 to-pink-500"
                delay={0.2}
              />
              <ProjectCard
                number="04"
                title="Radiology Report Generator"
                description="Backend services for radiology report generation including REST APIs for report creation and secure storage."
                tags={["Nest.js", "TypeScript", "MongoDB", "AWS S3"]}
                gradient="from-amber-500 to-orange-500"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-16 md:py-32">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              {/* <span className="text-purple-400 text-xs md:text-sm font-medium uppercase tracking-widest">Career</span> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Work Experience</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden md:block" />

              <div className="space-y-8 md:space-y-12">
                <ExperienceCard
                  title="Junior Software Developer"
                  company="VirtuScribe Solutions"
                  location="Hyderabad, India"
                  period="Sep 2023 - Present"
                  highlights={[
                    "Developed and optimized backend services using Node.js, Express.js, and REST APIs for healthcare applications",
                    "Built and integrated AI-driven features using speech-to-text and LLM-based processing",
                    "Collaborated with frontend teams to integrate React-based interfaces with backend APIs",
                    "Implemented CI/CD pipelines with Jenkins to reduce manual deployment time",
                    "Designed efficient, compliant reporting workflows with radiology experts"
                  ]}
                  current={true}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="relative py-16 md:py-32 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              {/* <span className="text-amber-400 text-xs md:text-sm font-medium uppercase tracking-widest">Background</span> */}
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

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6" style={{ background: colors.charcoal }}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="text-sm font-medium uppercase tracking-[0.3em]"
                style={{ color: colors.accent }}
              >
                Get in Touch
              </span>
              <h2
                className="font-display text-5xl md:text-7xl mt-4 leading-tight"
                style={{ color: colors.cream }}
              >
                Let's create something
                <span className="italic block"> amazing together</span>
              </h2>
              <p
                className="mt-8 text-lg max-w-xl mx-auto"
                style={{ color: `${colors.cream}99` }}
              >
                I'm currently open to opportunities as a Frontend, Full Stack (MERN),
                or React Developer. Let's connect!
              </p>

              <motion.a
                href="mailto:susmithagopireddy26@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-12 px-12 py-5 rounded-full text-lg font-medium transition-all"
                style={{
                  background: colors.accent,
                  color: "white",
                }}
              >
                susmithagopireddy26@gmail.com
              </motion.a>

              <div className="flex justify-center gap-6 mt-12">
                <SocialLink href="https://www.linkedin.com/in/susmitha-gopireddy-471091237/" label="LinkedIn" />
                <SocialLink href="https://github.com/susmitha2826" label="GitHub" />
              </div>
            </motion.div>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-6 md:py-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
            <p>© 2024 Susmitha Gopireddy. All rights reserved.</p>
            <p>Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Stat component
function Stat({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-xl md:text-2xl font-bold text-white">{number}</p>
      <p className="text-xs md:text-sm text-gray-500">{label}</p>
    </div>
  );
}

// Skill Card component
function SkillCard({ icon, title, skills, color, delay }) {
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

// Project Card component
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

// Experience Card component
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

// Contact Card component
function SocialLink({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 text-sm font-medium transition-colors hover:bg-white/10 text-gray-300"
    >
      {label} ↗
    </motion.a>
  );
}