"use client";
import NavMenu from "@/components/NavBar/NavMenu";
import useMobileView from "@/hooks/useMobileView";
import HamburgerMenu from "@/components/NavBar/HamburgerMenu";
import { Button } from "../ui/button";
import useNavBar from "@/hooks/useNavBar";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
	const [isNavbar, isTransparent] = useNavBar(true, true);
	const isMobileView = useMobileView();
	let textColour;
	if (isTransparent) {
		textColour = "black";
	} else {
		textColour = "black";
	}

	return (
		<>
			{isNavbar && (
				<div
					className={`w-[100vw] box-border flex flex-row lg:grid lg:grid-cols-12  justify-between gap-5 p-5 bg-opacity-0 lg:px-32 md:px-16 px-3 z-50 ${
						isTransparent
							? "bg-opacity-100 shadow-none "
							: "bg-opacity-100 shadow-md "
					}bg-white h-16 shadow-md z-10 fixed top-0 left-0`}
				>
					<div
						className={`mr-0 w-fit col-span-9 h-fit my-auto text-${textColour} md:hidden`}
					>
						<HamburgerMenu />
					</div>
					<div className={` col-span-3 `}>
						<Image
							src="/logo.png"
							alt=""
							width={500}
							height={500}
							className="w-32 rounded-lg"
						/>
					</div>

					<>
						{" "}
						<div className={`col-span-6 text-${textColour} hidden md:block`}>
							<NavMenu />
						</div>
						<div className="col-span-3 lg:flex flex-row justify-end gap-2 hidden lg:block ">
							<div className=" my-auto">
								<a
									href="instagram.com"
									className={` bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text text-md font-serif font-bold hover:bg-transparent hover:font-extrabold transition-all duration-100 hover:translate-x-px ease-linear flex flex-row gap-1 items-center`}
								>
									Instragram
									<FaInstagram className="text-black" />
								</a>
							</div>
							<div className=" my-auto">
								<a
									href="instagram.com"
									className={` bg-transparent text-md font-serif font-bold hover:bg-transparent hover:font-extrabold transition-all duration-100 hover:translate-x-px ease-linear text-${textColour} flex flex-row gap-1 items-center`}
								>
									Twitter
									<FiTwitter />
								</a>
							</div>
						</div>
					</>
				</div>
			)}
		</>
	);
};

export default Navbar;
