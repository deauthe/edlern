"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import FaqSection from "@/components/Faq/FaqSection";
import localfont from "next/font/local";
import CategoryStrip from "@/components/CategoryStrip/CategoryStrip";
import Footer from "@/components/Footer/Footer";
import FeaturesHome from "@/components/features/FeaturesHome";
import FeaturesStrip from "@/components/features/Features";
import { Toaster } from "@/components/ui/toaster";
import Offerings from "@/components/Offerings/Offerings";
import Vision from "@/components/Vision/Vision";
import WhyUs from "@/components/WhyUs/WhyUs";
import Launch from "@/components/Launch/Launch";
import Empower from "@/components/Empower/Empower";
import { CardStack } from "@/components/cardStack/CardStackAceternity";
const Oswald = localfont({
	src: [
		{
			path: "../../public/fonts/Oswald/Oswald-ExtraLight.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Light.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-oswald",
});

export default function Home() {
	return (
		<>
			<main
				className={`flex h-full w-screen flex-col items-center justify-between  bg-gradient-to-b from-blue-300 to-white ${Oswald.variable} `}
			>
				<div className="h-full w-full  ">
					<Navbar />
					<div
						id="home"
						className="lg:h-fit h-fit w-full  bg-transparent  bg-dot-blue-100/[0.6] relative flex items-center justify-center "
					>
						{/* TODO:md response */}
						<Hero />
					</div>
					<div className="w-full">
						<Offerings />
					</div>
					<div
						id="whyUs"
						className="md:grid md:grid-cols-2 md:px-8 lg:px-12 bg-white bg-dot-zinc-500/[0.5] flex flex-col md:gap-0 gap-10 px-5 w-full py-10"
					>
						<Vision />
						<WhyUs />
					</div>
					<div id="launch" className="pb-10 bg-white bg-dot-zinc-500/[0.5]">
						<Launch />
					</div>
					<div className="bg-white bg-grid-zinc-500/[0.2]">
						<Empower />
					</div>

					<CategoryStrip />
					<div id="features">
						<FeaturesHome />
						<FeaturesStrip />
					</div>

					<div id="faq">
						<FaqSection />
					</div>
					<hr className="bg-black" />

					<div id="footer">
						<Footer />
					</div>

					<Toaster />
				</div>
			</main>
		</>
	);
}
