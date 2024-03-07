import { TypeAnimation } from "react-type-animation";
import RegisterForm from "@/components/RegistrationForm";

const HeroBanner = () => {
	const RegisterUser = () => {
		// take to signUp Form
	};

	return (
		<div className="mx-auto  relative my-auto font-oswald font-extrabold">
			<div className="h-[40px] w-full"></div>
			<div className="flex justify-center mt-[70px] flex-col text-center gap-3 ">
				{/* <p className="text-7xl font-bold" ref={element}>Design it, Wear it, Love it</p>male
				 */}
				{/* <div className="text-7xl font-bold" id="good"></div> */}

				<div className="text-5xl mt-6 font-semibold tracking-tighter uppercase text-white-200">
					<TypeAnimation
						preRenderFirstString={true}
						sequence={[
							500,
							"Your Knowledge", // initially rendered starting point
							1000,
							"Your Knowledge  Your Earnings",
						]}
						speed={50}
						style={{ fontSize: "2em" }}
						repeat={3}
						cursor={false}
					/>
				</div>
				<div className="text-8xl mt-6 font-bold tracking-tighter  text-textColor-100 uppercase text-white-200/[0.8]">
					Welcome to Creator Hub!
				</div>
			</div>

			<div className="flex justify-center mt-[3em]   ">
				<RegisterForm onSubmit={RegisterUser} />
			</div>
		</div>
	);
};

export default HeroBanner;
