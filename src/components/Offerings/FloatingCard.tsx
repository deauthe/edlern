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
		<div className=" rounded-md lg:size-40 size-24 bg-white hover:cursor-pointer shadow-md hover:shadow-lg border-[1px] border-opacity-25 border-black/50 hover:scale-110 transition-all duration-200">
			<div className="  w-full h-full rounded-full flex flex-col ">
				<div className="mx-auto w-full h-full  my-auto ">
					<h1 className="lg:text-xl md:text-lg text-lg text-center lg:p-3 p-1 lg:px-5 tracking-tighter text-black w-full h-full rounded-full  font-rajdhani font-bold mx-auto flex flex-col justify-between ">
						<div className="mt-auto items-end font-rajdhani font-medium text-sm md:text-md lg:text-lg p-2 ">
							{item.title}
						</div>
						<Icon className="lg:text-5xl mt-auto pt-auto  text-3xl  text-black mx-auto" />
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FloatingCard;
