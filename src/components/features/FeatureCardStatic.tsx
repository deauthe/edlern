export const FeatureCardContent: {
	title: string;
	description: React.ReactNode;
	link: string;
}[] = [
	{
		title: "Create Community",
		description: (
			<ul className="font-oswald tracking-wider font-normal w-5/6 text-left mx-auto list-disc ">
				<li>Create courses</li>
				<li>Share expertise</li>
				<li>Enable monetization</li>
				<li>Connect with community</li>
			</ul>
		),
		link: "#createCommunity",
	},
	{
		title: "Discover Community",
		description: (
			<ul className="font-oswald tracking-wider font-normal w-5/6 text-left mx-auto list-disc ">
				<li>Access high-quality content</li>
				<li>Explore communities</li>
				<li>Actively engage in learning</li>
				<li>One-o-One Connect with Educator</li>
			</ul>
		),
		link: "#discoverCommunity",
	},
	{
		title: "Study Rooms",
		description: (
			<ul className=" font-oswald tracking-wider font-normal text-left w-5/6 mx-auto list-disc ">
				<li>Create and add courses</li>
				<li>Share Resources</li>
				<li>Host Live Events</li>
				<li>Set Calendar invite</li>
			</ul>
		),
		link: "#studyRooms",
	},
	{
		title: "Gamification",
		description: (
			<ul className=" font-oswald tracking-wider font-normal text-left w-5/6 mx-auto list-disc flex flex-col gap-2">
				<li>Levelling system</li>
				<li>Progress tracking</li>
				<li>Badges for achievements</li>
			</ul>
		),
		link: "#gamification",
	},
];
