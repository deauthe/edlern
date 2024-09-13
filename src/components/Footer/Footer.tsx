import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { PiPhoneBold, PiSealQuestionBold } from "react-icons/pi";
import { MdRoundaboutLeft } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaSheetPlastic } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import PolicyDialog from "./PolicyDialog";
import DisclaimerDialog from "./DisclaimerDialog";
import { IconBrandProducthunt } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="-shadow-lg flex h-fit w-full flex-col bg-gradient-to-r from-[#CCFED8] to-[#93B9FE] text-black/70">
      <div className="mx-auto flex flex-col gap-10 px-1 md:mx-0 md:grid md:grid-cols-5 md:gap-10">
        <div className="mx-auto mt-3 flex flex-col justify-center gap-5 rounded-md md:col-span-1 md:my-auto md:pl-5 lg:mx-0">
          <div className="mr-auto flex w-fit flex-col p-2 text-center font-rajdhani text-3xl font-extrabold sm:text-3xl md:text-left md:text-4xl lg:text-5xl">
            <h1 className="text-blue-300">Grow Your</h1>
            <h1 className="text-blue-200">Community</h1>
            <h1 className="text-blue-100">With Us</h1>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-5 rounded-md md:col-span-1 md:my-auto lg:mx-0">
          <div className="mr-auto flex w-[200px] flex-col text-center">
            <div className="md:text-md my-auto flex flex-col gap-2 text-wrap font-rajdhani text-sm font-normal transition-all duration-200 hover:scale-105">
              <Image
                alt="edlern"
                src="/logo.png"
                width={200}
                height={200}
                className="mr-auto rounded-full"
              />
              <Link href="mailto:support@edlern.com">
                For any queries, contact us on support@edlern.com
                <FaExternalLinkAlt className="mx-auto my-auto hidden lg:flex" />
              </Link>
              <Link
                href={"https://edlern.scenes.social"}
                className="mx-auto max-w-sm rounded-md bg-blue-300 px-2 py-1 text-lg text-white transition-all duration-200 hover:rotate-1 hover:scale-[105%]"
              >
                Create Your Community
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid w-11/12 grid-cols-2 gap-10 rounded-md font-rajdhani md:mt-5 md:grid-cols-3 lg:ml-20 lg:gap-20 lg:py-10">
          <div className="col-span-1 mx-auto flex w-full flex-col gap-3">
            <h2 className="text-xl font-semibold uppercase tracking-tight md:font-bold">
              WEBSITE
            </h2>
            <div className="flex flex-col text-lg font-semibold transition-all duration-300">
              <Link
                href="#home"
                className="flex flex-row gap-2 transition-all duration-200 hover:scale-105"
              >
                Home
                <FaHome className="my-auto hidden lg:flex" />
              </Link>
              <Link
                href="#features"
                className="flex flex-row gap-2 transition-all duration-200 hover:scale-105"
              >
                Features
                <MdOutlineFeaturedVideo className="my-auto hidden lg:flex" />
              </Link>
              <Link
                href="#features"
                className="flex flex-row gap-2 transition-all duration-200 hover:scale-105"
              >
                Products
                <IconBrandProducthunt
                  strokeWidth={2}
                  className="hidden lg:flex"
                />
              </Link>

              <Link
                href="#faq"
                className="flex flex-row gap-2 transition-all duration-200 hover:scale-105"
              >
                Contact Us
                <PiPhoneBold className="my-auto hidden lg:flex" />
              </Link>
            </div>
          </div>

          <div className="cols-span-1 mx-auto flex w-full flex-col gap-3">
            <h2 className="text-xl font-semibold uppercase tracking-tight md:font-bold">
              Socials
            </h2>

            <div className="flex flex-col text-lg font-semibold transition-all duration-300">
              <Link
                href="https://www.instagram.com/edlern_official?igsh=MWN2Mzk2cWRscG9hdw=="
                className="flex flex-row gap-2 transition-all duration-200 hover:scale-105"
              >
                Instagram
                <FaInstagram className="my-auto hidden lg:flex" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/edlern/"
                className="flex flex-row gap-2 transition-all duration-200 hover:scale-105"
              >
                LinkedIn
                <CiLinkedin className="my-auto hidden lg:flex" />
              </Link>
            </div>
          </div>
          <div className="cols-span-1 mx-auto flex w-full flex-col gap-3">
            <h2 className="text-xl font-semibold uppercase tracking-tight md:font-bold">
              LEGAL
            </h2>

            <div className="flex flex-col text-lg font-normal transition-all duration-300">
              <div className="flex flex-row gap-2 transition-all duration-200 hover:scale-105">
                <DisclaimerDialog />
                <FaSheetPlastic className="my-auto" />
              </div>

              <div className="flex flex-row gap-2 text-ellipsis text-nowrap text-left transition-all duration-200 hover:scale-105">
                <PolicyDialog />
                <BsNewspaper className="my-auto hidden lg:flex" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner  */}
    </div>
  );
};

export default Footer;
