import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const ImageCarousel = () => {
	return (
		<div>
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

export default ImageCarousel;
