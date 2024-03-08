"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/Navbar";
import SignUp from "./Signup/page";
import HeroBanner from "@/components/Hero/Hero";
import MovingLine from "@/components/movingLine/MovingLine";
import About from "@/components/About/About";
import FaqSection from "@/components/Faq/FaqSection";
import Community from "@/components/Community/Community";
import localfont from "next/font/local";
import CategoryStrip from "@/components/CategoryStrip/CategoryStrip";
import { Footer } from "react-day-picker";
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
				className={`flex h-full flex-col items-center justify-between px-24 bg-gradient-to-l from-blue-200 to-blue-300 ${Oswald.variable}`}
			>
				<div className="h-full">
					<div className="h-screen flex">
						<HeroBanner />
					</div>
					<About />
					<FaqSection />
					<CategoryStrip />

					<Community />
				</div>
				<hr className="bg-black" />
			</main>
			<Footer />
		</>
	);
}
