import React from "react";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import FloatingCard from "./FloatingCard";

const Offerings = () => {
	return (
		<div className=" w-screen flex flex-col pt-10 h-fit pb-10 bg-dot-blue-100/[0.8]">
			<div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 gap-10  w-fit  mx-auto mt-auto">
				{OfferingCardsStatic.map((item, idx) => {
					return (
						<>
							<FloatingCard
								title={item.title}
								icon={item.icon}
								key={idx}
								delay={idx * 0.2}
							/>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Offerings;
