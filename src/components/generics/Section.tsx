import useMobileView from "@/hooks/useMobileView";
import React, { ReactNode } from "react";

type SectionProps = {
	heading: string;
	text: string;
	imageSource: string;
	imageComponent: ReactNode;
};

const Section: React.FC<SectionProps> = (data) => {
	const isMobileView = useMobileView();
	return (
		<div
			className={`bg-${"transparent"} max-h-screen  ${
				isMobileView
					? "flex flex-col grap-5 px-5 py-4"
					: "grid grid-cols-12 gap-8 px-14 py-10"
			}`}
		>
			<div className="col-span-7">
				<div
					className={`font-extrabold ${
						isMobileView ? "text-2xl" : "text-5xl"
					} `}
				>
					{data.heading}
				</div>
			</div>
			<div className="col-span-5">{data.imageComponent}</div>
		</div>
	);
};

export default Section;
