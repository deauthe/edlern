import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItems } from "./FaqStaticItems";

const FaqSection = () => {
	return (
		<div className="h-fit bg-white rounded-lg w-full flex flex-col py-20 shadow-lg bg-dot-blue-100/[0.8]">
			<div className="mx-auto mb-10 ">
				<h1 className="text-9xl tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  ">
					FAQ
				</h1>
			</div>
			<div className="  grid grid-row grid-cols-4 gap-5 mb-10 px-20 pt-10 rounded-lg mt-10 mx-20 py-20 justify-center items-center font-DmSerif ">
				<div className="col-span-2 flex flex-col gap-5  ">
					<h1 className="text-8xl tracking-tight font-bold uppercase font-oswald ">
						Got a question?
					</h1>
					<div className="w-7/12 text-2xl">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus odit enim magni perferendis incidunt natus voluptatem
						ipsum aspernatur modi quis ad repellat.
					</div>
				</div>
				<div className="col-span-2 px-5 bg-white py-10 rounded-lg shadow-lg border-black/[0.1] border-2">
					<Accordion type="single" collapsible>
						{FaqItems.map((item, index) => {
							return (
								<AccordionItem value={`${item.id}`!} key={index}>
									<AccordionTrigger className="text-2xl text-black/[0.8] italic font-semibold">
										{item.heading}
									</AccordionTrigger>
									<AccordionContent>{item.description}</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
