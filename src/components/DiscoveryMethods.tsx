import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

const methods = [
  {
    name: "Transit Method",
    percentage: 75,
    description: "Detects planets by measuring the slight dimming of starlight when a planet passes in front of its host star.",
    icon: "🌟",
    discoveries: "3,900+ planets",
    url: "https://science.nasa.gov/mission/roman-space-telescope/transit-method/",
    color: "from-cosmic-blue to-cosmic-purple",
    details: "Most successful method, used by Kepler and TESS missions"
  },
  {
    name: "Radial Velocity",
    percentage: 15, 
    description: "Measures the wobble of a star caused by the gravitational pull of an orbiting planet.",
    icon: "📊",
    discoveries: "800+ planets",
    url: "https://science.nasa.gov/resource/radial-velocity/",
    color: "from-cosmic-purple to-cosmic-gold",
    details: "First method to discover exoplanets around sun-like stars"
  },
  {
    name: "Direct Imaging",
    percentage: 5,
    description: "Directly photographs exoplanets by blocking out the bright light from their host stars.",
    icon: "📸",
    discoveries: "50+ planets",
    url: "https://science.nasa.gov/mission/roman-space-telescope/direct-imaging/",
    color: "from-cosmic-gold to-cosmic-blue",
    details: "Challenging but provides direct visual confirmation"
  },
  {
    name: "Gravitational Microlensing",
    percentage: 3,
    description: "Uses the gravitational field of a star to magnify light from a more distant star, revealing planets.",
    icon: "🔍",
    discoveries: "150+ planets",
    url: "https://en.wikipedia.org/wiki/Gravitational_microlensing",
    color: "from-cosmic-blue to-cosmic-purple",
    details: "Can detect planets at great distances from Earth"
  },
  {
    name: "Astrometry",
    percentage: 2,
    description: "Measures the precise movement of stars across the sky to detect the gravitational influence of planets.",
    icon: "📐",
    discoveries: "10+ planets",
    url: "https://science.nasa.gov/resource/astrometry/",
    color: "from-cosmic-purple to-cosmic-gold",
    details: "Most precise method for measuring stellar positions"
  }
];

const AnimatedProgressBar = ({ percentage, color, delay = 0 }: { percentage: number, color: string, delay?: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-2000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const MethodCard = ({ method, index }: { method: typeof methods[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={method.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card 
        ref={cardRef}
        className={`bg-card/60 backdrop-blur-md border-border hover:border-cosmic-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cosmic-gold/20 group cursor-pointer h-full hover:-translate-y-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <CardHeader className="text-center pb-4">
          <div className="text-5xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300">
            {method.icon}
          </div>
          <CardTitle className="text-xl group-hover:text-cosmic-gold transition-colors duration-300 mb-3">
            {method.name}
          </CardTitle>
          
          {/* Animated progress bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-cosmic-blue">
                {method.percentage}%
              </span>
              <Badge variant="outline" className="border-cosmic-purple/30 text-cosmic-purple">
                {method.discoveries}
              </Badge>
            </div>
            <AnimatedProgressBar 
              percentage={method.percentage} 
              color={method.color}
              delay={index * 200}
            />
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-muted-foreground leading-relaxed text-center mb-4">
            {method.description}
          </p>
          <div className="text-center">
            <Badge variant="secondary" className="bg-cosmic-blue/10 text-cosmic-blue border-cosmic-blue/20">
              {method.details}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const DiscoveryMethods = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cosmic-glow rounded-full animate-pulse opacity-10"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-3 bg-cosmic-gold/10 text-cosmic-gold rounded-full text-sm font-medium mb-6">
            🔬 Discovery Methods
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cosmic-gold via-cosmic-blue to-cosmic-purple bg-clip-text text-transparent">
            How We Find Exoplanets
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Astronomers use ingenious methods to detect worlds that are trillions of miles away. 
            Each technique reveals different types of planets and provides unique insights into planetary systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methods.map((method, index) => (
            <MethodCard key={index} method={method} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiscoveryMethods;