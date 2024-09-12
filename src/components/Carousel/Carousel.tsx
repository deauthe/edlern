"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface CarouselApiDemoProps {
  carouselItems: React.ReactNode[];
  titles: string[];
  pagination: boolean;
  autoScrollDuration: number;
}

export default function CarouselDApiDemo({
  carouselItems,
  titles,
  pagination,
  autoScrollDuration,
}: CarouselApiDemoProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    } else console.log("api", api);

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      console.log("Selected index:", api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: autoScrollDuration, stopOnInteraction: true }),
  );
  return (
    <div className="max-w-screen z-30 w-full">
      {pagination && (
        <div className="my-5 flex flex-row items-center justify-center gap-2 lg:gap-5">
          {titles.map((title, i) => (
            <Button
              key={i}
              className={`text-md my-2 items-center rounded-full bg-black p-2 px-3 text-center font-rajdhani font-bold text-white shadow-sm hover:cursor-pointer hover:text-white sm:text-lg md:p-6 md:px-10 md:text-xl lg:text-2xl ${
                api?.selectedScrollSnap() == i
                  ? "bg-black shadow-lg"
                  : "bg-transparent text-black"
              }`}
              onClick={() => api?.scrollTo(i)}
            >
              {title}
            </Button>
          ))}
        </div>
      )}
      <Carousel
        setApi={setApi}
        className="mt-5 h-full w-full overflow-visible"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-fit">
          {carouselItems.map((item, index) => {
            return (
              <CarouselItem className="h-full max-w-lg" key={index}>
                {item}
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div>
          <CarouselNext />
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
}
