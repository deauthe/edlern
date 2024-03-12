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
						<h1 className="lg:text-8xl text-6xl mx-auto lg:mx-0 bg-gradient-to-r from-blue-300 to-black text-transparent bg-clip-text py-3 pr-3 font-oswald italic tracking-tight font-semibold lg:text-left flex flex-row gap-5">
							Launch
							<FcAlarmClock />
						</h1>
					</div>
					<div className="my-auto">
						<div className="">
							<p className="lg:text-3xl text-2xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4 mx-auto text-center">
								The countdown begins! We are thrilled to announce that our
								community platform is launching soon. Say goodbye to confusion
								and hello to a new era of seamless e-learning.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Launch;
