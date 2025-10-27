import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-b from-space-darker via-space-dark to-space-darker">
          <Navigation />
          <MusicPlayer />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Gallery />
            <Chatbot />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
