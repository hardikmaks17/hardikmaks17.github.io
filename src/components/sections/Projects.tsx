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
      title: "The Github API",
      description:
        "A modern GitHub user explorer application that allows searching profiles, viewing repositories, analyzing user activity, and visualizing real-time GitHub data using public APIs.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Ajax", "GitHub API"],
      features: [
        "Search GitHub users by username",
        "View detailed user profile information",
        "Browse public repositories",
        "View repository statistics and metadata",
        "Real-time data fetching using GitHub API",
        "Responsive and mobile-friendly UI",
      ],
      github: "https://github.com/hardikmaks17/the-github-api",
      demo: "https://hardikmaks17.github.io/the-github-api/",
    },
    {
      title: "The Frontend Project",
      description:
        "A frontend project focused on mastering API integration using an open-source API. The application includes multiple functional modules such as a To-Do list, Quote viewer, and a complete e-commerce interface with product listings and cart management.",
      tech: ["HTML5", "CSS3", "TypeScript", "React", "Dummy JSON API"],
      features: [
        "To-Do list module with API integration",
        "Quote viewer module",
        "E-commerce product listing",
        "Cart functionality",
        "Modular UI components",
        "Continuous deployment via Netlify",
      ],
      github: "https://github.com/hardikmaks17/the-frontend-project",
      demo: "https://the-frontend-project.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-8 md:py-24 relative overflow-hidden scroll-mt-20"
      ref={ref}
    >
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[hsl(var(--gradient-cyan)/0.05)] blur-3xl rounded-full" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="section-title">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Projects I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2  gap-6 md:gap-8">
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
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                    target="_blank"
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
              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-muted-foreground flex items-center gap-2"
                  >
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
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/hardikmaks17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
