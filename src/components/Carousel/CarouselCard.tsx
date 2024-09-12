import Image from "next/image";

export interface CarouselItem {
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
    <div className="grid h-full w-full grid-cols-1 gap-5 lg:grid-cols-2">
      {/* text section  */}
      <div className="mb-auto flex flex-col gap-3">
        <h1 className="font-rajdhani text-4xl font-semibold text-black/80">
          {title}
        </h1>
        <h3 className="font-rajdhani text-xl font-light text-black/70">
          {description}
        </h3>
      </div>

      {/* media  */}
      {image && (
        <div className="w-full overflow-y-hidden">
          <Image src={image} height={600} width={600} alt="image" />
        </div>
      )}
      {video && (
        <div className="h-full w-full overflow-hidden rounded-lg">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="h-full w-full max-w-5xl"
          ></video>
        </div>
      )}
    </div>
  );
};
