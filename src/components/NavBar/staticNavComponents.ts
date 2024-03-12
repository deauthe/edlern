import * as z from "zod";

const navComponentZod = z.object({
	title: z.string().min(1),
	href: z.string(),
	description: z.string().optional(),
});

export type NavComponentsType = z.infer<typeof navComponentZod>;

export const staticComponents: NavComponentsType[] = [
	{
		title: "Home",
		href: "#home",
	},
	{
		title: "Who are we ?",
		href: "#whyUs",
	},
	{
		title: "Features",
		href: "#features",
	},
	{
		title: "Legal",
		href: "#footer",
	},
	{
		title: "Frequently Asked Questions",
		href: "#faq",
	},
];
