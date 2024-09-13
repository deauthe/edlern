"use client";

import NavMenu from "@/components/NavBar/NavMenu";
import HamburgerMenu from "@/components/NavBar/HamburgerMenu";
import useNavBar from "@/hooks/useNavBar";
import Image from "next/image";

const Navbar = () => {
  const [isNavbar, isTransparent] = useNavBar(true, true);
  let textColour = "black";

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 box-border flex h-16 w-full flex-row justify-between gap-5 bg-white bg-opacity-100 p-5 px-3 shadow-md transition-all duration-200 md:px-16 lg:grid lg:grid-cols-12 lg:px-14 ${
          isNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`col-span-9 my-auto mr-0 h-fit w-fit text-${textColour} lg:hidden`}
        >
          <HamburgerMenu />
        </div>
        <div className={`col-span-3`}>
          <Image
            src="/logo.png"
            alt=""
            width={500}
            height={500}
            className="h-auto w-32 rounded-lg"
          />
        </div>

        <>
          {" "}
          <div className={`col-span-6 text-${textColour} hidden lg:block`}>
            <NavMenu />
          </div>
        </>
      </div>
    </>
  );
};

export default Navbar;
