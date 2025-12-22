import React, { useState, useEffect } from "react";
import { sections } from "./data/section";
import { Navbar, Footer } from "./components/layout";
import { GradientOrbs } from "./components/common";
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  ContactSection,
} from "./components/sections";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
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

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans overflow-x-hidden">
      {/* Custom cursor glow - hidden on mobile */}
      <div
        className="hidden md:block fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <Navbar activeSection={activeSection} />

      <main className="relative">
        <GradientOrbs />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}