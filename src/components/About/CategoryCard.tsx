import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { OfferingCardsStatic } from "./staticCategoryCards";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards.tsx";

const CategoryCard = () => {
	return (
		<div className="flex flex-col gap-0">
			<InfiniteMovingCards
				items={OfferingCardsStatic}
				direction="left"
				speed="slow"
			></InfiniteMovingCards>
			<InfiniteMovingCards
				items={OfferingCardsStatic}
				speed="slow"
				direction="right"
			></InfiniteMovingCards>
		</div>
	);
};

export default CategoryCard;
