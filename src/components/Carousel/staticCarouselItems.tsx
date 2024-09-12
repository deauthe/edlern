import React from "react";
import { CarouselCard, CarouselItem } from "./CarouselCard";

const staticFeatures: CarouselItem[] = [
	{
		title: "Build and Monetize Your Community with Ease",
		description:
			"Create your own community in just a few easy steps and start engaging with learners by sharing your content. Our platform makes streaming simple and allows you to organize your courses, communities, and event schedules in one place.  Bring people together to collaborate on shared goals and interests while earning a living. Start building your community today!",
		video: "/homeVideo.mp4",
	},
	{
		title: "Grow a dynamic community that reflects your vision.",
		description:
			"Gone are the days of needing to make a whole bunch of different tools work together. With Circle, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.",
		video: "/homeVideo.mp4",
	},
	{
		title: "Grow a dynamic community that reflects your vision.",
		description:
			"Gone are the days of needing to make a whole bunch of different tools work together. With Circle, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.",
		video: "/homeVideo.mp4",
	},
	{
		title: "Boost Engagement with Gamification",
		description:
			"Track your most active members with the leaderboard feature and reward them as they level up. Unlock exclusive courses for members who achieve specific milestones. Earn coins for every activity, and redeem them for exciting offers!",
		image: "/features/gamification.png",
	},
];

export const staticFeatureCards = staticFeatures.map((feature, index) => {
	return <CarouselCard {...feature} />;
});
