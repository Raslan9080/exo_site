import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

const videos = [
	{
		title: "What Is an Exoplanet?",
		description:
			"Learn about the fascinating techniques astronomers use to discover planets beyond our solar system, including the transit and radial velocity methods.",
		embedId: "0ZOhJe_7GrE",
		duration: "10:30",
		channel: "NASA",
		views: "2.1M",
		icon: "🪐"
	},
	{
		title: "How are Exoplanets Discovered?",
		description:
			"A quick guide to how scientists discover exoplanets using methods like the transit method, radial velocity, and direct imaging.",
		embedId: "GTDBPelcITo",
		duration: "15:45",
		channel: "SciShow",
		views: "850K",
		icon: "🔬"
	},
	{
		title: "Exoplanets: Crash Course Astronomy",
		description:
			"Today Phil explains that YES, there are other planets out there and astronomers have a lot of methods for detecting them. Nearly 2000 have been found so far.",
		embedId: "7ATtD8x7vV0",
		duration: "12:20",
		channel: "Crash Course",
		views: "1.5M",
		icon: "🎓"
	},
	{
		title: "Exoplanets 101 | National Geographic",
		description:
			"Exoplanets challenge the notion that we are alone in the universe. Learn what types of exoplanets exist, the methods scientists employ to find them.",
		embedId: "EUU0-ZpFoK4",
		duration: "8:15",
		channel: "National Geographic",
		views: "3.2M",
		icon: "🌍"
	},
];

const VideoCard = ({ video, index }: { video: typeof videos[0], index: number }) => {
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
		<Card
			ref={cardRef}
			className={`bg-card/60 backdrop-blur-md border-border hover:border-cosmic-blue/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cosmic-blue/20 group overflow-hidden hover-lift hover-glow pulse-border ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
			}`}
			style={{ transitionDelay: `${index * 150}ms` }}
		>
			<div className="aspect-video bg-muted relative overflow-hidden">
				<iframe
					className="w-full h-full"
					src={`https://www.youtube.com/embed/${video.embedId}?modestbranding=1&rel=0&controls=1`}
					title={video.title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>

			<CardHeader className="pb-3">
				<div className="flex items-center gap-3 mb-2">
					<span className="text-2xl animate-twinkle hover-rotate">{video.icon}</span>
					<Badge variant="outline" className="border-cosmic-purple/30 text-cosmic-purple hover-scale">
						{video.views} views
					</Badge>
				</div>
				<CardTitle className="text-xl group-hover:text-cosmic-blue transition-colors duration-300 line-clamp-2">
					{video.title}
				</CardTitle>
			</CardHeader>

			<CardContent className="pt-0">
				<p className="text-muted-foreground leading-relaxed line-clamp-3">
					{video.description}
				</p>
			</CardContent>
		</Card>
	);
};

const ExoplanetVideos = () => {
	return (
		<section className="py-32 px-6 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						className="absolute bg-cosmic-glow rounded-full animate-pulse opacity-20"
						style={{
							width: `${Math.random() * 4 + 1}px`,
							height: `${Math.random() * 4 + 1}px`,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${3 + Math.random() * 3}s`,
						}}
					/>
				))}
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-20">
					<div className="inline-block px-6 py-3 bg-cosmic-blue/10 text-cosmic-blue rounded-full text-sm font-medium mb-6">
						📺 Educational Content
					</div>
					<h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-gold bg-clip-text text-transparent">
						Educational Videos
					</h2>
					<p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
						Deepen your understanding of exoplanets with these carefully curated educational videos from leading space agencies and science channels
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{videos.map((video, index) => (
						<VideoCard key={index} video={video} index={index} />
					))}
				</div>

			</div>
		</section>
	);
};

export default ExoplanetVideos;