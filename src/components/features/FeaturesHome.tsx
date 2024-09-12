"use client";
import React from "react";
import CarouselDApiDemo from "../Carousel/Carousel";
import { staticFeatureCards } from "../Carousel/staticCarouselItems";

const FeaturesHome = () => {
  return (
    <>
      <div className="mx-auto my-2 flex w-fit flex-col text-center font-rajdhani text-5xl font-extrabold md:text-6xl lg:text-7xl">
        <h1 className="">Grow a dynamic community</h1>
        <h1 className="text-[#92B9FD]">That reflects your vision</h1>
      </div>
      <div className="px-5 md:px-10">
        <CarouselDApiDemo
          titles={["Create", "Monetize", "⁠Live Stream", "Gamification"]}
          carouselItems={staticFeatureCards}
          autoScrollDuration={6000}
          pagination={true}
        />
      </div>
    </>
  );
};
export default FeaturesHome;
