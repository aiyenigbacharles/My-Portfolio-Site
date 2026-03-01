import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between py-3 md:py-6 portfolio-container"
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
        <a href="#" className="nav-link nav-link-active text-xs sm:text-sm">Home</a>
        <a href="#projects" className="nav-link text-xs sm:text-sm">Projects</a>
        <a href="#publications" className="nav-link text-xs sm:text-sm hidden sm:inline">Publications</a>
        <a href="#certifications" className="nav-link text-xs sm:text-sm">Certs</a>
      </div>
      <ThemeToggle />
    </motion.nav>
  );
};

export default Navbar;
