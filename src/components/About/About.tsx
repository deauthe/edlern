import React from "react";
import CategoryCard from "../CategoryStrip/CategoryStrip";
import { CardStack } from "../cardStack/CardStackAceternity";
import { cardStackCards } from "@/components/cardStack/cardStackStatics";
const About = () => {
	return (
		<div className=" py-32 text-center flex flex-col h-screen bg-white-200/[0.9]">
			<div className="mx-auto mb-10 w-screen">
				<h1 className="text-9xl uppercase tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  ">
					About Us
				</h1>
			</div>
			<div className="mx-auto mb-10 w-screen">
				<p className="text-3xl box-content font-oswald  mx-auto w-1/3 tracking-normal font-medium ">
					edLern is an online, centralized place where course creators,
					consultants, educators can upload and share educational content with
					their community. Share your ideas, host discussions, events, courses,
					&amp; engage in coaching and consultations.
				</p>
			</div>

			<div className="relative mt-auto mx-auto ">
				<CardStack items={cardStackCards} />
			</div>
		</div>
	);
};

export default About;
