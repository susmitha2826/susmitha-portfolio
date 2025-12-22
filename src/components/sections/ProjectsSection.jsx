import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "../common";

const projectsData = [
  {
    number: "01",
    title: "AI-Powered Medical Transcription",
    description: "Desktop application converting radiologists' dictated reports into accurate text using OpenAI Whisper, with real-time Python-Node.js integration.",
    tags: ["Python", "Node.js", "MongoDB", "OpenAI Whisper"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "User Management & Workflow System",
    description: "React-based dashboard improving workflow visibility with secure REST APIs, role-based access control, and automated deployments.",
    tags: ["React.js", "Node.js", "MongoDB", "AWS S3"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    number: "03",
    title: "Healthcare HR Platform",
    description: "Comprehensive web platform for attendance tracking, shift scheduling, and HR workflows in healthcare environments.",
    tags: ["HTML/CSS", "Node.js", "MongoDB", "AWS S3"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "04",
    title: "Radiology Report Generator",
    description: "Backend services for radiology report generation including REST APIs for report creation and secure storage.",
    tags: ["Nest.js", "TypeScript", "MongoDB", "AWS S3"],
    gradient: "from-amber-500 to-orange-500",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-32 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Featured Projects</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            Real-world healthcare applications built with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              tags={project.tags}
              gradient={project.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;