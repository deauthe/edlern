import React from "react";
import { CarouselCard, CarouselItem } from "./CarouselCard";

const staticFeatures: CarouselItem[] = [
  {
    title: "Build and Monetize Your Community with Ease",
    description:
      "Create your own community in just a few easy steps and start engaging with learners by sharing your content. Our platform makes streaming simple and allows you to organize your courses, communities, and event schedules in one place.  Bring people together to collaborate on shared goals and interests while earning a living. Start building your community today!",
    video: "/features/create.mp4",
  },
  {
    title: "Monetizing Growth Through Diverse Learning Solutions",
    description: `As your community continued to grow, so did your opportunities. We expanded your offerings by
developing online courses, digital resources to meet the diverse needs of your audience. Each new
initiative not only enriched your portfolio but also strengthened your connection with learners who
trust your guidance and expertise`,
    image: "/features/monetize.svg",
  },
  {
    title: "Fostering Meaningful Connections Through Interactive Learning",
    description: `But we knew that building a community was not enough; we needed to foster meaningful
connections and engagement to truly make an impact. So, you can began hosting webinars, live Q&amp;A
sessions, and virtual workshops, creating a space where learners could come together to
collaborate, share ideas, and support one another.`,
    image: "/features/liveStream.svg",
  },
  {
    title: "Boost Engagement with Gamification",
    description: `Gamified elements to enhance student engagement, such as badges and rewards for completing
courses or reaching key milestones.Track your most active members with the leaderboard feature and reward them as they level up. Unlock exclusive courses for members who achieve specific milestones. Earn coins for every activity, and redeem them for exciting offers!`,
    video: "/features/gamification.mp4",
  },
];

export const staticFeatureCards = staticFeatures.map((feature, index) => {
  return <CarouselCard {...feature} />;
});
