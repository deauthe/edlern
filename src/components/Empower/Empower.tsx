import React, { ReactElement } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";

const Empower = () => {
	return (
		<div className=" lg:py-12 md:py-8 py-5 text-center flex flex-col h-fit  ">
			<div className="mx-auto mb-3 w-screen">
				<h1 className="lg:text-7xl md:text-6xl text-4xl  tracking-tighter bg-gradient-to-b from-black to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  ">
					At edLern We Empower
				</h1>
			</div>

			<div className="flex flex-col md:grid md:grid-cols-3 lg:gap-44 md:10  gap-5 lg:py-14 md:py-10 py-6 rounded-lg w-fit mx-auto lg:px-16 lg:mt-16 md:mt-10 mt-8">
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
		<div className="flex flex-col lg:gap-5 md:gap-3 gap-1 font-oswald">
			<div className="mx-auto lg:text-9xl md:text-8xl text-7xl">
				{data.icon}
			</div>
			<div className="lg:text-5xl md:text-5xl text-4xl font-semibold ">
				{data.heading}
			</div>
			<ul className="list-disc text-left mx-auto md:w-fit w-[180px] text-nowrap  lg:text-2xl md:text-2xl text-lg font-normal list-inside  ">
				{data.keypoints.map((keyPoint, index) => {
					return <li key={index}>{keyPoint}</li>;
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
