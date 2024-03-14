"use client";
import { cn } from "@/lib/utils";
import React from "react";

const FeaturesHome = () => {
	return (
		<div className={cn("h-fit bg-white-200/[0.9] ")}>
			<div className="bg-grid-blue-300/[0.1] lg:py-20 py-5 w-full h-fit flex-col flex lg:gap-10 gap-10">
				{/* heading  */}
				<div className="mx-auto lg:mb-10 w-fit ">
					<h1 className="uppercase lg:text-7xl md:text-6xl text-5xl tracking-tight bg-gradient-to-r from-blue-300 to-black text-transparent box-content font-oswald font-bold mx-auto bg-clip-text">
						What We Provide
					</h1>
				</div>

				{/* contet part  */}
				<div className="lg:flex flex-col gap-10 h-full hidden lg:visible">
					<div id="createCommunity">
						<CreateCommunity />
					</div>
					<div id="discoverCommunity">
						<DiscoverCommunity />
					</div>
					<div id="studyRooms">
						<StudyRoom />
					</div>
					<div id="gamification">
						<Gamification />
					</div>
				</div>
			</div>
		</div>
	);
};
const DiscoverCommunity = () => {
	return (
		<div className=" w-9/12 h-full mx-auto rounded-md grid grid-cols-2 gap-10 px-5 pt-10">
			<div className="my-auto">
				<video autoPlay loop muted className="w-[34em]  rounded-full mr-auto">
					<source src="/CreateCommunity.mp4" />
				</video>
			</div>
			<div className="my-auto mx-auto flex flex-col gap-10  ">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold text-right ">
					Discover Communities
				</h1>
				<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4 text-right ml-auto ">
					Learners have the opportunity to explore various communities to access
					high-quality educational content and actively engage in learning.
				</p>
			</div>
		</div>
	);
};

const CreateCommunity = () => {
	return (
		<div className=" w-9/12 h- mx-auto rounded-md grid grid-cols-2 gap-10 px-5 pt-10">
			<div className="my-auto mx-auto flex flex-col gap-10  ">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold ">
					Create Communities
				</h1>
				<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4">
					Creators can effortlessly create community where they can exhibit
					their knowledge &amp; talents and monetize their content
				</p>
			</div>
			<div className="my-auto">
				<video autoPlay loop muted className="w-[34em] rounded-full ml-auto">
					<source src="/DiscoverCommunity.mp4" />
				</video>
			</div>
		</div>
	);
};

const Calender = () => {
	return (
		<div className=" w-9/12 h- mx-auto rounded-md grid grid-cols-2 gap-10 px-5 lg:mt-20 mt-5">
			<div className="my-auto mx-auto flex flex-col gap-10  ">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold  text-right">
					Calendar
				</h1>
				<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4 text-right ml-auto">
					Never miss the latest update from your favourite creator, just mark it
					on your calendar.
				</p>
			</div>
			<div className="my-auto">
				<video
					autoPlay
					loop
					muted
					className="w-[15em] rounded-full lg:mr-auto lg:ml-16"
				>
					<source src="/Calendar.mp4" />
				</video>
			</div>
		</div>
	);
};
const StudyRoom = () => {
	return (
		<div className=" w-9/12 h- mx-auto rounded-md grid grid-cols-2 gap-10 px-5">
			<div className="my-auto mx-auto flex flex-col gap-10  ">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold ">
					Study Room
				</h1>
				<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4">
					The built-in study room feature serves as a platform where you can
					create and add new courses, sharing them exclusively with your
					community members.
				</p>
			</div>
			<div className="my-auto">
				<video autoPlay loop muted className="w-[34em] rounded-full ml-auto">
					<source src="/DiscoverCommunity.mp4" />
				</video>
			</div>
		</div>
	);
};
const Gamification = () => {
	return (
		<div className=" w-9/12 h-full mx-auto rounded-md grid grid-cols-2 gap-10 px-5">
			<div className="my-auto">
				<video autoPlay loop muted className="w-[34em]   rounded-full mr-auto">
					<source src="/CreateCommunity.mp4" />
				</video>
			</div>
			<div className="my-auto mx-auto flex flex-col gap-10  ">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold text-right ">
					Gamification
				</h1>
				<p className="text-3xl text-black/[0.7] font-oswald tracking-wider font-medium w-3/4 text-right ml-auto ">
					Encourage engagement using incentive points and leadership board
				</p>
			</div>
		</div>
	);
};

export default FeaturesHome;
