"use client";
import "./globals.css";
import { Inter as FontSans, Rajdhani as rajdhani } from "next/font/google";
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
import Image from "next/image";
import CarouselDApiDemo from "@/components/Carousel/Carousel";
import { staticFeatureCards } from "@/components/Carousel/staticCarouselItems";
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
	variable: "--font-rajdhani",
});
const Sentient = localfont({
	src: "../../public/fonts/Rajdhani/Rajdhani-Bold.otf",
	variable: "--font-sentient",
});
const Rajdhani = rajdhani({
	weight: ["300", "400", "500", "600", "700"],
	fallback: ["sans", "serif"],
	display: "auto",
	preload: true,
	style: "normal",
	subsets: ["latin"],
	variable: "--font-rajdhani",
});
export default function Home() {
	return (
		<>
			<main
				className={`flex h-full w-screen flex-col items-center justify-between  bg-white  ${Rajdhani.variable} ${Sentient.variable} pt-10`}
			>
				<div className="h-full w-full  ">
					<Navbar />
					{/* first scroll  */}
					<div className="h-full w-full min-h-screen justify-center items-center flex flex-col ">
						<div
							id="home"
							className="lg:h-fit h-fit w-full  bg-transparent  relative flex items-center justify-center  text-black"
						>
							{/* TODO:md response */}
							<Hero />
						</div>
						<div className="w-full">
							<Offerings />
						</div>
					</div>
					{/* photo placeholder  */}
					<div className="grid lg:grid-cols-4 grid-cols-1 mx-5 lg:mx-5 gap-0 px-20 mt-16">
						<Image
							src={"/process/1.svg"}
							height={600}
							width={600}
							alt="photo"
							className="mx-auto scale"
						/>
						<Image
							src={"/process/2.svg"}
							height={600}
							width={600}
							alt="photo"
							className="mx-auto"
						/>
						<Image
							src={"/process/3.svg"}
							height={600}
							width={600}
							alt="photo"
							className="mx-auto"
						/>
						<Image
							src={"/process/4.svg"}
							height={600}
							width={600}
							alt="photo"
							className="mx-auto"
						/>
					</div>
					{/* <div className="w-full px-20 mx-auto items-center justify-center py-0 lg:-my-44 ">
						<Image
							src={"/process.svg"}
							height={1300}
							width={1300}
							alt="photo"
							className="mx-auto"
						/>
					</div> */}
					<div
						id="whyUs"
						className="md:grid md:grid-cols-2 md:px-8 lg:px-12 py-16 text-black bg-dot-zinc-500/[0.1] flex flex-col md:gap-0 gap-10 px-5 w-full items"
					>
						<Vision />
						<WhyUs />
					</div>

					<CategoryStrip />
					{/* <div className="bg-[#70dbe2] bg-opacity-">
						<Empower />
					</div> */}

					<div id="features" className="mx-auto w-full max-w-7xl">
						<CarouselDApiDemo
							carouselItems={staticFeatureCards}
							autoScrollDuration={10000}
							pagination={false}
						/>
						{/* <FeaturesHome />
						<FeaturesStrip /> */}
					</div>

					{/* <div id="faq">
						<FaqSection />
					</div> */}
					<hr />
					<div id="footer">
						<Footer />
					</div>

					<Toaster />
				</div>
			</main>
		</>
	);
}
