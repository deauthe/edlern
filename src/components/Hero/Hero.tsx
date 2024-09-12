"use client";
import { TypeAnimation } from "react-type-animation";
import RegisterForm from "@/components/RegistrationForm";
import FloatingCard from "../Offerings/FloatingCard";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import Offerings from "../Offerings/Offerings";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroBanner = () => {
  const RegisterUser = () => {
    // take to signUp Form
  };

  return (
    <div className="relative mx-auto mt-[70px] h-fit font-rajdhani font-extrabold">
      <div className="sm:flex sm:flex-col lg:gap-16">
        <div className="col-span-1 my-auto flex flex-col justify-center gap-5 text-center">
          <div className="flex flex-col gap-1 text-5xl md:text-6xl lg:text-7xl">
            <div className="mx-auto h-fit font-bold tracking-tighter text-black md:px-5 lg:px-10">
              Your New Home for
            </div>
            <div className="mx-auto h-fit w-5/6 font-bold tracking-tighter text-blue-200 md:max-w-[400px] md:px-5 lg:max-w-max lg:text-nowrap lg:px-10">
              Learning And Community Engagement!
            </div>
          </div>

          <Link
            href={"https://edlern.scenes.social"}
            className="mx-auto max-w-md rounded-full bg-blue-300 p-4 text-lg text-white transition-all duration-200 hover:rotate-1 hover:scale-[105%] lg:text-xl"
          >
            Create Your Community
          </Link>
          <div className="mx-3 h-fit w-fit overflow-hidden rounded-lg border-[1px] border-black/20 md:mx-auto lg:mx-10">
            <video
              muted
              src="/homeVideo.mp4"
              className="w-full max-w-5xl"
              autoPlay={true}
              loop={true}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
