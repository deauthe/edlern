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

const CategoryCard = () => {
	return (
		<div className="flex flex-row gap-5">
			{OfferingCardsStatic.map((item, idx) => {
				const Icon = item.icon;
				return (
					<div>
						<Card className="w-fit">
							<CardHeader>
								<CardTitle className="flex flex-col text-center gap-5 uppercase text-lg">
									<Icon className="mx-auto" />

									{item.title}
								</CardTitle>
							</CardHeader>
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default CategoryCard;
