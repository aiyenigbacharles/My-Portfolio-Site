import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="portfolio-container py-6"
    >
      <h2 className="section-title">About</h2>
      <p className="text-sm text-muted-foreground leading-relaxed font-mono">
        I am an IT specialist who specializes in building practical solutions using 
        Python, machine learning, and low-code tools. From data science to IT support, 
        I focus on solving real problems with technology that works.
      </p>
    </motion.section>
  );
};

export default AboutSection;
