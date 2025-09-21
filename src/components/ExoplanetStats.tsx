import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    number: 5000,
    suffix: "+",
    label: "Confirmed Exoplanets",
    description: "Planets discovered outside our solar system",
    icon: "🪐"
  },
  {
    number: 3900,
    suffix: "+",
    label: "Planetary Systems",
    description: "Star systems hosting confirmed exoplanets",
    icon: "⭐"
  },
  {
    number: 160,
    suffix: "+",
    label: "Habitable Zone Planets",
    description: "Potentially Earth-like worlds in the goldilocks zone",
    icon: "🌍"
  },
  {
    number: 1995,
    suffix: "",
    label: "First Discovery",
    description: "51 Pegasi b was the first exoplanet found around a sun-like star",
    icon: "🔭"
  }
];

const AnimatedCounter = ({ target, suffix, duration = 2000 }: { target: number, suffix: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(target * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-cosmic-blue group-hover:text-cosmic-gold transition-colors duration-300">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const ExoplanetStats = () => {
  return (
    <section className="py-32 px-6 dark-space-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-3 bg-gradient-subtle-cosmic text-cosmic-blue rounded-full text-sm font-medium mb-6 animate-glow-subtle">
            🪐 Discovery Statistics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cosmic-blue via-nebula-purple to-stellar-gold bg-clip-text text-transparent">
            Exoplanet Facts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The universe is vast and full of incredible alien worlds waiting to be discovered. 
            Each number represents years of scientific discovery and technological advancement in planetary science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-card/60 backdrop-blur-md border-border hover:border-cosmic-blue/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cosmic-blue/10 group text-center hover-lift hover-glow pulse-border"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300 animate-twinkle hover-rotate">
                  {stat.icon}
                </div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-cosmic-blue transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 bg-gradient-subtle-cosmic rounded-2xl border border-cosmic-blue/20 animate-glow-subtle">
            <p className="text-lg text-muted-foreground">
              <span className="text-cosmic-blue font-semibold">🌌 Cosmic Fact:</span> 
              {" "}Scientists discover new exoplanets almost daily, with thousands more waiting to be confirmed! 
              The James Webb Space Telescope is revolutionizing our understanding of these distant worlds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExoplanetStats;