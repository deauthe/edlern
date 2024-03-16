import React from "react";
import CategoryCard from "../CategoryStrip/CategoryStrip";
import { CardStack } from "../cardStack/CardStackAceternity";
import { cardStackCards } from "@/components/cardStack/cardStackStatics";
const About = () => {
	return (
		<div className=" lg:py-32 md:py-20 py-10 text-center flex flex-col h-fit bg-white-200/[0.9] bg-dot-black/[0.2]">
			<div className="mx-auto mb-3 w-screen">
				<h1 className="lg:text-9xl md:text-8xl text-7xl uppercase tracking-tighter bg-gradient-to-b from-black to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  ">
					About Us
				</h1>
			</div>
			<div className="mx-auto mb-10 lg:w-3/12 w-96 p-5 rounded-lg ">
				<p className="lg:text-3xl md:text-2xl text-xl px-5 box-content font-oswald  mx-auto tracking-normal font-semibold bg-gradient-to-t from-black to-blue-300 text-transparent bg-clip-text">
					EdLern is an online, centralized place where course creators,
					consultants, educators can upload and share educational content with
					their community.
				</p>
			</div>
			<div className="grid lg:grid-cols-2 justify between mx-auto px-40 mt-10 gap-10 grid-cols-1  ">
				<h1 className="lg:text-4xl text-xl md:text-3xl tracking-tighter box-content font-oswald font-semibold md:text-left mx-auto lg:px-20 px-3 text-black">
					Share your
					<span className="bg-gradient-to-l text-transparent from-blue-200 to-blue-300  bg-clip-text ">
						{` ideas,`}
					</span>
					host{" "}
					<span className="bg-gradient-to-l text-transparent from-blue-200 to-blue-300  bg-clip-text ">
						{` discussions,`}
					</span>
					<span className="bg-gradient-to-l text-transparent from-blue-200 to-blue-300  bg-clip-text ">
						{` , events, courses, `}
					</span>
					and engage in
					<span className="bg-gradient-to-l text-transparent from-blue-200 to-blue-300  bg-clip-text ">
						{` coaching and consultations. `}
					</span>
				</h1>
			</div>
		</div>
	);
};

export default About;
