import React from "react";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import FloatingCard from "./FloatingCard";

const Offerings = () => {
	return (
		<div className=" w-full flex flex-col md:gap-5 mt-16 pt-5 mx-auto h-fit pb-10 font-rajdhani">
			<div className="lg:text-5xl md:text-4xl text-3xl mx-auto w-fit tracking-tight bg-gradient-to-t font-sentient from-black/90 to-black text-transparent bg-clip-text">
				Platform Offerings
			</div>
			<div className="grid md:grid-cols-3 grid-cols-3 lg:grid-cols-6 gap-5 w-fit mx-auto mt-auto bg-gradient-to-r from-[#CCFED8] to-[#93B9FE] p-10 rounded-lg">
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
