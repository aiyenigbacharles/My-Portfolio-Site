import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import victorImg from "@/assets/testimonials/victor.jpeg";
import isaacImg from "@/assets/testimonials/isaac.jpeg";
import preciousImg from "@/assets/testimonials/precious.jpg";
import ifeanyiImg from "@/assets/testimonials/ifeanyi.jpeg";
import tianaImg from "@/assets/testimonials/tiana.jpg";
import christianImg from "@/assets/testimonials/christian.jpeg";
import donaldImg from "@/assets/testimonials/donald.jpeg";
import norbertImg from "@/assets/testimonials/norbert.jpeg";
import yashimImg from "@/assets/testimonials/yashim.jpeg";

const testimonials = [
  {
    name: "Victor",
    role: "Digital Marketer",
    image: victorImg,
    text: "Charles is an exceptional professional who embodies leadership excellence. He was a fantastic Team Lead who led our team with vision and a collaborative spirit, driving outstanding results. He will be a valuable asset to any organization.",
  },
  {
    name: "Isaac",
    role: "Realtor",
    image: isaacImg,
    text: "Charles is a reliable & efficient professional who consistently delivers results. He is insightful, learns quickly, tackles challenging tasks with ease & loves to carry others along. I'm thoroughly impressed & highly recommend him.",
  },
  {
    name: "Precious",
    role: "IT Professional",
    image: preciousImg,
    text: "Charles is a true professional & a highly skilled IT expert. He is always willing to go the extra mile to assist colleagues, providing valuable support & guidance.",
  },
  {
    name: "Ifeanyi",
    role: "Software Engineer",
    image: ifeanyiImg,
    text: "Charles is one of those rare professionals who combines technical versatility with genuine reliability. I've had the pleasure of working with him on several projects & each time he brought a solutions-driven mindset to the table.",
  },
  {
    name: "Tiana",
    role: "UX Designer",
    image: tianaImg,
    text: "Charles is one of the most thoughtful & detail-oriented software engineers I know. Beyond his technical expertise, he brings clarity, dedication & a strong collaborative spirit to every project.",
  },
  {
    name: "Christian",
    role: "Graphic Designer",
    image: christianImg,
    text: "Charles is a rockstar, his tech skills are top-notch & he's always willing to go the extra mile to solve problems. His attention to detail is impressive. He's a team player who communicates complex ideas in a clear & concise way.",
  },
  {
    name: "Donald",
    role: "Data Scientist",
    image: donaldImg,
    text: "During our time together, Charles consistently showed exceptional talent and a remarkable work ethic. He was always reliable, always delivered high quality results, and consistently showed up with a positive attitude.",
  },
  {
    name: "Norbert",
    role: "Senior Software Engineer",
    image: norbertImg,
    text: "I had the pleasure of mentoring Charles for a year, during which we worked together on several projects. He consistently demonstrated a strong sense of responsibility & a genuine eagerness to learn. He's dependable, versatile, & delivers with excellence.",
  },
  {
    name: "Yashim",
    role: "Data Scientist",
    image: yashimImg,
    text: "Charles is an exceptional colleague who is intelligent, efficient & incredibly creative. I've been thoroughly impressed by his skills & would highly recommend him to anyone seeking a dedicated professional.",
  },
];

const TestimonialsSection = () => {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-6 overflow-hidden"
    >
      <div className="portfolio-container mb-4">
        <h2 className="section-title">Testimonials</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="testimonials-marquee flex gap-4 w-max px-4">
          {duplicated.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="flex flex-col gap-3 p-5 border border-border rounded-lg bg-card w-[300px] sm:w-[350px] shrink-0"
            >
              <Quote className="w-5 h-5 text-muted-foreground" />
              <p className="text-sm text-foreground/80 leading-relaxed line-clamp-5">
                {t.text}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-border">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold font-sans text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
