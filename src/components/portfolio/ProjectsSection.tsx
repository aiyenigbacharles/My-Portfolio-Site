import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import optitechImg from "@/assets/projects/optitech.png";
import saidiImg from "@/assets/projects/saidi.png";
import christechImg from "@/assets/projects/christech.png";
import sentimentImg from "@/assets/projects/sentiment.png";
import brainTumorImg from "@/assets/projects/brain-tumor.png";
import fertilityImg from "@/assets/projects/fertility.png";
import hepatitisImg from "@/assets/projects/hepatitis.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "OptiTech Consulting Limited",
    description: "A trusted IT solutions provider, offering expert training, infrastructure, and advisory services to individuals, businesses, and government institutions.",
    image: optitechImg,
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    live: "https://optitech-consulting-ltd.vercel.app/",
  },
  {
    title: "Saidi Nigeria Limited",
    description: "A multi-discipline construction firm with state of the art equipment, professional manpower & field experience.",
    image: saidiImg,
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://saidi-nigeria-ltd.vercel.app/",
  },
  {
    title: "Christech Services",
    description: "A digital and document solutions shop dedicated to providing high-quality printing, photocopying, scanning, lamination, and general cybercafé services.",
    image: christechImg,
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    live: "https://christech-services.vercel.app/",
  },
  {
    title: "Sentiment Analysis of 2023 Presidential Elections",
    description: "Analyzes sentiments on 2023 Nigerian Presidential Elections, classifying text as positive, negative, or neutral towards key candidates.",
    image: sentimentImg,
    tags: ["Python", "Streamlit", "Scikit-learn", "TextBlob", "Pandas", "NLTK"],
    live: "https://2023-presidential-elections-sentiment-analysis.streamlit.app/",
  },
  {
    title: "Brain Tumor Detection on MRI Images",
    description: "Utilizes Deep Learning to detect brain tumors from MRI images. Upload brain MRI images in JPG or PNG format & get real-time prediction of tumor presence.",
    image: brainTumorImg,
    tags: ["Python", "Streamlit", "PyTorch", "Torchvision", "PIL"],
    live: "https://mri-brain-tumor-detection.streamlit.app/",
  },
  {
    title: "Fertility Window Predictor",
    description: "Calculates or predicts fertility windows using physiological and menstrual cycle data to help individuals make informed family planning choices.",
    image: fertilityImg,
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Matplotlib"],
    live: "https://fertility-window-fvwjiywjqx6r8d4zlumhmm.streamlit.app/",
  },
  {
    title: "Hepatitis B Prediction System",
    description: "Predicts Hepatitis B infection using machine learning ensemble techniques to support health professionals with predictive insights.",
    image: hepatitisImg,
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Joblib"],
    live: "https://hepatitis-b-prediction-a8hkam5vpqdviwvxf4nuak.streamlit.app/",
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="portfolio-container py-6"
    >
      <h2 className="section-title">Projects</h2>
      <div className="space-y-5">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="project-card"
          >
            <div className="aspect-video overflow-hidden bg-secondary">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-sans font-semibold text-sm sm:text-base leading-tight">{project.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.live && (
                    <a href={project.live} className="social-icon" title="Live" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-badge text-[10px] sm:text-[11px]">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
