import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-float-slow"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/95" />
      </div>
      
      {/* Animated Particle Field */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cosmic-glow rounded-full animate-twinkle opacity-60"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Cosmic Dust */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-space-dust/40 to-transparent animate-dust-drift opacity-30"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Cosmic Objects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cosmic-blue/40 to-nebula-purple/30 animate-drift-slow opacity-30"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${25 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-cosmic-glow to-transparent animate-shooting-star opacity-70"
            style={{
              width: '100px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      {/* Pulsing Energy Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-radial from-stellar-gold/20 via-cosmic-blue/10 to-transparent animate-pulse-glow opacity-40"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Planet-like Objects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-nebula-purple/30 to-cosmic-blue/20 animate-orbit-slow opacity-25"
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${30 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Light Rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-cosmic-glow/20 to-transparent animate-light-ray opacity-40"
            style={{
              width: '200px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: '8s',
            }}
          />
        ))}
      </div>

      {/* Animated Cosmic Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-cosmic-blue/15 to-transparent animate-wave-drift opacity-30"
            style={{
              width: `${300 + Math.random() * 200}px`,
              height: '3px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-stellar-gold rounded-full animate-sparkle opacity-70"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 1}s`,
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
        
        <div className="flex justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cosmic-blue to-nebula-purple hover:from-nebula-purple hover:to-cosmic-blue text-white `px-16 py-6 text-2xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl animate-glow-subtle hover-lift hover-glow pulse-border border-2 border-cosmic-gold/30"
          >
            <span className="animate-bounce-gentle text-3xl mr-3">🤖</span> Try AI Model
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