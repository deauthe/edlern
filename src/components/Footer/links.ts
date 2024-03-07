export type Link = {
	title: string;
	href: string;
};

export type LinkTree = {
	heading: string;
	links: Link[];
};

export const linkTrees: LinkTree[] = [
	{
		heading: "social",
		links: [
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
		],
	},
	{
		heading: "legal",
		links: [
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
		],
	},
	{
		heading: "resources",
		links: [
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Home",
				href: "/",
			},
		],
	},
];
