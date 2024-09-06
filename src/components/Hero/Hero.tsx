import { TypeAnimation } from "react-type-animation";
import RegisterForm from "@/components/RegistrationForm";
import FloatingCard from "../Offerings/FloatingCard";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import Offerings from "../Offerings/Offerings";

const HeroBanner = () => {
	const RegisterUser = () => {
		// take to signUp Form
	};

	return (
		<div className="mx-auto relative font-oswald font-extrabold h-fit mt-[70px] ">
			<div className="sm:flex sm:flex-col lg:gap-16 ">
				<div className="flex justify-center  flex-col text-center  col-span-1 gap-3 my-auto ">
					<div className="lg:text-5xl md:text-3xl text-2xl lg:px-10 md:px-5 mt-6 font-bold tracking-tighter text-muted/80 h-fit w-11/12  mx-auto max-w-[500px]">
						Your New Home For Learning And Community Engagement!
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
