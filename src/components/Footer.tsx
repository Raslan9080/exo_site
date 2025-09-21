import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "NASA Exoplanet Archive", url: "https://exoplanetarchive.ipac.caltech.edu/" },
    { label: "Kepler Mission", url: "https://www.nasa.gov/mission_pages/kepler/main/index.html" },
    { label: "TESS Mission", url: "https://tess.mit.edu/" },
    { label: "James Webb Space Telescope", url: "https://www.jwst.nasa.gov/" },
  ];

  const resources = [
    { label: "Exoplanet Catalog", url: "https://science.nasa.gov/exoplanet-catalog/" },
    { label: "Eyes on Exoplanets", url: "https://eyes.nasa.gov/apps/exo/#/" },
    { label: "Planet Hunters", url: "https://www.planethunters.org/" },
    { label: "SETI Institute", url: "https://www.seti.org/" },
  ];

  const socialLinks = [
    { label: "NASA", url: "https://www.nasa.gov/", icon: "🚀" },
    { label: "ESA", url: "https://www.esa.int/", icon: "🌍" },
    { label: "Space.com", url: "https://www.space.com/", icon: "📡" },
    { label: "Astronomy", url: "https://astronomy.com/", icon: "🔭" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl">🌌</div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cosmic-blue to-cosmic-purple bg-clip-text text-transparent">
                  Exoplanet Voyage
                </h3>
                <p className="text-sm text-muted-foreground">
                  Exploring worlds beyond our solar system
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Discover the fascinating world of exoplanets through interactive content, 
              educational videos, and the latest discoveries from space missions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(social.url, "_blank")}
                  className="border-cosmic-blue/30 text-cosmic-blue hover:bg-cosmic-blue hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cosmic-blue transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cosmic-purple transition-colors duration-300 text-sm"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest exoplanet discoveries and space science news delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => window.open("https://science.nasa.gov/news/", "_blank")}
                className="w-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-blue text-white transition-all duration-300"
              >
                📧 NASA Science News
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://www.nasa.gov/news/", "_blank")}
                className="w-full border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-white transition-all duration-300"
              >
                🗞️ NASA Updates
              </Button>
            </div>
          </div>
        </div>

        {/* Fun facts section */}
        <Card className="mb-12 bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 border-cosmic-blue/20">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-cosmic-blue mb-4">
                🌟 Did You Know?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scientists estimate there could be <span className="text-cosmic-gold font-semibold">40 billion Earth-sized planets</span> 
                {" "}orbiting in the habitable zones of sun-like stars in our galaxy alone! 
                The search for life beyond Earth continues with each new exoplanet discovery.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Exoplanet Voyage. Built with React, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Data sources: NASA Exoplanet Archive, Kepler Mission, TESS Mission
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Made with ❤️ for space exploration</span>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <span className="text-cosmic-blue font-semibold">Vite</span>
                <span>+</span>
                <span className="text-cosmic-purple font-semibold">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
