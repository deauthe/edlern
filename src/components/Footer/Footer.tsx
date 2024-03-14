import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { PiSealQuestionBold } from "react-icons/pi";
import { MdRoundaboutLeft } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaSheetPlastic } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="h-fit w-screen bg-gradient-to-r from-blue-100 to-blue-300  text-black/[0.9]">
			<div className="lg:grid lg:grid-cols-5 lg:mx-0 mx-auto gap-10 bg-dot-white-200/[0.2] px-1 h-full flex flex-col ">
				<div className="rounded-md lg:my-10 my-3 lg:col-span-2 lg:mx-0 flex-col gap-5 mx-auto ">
					<Image
						alt="edlern"
						src="/logo.png"
						width={200}
						height={200}
						className="rounded-full ml-auto"
					/>
					<div className="w-[200px] text-center ml-auto flex flex-col hidden lg:visible">
						<div className="font-oswald text-xl text-black/60 font-normal text-wrap">
							motto1
						</div>
						<div className="font-oswald text-xl text-black/60 font-normal text-wrap">
							motto 2
						</div>
					</div>
				</div>
				<div className=" rounded-md col-span-3 lg:mt-5  font-oswald grid-cols-2 grid lg:grid-cols-3 lg:py-10 lg:gap-20 gap-10  w-3/4 lg:ml-20 mx-auto  ">
					<div className="flex flex-col gap-3  col-span-1 mx-auto w-full">
						<h2 className="text-xl font-bold tracking-tight uppercase text-black/80">
							WEBSITE
						</h2>
						<div className="flex flex-col text-lg font-medium text-black/80 italic transition-all duration-300">
							<a
								href="#home"
								className="hover:text-black hover:scale-105 flex flex-row gap-2 "
							>
								Home
								<FaHome className="my-auto" />
							</a>
							<a
								href="#features"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Features
								<MdOutlineFeaturedVideo className="my-auto" />
							</a>
							<a
								href="#whyUs"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Who Are We
								<MdRoundaboutLeft className="my-auto" />
							</a>
							<a
								href="#faq"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								FAQ
								<PiSealQuestionBold className="my-auto" />
							</a>
						</div>
					</div>

					<div className="flex flex-col gap-3 cols-span-1 mx-auto w-full ">
						<h2 className="text-xl font-bold tracking-tight uppercase text-black/80">
							Socials
						</h2>

						<div className="flex flex-col text-lg font-medium text-black/80 italic transition-all duration-300">
							<a
								href="#home"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Instagram
								<FaInstagram className="my-auto" />
							</a>
							<a
								href="#features"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Twitter
								<FiTwitter className="my-auto" />
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-3 cols-span-1 mx-auto w-full">
						<h2 className="text-xl font-semibold tracking-tight uppercase  text-black/80">
							LEGAL
						</h2>

						<div className="flex flex-col text-lg text-black/80 font-medium transition-all italic duration-300">
							<a
								href="#home"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Disclaimer
								<FaSheetPlastic className="my-auto" />
							</a>
							<a
								href="#features"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								terms
								<BsFileEarmarkSpreadsheet className="my-auto" />
							</a>
							<a
								href="#features"
								className="hover:text-black hover:scale-105 flex flex-row gap-2 text-ellipsis"
							>
								Privacy Policy
								<BsNewspaper className="my-auto" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="relative lg:bottom-5 lg:left-3 bottom-1 left-2 text-sm text-muted/70 text-black">
				copyrights reserved
			</div>
		</div>
	);
};

export default Footer;
