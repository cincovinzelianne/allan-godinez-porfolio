import { useState, useRef, useEffect } from "react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play attempt when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.5; // Set moderate volume
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented by browser:", error);
          setIsPlaying(false);
        }
      }
    };

    // Immediate play attempt
    playAudio();
    
    // Also add click listener to document to start on first interaction if blocked
    const startOnInteraction = () => {
      playAudio();
      document.removeEventListener('click', startOnInteraction);
    };
    document.addEventListener('click', startOnInteraction);

    return () => document.removeEventListener('click', startOnInteraction);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Audio Element - Add your audio file here */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        autoPlay
      >
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Player */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="glass-morphism rounded-2xl p-4 border border-primary/30 glow-blue hover:glow-cyan transition-all duration-300 group">
          <div className="flex items-center gap-3">
            {/* Music Icon with Animation */}
            <div className="relative">
              <Music
                className={`w-6 h-6 text-primary ${
                  isPlaying ? "animate-pulse" : ""
                }`}
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              )}
            </div>

            {/* Play/Pause Button */}
            <Button
              onClick={togglePlay}
              size="icon"
              variant="ghost"
              className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 border border-primary/50 glow-blue transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-foreground" />
              ) : (
                <Play className="w-4 h-4 text-foreground ml-0.5" />
              )}
            </Button>

            {/* Mute/Unmute Button */}
            <Button
              onClick={toggleMute}
              size="icon"
              variant="ghost"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 hover:from-accent/40 hover:to-primary/40 border border-accent/50 transition-all duration-300"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-foreground" />
              )}
            </Button>

            {/* Hide/Show Button */}
            <Button
              onClick={() => setIsVisible(false)}
              size="icon"
              variant="ghost"
              className="w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-xs text-muted-foreground">✕</span>
            </Button>
          </div>

          {/* Now Playing Text */}
          {isPlaying && (
            <div className="mt-2 flex items-center gap-2 overflow-hidden">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-gradient-to-t from-primary to-secondary rounded-full animate-sound-wave"
                    style={{
                      height: "12px",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-mono animate-pulse">
                Now Playing...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Show button when hidden */}
      {!isVisible && (
        <Button
          onClick={() => setIsVisible(true)}
          size="icon"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary glow-blue"
        >
          <Music className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default MusicPlayer;
