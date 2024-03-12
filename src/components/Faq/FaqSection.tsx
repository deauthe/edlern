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
				<h1 className="text-9xl tracking-tighter bg-gradient-to-l from-blue-200 to-blue-300 text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  ">
					FAQ
				</h1>
			</div>
			<div className="  lg:grid lg:grid-cols-4 gap-5 mb-10 lg:px-20 lg:pt-10 rounded-lg lg:mt-10 mt-3 lg:mx-20 mx-5 lg:py-20 justify-center items-center font-DmSerif ">
				<div className="col-span-2 flex flex-col gap-5 mb-5 lg:mb-0 ">
					<h1 className="lg:text-8xl md:text-7xl text-6xl tracking-tight font-bold uppercase font-oswald ">
						Got a question?
					</h1>
				</div>
				<div className="col-span-2 px-5 bg-white py-10 rounded-lg shadow-lg border-black/[0.1] border-2 mx-auto md:mx-10 ">
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
