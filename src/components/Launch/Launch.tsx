"use client";
import { cn } from "@/lib/utils";
import React from "react";

const Launch = () => {
	return (
		<div className={cn("h-screen bg-white-200 flex-col flex gap-10 py-20")}>
			{/* heading  */}
			<div className="mx-auto mb-10 ">
				<h1 className="text-9xl tracking-tight bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  ">
					Launch
				</h1>
			</div>

			{/* contet part  */}
			<div className="flex flex-col gap-10 h-full">
				<div className=" w-9/12 h- mx-auto rounded-md grid grid-cols-2 gap-10 px-5">
					<div className="my-auto mx-auto flex flex-col gap-10  ">
						<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold">
							Create Launch
						</h1>
						<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4">
							Creators can effortlessly create Launch where they can exhibit
							their knowledge &amp; talents and monetize their content
						</p>
					</div>
					<div className="my-auto">
						<video
							autoPlay
							loop
							muted
							className="w-[36em]  rounded-full mx-auto"
						>
							<source src="/DiscoverLaunch.mp4" />
						</video>
					</div>
				</div>
				<hr className="w-1/2 mx-auto" />
				<div className=" w-9/12 h-full mx-auto rounded-md grid grid-cols-2 gap-10 px-5">
					<div className="my-auto">
						<video
							autoPlay
							loop
							muted
							className="w-[36em]  rounded-full mx-auto"
						>
							<source src="/CreateLaunch.mp4" />
						</video>
					</div>
					<div className="my-auto mx-auto flex flex-col gap-10  ">
						<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold text-right">
							Create Launch
						</h1>
						<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4 text-right ml-auto">
							Creators can effortlessly create Launch where they can exhibit
							their knowledge &amp; talents and monetize their content
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Launch;
