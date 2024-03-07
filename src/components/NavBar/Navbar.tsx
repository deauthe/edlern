"use client";
import NavMenu from "@/components/NavBar/NavMenu";
import useMobileView from "@/hooks/useMobileView";
import HamburgerMenu from "@/components/NavBar/HamburgerMenu";
import { Button } from "../ui/button";
import useNavBar from "@/hooks/useNavBar";
import { delay, motion } from "framer-motion";
const Navbar = () => {
	const [isNavbar, isTransparent] = useNavBar(true, true);
	const isMobileView = useMobileView();

	return (
		<motion.div
			initial={{
				scale: 1,
			}}
			exit={{
				scale: 0,
			}}
			transition={{
				duration: 2,
			}}
			className={`w-full grid grid-cols-12 justify-between gap-5 p-5 ${
				isTransparent ? "bg-opacity-0 shadow-none" : "bg-opacity-100 shadow-md "
			} bg-white  border-black border-b-1 rounded-b-lg h-16 shadow-md z-10 fixed ${
				isNavbar ? "" : "hidden"
			}`}
		>
			<div
				className={`mb-auto h-fit  ${
					isMobileView ? "col-span-8" : "col-span-3"
				} uppercase text-2xl font-extrabold  w-fit my-auto`}
			>
				Edlern
			</div>
			{isMobileView ? (
				<div className=" mr-0 w-fit col-span-4 h-fit my-auto ">
					<HamburgerMenu />
				</div>
			) : (
				<>
					{" "}
					<div className=" col-span-6 ">
						<NavMenu />
					</div>
					<div className="col-span-3 flex flex-row justify-end gap-2">
						<div className=" my-auto">
							<Button
								variant={"secondary"}
								className="uppercase bg-transparent text-md font-serif font-bold hover:bg-transparent hover:font-extrabold transition-all duration-100 hover:translate-x-px ease-linear"
							>
								Log In
							</Button>
						</div>
						<div className="">
							<Button>Get Started</Button>
						</div>
					</div>
				</>
			)}
		</motion.div>
	);
};

export default Navbar;
