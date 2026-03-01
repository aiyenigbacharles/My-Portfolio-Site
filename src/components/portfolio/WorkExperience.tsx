import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Gracetech Groups",
    role: "Technical Coordinator",
    period: "Jan 2025 - Feb 2026",
    location: "Onsite",
    type: "Full-time",
    bullets: [
      "Coordinated technical operations and managed IT infrastructure across the organization.",
      "Provided technical support, troubleshooting, and maintenance of systems and networks.",
      "Collaborated with cross-functional teams to deliver technology solutions.",
    ],
  },
  {
    company: "Independent National Electoral Commission",
    role: "System Analyst",
    period: "Jan 2022 - Oct 2024",
    location: "Hybrid",
    type: "Full-time",
    bullets: [
      "Analyzed and maintained electoral systems to ensure data integrity and reliability.",
      "Provided technical analysis and system support for election processes.",
      "Worked with stakeholders to optimize system performance and workflows.",
    ],
  },
  {
    company: "Queryfier LLC",
    role: "Data Scientist",
    period: "Aug 2023 - Nov 2023",
    location: "Hybrid",
    type: "Internship",
    bullets: [
      "Applied machine learning techniques to analyze and derive insights from complex datasets.",
      "Built predictive models and data pipelines for business intelligence.",
    ],
  },
  {
    company: "Lustack LLC",
    role: "Software Quality Assurance Engineer (Team Lead)",
    period: "Jul 2023 - Aug 2023",
    location: "Remote",
    type: "Contract",
    bullets: [
      "Led the QA team in conducting comprehensive testing of software applications to ensure quality standards.",
      "Identified and documented bugs, and collaborated with developers on resolutions.",
    ],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="portfolio-container py-6"
    >
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-0">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full flex flex-col sm:flex-row sm:items-start justify-between text-left group gap-1 sm:gap-2"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-xs font-bold font-sans shrink-0">
                  {exp.company.charAt(0)}
                </div>
                <div className="min-w-0">
                  <span className="font-sans font-semibold text-xs sm:text-sm">{exp.company}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm font-mono"> / {exp.role}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground font-mono shrink-0 ml-11 sm:ml-0">
                {exp.period}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${expanded === idx ? "rotate-180" : ""}`}
                />
              </div>
            </button>

            {expanded === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-3 ml-11"
              >
                <div className="flex gap-2 mb-3">
                  <span className="skill-badge">{exp.location}</span>
                  <span className="skill-badge">{exp.type}</span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-muted-foreground font-mono flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-muted-foreground rounded-full shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkExperience;
