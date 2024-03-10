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
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Who are we ?",
		href: "#details",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Features",
		href: "#features",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Frequently Asked Questions",
		href: "#faq",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Legal",
		href: "#footer",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
];
