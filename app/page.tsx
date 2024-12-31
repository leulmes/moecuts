'use client'
import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import ServicesCard from "./components/ui/ServicesCard";
import { InstagramEmbed } from "react-social-media-embed";

export default function Home() {
	return (
		<div className="bg-[#151312]">
			<Navbar />
			<div className="relative flex min-h-screen flex-col">
				<div
					id="first-section"
					className="flex items-center flex-col justify-center gap-14"
				>
					<h1 className="text-4xl pt-7 text-white">Moe</h1>
					<Image
						src={"/moe-cuts.png"}
						alt={"moe-cuts"}
						width={200}
						height={200}
					></Image>
					<div className="flex flex-col items-center gap-3 text-white">
						<p>
							Hey 👋🏼 I'm Mohsin Awan, a Pakistani-American🇵🇰 cybersecurity
							student and part-time barber. I can cut diverse hair types and
							have 6+ years of experience.
						</p>
						<button>Book Now</button>
					</div>
				</div>
				<div
					id="second
      -section"
					className="flex items-center flex-col justify-center gap-4"
				>
					<h1 className="text-4xl pt-7 text-white">Services</h1>
					<ServicesCard />
				</div>

				<div
					id="third-section"
					className="flex items-center flex-col justify-center gap-4"
				>
					<h1 className="text-4xl pt-7 text-white">Gallery</h1>
					
				</div>
			</div>

			<Footer />
		</div>
	);
}
