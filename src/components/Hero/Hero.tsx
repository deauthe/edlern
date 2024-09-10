"use client";
import { TypeAnimation } from "react-type-animation";
import RegisterForm from "@/components/RegistrationForm";
import FloatingCard from "../Offerings/FloatingCard";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import Offerings from "../Offerings/Offerings";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroBanner = () => {
	const RegisterUser = () => {
		// take to signUp Form
	};

	return (
		<div className="mx-auto relative font-rajdhani font-extrabold h-fit mt-[70px] ">
			<div className="sm:flex sm:flex-col lg:gap-16 ">
				<div className="flex justify-center gap-5 flex-col text-center  col-span-1 my-auto ">
					<div className="flex flex-col gap-1">
						<div className="lg:text-6xl md:text-4xl text-3xl lg:px-10 md:px-5  font-bold tracking-tighter  h-fit text-black  mx-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
							Your New Home
						</div>
						<div className="lg:text-6xl md:text-4xl text-3xl lg:px-10 md:px-5 font-bold tracking-tighter  h-fit  text-blue-300  mx-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-max lg:text-nowrap">
							Learning And Community Engagement!
						</div>
					</div>

					<Link
						href={"https://edlern.scenes.social"}
						className="max-w-md mx-auto bg-blue-300 text-white lg:text-xl text-lg px-2 py-1 rounded-md hover:rotate-1 transition-all duration-200 hover:scale-[105%]"
					>
						Create Your Community
					</Link>
					<div className=" md:mx-auto w-fit h-fit rounded-lg overflow-hidden lg:mx-10 border-black/20 border-[1px] mx-3 ">
						<video
							muted
							src="/homeVideo.mp4"
							className="w-full max-w-5xl"
							autoPlay={true}
							loop={true}
						></video>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
