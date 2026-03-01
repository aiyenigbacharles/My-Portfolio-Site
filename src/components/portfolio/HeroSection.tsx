import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const VerifiedBadge = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="inline-block ml-1.5">
    <path
      d="M11 0l2.59 3.15 4.07-.53.53 4.07L21.34 9.28 18.9 11l2.44 1.72-3.15 2.59.53 4.07-4.07.53L11 22l-2.59-3.15-4.07.53-.53-4.07L.66 12.72 3.1 11 .66 9.28l3.15-2.59-.53-4.07 4.07-.53L11 0z"
      fill="hsl(210, 100%, 50%)"
    />
    <path d="M7.5 11l2 2 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const socialLinks = [
  { icon: Mail, href: "mailto:charlesaiyenigba3@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/aiyenigbacharles", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/charles-aiyenigba-b6a139251/", label: "LinkedIn" },
  { icon: BookOpen, href: "https://medium.com/@silvacharles156", label: "Medium" },
];

const HeroSection = () => {
  return (
    <section className="portfolio-container pt-4 pb-10">
      {/* Kanji watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="kanji-watermark mb-[-40px] md:mb-[-60px]"
      >
        改善
      </motion.div>

      {/* Avatar + Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5"
      >
        <img
          src={avatarImg}
          alt="Charles Aiyenigba"
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-border"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight flex items-center justify-center sm:justify-start">
            Charles Aiyenigba
            <VerifiedBadge />
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-mono">
            IT Specialist • Engineer • Builder
          </p>
          <div className="flex items-center gap-3 mt-3 justify-center sm:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
