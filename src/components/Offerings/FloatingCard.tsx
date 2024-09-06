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
		<div className=" rounded-full lg:h-40 lg:w-40 h-32 w-32 bg-black hover:cursor-pointer hover:shadow-lg border-[1px] border-opacity-25 border-white/50 ">
			<div className="  w-full h-full rounded-full flex flex-col ">
				<div className="mx-auto w-full h-full  my-auto ">
					<h1 className="lg:text-xl md:text-lg text-lg text-center lg:p-3 p-1 lg:px-5 tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent bg-clip-text w-full h-full rounded-full  font-oswald font-bold mx-auto flex flex-col justify-between ">
						<div className="mt-auto items-end bg-gradient-to-t font-replace_with_pooly from-white/[0.6] to-white/[0.8] text-transparent bg-clip-text font-light">
							{item.title}
						</div>
						<Icon className="lg:text-5xl mt-auto pt-auto  text-3xl  text-blue-300 mx-auto" />
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FloatingCard;
