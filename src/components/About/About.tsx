import React from "react";
import CategoryCard from "./CategoryCard";

const About = () => {
	return (
		<div className="h-screen mt-10 text-center flex flex-col gap-80">
			<h1 className="uppercase text-8xl">About Us</h1>
			<CategoryCard />
		</div>
	);
};

export default About;
