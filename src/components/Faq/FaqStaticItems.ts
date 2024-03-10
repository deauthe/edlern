import { FaqItemTypes } from "@/types/componentPropTypes";

export const FaqItems: FaqItemTypes[] = Array.from(
	{ length: 4 },
	(_, index) => ({
		id: index + 1,
		heading: "this is a question part:" + index,
		description: "this is the answer for question" + index,
	})
);
