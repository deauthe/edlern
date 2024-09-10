import React, { ReactElement } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";

const Empower = () => {
	return (
		<div className=" lg:py-12 md:py-8 py-5 text-center flex flex-col h-fit  ">
			<div className="mx-auto w-screen">
				<h1 className="lg:text-6xl md:text-5xl text-3xl tracking-tighter text-blue-300/80 box-content font-rajdhani font-bold mx-auto bg-clip-text  ">
					We Empower
				</h1>
			</div>

			<div className="flex flex-col md:grid md:grid-cols-3 lg:gap-44   gap-5 lg:py-5 md:py-3 py-2 rounded-lg w-fit mx-auto lg:px-16 lg:mt-5 md:mt-10 mt-8">
				{sections.map((item, index) => {
					return (
						<Section
							key={index}
							icon={item.icon}
							heading={item.heading}
							keypoints={item.keypoints}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Empower;

type SectionParams = {
	icon: ReactElement;
	keypoints: string[];
	heading: string;
};

const Section = (data: SectionParams) => {
	return (
		<div className="flex flex-col lg:gap-5 md:gap-3 gap-1  text-white/95 bg-blue-300 shadow-lg p-5 rounded-lg">
			<div className="mr-auto lg:text-7xl md:text-6xl text-5xl ">
				{data.icon}
			</div>
			<div className="lg:text-4xl md:text-3xl text-2xl font-bold text-left font-rajdhani">
				{data.heading}
			</div>
			<ul className="list-none text-left mr-auto md:w-fit w-[180px] text-nowrap lg:text-xl md:text-lg text-md font-sentient list-outside  ">
				{data.keypoints.map((keyPoint, index) => {
					return (
						<li className="text-md" key={index}>
							{keyPoint}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const sections: SectionParams[] = [
	{
		icon: <PiStudentDuotone />,
		heading: "Learners to",
		keypoints: [
			"Find inspiration",
			"Acquire fresh skills.",
			"Uncover new insights.",
		],
	},
	{
		icon: <FaChalkboardTeacher />,
		heading: "Educators to",
		keypoints: [
			"Share their expertise.",
			"Generate income",
			"Contribute to the community.",
		],
	},
	{
		icon: <IoBriefcaseOutline />,
		heading: "Employees to",
		keypoints: [
			"Nurture curiosity.",
			"Effect meaningful change.",
			"Lead a fulfilling life.",
		],
	},
];
