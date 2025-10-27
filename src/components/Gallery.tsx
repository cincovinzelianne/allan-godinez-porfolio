import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import profileBeach from "@/assets/profile-beach.png";
import profileMain from "@/assets/profile-main.png";
import profileCasual from "@/assets/profile-casual.png";
import profileSuit1 from "@/assets/profile-suit1.png";
import profileSuit2 from "@/assets/profile-suit2.png";
import profileCasual2 from "@/assets/profile-casual2.png";
import profileParis from "@/assets/profile-paris.png";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const media = [
    { type: "image", src: profileMain, alt: "Allan C. Godinez - Professional Portrait" },
    { type: "image", src: profileSuit1, alt: "Allan C. Godinez - Gentleman's Style" },
    { type: "image", src: profileSuit2, alt: "Allan C. Godinez - Executive Style" },
    { type: "video", src: video1, alt: "Allan C. Godinez - Video 1" },
    { type: "image", src: profileCasual2, alt: "Allan C. Godinez - Urban Style" },
    { type: "image", src: profileParis, alt: "Allan C. Godinez - Paris" },
    { type: "video", src: video2, alt: "Allan C. Godinez - Video 2" },
    { type: "image", src: profileBeach, alt: "Allan C. Godinez - Beach" },
    { type: "image", src: profileCasual, alt: "Allan C. Godinez - Casual" },
    { type: "video", src: video3, alt: "Allan C. Godinez - Video 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    const video = document.querySelector(`#current-video`) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="gallery" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker to-space-dark" />
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
          Gallery
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="relative glass-morphism p-4 rounded-lg glow-blue group">
            {/* Main media display */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-space-darker">
              {media[currentIndex].type === "image" ? (
                <img
                  src={media[currentIndex].src}
                  alt={media[currentIndex].alt}
                  className="w-full h-full object-contain transition-all duration-700 hover:scale-105 animate-fade-in"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    id="current-video"
                    src={media[currentIndex].src}
                    className="w-full h-full object-contain"
                    controls={false}
                    loop
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  <button
                    onClick={togglePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="glass-morphism p-6 rounded-full glow-cyan">
                      {isPlaying ? (
                        <Pause className="w-12 h-12 text-primary" />
                      ) : (
                        <Play className="w-12 h-12 text-primary" />
                      )}
                    </div>
                  </button>
                </div>
              )}
              
              {/* Media type indicator */}
              <div className="absolute top-4 right-4 glass-morphism px-4 py-2 rounded-full">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {media[currentIndex].type}
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 glass-morphism p-3 rounded-full glow-cyan hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 glass-morphism p-3 rounded-full glow-cyan hover:scale-110 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
              {media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-2 ring-primary glow-cyan scale-110 opacity-100'
                      : 'opacity-50 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Indicator with progress */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="glass-morphism px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  {currentIndex + 1} / {media.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
