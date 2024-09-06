import React from "react";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import FloatingCard from "./FloatingCard";

const Offerings = () => {
	return (
		<div className=" w-full flex flex-col sm:gap-5 md:gap-16 lg:pt-10 pt-5 mx-auto h-fit pb-10  font-oswald">
			<div className="lg:text-5xl md:text-4xl text-3xl mx-auto w-fit tracking-tight bg-gradient-to-t font-replace_with_pooly from-white/[0.6] to-white text-transparent bg-clip-text">
				Platform Offerings
			</div>
			<div className="grid md:grid-cols-6 grid-cols-2 gap-5 w-fit mx-auto mt-auto lg:px-0 px-3 ">
				{OfferingCardsStatic.map((item, idx) => {
					return (
						<FloatingCard
							title={item.title}
							icon={item.icon}
							key={idx}
							delay={idx * 0.2}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Offerings;
