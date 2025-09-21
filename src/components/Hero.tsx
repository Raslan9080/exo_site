import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage from "@/assets/exoplanet-hero.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/95" />
      </div>
      
      {/* Subtle Stars */}
      <div className="absolute inset-0 subtle-stars"></div>
      
      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cosmic-glow rounded-full animate-twinkle opacity-40"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Floating Objects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-space-dust/30 to-dark-nebula/20 animate-drift opacity-20"
            style={{
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-subtle-cosmic text-cosmic-blue rounded-full text-sm font-medium mb-4 animate-fade-in animate-glow-subtle">
            🌌 Exploring Distant Worlds
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cosmic-blue via-nebula-purple to-stellar-gold bg-clip-text text-transparent animate-gradient-x">
          EXOPLANETS
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 leading-relaxed max-w-4xl mx-auto font-light">
          Discover worlds beyond our solar system
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          From rocky super-Earths to gas giants, explore the incredible diversity of planets orbiting distant stars. 
          Each discovery reveals new insights into planetary formation and the potential for life in the universe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cosmic-blue to-nebula-purple hover:from-nebula-purple hover:to-cosmic-blue text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg animate-glow-subtle hover-lift hover-glow pulse-border"
          >
            <span className="animate-bounce-gentle">🪐</span> Explore Exoplanets
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-stellar-gold text-stellar-gold hover:bg-stellar-gold hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover-lift hover-glow"
            onClick={() => window.open("https://youtu.be/0ZOhJe_7GrE?si=u_PYV_RIM-3ZW9NZ", "_blank")}
          >
            <span className="animate-pulse-active">📺</span> Watch Videos
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cosmic-glow rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cosmic-glow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;