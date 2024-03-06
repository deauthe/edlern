import React from "react";
import CategoryCard from "./CategoryCard";
import { CardStack } from "../cardStack/CardStackAceternity";
import { cardStackCards } from "@/components/cardStack/cardStackStatics";
const About = () => {
	return (
		<div className="h-screen mt-10 text-center flex flex-col ">
			<h1 className="uppercase text-8xl font-sans font-extrabold text-textColor-100 my-10">
				About Us
			</h1>
			<div className="bg-black">
				<CategoryCard />
			</div>
			<div className="absolute right-10 top-40 bg-black">
				{/* <CardStack items={cardStackCards} scaleFactor={0.2} /> */}
			</div>
		</div>
	);
};

export default About;
