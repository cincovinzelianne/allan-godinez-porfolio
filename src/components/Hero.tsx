import { useEffect, useState } from "react";
import profileImage from "@/assets/profile-main.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker to-space-dark">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className={`container relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 animate-pulse-glow" />
            <img
              src={profileImage}
              alt="Allan C. Godinez"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary glow-cyan"
            />
          </div>

          {/* Name with futuristic styling */}
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow">
            Allan C. Godinez
          </h1>

          {/* Description */}
          <div className="glass-morphism p-6 rounded-lg max-w-2xl glow-blue">
            <p className="text-lg md:text-xl text-foreground/90">
              Hi, I am <span className="text-primary font-semibold">Allan C. Godinez</span>. 
              A public school teacher who specializes in <span className="text-secondary">Computer Programming</span> and 
              holds a major in <span className="text-accent">Mathematics</span>.
            </p>
          </div>

          {/* Motto */}
          <blockquote className="text-lg md:text-xl italic text-muted-foreground border-l-4 border-primary pl-4 max-w-2xl">
            "Be humble, stay kind, and never stop improving." — Allan C. Godinez
          </blockquote>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-8">
            <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
