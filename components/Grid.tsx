import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem key={item.id} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
