import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards.tsx";

const CategoryStrip = () => {
	return (
		<div className="flex flex-col gap-0 ">
			<InfiniteMovingCards
				items={OfferingCardsStatic}
				direction="left"
				speed="slow"
			></InfiniteMovingCards>
		</div>
	);
};

export default CategoryStrip;
