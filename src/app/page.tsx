"use client";
import "./globals.css";
import { Inter as FontSans, Rajdhani as rajdhani } from "next/font/google";
import Navbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";

import localfont from "next/font/local";
import CategoryStrip from "@/components/CategoryStrip/CategoryStrip";
import Footer from "@/components/Footer/Footer";
import FeaturesHome from "@/components/features/FeaturesHome";
import { Toaster } from "@/components/ui/toaster";
import Offerings from "@/components/Offerings/Offerings";
import Vision from "@/components/Vision/Vision";
import WhyUs from "@/components/Vision/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        className={`flex h-full w-screen flex-col items-center justify-between bg-white pt-10`}
      >
        <div className="h-full w-full">
          <Navbar />
          {/* first scroll  */}
          <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
            <div
              id="home"
              className="relative flex h-fit w-full items-center justify-center bg-transparent text-black lg:h-fit"
            >
              {/* TODO:md response */}
              <Hero />
            </div>
            <div className="my-10 w-full">
              <Offerings />
            </div>
          </div>
          {/* photo placeholder  */}
          <div className="mx-auto my-10 grid w-3/4 grid-cols-2 gap-7 pl-3 lg:mt-16 lg:grid-cols-4 lg:gap-20">
            <div className="flex flex-col gap-5">
              <Image
                src={"/process/1.svg"}
                height={600}
                width={600}
                alt="photo"
                className="scale mx-auto"
              />
              <h1 className="mx-auto hidden w-fit rounded-full bg-blue-300 px-4 font-rajdhani text-2xl font-bold text-white lg:flex">
                Have A Passion
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src={"/process/2.svg"}
                height={600}
                width={600}
                alt="photo"
                className="mx-auto"
              />
              <h1 className="mx-auto hidden w-fit -translate-y-2 translate-x-1 rounded-full bg-blue-300 px-4 font-rajdhani text-2xl font-bold text-white lg:flex">
                Make A Community
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src={"/process/3.svg"}
                height={600}
                width={600}
                alt="photo"
                className="mx-auto"
              />
              <h1 className="mx-auto hidden w-fit translate-x-1 rounded-full bg-blue-300 px-4 font-rajdhani text-2xl font-bold text-white lg:flex lg:translate-y-2">
                Learn Together
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src={"/process/4.svg"}
                height={600}
                width={600}
                alt="photo"
                className="mx-auto"
              />
              <h1 className="mx-auto hidden w-fit translate-x-1 rounded-full bg-blue-300 px-4 font-rajdhani text-2xl font-bold text-white lg:flex lg:translate-y-3">
                Earn Money
              </h1>
            </div>
          </div>
          {/* <div className="w-full px-20 mx-auto items-center justify-center py-0 lg:-my-44 ">
						<Image
							src={"/process.svg"}
							height={1300}
							width={1300}
							alt="photo"
							className="mx-auto"
						/>
					</div> */}
          <div
            id="whyUs"
            className="my-16 grid w-full grid-cols-1 items-center gap-5 px-5 text-black md:grid md:grid-cols-2 md:px-8 lg:my-16 lg:gap-10 lg:px-12"
          >
            <Vision />
            <WhyUs />
          </div>

          <CategoryStrip />
          {/* <div className="bg-[#70dbe2] bg-opacity-">
						<Empower />
					</div> */}

          <div
            id="features"
            className="mx-auto my-10 mt-16 w-full max-w-7xl lg:my-16"
          >
            <FeaturesHome />
          </div>

          {/* <div id="faq">
						<FaqSection />
					</div> */}
          <hr className="shadow-lg" />
          <div id="footer">
            <Footer />
          </div>

          <Toaster />
        </div>
      </main>
    </>
  );
}
