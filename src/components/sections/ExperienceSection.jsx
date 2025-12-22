import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "../common";

function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
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
  );
}

export default ExperienceSection;