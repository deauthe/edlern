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

const Footer = () => {
	return (
		<div className="h-fit w-full bg-gradient-to-t border-t-2 border-black from-blue-300 to-white text-black/[0.9]">
			<div className="md:grid md:grid-cols-5 md:mx-0 mx-auto gap-10 bg-dot-white-200/[0.2] px-1  flex flex-col ">
				<div className="rounded-md md:my-auto my-3 md:col-span-2 lg:mx-0 flex flex-col gap-5 mx-auto ">
					<Image
						alt="edlern"
						src="/logo.png"
						width={200}
						height={200}
						className="rounded-full ml-auto"
					/>
					<div className="w-[200px] text-center ml-auto  flex-col flex  ">
						<div className="font-oswald md:text-lg text-md  text-black/80 font-normal text-wrap flex flex-row gap-2 my-auto hover:scale-105 transition-all duration-75">
							<a href="mailto:support@edlern.com">
								For any queries, contact us on support@edlern.com
								<FaExternalLinkAlt className="my-auto mx-auto text-black/50" />
							</a>
						</div>
					</div>
				</div>
				<div className=" rounded-md col-span-3 md:mt-5  font-oswald grid-cols-2 grid md:grid-cols-3 lg:py-10 lg:gap-20 gap-10  w-3/4 lg:ml-20 mx-auto  ">
					<div className="flex flex-col gap-3  col-span-1 mx-auto w-full">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight uppercase text-black/80">
							WEBSITE
						</h2>
						<div className="flex flex-col text-lg  sm:font-normal text-black/80  transition-all duration-300">
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
						<h2 className="text-xl md:font-bold font-semibold tracking-tight  uppercase text-black/80">
							Socials
						</h2>

						<div className="flex flex-col text-lg md:font-normal font-normal text-black/80  transition-all duration-300">
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
								LinkedIn
								<CiLinkedin className="my-auto text-2xl" />
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-3 cols-span-1 mx-auto w-full">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight uppercase  text-black/80">
							LEGAL
						</h2>

						<div className="flex flex-col text-lg text-black/80 font-normal  transition-all  duration-300">
							<a
								href="/disclaimer.docx"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Disclaimer
								<FaSheetPlastic className="my-auto" />
							</a>
							<a
								href="/policy.docx"
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
