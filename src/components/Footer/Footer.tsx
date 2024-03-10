import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
	return (
		<div className="h-fit bg-gradient-to-r from-blue-100 to-blue-300  text-black/[0.9]">
			<div className="grid grid-cols-5 gap-10 bg-dot-white-200/[0.2] px-5 h-full ">
				<div className="rounded-md my-10 col-span-2 flex flex-col gap-5 ">
					<Image
						alt="edlern"
						src="/logo.png"
						width={200}
						height={200}
						className="rounded-full ml-auto"
					/>
					<div className="w-[200px] text-center ml-auto flex flex-col">
						<div className="font-oswald text-xl text-black/60 font-normal text-wrap">
							your knowledge
						</div>
						<div className="font-oswald text-xl text-black/60 font-normal text-wrap">
							your earnings
						</div>
					</div>
				</div>
				<div className=" rounded-md col-span-3 mt-5 font-oswald grid grid-cols-3 py-10 gap-20 w-fit ml-20 ">
					<div className="flex flex-col gap-3   col-span-1 mx-auto">
						<h2 className="text-xl font-bold tracking-tight uppercase text-black/80">
							WEBSITE
						</h2>
						<div className="flex flex-col text-lg font-medium text-black/80 italic transition-all duration-300">
							<a href="#home" className="hover:text-black hover:scale-105 ">
								Home
							</a>
							<a href="#features" className="hover:text-black hover:scale-105 ">
								Features
							</a>
							<a href="#whyUs" className="hover:text-black hover:scale-105 ">
								Who Are We
							</a>
							<a href="#faq" className="hover:text-black hover:scale-105 ">
								FAQ
							</a>
						</div>
					</div>

					<div className="flex flex-col gap-3 cols-span-1">
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
					<div className="flex flex-col gap-3  cols-span-1">
						<h2 className="text-xl font-semibold tracking-tight uppercase  text-black/80">
							LEGAL
						</h2>

						<div className="flex flex-col text-black/80 transition-all duration-300">
							<a href="" className="hover:text-black hover:scale-105 ">
								Terms and Conditions
							</a>
							<a href="" className="hover:text-black hover:scale-105 ">
								financial discussions
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="relative bottom-5 left-3 text-sm text-muted/70 text-black">
				copyrights reserved
			</div>
		</div>
	);
};

export default Footer;
