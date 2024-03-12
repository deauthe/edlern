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
		<div className="mx-auto relative font-oswald font-extrabold h-fit ">
			<div className="sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-32 ">
				<div className="flex justify-center mt-[70px] flex-col text-center  col-span-1 gap-3 my-auto">
					<div className="lg:text-5xl text-2xl lg:px-10  mt-6 font-semibold tracking-tighter text-muted/90 h-24 lg:h-44">
						<TypeAnimation
							preRenderFirstString={true}
							sequence={[
								500,
								"Your Knowledge", // initially rendered starting point
								1000,
								"Your Earnings",
								1500,
								"Your Knowledge, Your Earnings",
							]}
							speed={50}
							style={{ fontSize: "2em" }}
							repeat={3}
							cursor={false}
						/>
					</div>

					<div className="mt-10 ">
						<h1 className="lg:text-6xl text-4xl md:text-5xl tracking-tighter box-content font-oswald font-semibold text-center mx-auto lg:px-20 px-3 text-muted/60">
							Share your
							<span className="bg-gradient-to-t text-transparent from-blue-300 to-black bg-clip-text ">
								{` ideas, `}
							</span>
							host,{" "}
							<span className="bg-gradient-to-t text-transparent from-blue-300 to-black  bg-clip-text ">
								{` discussions,`}
							</span>
							<span className="bg-gradient-to-t text-transparent from-blue-300 to-black bg-clip-text ">
								{` events, courses `}
							</span>
							and engage in
							<span className="bg-gradient-to-t text-transparent from-blue-300 to-black bg-clip-text ">
								{` coaching and consultations. `}
							</span>
						</h1>
					</div>
				</div>
				<div className="w-full ">
					<SignUp />
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
