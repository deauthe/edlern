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
					<source src="/discoverCommunity.mp4" />
				</video>
			</div>
			<div className="my-auto mx-auto flex flex-col gap-10  ">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold text-left  ">
					Discover Communities
				</h1>
				<ul className="text-3xl text-black/[0.7] font-oswald tracking-wider font-normal w-5/6 text-left mx-auto list-disc ">
					<li>Access high-quality content</li>
					<li>Explore communities</li>
					<li>Actively engage in learning</li>
					<li>One-o-One Connect with Educator</li>
				</ul>
			</div>
		</div>
	);
};

const CreateCommunity = () => {
	return (
		<div className=" w-9/12 h- mx-auto rounded-md grid grid-cols-2 gap-10 px-5 pt-10 ">
			<div className="my-auto mx-auto flex flex-col gap-10   w-full">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold ">
					Create Communities
				</h1>
				<ul className="text-3xl text-black/[0.7] font-oswald tracking-wider font-normal w-5/6 text-left mx-auto list-disc ">
					<li>Create courses</li>
					<li>Share expertise</li>
					<li>Enable monetization</li>
					<li>Connect with community</li>
				</ul>
			</div>
			<div className="my-auto">
				<video autoPlay loop muted className="w-[34em] rounded-full ml-auto">
					<source src="/creativeCommunity.mp4" />
				</video>
			</div>
		</div>
	);
};

const StudyRoom = () => {
	return (
		<div className=" w-9/12 h- mx-auto rounded-md grid grid-cols-2 gap-10 px-5">
			<div className="my-auto mx-auto flex flex-col gap-10   w-full">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold w-full text-left ">
					Study Room
				</h1>
				<ul className="text-3xl text-black/[0.7] font-oswald tracking-wider font-normal text-left w-5/6 mx-auto list-disc ">
					<li>Create and add courses</li>
					<li>Share Resources</li>
					<li>Host Live Events</li>
					<li>Set Calendar Invite</li>
				</ul>
			</div>
			<div className="my-auto">
				<video autoPlay loop muted className="w-[34em] rounded-full ml-auto">
					<source src="/studyRoom.mp4" />
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
					<source src="/AnimatedLeaderboardSystem.mp4" />
				</video>
			</div>
			<div className="my-auto mx-auto flex flex-col gap-10  ">
				<h1 className="text-7xl text-black font-oswald tracking-tight font-semibold w-full text-left ">
					Gamification
				</h1>
				<ul className="text-3xl text-black/[0.7] font-oswald tracking-wider font-normal text-left w-5/6 mx-auto list-disc flex flex-col gap-2">
					<li className="">Levelling system</li>
					<li className="">Progress tracking</li>
					<li className="text-nowrap">Badges for achievements</li>
				</ul>
			</div>
		</div>
	);
};

export default FeaturesHome;
