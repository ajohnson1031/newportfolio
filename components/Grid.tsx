"use client";
import { gridItems } from "@/data";
import dynamic from "next/dynamic";

const BentoGrid = dynamic(() => import("./ui/BentoGrid").then((m) => m.BentoGrid), { ssr: false });
const GridItem = dynamic(() => import("./ui/BentoGrid").then((m) => m.BentoGridItem), {
  ssr: false,
});

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
