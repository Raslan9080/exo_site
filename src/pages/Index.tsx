import Hero from "@/components/Hero";
import ExoplanetStats from "@/components/ExoplanetStats";
import FeaturedExoplanets from "@/components/FeaturedExoplanets";
import ExoplanetVideos from "@/components/ExoplanetVideos";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div id="hero" className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
      </div>

      {/* Stats Section with enhanced spacing */}
      <div id="stats" className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <ExoplanetStats />
      </div>

      {/* Featured Exoplanets with improved visual separation */}
      <div id="exoplanets" className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <FeaturedExoplanets />
      </div>

      {/* Videos Section */}
      <div id="videos" className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <ExoplanetVideos />
      </div>


      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cosmic-blue to-cosmic-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
