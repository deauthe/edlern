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
    <div
      className={`grid h-full w-full grid-cols-1 gap-5 ${image ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}
    >
      {/* text section  */}
      <div className="col-span-1 mb-auto flex flex-col gap-3">
        <h1 className="font-rajdhani text-4xl font-semibold text-black/80">
          {title}
        </h1>
        <h3 className="font-rajdhani text-xl font-light text-black/70">
          {description}
        </h3>
      </div>

      {/* media  */}
      {image && (
        <div className={`col-span-2 w-full overflow-y-hidden lg:min-h-96`}>
          <img
            src={image}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full"
          />
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
