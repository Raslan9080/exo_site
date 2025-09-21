import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    setIsVisible(true);
  }, [location.pathname]);

  const spaceFacts = [
    "There are more stars in the universe than grains of sand on Earth",
    "A day on Venus is longer than its year",
    "Jupiter has a storm that's been raging for over 300 years",
    "The Sun contains 99.86% of the Solar System's mass",
    "Neptune takes 165 Earth years to orbit the Sun once"
  ];

  const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cosmic-glow rounded-full animate-pulse opacity-30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating planets */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20 animate-float opacity-40"
            style={{
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex min-h-screen items-center justify-center px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 with animation */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-gold bg-clip-text text-transparent animate-gradient-x">
              404
            </h1>
            <div className="text-6xl mb-6 animate-bounce">🚀</div>
          </div>

          {/* Error message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Lost in Space
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Looks like you've ventured into uncharted territory! This page doesn't exist in our cosmic database.
          </p>

          {/* Space fact */}
          <div className="mb-12 p-6 bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 rounded-2xl border border-cosmic-blue/20">
            <p className="text-lg text-muted-foreground">
              <span className="text-cosmic-blue font-semibold">🌌 Space Fact:</span>{" "}
              {randomFact}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = "/"}
              className="bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-blue text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              🏠 Return to Home
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-2 border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              ⬅️ Go Back
            </Button>
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Attempted to access: <code className="bg-muted px-2 py-1 rounded text-cosmic-blue">{location.pathname}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
