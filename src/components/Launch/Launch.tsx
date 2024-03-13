"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { FcAlarmClock } from "react-icons/fc";

const Launch = () => {
	return (
		<div className="lg:pt-20 pt-5">
			<div className="h-fit ">
				<div className=" lg:w-9/12 w-5/6 mx-auto rounded-md flex flex-col gap-3 lg:px-5 ">
					<div className="my-auto mx-auto flex flex-col gap-10  ">
						<h1 className="lg:text-7xl text-5xl md:text-6xl mx-auto lg:mx-0 bg-gradient-to-r from-blue-300 to-black text-transparent bg-clip-text py-3  font-oswald  tracking-tight font-semibold text-center flex flex-col gap-5">
							<div>Launching Soon !</div>
							<div>The Countdown Begins !</div>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Launch;
