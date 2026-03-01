import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications: { title: string; issuer: string; date: string; link?: string }[] = [
  { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle University", date: "Oct 2025", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C64018E83F6C7B5B23C3978B1FD1CE5149E6C9957A82AB37EF66EF45DBF5E1CA" },
  { title: "Introduction to Networking and Cloud Computing", issuer: "Microsoft (Coursera)", date: "Jan 2025", link: "https://www.coursera.org/account/accomplishments/verify/TWN2CQLQEIVL" },
  { title: "AI Career Essentials", issuer: "ALX", date: "Jul 2024", link: "https://savanna.alxafrica.com/certificates/LcBF3zNSZR" },
  { title: "Introduction to Computers and Operating Systems and Security", issuer: "Microsoft (Coursera)", date: "Jun 2024", link: "https://www.coursera.org/account/accomplishments/verify/R4XULUQFYTBQ" },
  { title: "Career Essentials in Cybersecurity", issuer: "Microsoft & LinkedIn", date: "Jun 2024", link: "https://www.linkedin.com/learning/certificates/bb25a5dc9e940160a9d59d84443e5b6dd1c64bc8f51c01ed2bc540ba6d676598" },
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "May 2023", link: "https://www.credly.com/badges/d33dc757-d9fc-41c3-b5f6-2fb4265dbb97/linked_in_profile" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "May 2023", link: "https://www.credly.com/earner/earned/badge/24970f36-eb91-4f3e-ad91-99e8b714bcd3" },
  { title: "Crash Course on Python", issuer: "Google (Coursera)", date: "May 2023", link: "https://www.coursera.org/account/accomplishments/verify/QTDGCT8LQLLH" },
  { title: "Applied Data Science Lab", issuer: "WorldQuant University", date: "Jan 2023", link: "https://www.credly.com/badges/3069740a-8273-4103-bd42-fe53e0d5f9ec/linked_in_profile" },
  { title: "Jobberman Soft-Skills Training", issuer: "Jobberman Nigeria", date: "Dec 2020", link: "https://drive.google.com/file/d/1rzgdrcnHUHseL5kpa4sgSaa2HEN5q5F_/view" },
];

const CertificationsSection = () => {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="portfolio-container py-6"
    >
      <h2 className="section-title">Certifications</h2>
      {certifications.length === 0 ? (
        <p className="text-sm text-muted-foreground font-mono">
          Certifications coming soon — check back later!
        </p>
      ) : (
        <div className="space-y-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="blog-card flex items-start gap-3"
            >
              <Award size={18} className="text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <h3 className="font-sans font-semibold text-sm">
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                <p className="text-[11px] text-muted-foreground font-mono">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default CertificationsSection;
