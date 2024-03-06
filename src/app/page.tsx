"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/Navbar";
import SignUp from "./Signup/page";
import HeroBanner from "@/components/Hero/Hero";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-l  from-blue-200 to-blue-300">
			<div className="h-screen">
				<HeroBanner />
			</div>
			<hr className="bg-black" />
		</main>
	);
}
