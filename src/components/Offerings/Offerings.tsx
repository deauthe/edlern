import React from "react";
import { OfferingCardsStatic } from "../CategoryStrip/staticCategoryStripItems";
import FloatingCard from "./FloatingCard";

const Offerings = () => {
  return (
    <div className="mx-auto flex h-fit w-full flex-col px-5 pt-5 font-rajdhani md:gap-5">
      <div className="mx-auto w-fit bg-gradient-to-t from-black/90 to-black bg-clip-text font-sentient text-3xl tracking-tight text-transparent md:text-4xl lg:text-5xl">
        Platform Offerings
      </div>
      <div className="mx-auto mt-auto grid w-fit grid-cols-3 gap-5 rounded-lg bg-gradient-to-r from-[#CCFED8] to-[#93B9FE] p-10 md:grid-cols-3 lg:grid-cols-6">
        {OfferingCardsStatic.map((item, idx) => {
          return (
            <FloatingCard
              title={item.title}
              icon={item.icon}
              key={idx}
              delay={idx * 0.2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offerings;
