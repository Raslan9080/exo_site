import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const exoplanets = [
	{
		name: "Kepler-452b",
		type: "Super-Earth",
		distance: "1,400 light-years",
		description:
			"Known as Earth's 'cousin', this planet orbits in the habitable zone of a sun-like star.",
		features: ["Rocky Surface", "Habitable Zone", "Earth-like Orbit"],
	},
	{
		name: "HD 209458 b",
		type: "Hot Jupiter",
		distance: "159 light-years",
		description:
			"The first exoplanet observed transiting its star, providing crucial atmospheric data.",
		features: ["Gas Giant", "Extreme Heat", "Atmospheric Studies"],
	},
	{
		name: "Proxima Centauri b",
		type: "Terrestrial",
		distance: "4.2 light-years",
		description:
			"The closest known exoplanet to Earth, orbiting our nearest stellar neighbor.",
		features: ["Closest to Earth", "Red Dwarf Star", "Potentially Habitable"],
	},
	{
		name: "TRAPPIST-1e",
		type: "Earth-sized",
		distance: "40 light-years",
		description:
			"One of seven Earth-sized planets in the TRAPPIST-1 system, likely with liquid water.",
		features: ["Earth-sized", "Water Possible", "7-Planet System"],
	},
];

const FeaturedExoplanets = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		// Ensure video loads on component mount/reload
		const timer = setTimeout(() => {
			setVideoLoaded(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="py-24 px-6 dark-space-pattern">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-20">
					<div className="inline-block px-6 py-3 bg-gradient-subtle-cosmic text-cosmic-blue rounded-full text-sm font-medium mb-6 animate-glow-subtle">
						🪐 Featured Worlds
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cosmic-blue via-nebula-purple to-stellar-gold bg-clip-text text-transparent">
						Featured Exoplanets
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Meet some of the most fascinating alien worlds we've discovered beyond our solar system
					</p>
				</div>

				<div className="mb-16 flex justify-center">
					<div className="w-full max-w-4xl mx-auto">
						<div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-cosmic-blue/20 bg-card">
							<iframe
								className="absolute inset-0 w-full h-full"
								src="https://www.youtube.com/embed/bv2BV82J0Jk?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1&loop=1&playlist=bv2BV82J0Jk"
								title="Transit Method For Detecting Planets"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>

				{/* Eyes on Exoplanets Card */}
				<div className="flex justify-center mb-16">
					<Card
						onClick={() => window.open("https://eyes.nasa.gov/apps/exo/#/", "_blank")}
						className="hover:border-cosmic-gold/50 transition-all duration-300 hover:shadow-lg group w-full max-w-2xl cursor-pointer"
					>
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-bold text-foreground group-hover:text-cosmic-gold transition-colors duration-300 mb-4">
								Eyes on Exoplanets
							</h3>
							<Badge className="bg-cosmic-gold/20 text-cosmic-gold border-cosmic-gold/30 mb-4">
								NASA App
							</Badge>
							<p className="text-muted-foreground leading-relaxed">
								Explore exoplanets in 3D with NASA's interactive Eyes on Exoplanets web app. 
								Discover distant worlds, visualize their orbits, and learn more about planets beyond our solar system.
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{exoplanets.map((planet, index) => {
						const urls = {
							"Kepler-452b": "https://science.nasa.gov/exoplanet-catalog/kepler-452-b/",
							"HD 209458 b": "https://science.nasa.gov/exoplanet-catalog/hd-209458-b/",
							"Proxima Centauri b": "https://science.nasa.gov/exoplanet-catalog/proxima-centauri-b/",
							"TRAPPIST-1e": "https://science.nasa.gov/exoplanet-catalog/trappist-1-e/"
						};

						return (
							<Card
								key={index}
								onClick={() => window.open(urls[planet.name as keyof typeof urls], "_blank")}
								className="bg-card/40 border-border hover:border-cosmic-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-blue/10 group cursor-pointer hover-lift hover-glow pulse-border"
							>
								<CardContent className="p-6">
									<div className="mb-4">
										<div className="flex items-center gap-3 mb-3">
											<span className="text-2xl animate-twinkle hover-rotate">🪐</span>
											<h3 className="text-xl font-bold text-foreground group-hover:text-cosmic-blue transition-colors duration-300">
												{planet.name}
											</h3>
										</div>
										<div className="flex items-center gap-2 mb-3">
											<Badge className="bg-cosmic-blue/20 text-cosmic-blue border-cosmic-blue/30 hover-scale">
												{planet.type}
											</Badge>
											<span className="text-sm text-muted-foreground">
												{planet.distance}
											</span>
										</div>
									</div>
									
									<p className="text-muted-foreground leading-relaxed mb-4">
										{planet.description}
									</p>
									
									<div className="flex flex-wrap gap-2">
										{planet.features.map((feature, featureIndex) => (
											<Badge
												key={featureIndex}
												variant="outline"
												className="border-nebula-purple/30 text-nebula-purple hover:bg-nebula-purple/10 text-xs hover-scale"
											>
												{feature}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturedExoplanets;
