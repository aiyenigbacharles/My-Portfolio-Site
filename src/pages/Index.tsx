import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import WorkExperience from "@/components/portfolio/WorkExperience";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogsSection from "@/components/portfolio/BlogsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkExperience />
        <ProjectsSection />
        <BlogsSection />
        <SkillsSection />
        <TestimonialsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
