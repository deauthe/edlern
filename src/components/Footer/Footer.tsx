import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className="h-96 bg-gradient-to-l from-blue-200 to-blue-300 grid grid-cols-5 gap-10 px-20">
			<div className="rounded-md my-10 col-span-2 flex flex-col gap-5">
				<Image
					alt="edlern"
					src="/edLern.png"
					width={200}
					height={200}
					className="rounded-full ml-auto"
				/>
				<div className="w-[200px] text-center ml-auto ">
					<div className="font-oswald text-xl text-white/[0.8] font-bold text-wrap">
						your knowledge
					</div>
					<div className="font-oswald text-xl text-white/[0.8] font-bold text-wrap">
						your earnings
					</div>
				</div>
			</div>
			<div className="bg-white rounded-md col-span-3 my-10 font-oswald grid grid-cols-3"></div>
		</div>
	);
};

export default Footer;
