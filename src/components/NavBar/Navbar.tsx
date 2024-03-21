"use client";
import { instagram } from "react-icons-kit/fa/instagram";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { Icon } from "react-icons-kit";
import NavMenu from "@/components/NavBar/NavMenu";
import useMobileView from "@/hooks/useMobileView";
import HamburgerMenu from "@/components/NavBar/HamburgerMenu";
import { Button } from "../ui/button";
import useNavBar from "@/hooks/useNavBar";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

export const IconInstagram = () => <Icon icon={instagram} size={26} />;
export const IconLinkedIn = () => <Icon icon={linkedinSquare} size={26} />;

const Navbar = () => {
	const [isNavbar, isTransparent] = useNavBar(true, true);
	const isMobileView = useMobileView();
	let textColour = "black";

	return (
		<>
			{isNavbar && (
				<div
					className={`w-full box-border flex flex-row lg:grid lg:grid-cols-12  justify-between gap-5 p-5 bg-opacity-0 lg:px-14 md:px-16 px-3 z-50 ${
						isTransparent
							? "bg-opacity-100 shadow-none "
							: "bg-opacity-100 shadow-md "
					}bg-white h-16 shadow-md z-10 fixed top-0 left-0`}
				>
					<div
						className={`mr-0 w-fit col-span-9 h-fit my-auto text-${textColour} lg:hidden`}
					>
						<HamburgerMenu />
					</div>
					<div className={` col-span-3 `}>
						<Image
							src="/logo.png"
							alt=""
							width={500}
							height={500}
							className="w-32 h-auto rounded-lg"
						/>
					</div>

					<>
						{" "}
						<div className={`col-span-6 text-${textColour} hidden lg:block`}>
							<NavMenu />
						</div>
						<div className="col-span-3 lg:flex flex-row justify-end gap-2 hidden ">
							<div className=" my-auto mr-3 text-black/[0.6] text-nowrap">
								Let's connect
							</div>
							<div className=" my-auto">
								<Link
									href="https://www.instagram.com/edlern_official?igsh=MWN2Mzk2cWRscG9hdw=="
									className={` text-pink-500 text-md font-serif font-bold hover:bg-transparent hover:font-extrabold transition-all duration-100 hover:translate-x-px ease-linear flex flex-row gap-1 items-center`}
								>
									<IconInstagram />
								</Link>
							</div>
							<div className=" my-auto">
								<Link
									href="https://www.linkedin.com/company/edlern/"
									className={`text-blue-300 text-md font-serif font-bold hover:bg-transparent hover:font-extrabold transition-all duration-100 hover:translate-x-px ease-linear flex flex-row gap-1 items-center`}
								>
									<IconLinkedIn />
								</Link>
							</div>
						</div>
					</>
				</div>
			)}
		</>
	);
};

export default Navbar;
