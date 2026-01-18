import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Core Stack",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
      ],
    },
    {
      title: "UI Systems",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 95 },
        { name: "Shadcn/UI", level: 70 },
        { name: "Ant Design", level: 70 },
      ],
    },
    {
      title: "Platforms & Tools",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Figma", level: 85 },
        { name: "Vercel / Netlify", level: 75 },
        { name: "Jira", level: 75 },
      ],
    },
    {
      title: "Additional",
      skills: [
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 65 },
        { name: "REST APIs", level: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-8 md:py-24 relative overflow-hidden scroll-mt-20"
      ref={ref}
    >
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[hsl(var(--gradient-purple)/0.05)] blur-3xl rounded-full" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="section-title">Skills & Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2  gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--gradient-cyan))] to-[hsl(var(--gradient-blue))]"
                        style={{
                          boxShadow: "0 0 10px hsl(var(--glow-cyan) / 0.5)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
