import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Send,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello@example.com",
      value: "hello@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      value: "linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      value: "github.com/yourprofile",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(var(--gradient-cyan)/0.05)] blur-3xl rounded-full" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[hsl(var(--gradient-purple)/0.05)] blur-3xl rounded-full" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-title">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new
            opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all input-glow"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all input-glow"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none input-glow"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Social links */}
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="glass-card p-8 text-center"
            >
              <Download className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">
                Download Resume
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Get a comprehensive overview of my experience and skills.
              </p>
              <Button variant="outline" size="lg" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
