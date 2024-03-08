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
			boxShadow: "2px 3px 8px rgb(0,0,0)",
			transition: {
				duration: 0.5,
				type: "inertia",
			},
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
				repeatType: "mirror",
				delay: item.delay,
			},
		},
	};
	const Icon = item.icon;
	return (
		<AnimatePresence>
			<motion.div
				className=" rounded-md h-44 w-44  "
				variants={cardVariants}
				whileHover={"hover"}
				initial="initial"
				animate="animate"
			>
				<div className=" bg-white w-full h-full rounded-md flex flex-col bg-gradient-to-t from-blue-300/[0.8]  to-white ">
					<div className="mx-auto w-fit h-fit my-auto ">
						<h1 className="text-2xl text-center tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text flex flex-col gap-2 px-2">
							{item.title}
							<Icon className="text-6xl  text-blue-300 mx-auto" />
						</h1>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default FloatingCard;
