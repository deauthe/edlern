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
		<div className="h-fit bg-blue-200/15 rounded-lg w-full flex flex-col lg:py-20 py-5 shadow-lg bg-dot-blue-100/[0.8]">
			<div className="mx-auto lg:mb-10 mb-2">
				<h1 className="lg:text-9xl md:text-7xl text-4xl tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  ">
					FAQ
				</h1>
			</div>
			<div className="  lg:grid lg:grid-cols-4 gap-5 mb-10 lg:px-20 lg:pt-10 rounded-lg lg:mt-10 mt-3 lg:mx-20 mx-5 lg:py-20 justify-center items-center font-DmSerif ">
				<div className="col-span-2 mb-5 lg:mb-0 ">
					<h1 className="lg:text-7xl md:text-6xl text-5xl tracking-tight font-bold uppercase font-oswald mx-auto ">
						Got a question?
					</h1>
				</div>
				<div className="col-span-2 lg:px-5 md:px-2 px-1 bg-white py-10 rounded-lg shadow-lg border-black/[0.1] border-2 mx-auto md:mx-10 lg:w-full">
					<Accordion type="single" collapsible>
						{FaqItems.map((item, index) => {
							return (
								<AccordionItem value={`${item.id}`!} key={index}>
									<AccordionTrigger className="text-2xl text-black/[0.8] italic font-semibold hover:no-underline">
										{item.heading}
									</AccordionTrigger>
									<AccordionContent className="text-xl">
										{item.description}
									</AccordionContent>
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
