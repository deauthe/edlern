"use client";
import "./globals.css";
import { Inter as FontSans, Rajdhani as rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import FaqSection from "@/components/Faq/FaqSection";
import localfont from "next/font/local";
import CategoryStrip from "@/components/CategoryStrip/CategoryStrip";
import Footer from "@/components/Footer/Footer";
import FeaturesHome from "@/components/features/FeaturesHome";
import FeaturesStrip from "@/components/features/Features";
import { Toaster } from "@/components/ui/toaster";
import Offerings from "@/components/Offerings/Offerings";
import Vision from "@/components/Vision/Vision";
import WhyUs from "@/components/Vision/WhyUs";
import Launch from "@/components/Launch/Launch";
import Empower from "@/components/Empower/Empower";
import { CardStack } from "@/components/cardStack/CardStackAceternity";
import Image from "next/image";
import CarouselDApiDemo from "@/components/Carousel/Carousel";
import { staticFeatureCards } from "@/components/Carousel/staticCarouselItems";
const Oswald = localfont({
  src: [
    {
      path: "../../public/fonts/Oswald/Oswald-ExtraLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Oswald/Oswald-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Oswald/Oswald-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Oswald/Oswald-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Oswald/Oswald-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rajdhani",
});
const Sentient = localfont({
  src: "../../public/fonts/Rajdhani/Rajdhani-Bold.otf",
  variable: "--font-sentient",
});
const Rajdhani = rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans", "serif"],
  display: "auto",
  preload: true,
  style: "normal",
  subsets: ["latin"],
  variable: "--font-rajdhani",
});
export default function Home() {
  return (
    <>
      <main
        className={`flex h-full w-screen flex-col items-center justify-between bg-white ${Rajdhani.variable} ${Sentient.variable} pt-10`}
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
          <div className="mx-auto my-10 grid w-3/4 grid-cols-2 gap-0 pl-3 lg:mt-16 lg:grid-cols-4">
            <div className="flex flex-col gap-5">
              <Image
                src={"/process/1.svg"}
                height={600}
                width={600}
                alt="photo"
                className="scale mx-auto"
              />
              <h1 className="font-rajdhani text-3xl font-bold">
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
              <h1 className="font-rajdhani text-3xl font-bold">
                make a community
              </h1>
            </div>

            <Image
              src={"/process/3.svg"}
              height={600}
              width={600}
              alt="photo"
              className="mx-auto"
            />
            <Image
              src={"/process/4.svg"}
              height={600}
              width={600}
              alt="photo"
              className="mx-auto"
            />
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
            className="my-10 grid w-full grid-cols-1 items-center gap-5 px-5 text-black md:grid md:grid-cols-2 md:px-8 lg:my-16 lg:gap-10 lg:px-12"
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
            className="mx-auto my-10 w-full max-w-7xl lg:my-32"
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
