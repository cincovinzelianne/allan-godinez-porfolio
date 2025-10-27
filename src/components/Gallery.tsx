import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profileBeach from "@/assets/profile-beach.png";
import profileMain from "@/assets/profile-main.png";
import profileCasual from "@/assets/profile-casual.png";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: profileMain, alt: "Allan C. Godinez - Professional" },
    { src: profileBeach, alt: "Allan C. Godinez - Beach" },
    { src: profileCasual, alt: "Allan C. Godinez - Casual" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker to-space-dark" />
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
          Gallery
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-morphism p-4 rounded-lg glow-blue">
            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
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
            <div className="flex justify-center gap-4 mt-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden transition-all ${
                    index === currentIndex
                      ? 'ring-2 ring-primary glow-cyan scale-110'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Indicator */}
            <div className="text-center mt-4 text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
