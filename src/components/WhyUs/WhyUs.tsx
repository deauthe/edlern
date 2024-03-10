import React from "react";

const WhyUs = () => {
	return (
		<div className="pt-20 ">
			<div className="h-fit ">
				<div className=" w-9/12 h- mx-auto rounded-md flex flex-col gap-10 px-5">
					<div className="my-auto mx-auto flex flex-col gap-10  ">
						<h1 className="text-8xl bg-gradient-to-r from-blue-300 to-black text-transparent bg-clip-text py-3 pr-3 font-oswald italic tracking-tight font-semibold text-left">
							Why Us ?
						</h1>
					</div>
					<div className="my-auto">
						<div className="">
							<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4 mx-auto text-center">
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
