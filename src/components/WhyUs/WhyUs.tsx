import React from "react";

const WhyUs = () => {
	return (
		<div className="lg:pt-20 pt-4">
			<div className="h-fit ">
				<div className=" lg:w-9/12 w-5/6 mx-auto rounded-md flex flex-col gap-2 lg:px-5 ">
					<div className="lg:my-auto mx-auto flex flex-col gap-10  ">
						<h1 className="lg:text-8xl text-6xl bg-gradient-to-r from-blue-300 to-black text-transparent bg-clip-text py-3 pr-3 font-oswald italic tracking-tight font-semibold text-left">
							Why Us ?
						</h1>
					</div>
					<div className="lg:my-auto">
						<div className="">
							<p className="lg:text-3xl text-2xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4 mx-auto text-center">
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
