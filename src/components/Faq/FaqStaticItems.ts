import { FaqItemTypes } from "@/types/componentPropTypes";
import { faker } from "@faker-js/faker";

export const FaqItems: FaqItemTypes[] = Array.from(
	{ length: 4 },
	(_, index) => ({
		id: index + 1,
		heading: faker.lorem.sentence() + "?",
		description: faker.lorem.paragraph(),
	})
);

console.log("faq types are:", FaqItems);
