import { useEffect, useState } from "react";
import { Code, GraduationCap, Zap } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Skills",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Programming Languages", level: 90 },
        { name: "Web Development", level: 90 },
        { name: "Software Tools", level: 95 },
        { name: "IT Support & Troubleshooting", level: 80 },
      ],
    },
    {
      title: "Teaching & Communication",
      icon: <GraduationCap className="w-8 h-8" />,
      skills: [
        { name: "Lesson Planning & Module Creation", level: 95 },
        { name: "Classroom Management", level: 70 },
        { name: "Communication", level: 89 },
      ],
    },
    {
      title: "Personal & Professional",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Leadership & Teamwork", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark to-space-darker" />
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass-morphism p-6 rounded-lg glow-cyan transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6 text-primary">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 glow-cyan"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
