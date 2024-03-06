import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
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
							"Your Earnings",
						]}
						speed={50}
						style={{ fontSize: "2em" }}
						repeat={3}
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

			<div className="flex justify-center">
				<div className="mt-[35px]  lg:w-[70%]  md:w-[80%] ">
					<Swiper
						effect={""}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={"auto"}
						coverflowEffect={{
							rotate: 0,
							stretch: 100,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination, Navigation]}
						className="mySwiper "
					>
						<SwiperSlide className="">
							<img
								src="/bg-image-1.png"
								alt="new"
								width={700}
								height={600}
								className="mx-auto"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="/bannerImage.webp"
								alt="Banner Image"
								width="full"
								height="full"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="/bannerImage.webp"
								alt="Banner Image"
								width="full"
								height="full"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
