import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="portfolio-container py-10 text-center"
    >
      <h2 className="section-title text-center">Let's work together</h2>
      <p className="text-sm text-muted-foreground font-mono mb-5">
        Have a project in mind? Let's create something amazing.
      </p>
      <a
        href="mailto:charlesaiyenigba3@gmail.com"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-mono rounded-md hover:opacity-90 transition-opacity"
      >
        <Mail size={16} />
        Get in Touch
      </a>
    </motion.section>
  );
};

export default ContactSection;
