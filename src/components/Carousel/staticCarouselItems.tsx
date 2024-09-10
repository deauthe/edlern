import React from "react";
import { CarouselCard, CarouselItem } from "./CarouselCard";

const staticFeatures: CarouselItem[] = [
	{
		buttonText: "Share",
		title: "Grow a dynamic community that reflects your vision.",
		description:
			"Gone are the days of needing to make a whole bunch of different tools work together. With Circle, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.",
		video: "/homeVideo.mp4",
	},
	{
		buttonText: "Share",
		title: "Grow a dynamic community that reflects your vision.",
		description:
			"Gone are the days of needing to make a whole bunch of different tools work together. With Circle, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.",
		video: "/homeVideo.mp4",
	},
	{
		buttonText: "Share",
		title: "Grow a dynamic community that reflects your vision.",
		description:
			"Gone are the days of needing to make a whole bunch of different tools work together. With Circle, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.",
		video: "/homeVideo.mp4",
	},
];

export const staticFeatureCards = staticFeatures.map((feature, index) => {
	return <CarouselCard {...feature} />;
});
