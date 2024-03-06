import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
	hidden: { rotate: 0 },
	visible: {
		rotate: 20,
		transition: { duration: 1 },
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: "easeInOut",
			type: "spring",
			repeat: Infinity,
		},
	},
	exit: {
		opacity: 0,
		pathLength: 0,
	},
};

type movingLineProps = {
	rotation: string;
};

const MovingLine = (props: movingLineProps) => {
	return (
		<div className="">
			<motion.svg
				viewBox="0 0 500 500"
				xmlns="http://www.w3.org/2000/svg"
				variants={svgVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.path
					d="M50 150 L300 150"
					fill="none"
					stroke="black"
					variants={pathVariants}
				/>
				{/* <motion.line
					x1="0"
					y1="80"
					x2="100"
					y2="20"
					stroke="black"
					variants={pathVariants}
				/> */}
			</motion.svg>
		</div>
	);
};

export default MovingLine;
