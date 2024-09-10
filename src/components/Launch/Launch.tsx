"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { FcAlarmClock } from "react-icons/fc";

const Launch = () => {
	return (
		<div className="lg:pt-12 pt-5">
			<div className="h-fit ">
				<div className=" lg:w-9/12 w-5/6 mx-auto rounded-md flex flex-col gap-3 lg:px-5 ">
					<div className="my-auto mx-auto flex flex-col gap-10  ">
						<h1 className="uppercase lg:text-7xl text-2xl md:text-4xl mx-auto lg:mx-0 bg-gradient-to-b from-blue-200 to-blue-300 text-transparent bg-clip-text  py-3  font-rajdhani  tracking-tight font-semibold text-center flex flex-col lg:gap-5 gap-0">
							<div>Launching Soon </div>
							<div className="lg:text-5xl md:text-3xl text-xl mx-auto normal-case">
								The Countdown Begins..{" "}
							</div>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Launch;
