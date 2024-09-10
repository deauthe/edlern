import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { PiSealQuestionBold } from "react-icons/pi";
import { MdRoundaboutLeft } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaSheetPlastic } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import PolicyDialog from "./PolicyDialog";
import DisclaimerDialog from "./DisclaimerDialog";

const Footer = () => {
	return (
		<div className="h-fit w-full bg-gradient-to-r from-[#CCFED8] to-[#93B9FE] text-black/70 flex flex-col -shadow-lg">
			<div className="md:grid md:grid-cols-5 md:mx-0 mx-auto md:gap-10 gap-10  px-1  flex flex-col ">
				<div className="rounded-md md:my-auto mt-3 md:col-span-1 lg:mx-0 flex flex-col gap-5 mx-auto justify-center pl-5">
					<div className="w-fit flex flex-col lg:text-5xl md:text-4xl sm:text-3xl text-2xl mr-auto font-rajdhani font-extrabold p-2">
						<h1 className="text-blue-300">Grow Your</h1>
						<h1 className="text-blue-200">Community</h1>
						<h1 className="text-blue-100">With Us</h1>
					</div>
					<Image
						alt="edlern"
						src="/logo.png"
						width={200}
						height={200}
						className="rounded-full  mr-auto"
					/>
				</div>
				<div className="rounded-md md:my-auto md:col-span-1 lg:mx-0 flex flex-col gap-5 mx-auto ">
					<div className="w-[200px] text-center mr-auto  flex-col flex  ">
						<div className="font-rajdhani md:text-md text-sm   font-normal text-wrap flex flex-col gap-2 my-auto hover:scale-105 transition-all duration-200 ">
							<Link href="mailto:support@edlern.com">
								For any queries, contact us on support@edlern.com
								<FaExternalLinkAlt className="my-auto mx-auto " />
							</Link>
							<Link
								href={"https://edlern.scenes.social"}
								className="max-w-sm mx-auto bg-blue-300 text-white text-lg px-2 py-1 rounded-md hover:rotate-1 transition-all duration-200 hover:scale-[105%]"
							>
								Create Your Community
							</Link>
						</div>
					</div>
				</div>
				<div className=" rounded-md col-span-3 md:mt-5  font-rajdhani grid-cols-2 grid md:grid-cols-3 lg:py-10 lg:gap-20 gap-10  w-3/4 lg:ml-20 mx-auto  ">
					<div className="flex flex-col gap-3  col-span-1 mx-auto w-full">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight uppercase ">
							WEBSITE
						</h2>
						<div className="flex flex-col text-lg font-semibold transition-all duration-300">
							<Link
								href="#home"
								className=" hover:scale-105 flex flex-row gap-2 transition-all duration-200"
							>
								Home
								<FaHome className="my-auto" />
							</Link>
							<Link
								href="#features"
								className=" hover:scale-105 flex flex-row gap-2 transition-all duration-200"
							>
								Features
								<MdOutlineFeaturedVideo className="my-auto" />
							</Link>
							<Link
								href="#whyUs"
								className=" hover:scale-105 flex flex-row gap-2 transition-all duration-200"
							>
								Who Are We
								<MdRoundaboutLeft className="my-auto" />
							</Link>
							<Link
								href="#faq"
								className=" hover:scale-105 flex flex-row gap-2 transition-all duration-200"
							>
								FAQ
								<PiSealQuestionBold className="my-auto" />
							</Link>
						</div>
					</div>

					<div className="flex flex-col gap-3 cols-span-1 mx-auto w-full ">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight  uppercase ">
							Socials
						</h2>

						<div className="flex flex-col text-lg font-semibold    transition-all duration-300">
							<Link
								href="https://www.instagram.com/edlern_official?igsh=MWN2Mzk2cWRscG9hdw=="
								className=" hover:scale-105 flex flex-row gap-2 transition-all duration-200"
							>
								Instagram
								<FaInstagram className="my-auto" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/edlern/"
								className=" hover:scale-105 flex flex-row gap-2 transition-all duration-200"
							>
								LinkedIn
								<CiLinkedin className="my-auto text-2xl" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3 cols-span-1 mx-auto w-full">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight uppercase  ">
							LEGAL
						</h2>

						<div className="flex flex-col text-lg  font-normal  transition-all  duration-300">
							<div className=" hover:scale-105 flex flex-row gap-2 transition-all duration-200">
								<DisclaimerDialog />
								<FaSheetPlastic className="my-auto" />
							</div>

							<div className=" hover:scale-105 flex flex-row gap-2 text-ellipsis transition-all duration-200">
								<PolicyDialog />
								<BsNewspaper className="my-auto" />
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
