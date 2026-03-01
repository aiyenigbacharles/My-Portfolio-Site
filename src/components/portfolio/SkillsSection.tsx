import { motion } from "framer-motion";

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.134V3.2S18.28 0 11.914 0zM8.708 1.85a1.06 1.06 0 110 2.12 1.06 1.06 0 010-2.12z"/>
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.402-3.35 3.402H9.451s-3.24-.052-3.24 3.134v5.326S5.72 24 12.086 24zm3.206-1.85a1.06 1.06 0 110-2.12 1.06 1.06 0 010 2.12z"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.684 23.834c-.476.538-1.378.166-1.378-.569V14.2h8.876c.882 0 1.37 1.026.812 1.711l-8.31 7.923z"/>
    <path d="M10.316.166c.476-.538 1.378-.166 1.378.569V9.8H2.818c-.882 0-1.37-1.026-.812-1.711L10.316.166z" opacity=".6"/>
  </svg>
);

const KaliIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.785c-1.09.534-2.467.83-3.726.83-2.14 0-3.463-.77-4.27-1.752-.807-.982-1.088-2.183-1.088-3.1 0-.303.027-.574.074-.818H6.5v-1.89h2.704c.268-.76.722-1.45 1.35-2.003C11.52 8.196 12.89 7.7 14.4 7.7c1.158 0 2.28.247 3.218.71l-.99 1.89c-.67-.35-1.46-.55-2.27-.55-.93 0-1.73.27-2.27.72-.36.3-.61.67-.76 1.08h5.42v1.89h-5.72c-.02.15-.03.31-.03.47 0 .62.18 1.2.55 1.65.52.63 1.39 1.01 2.68 1.01.97 0 2.03-.24 2.89-.67l.77 1.89z"/>
  </svg>
);

const UbuntuIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.4 12a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0zm8.214 5.7a1.8 1.8 0 11-1.8 3.118 1.8 1.8 0 011.8-3.118zm0-11.4a1.8 1.8 0 11-1.8-3.118 1.8 1.8 0 011.8 3.118zM12 16.2a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.504 0c-.155 0-.311.01-.465.035-.653.104-1.202.524-1.567 1.106-.377.6-.546 1.387-.546 2.217 0 .755.164 1.514.434 2.164.272.65.66 1.21 1.152 1.548.234.162.502.27.786.312h.032c.283-.042.551-.15.785-.312.493-.338.88-.898 1.152-1.548.27-.65.434-1.41.434-2.164 0-.83-.169-1.617-.546-2.217-.365-.582-.914-1.002-1.567-1.106A3.016 3.016 0 0012.504 0zm-3.05 8.056c-.276.053-.54.165-.76.338-.477.373-.772.948-.936 1.633-.165.686-.196 1.476-.132 2.263.064.787.22 1.575.467 2.247.247.672.578 1.226 1.006 1.547.213.161.457.265.72.29h.024a1.45 1.45 0 00.72-.29c.427-.32.758-.875 1.005-1.547.248-.672.403-1.46.468-2.247.064-.787.033-1.577-.132-2.263-.164-.685-.46-1.26-.937-1.633a1.68 1.68 0 00-.76-.338 1.68 1.68 0 00-.753 0zM6.95 14.7c-.837.677-1.39 1.676-1.39 2.79 0 1.95 1.538 3.535 3.462 3.604.06.003.12.003.18 0h5.596c.06.003.12.003.18 0 1.924-.069 3.462-1.654 3.462-3.604 0-1.114-.553-2.113-1.39-2.79-.838-.677-1.934-1.026-3.072-1.026H10.02c-1.138 0-2.234.35-3.071 1.026z"/>
  </svg>
);

const skills = [
  { name: "Python", icon: PythonIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "Linux", icon: LinuxIcon },
  { name: "Kali Linux", icon: KaliIcon },
  { name: "Ubuntu", icon: UbuntuIcon },
  { name: "Vibe Coding", emoji: "🎵" },
  { name: "Low Code Engineering", emoji: "🧩" },
  { name: "IT Support", emoji: "🛠️" },
  { name: "Machine Learning", emoji: "🤖" },
  { name: "Data Science", emoji: "📊" },
  { name: "Executive & Technical Assistance", emoji: "📋" },
  { name: "Troubleshooting", emoji: "🔧" },
  { name: "Google Workspace", emoji: "🌐" },
  { name: "Microsoft Office Suite", emoji: "📎" },
  { name: "Git & GitHub", icon: GitHubIcon },
  { name: "Technical Writing", icon: MediumIcon },
];

const SkillsSection = () => {
  // Double the skills array for seamless loop
  const duplicated = [...skills, ...skills];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-6 overflow-hidden"
    >
      <div className="portfolio-container mb-4">
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="skills-marquee flex gap-4 w-max">
          {duplicated.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full whitespace-nowrap text-sm font-mono shrink-0"
            >
              <span className="text-lg flex items-center justify-center">
                {skill.icon ? <skill.icon /> : skill.emoji}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
