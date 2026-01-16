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
      period: "2021 - Present",
      description: [
        "Building scalable web applications with React & TypeScript",
        "Creating reusable UI component systems for enterprise products",
        "Improving UI performance by 25% through code optimization",
        "Delivering pixel-perfect interfaces matching design specifications",
        "Collaborating with cross-functional teams in agile environment",
      ],
    },
    {
      title: "Senior Associate HTML Developer",
      company: "Previous Company",
      period: "2019 - 2021",
      description: [
        "Migrated legacy systems to modern React architecture",
        "Built responsive MJML email template systems",
        "Mentored junior developers on best practices",
        "Implemented accessibility standards (WCAG 2.1)",
        "Reduced page load times by 40% through optimization",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "Startup Inc.",
      period: "2018 - 2019",
      description: [
        "Developed responsive landing pages and web applications",
        "Worked with JavaScript, HTML5, CSS3, and jQuery",
        "Participated in code reviews and team meetings",
        "Learned modern frameworks and development workflows",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[hsl(var(--gradient-blue)/0.05)] blur-3xl rounded-full" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-title">Work Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--gradient-cyan))] via-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-blue))]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[12px] sm:left-[16px] top-2 w-3 h-3 rounded-full bg-primary"
                  style={{ boxShadow: "0 0 12px hsl(var(--glow-cyan) / 0.6)" }}
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
    </section>
  );
};

export default Experience;
