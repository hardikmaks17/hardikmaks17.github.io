import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Frontend Developer",
      company: "o2h Technology",
      period: "Apr 2025 - Present",
      description: [
        "Developed and maintained scalable, accessible web applications using React, TypeScript, and Material UI",
        "Built modular and reusable UI components to improve development efficiency across multiple modules",
        "Collaborated with backend and design teams to deliver responsive, pixel-perfect user interfaces",
        "Improved UI performance by 25% through code optimization, lazy loading, and reducing DOM reflows",
      ],
    },
    {
      title: "Senior Associate HTML Developer - II",
      company: "o2h Technology",
      period: "Apr 2024 - Mar 2025",
      description: [
        "Migrated legacy HTML/CSS applications into modern React architecture with Material UI",
        "Developed reusable UI components and layout systems for scalable frontend development",
        "Built MJML-based email templates with 100% cross-client compatibility",
        "Mentored junior developers on frontend best practices and accessibility standards",
      ],
    },
    {
      title: "Associate HTML Developer II",
      company: "o2h Technology",
      period: "Apr 2023 - Mar 2024",
      description: [
        "Converted static layouts into responsive, mobile-first UI using CSS Grid and Flexbox",
        "Implemented semantic HTML and ARIA roles to improve accessibility compliance",
        "Designed and implemented custom WordPress themes optimized for performance and SEO",
        "Worked with cross-functional teams under Agile sprints using Jira",
      ],
    },
    {
      title: "HTML Trainee",
      company: "o2h Technology",
      period: "Jan 2022 - Mar 2023",
      description: [
        "Developed responsive layouts using HTML5, CSS3, and Bootstrap for client projects",
        "Learned modern development workflows including Git version control and code review processes",
        "Assisted in building MJML email templates ensuring cross-device compatibility",
      ],
    },
    {
      title: "Frontend Web Developer Intern",
      company: "Dejavu Learning",
      period: "Oct 2021 - Dec 2021",
      description: [
        "Redesigned the landing page using Bootstrap 5 and improved load time by 30%",
        "Implemented custom UI elements with jQuery for better UX",
        "Used Figma prototypes to design and implement responsive mobile workflows",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-8 md:py-24 relative overflow-hidden scroll-mt-20"
      ref={ref}
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[hsl(var(--gradient-blue)/0.05)] blur-3xl rounded-full" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <span className="section-title">Work Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-[22px] top-10 bottom-1 w-px bg-gradient-to-b from-[hsl(var(--gradient-cyan))] via-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-blue))]" />

            <div className="space-y-6 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative pl-6 sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-6px] sm:left-[16px] top-10 w-3 h-3 rounded-full bg-primary"
                    style={{
                      boxShadow: "0 0 12px hsl(var(--glow-cyan) / 0.6)",
                    }}
                  />

                  <div className="glass-card p-6 sm:p-8 hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-xl">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </p>
                      </div>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
