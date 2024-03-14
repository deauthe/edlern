import React from "react";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import FloatingCard from "./FloatingCard";

const Offerings = () => {
	return (
		<div className=" w-full flex flex-col lg:pt-10 pt-5 mx-auto h-fit pb-10 bg-dot-blue-100/[0.8] ">
			<div className="grid md:grid-cols-6 grid-cols-2 gap-5 w-full mx-auto mt-auto lg:px-0 px-3">
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
