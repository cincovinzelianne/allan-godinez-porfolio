import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "E-Learning Website",
      description: "A comprehensive online learning platform designed to facilitate remote education with interactive modules, quizzes, and student tracking features.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "LLCC School Website",
      description: "Official school website for La Castellana Community College featuring school information, announcements, and student resources.",
      technologies: ["Web Development", "Responsive Design", "Content Management"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark to-space-darker" />
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-glow">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-morphism p-8 rounded-lg glow-pink transition-all duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-accent to-secondary blur-xl opacity-0 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-30' : ''
                }`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <ExternalLink className={`w-6 h-6 text-secondary transition-transform duration-300 ${
                      hoveredIndex === index ? 'scale-125 rotate-12' : ''
                    }`} />
                  </div>

                  <p className="text-foreground/80 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-full text-primary"
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
