import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "../common";

const skillsData = [
  {
    icon: "🎨",
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
    color: "blue",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Nest.js", level: 75 },
      { name: "RESTful APIs", level: 90 },
    ],
    color: "emerald",
  },
  {
    icon: "🗄️",
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "AWS (S3, Lambda)", level: 78 },
      { name: "Jenkins CI/CD", level: 82 },
    ],
    color: "purple",
  },
  {
    icon: "🔐",
    title: "Security",
    skills: [
      { name: "OAuth 2.0", level: 85 },
      { name: "JWT Authentication", level: 88 },
      { name: "RBAC", level: 82 },
      { name: "API Security", level: 85 },
    ],
    color: "amber",
  },
  {
    icon: "🛠️",
    title: "Tools & Workflow",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
    ],
    color: "rose",
  },
  {
    icon: "🤖",
    title: "AI & LLM Integration",
    skills: [
      { name: "LLM Integration (OpenAI)", level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Speech-to-Text (Whisper)", level: 88 },
      { name: "AI API Integration", level: 90 },
    ],
    color: "cyan",
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Skills & Technologies</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            Proficient in modern web technologies with a focus on building secure, scalable healthcare applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              color={skill.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;