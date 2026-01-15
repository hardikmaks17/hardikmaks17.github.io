import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "4+ Years",
      description: "Building production-grade web applications"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized experiences with 25%+ speed improvements"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborated with cross-functional teams globally"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex requirements into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(var(--gradient-cyan)/0.05)] blur-3xl rounded-full" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-title">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a <span className="text-foreground font-medium">Frontend Developer</span> with 4+ years of experience 
                building scalable, accessible, and high-performance web applications. I specialize in 
                <span className="text-primary"> React, TypeScript</span>, and modern UI frameworks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My focus is on clean architecture, reusable components, and pixel-perfect design implementation. 
                I believe in writing code that is not only functional but also maintainable and elegant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                or mentoring aspiring developers in their journey.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 group hover:scale-[1.02] transition-transform duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
