import React from "react";

type Props = {
	title: string;
	description: string;
};

const AboutCard = ({ title, description }: Props) => {
	return (
		<div className="w-full h-full flex flex-col items-center bg-blue-100/10 md:gap-3 gap-1 rounded-full lg:p-10 p-4">
			<h1 className="font-rajdhani lg:text-4xl md:text-2xl text-xl font-bold">
				{title}
			</h1>
			<p className="font-sentient w-3/4 text-center lg:text-xl md:text-lg text-sm text-black/80">
				{description}
			</p>
		</div>
	);
};

export default AboutCard;
