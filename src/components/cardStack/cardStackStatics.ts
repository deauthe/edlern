import { faker } from "@faker-js/faker";

type Card = {
	id: number;
	name: string;
	designation: string;
	content: string;
};

export const cardStackCards: Card[] = Array.from({ length: 4 }, (_, index) => ({
	id: index + 1,
	name: faker.person.fullName(),
	designation: faker.person.jobTitle(),
	content: faker.lorem.paragraph(),
}));
