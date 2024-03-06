import { TypeAnimation } from "react-type-animation";
import RegisterForm from "@/components/RegistrationForm";

const HeroBanner = () => {
	const RegisterUser = () => {
		// take to signUp Form
	};

	return (
		<div className="m-auto relative mt-9 ">
			<div className="h-[40px] w-full"></div>
			<div className="flex justify-center mt-[70px] flex-col text-center gap-3 ">
				{/* <p className="text-7xl font-bold" ref={element}>Design it, Wear it, Love it</p>male
				 */}
				{/* <div className="text-7xl font-bold" id="good"></div> */}
				<div className="text-4xl mt-6 font-bold text-[2em] text-textColor-100">
					Welcome to Creator Hub!
				</div>
				<div className="text-4xl mt-6 font-bold text-[2em] text-textColor-100">
					<TypeAnimation
						preRenderFirstString={true}
						sequence={[
							500,
							"Your Knowledge", // initially rendered starting point
							1000,
							"Your Knowledge,Your Earnings",
						]}
						speed={50}
						style={{ fontSize: "2em" }}
						repeat={1}
						cursor={false}
					/>
				</div>
				<p className="text-4xl mt-8 text-white uppercase">
					Stay tuned for the launch
				</p>
			</div>

			<div className="flex justify-center mt-[3em]   ">
				<RegisterForm onSubmit={RegisterUser} />
			</div>
		</div>
	);
};

export default HeroBanner;
