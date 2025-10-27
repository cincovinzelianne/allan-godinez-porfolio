import { ExternalLink, Rocket, Users, FolderKanban } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    { icon: Rocket, label: "Years Experience", value: "15+", color: "text-neon-cyan" },
    { icon: Users, label: "Happy Clients", value: "100+", color: "text-neon-purple" },
    { icon: FolderKanban, label: "Projects Completed", value: "50+", color: "text-neon-pink" },
  ];

  const projects: Project[] = [
    {
      title: "E-Learning Platform",
      description: "A comprehensive online learning ecosystem featuring interactive modules, real-time assessments, student progress tracking, and AI-powered personalized learning paths for modern education.",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AI/ML"],
    },
    {
      title: "Personal Portfolio Website",
      description: "An intergalactic-themed personal portfolio showcasing professional achievements with futuristic UI/UX, advanced animations, interactive galleries, and seamless responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with secure payment integration, inventory management, real-time order tracking, customer analytics, and multi-vendor marketplace capabilities.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
    },
    {
      title: "Task Manager Pro",
      description: "A web-based productivity platform with advanced task scheduling, team collaboration features, automated workflows, time tracking, and intelligent project analytics for enhanced team efficiency.",
      technologies: ["Vue.js", "Firebase", "GraphQL", "Docker", "CI/CD"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark to-space-darker">
        {/* Animated stars */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-glow animate-fade-in">
          Featured Projects
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-morphism p-6 rounded-lg glow-cyan hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`${stat.color} p-4 rounded-full bg-background/20 animate-float`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-morphism p-8 rounded-lg glow-pink transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary blur-2xl opacity-0 transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-40 scale-110' : ''
                }`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {project.title}
                    </h3>
                    <ExternalLink className={`w-6 h-6 text-accent transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-125 rotate-12 text-primary' : ''
                    }`} />
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-full text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110 hover:border-primary/50 ${
                          hoveredIndex === index ? 'animate-pulse' : ''
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
