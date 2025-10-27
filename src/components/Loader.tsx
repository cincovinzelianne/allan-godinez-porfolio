import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-space-darker via-space-dark to-space-darker flex items-center justify-center overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Rocket Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Rocket */}
        <div className="relative animate-rocket-launch">
          <div className="relative">
            {/* Rocket Body */}
            <div className="w-16 h-32 bg-gradient-to-b from-primary to-secondary rounded-t-full relative glow-blue">
              {/* Window */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full glow-cyan" />
              
              {/* Fins */}
              <div className="absolute -left-4 bottom-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-secondary" />
              <div className="absolute -right-4 bottom-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-secondary" />
            </div>

            {/* Rocket Base */}
            <div className="w-16 h-8 bg-gradient-to-b from-secondary to-accent" />

            {/* Fire/Exhaust */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-12">
              <div className="w-8 h-16 mx-auto bg-gradient-to-b from-orange-500 via-red-500 to-transparent animate-pulse glow-gold opacity-80" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-yellow-300 via-orange-400 to-transparent animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>

            {/* Smoke particles */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-gray-500/50 rounded-full animate-smoke"
                  style={{
                    left: `${(i - 1) * 10}px`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4 animate-pulse">
            INITIALIZING...
          </h2>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 glow-blue"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress Percentage */}
          <p className="text-primary font-mono mt-2 text-lg">{progress}%</p>
        </div>
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 border-2 border-primary/20 rounded-full animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] border-2 border-secondary/10 rounded-full animate-spin-slower" />
      </div>
    </div>
  );
};

export default Loader;
