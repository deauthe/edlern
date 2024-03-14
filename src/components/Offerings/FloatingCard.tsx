import React from "react";
import { IconType } from "react-icons/lib";

export type FloatingCardType = {
	title: string;
	icon: IconType;
	delay: number;
};

const FloatingCard = (item: FloatingCardType) => {
	const Icon = item.icon;
	return (
		<div className=" rounded-full lg:h-40 lg:w-40 h-32 w-32 bg-white hover:cursor-pointer hover:shadow-lg bg-gradient-to-b from-white-200 to-slate-300 ">
			<div className="  w-full h-full rounded-full flex flex-col p-2">
				<div className="mx-auto w-fit h-fit my-auto ">
					<h1 className="lg:text-xl md:text-lg text-lg text-center tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text flex flex-col gap-2 px-2">
						{item.title}
						<Icon className="lg:text-5xl text-3xl  text-blue-300 mx-auto" />
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FloatingCard;
