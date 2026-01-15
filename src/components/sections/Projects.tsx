import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "GitHub Analytics Dashboard",
      description: "A comprehensive GitHub user explorer with repository analytics, contribution graphs, and real-time data visualization.",
      tech: ["React", "TypeScript", "REST API", "Tailwind CSS", "Chart.js"],
      features: ["User profile search", "Repository analytics", "Contribution tracking", "Responsive design"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with cart management, payment integration, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      features: ["Product catalog", "Cart & checkout", "Payment processing", "Order management"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop, and team collaboration features.",
      tech: ["React", "TypeScript", "Firebase", "Framer Motion", "DnD Kit"],
      features: ["Kanban boards", "Real-time sync", "Team collaboration", "File attachments"],
      github: "#",
      demo: "#"
    },
    {
      title: "Design System Library",
      description: "Comprehensive UI component library with documentation, theming, and accessibility features built for scalability.",
      tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Radix UI"],
      features: ["40+ components", "Dark mode", "Accessibility", "Full documentation"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[hsl(var(--gradient-cyan)/0.05)] blur-3xl rounded-full" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-title">Featured Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
              Projects I've{" "}
              <span className="gradient-text">Built</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group glass-card p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
