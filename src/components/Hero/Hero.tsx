import { TypeAnimation } from "react-type-animation";
import RegisterForm from "@/components/RegistrationForm";
import FloatingCard from "../Offerings/FloatingCard";
import { OfferingCardsStatic } from "../About/staticCategoryStripItems";
import SignUpForm from "../signup/signUpForm";
import Offerings from "../Offerings/Offerings";
import SignUp from "@/components/signup/SignUp";

const HeroBanner = () => {
	const RegisterUser = () => {
		// take to signUp Form
	};

	return (
		<div className="mx-auto relative font-oswald font-extrabold h-fit mt-[70px] ">
			<div className="sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-16 ">
				<div className="flex justify-center  flex-col text-center  col-span-1 gap-3 my-auto ">
					<div className="lg:text-7xl md:text-4xl text-4xl lg:px-10 md:px-5 mt-6 font-semibold tracking-tighter text-muted/80 h-fit w-11/12   mx-auto ">
						Your New Home For Learning And Community Engagement!
					</div>

					<div className="lg:mt-10 md:mt-5 mt-2 mx-auto lg:px-3 md:px-1 w-11/12">
						<h1 className="lg:text-5xl text-2xl md:text-3xl tracking-tighter font-oswald font-semibold text-center mx-auto lg:px-20 md:px-10 px-3  text-muted/60">
							<span className="bg-gradient-to-b text-transparent from-blue-300 to-black bg-clip-text ">
								{`Share your  `}
							</span>
							ideas, host discussions
							<span className="bg-gradient-to-b text-transparent from-blue-300 to-black  bg-clip-text ">
								{` `}
							</span>
							<span className="bg-gradient-to-b text-transparent from-blue-300 to-black bg-clip-text ">
								{` and engage in `}
							</span>
							events, courses, coaching and consultations.
						</h1>
					</div>
				</div>
				<div className="w-full flex flex-col h-fit mx-auto my-auto">
					<SignUp />
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
