import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Eye, Layers, Shield } from "lucide-react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: Eye,
      title: "Great UI is Invisible",
      description:
        "The best interfaces don't require user manuals. They guide intuitively through thoughtful design patterns and clear visual hierarchy.",
    },
    {
      icon: Zap,
      title: "Performance First",
      description:
        "Speed is a feature. Every millisecond counts. I optimize for core web vitals and ensure lightning-fast user experiences.",
    },
    {
      icon: Shield,
      title: "Accessibility Always",
      description:
        "Building for everyone, not just some. WCAG compliance, semantic HTML, and inclusive design are non-negotiable standards.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description:
        "Code that grows with your product. Clean architecture, reusable components, and maintainable patterns for long-term success.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-8 md:py-24 relative overflow-hidden scroll-mt-20"
      ref={ref}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(var(--gradient-purple)/0.02)] to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="section-title">Design Philosophy</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            How I <span className="gradient-text">Think</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I believe design follows function — performance, accessibility, and
            usability come first.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="glass-card p-6 h-full hover:scale-[1.02] transition-all duration-300">
                {/* Icon with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <principle.icon className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-display font-semibold text-lg mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <blockquote className="glass-card p-8 sm:p-12 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-display italic text-foreground mb-4">
              "Design is not just what it looks like and feels like. Design is
              how it works."
            </p>
            <cite className="text-muted-foreground not-italic">
              — Steve Jobs
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
