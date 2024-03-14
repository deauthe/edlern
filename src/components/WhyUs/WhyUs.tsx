import React from "react";

const WhyUs = () => {
	return (
		<div className="lg:pt-20 pt-2 w-full ">
			<div className="h-fit w-full ">
				<div className=" lg:w-9/12 w-11/12 mx-auto rounded-md flex flex-col gap-3 lg:px-5 ">
					<div className="my-auto mx-auto flex flex-col gap-10  ">
						<h1 className="uppercase lg:text-7xl md:text-6xl text-5xl mx-auto lg:mx-0 bg-gradient-to-r from-blue-300 to-black text-transparent bg-clip-text font-oswald  tracking-tight font-semibold  text-center w-full">
							Why Us?
						</h1>
					</div>
					<div className="lg:my-auto">
						<div className="">
							<p className="lg:text-3xl text-2xl text-black/[0.9] font-oswald tracking-wider font-normal w-full mx-auto text-center">
								We are not just offering education, we are crafting
								opportunities. Engage members, share knowledge, and turn your
								passion into a fulfilling income stream.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
