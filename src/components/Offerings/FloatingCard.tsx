import {
	motion,
	AnimatePresence,
	Variants,
	Variant,
	animate,
} from "framer-motion";
import React from "react";
import { IconType } from "react-icons/lib";

export type FloatingCardType = {
	title: string;
	icon: IconType;
	delay: number;
};

const FloatingCard = (item: FloatingCardType) => {
	const cardVariants: Variants = {
		hover: {
			scale: 1.1,
		},
		initial: {
			scale: 1,
			y: 0,
			boxShadow: "2px 3px 8px rgb(0,0,0)",
		},
		animate: {
			scale: 1,
			y: 10,
			boxShadow: "2px 3px 8px rgb(0,0,0)",
			transition: {
				duration: 0.7,
				repeat: Infinity,
				type: "intertia",
				repeatType: "reverse",
				delay: item.delay,
			},
		},
	};
	const Icon = item.icon;
	return (
		<AnimatePresence>
			<motion.div
				className=" rounded-full lg:h-44 h-32 lg:w-44 w-32 bg-white hover:cursor-pointer hover:shadow-lg bg-gradient-to-b from-white-200 to-slate-300 "
				variants={cardVariants}
				whileHover={"hover"}
			>
				<div className="  w-full h-full rounded-full flex flex-col ">
					<div className="mx-auto w-fit h-fit my-auto ">
						<h1 className="lg:text-xl md:text-lg text-lg text-center tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text flex flex-col gap-2 px-2">
							{item.title}
							<Icon className="lg:text-6xl text-3xl  text-blue-300 mx-auto" />
						</h1>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default FloatingCard;
