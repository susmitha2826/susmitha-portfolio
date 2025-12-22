import React from "react";
import { motion } from "framer-motion";
import { ContactCard } from "../common";

function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            I'm currently open to opportunities as a Frontend, Full Stack (MERN), or React Developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-6"
          >
            <ContactCard
              icon="📧"
              label="Email"
              value="susmithagopireddy26@gmail.com"
              href="mailto:susmithagopireddy26@gmail.com"
            />
            <ContactCard
              icon="📍"
              label="Location"
              value="Hyderabad, India"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-6"
          >
            <ContactCard
              icon="💼"
              label="LinkedIn"
              value="View Profile"
              href="https://www.linkedin.com/in/susmitha-gopireddy-471091237/"
              external
            />
            <ContactCard
              icon="💻"
              label="GitHub"
              value="View Repositories"
              href="https://github.com/susmitha2826"
              external
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;