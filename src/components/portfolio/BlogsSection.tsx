import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import goodPromptsImg from "@/assets/publications/good-prompts.png";
import impostorImg from "@/assets/publications/impostor-syndrome.png";
import chatbotImg from "@/assets/publications/chatbot-locally.png";
import socialEngImg from "@/assets/publications/social-engineering.png";
import wslImg from "@/assets/publications/wsl-guide.png";
import webImg from "@/assets/publications/web-principles.png";

const blogs = [
  {
    title: "Good Prompts Start with Good Thinking",
    date: "2025",
    excerpt: "This article explores prompt engineering as a thinking skill rather than a technical trick, explaining how clarity, context, and structured reasoning help people get more meaningful results from AI.",
    image: goodPromptsImg,
    link: "https://medium.com/@silvacharles156/good-prompts-start-with-good-thinking-a224cc01eca1",
  },
  {
    title: "When Your Biggest Critic Lives in Your Head",
    date: "2025",
    excerpt: "A personal account of overcoming Impostor Syndrome, sharing struggles, lessons learned, and strategies for managing self-doubt and building confidence.",
    image: impostorImg,
    link: "https://medium.com/@silvacharles156/when-your-biggest-critic-lives-in-your-head-9b46dd60c9f9",
  },
  {
    title: "Run your ChatBot Locally (No Data, No Problem)",
    date: "2025",
    excerpt: "Discover how to install & run Large Language Models offline using LM Studio, tackling high data costs & unreliable internet with a humorous, practical guide.",
    image: chatbotImg,
    link: "https://medium.com/@silvacharles156/run-your-chatbot-locally-no-data-no-problem-4294446ada5e",
  },
  {
    title: "The Human Factor in Social Engineering",
    date: "2024",
    excerpt: "Learn how to protect yourself from social engineering attacks that exploit human psychology. Discover common tactics like phishing & spear phishing.",
    image: socialEngImg,
    link: "https://medium.com/@silvacharles156/the-human-factor-in-social-engineering-560c7b8e768b",
  },
  {
    title: "A Windows User's Guide to Linux: WSL, VMs & Dual Boot",
    date: "2024",
    excerpt: "Explore options like WSL, virtual machines, & dual booting, and learn how to choose the one that fits your needs for integrating Linux with Windows.",
    image: wslImg,
    link: "https://medium.com/@silvacharles156/a-windows-users-guide-to-linux-assessment-of-wsl-virtual-machines-dual-boot-3b9261041043",
  },
  {
    title: "Understanding the Basic Principles of the Web",
    date: "2024",
    excerpt: "Explore the web's core components, client-server architecture, TCP/IP, HTTP, & DNS. Understand web server functionality and the client-server model.",
    image: webImg,
    link: "https://medium.com/@silvacharles156/understanding-the-basic-principles-of-the-web-bcafdf28e11c",
  },
];

const BlogsSection = () => {
  return (
    <motion.section
      id="publications"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="portfolio-container py-6"
    >
      <h2 className="section-title">Publications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {blogs.map((blog, idx) => (
          <a key={idx} href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-card block group overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden bg-secondary">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-[10px] text-muted-foreground font-mono mb-1">Medium • {blog.date}</p>
              <h3 className="font-sans font-semibold text-xs sm:text-sm mb-1 group-hover:underline leading-tight">{blog.title}</h3>
              <p className="text-[11px] text-muted-foreground font-mono leading-relaxed line-clamp-2">{blog.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono mt-2 text-foreground group-hover:gap-2 transition-all">
                Read more <ArrowRight size={11} />
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a href="https://medium.com/@silvacharles156" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
          Show All Publications
        </a>
      </div>
    </motion.section>
  );
};

export default BlogsSection;
