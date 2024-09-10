import Image from "next/image";

export interface CarouselItem {
	buttonText: string;
	title: string;
	description: string;
	image?: string;
	video?: string;
}

export const CarouselCard = ({
	description,
	title,
	image,
	video,
}: CarouselItem) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-96 bg items-center">
			{/* text section  */}
			<div className="flex flex-col gap-3">
				<h1 className="text-lg text-black/80 font-rajdhani font-semibold">
					{title}
				</h1>
				<h3 className="text-md text-black/70 font-sentient font-extralight">
					{description}
				</h3>
			</div>

			{/* media  */}
			{image && (
				<div className="w-full overflow-hidden">
					<Image src={image} height={600} width={600} alt="image" />
				</div>
			)}
			{video && (
				<div className="w-full overflow-hidden">
					<video
						src={video}
						autoPlay
						muted
						loop
						className="w-full max-w-5xl"
					></video>
				</div>
			)}
		</div>
	);
};
