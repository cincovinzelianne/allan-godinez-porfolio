import { GraduationCap, School, Headphones, Code, Briefcase } from "lucide-react";
import { useState } from "react";

interface Experience {
  icon: typeof GraduationCap;
  title: string;
  organization: string;
  description: string;
  period: string;
  color: string;
}

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      icon: GraduationCap,
      title: "College Instructor",
      organization: "Lapu-Lapu City College",
      description: "Empowering future tech professionals through innovative teaching methods in computer programming, database management, and software development. Mentoring students in capstone projects and fostering critical thinking skills.",
      period: "2015 - Present",
      color: "neon-cyan",
    },
    {
      icon: School,
      title: "High School Teacher",
      organization: "Babag National High School",
      description: "Inspiring young minds in mathematics and computer science fundamentals. Designed engaging curriculum for programming basics, algorithmic thinking, and computational problem-solving skills.",
      period: "2010 - 2015",
      color: "neon-blue",
    },
    {
      icon: Headphones,
      title: "Call Center Agent",
      organization: "Tech Support Solutions",
      description: "Delivered exceptional customer service in technical support roles. Developed strong communication skills, problem-solving abilities, and patience while handling diverse client concerns and technical issues.",
      period: "2008 - 2010",
      color: "neon-purple",
    },
    {
      icon: Code,
      title: "Web Developer",
      organization: "Freelance & Contract Projects",
      description: "Crafted custom web solutions for diverse clients including educational institutions, small businesses, and startups. Specialized in responsive design, full-stack development, and modern web technologies.",
      period: "2009 - Present",
      color: "neon-pink",
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker to-space-dark">
        {/* Orbiting particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent text-glow animate-fade-in">
          Professional Journey
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 text-lg">
          <span className="text-primary font-semibold">15+ years</span> of experience shaping the future through education and technology
        </p>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] glass-morphism p-6 rounded-lg glow-blue hover:scale-105 transition-all duration-500">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r from-${exp.color} to-primary blur-xl opacity-0 transition-opacity duration-500 ${
                        hoveredIndex === index ? 'opacity-30' : ''
                      }`} />
                      
                      <div className="relative">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-full bg-${exp.color}/20 border border-${exp.color}/40 text-${exp.color}`}>
                            <exp.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-secondary font-semibold mb-2">
                              {exp.organization}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Briefcase className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-foreground/80 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-space-darker glow-cyan animate-pulse-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
