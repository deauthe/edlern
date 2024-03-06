"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/Navbar";
import SignUp from "./Signup/page";
import HeroBanner from "@/components/Hero/Hero";
import MovingLine from "@/components/movingLine/MovingLine";
import About from "@/components/About/About";

export default function Home() {
	return (
		<main className="flex min-h-screen max-h-fit flex-col items-center justify-between px-24 bg-gradient-to-l  from-blue-200 to-blue-300">
			<div className="h-screen">
				<HeroBanner />
				<About />
			</div>
			<hr className="bg-black" />
		</main>
	);
}
