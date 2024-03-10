"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import FaqSection from "@/components/Faq/FaqSection";
import Community from "@/components/features/FeaturesHome";
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
const Oswald = localfont({
	src: [
		{
			path: "../../public/fonts/Oswald/Oswald-ExtraLight.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Light.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Medium.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-SemiBold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Bold.ttf",
			weight: "800",
			style: "normal",
		},
	],
	variable: "--font-oswald",
});

export default function Home() {
	return (
		<>
			<Navbar />

			<main
				className={`flex h-full  flex-col items-center justify-between px-24 bg-gradient-to-b from-blue-300 to-white ${Oswald.variable} `}
			>
				<div className="h-full scroll-smooth">
					<div
						id="home"
						className="lg:h-screen h-fit w-full dark:bg-black bg-transparent  dark:bg-grid-white/[0.2] bg-dot-blue-100/[0.6] relative flex items-center justify-center"
					>
						<Hero />
					</div>
					{/* <About /> */}
					<Offerings />
					<div
						id="whyUs"
						className="grid grid-cols-2 px-44 bg-white bg-dot-zinc-500/[0.9] "
					>
						<Vision />
						<WhyUs />
					</div>
					<div id="launch" className="pb-10 bg-white bg-dot-zinc-500/[0.9]">
						<Launch />
					</div>
					<CategoryStrip />
					<div id="features">
						<Community />
						<FeaturesStrip />
					</div>
					<div id="faq">
						<FaqSection />
					</div>

					<Toaster />
				</div>
				<hr className="bg-black" />
			</main>
			<div id="footer">
				<Footer />
			</div>
		</>
	);
}
