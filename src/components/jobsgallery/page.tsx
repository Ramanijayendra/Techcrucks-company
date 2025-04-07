import React from "react";
import Hexagon from "@/components/hexagon/page";

export const jobsgallery = [
  {
    id: 1,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 2,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 3,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 4,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 5,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 6,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 7,
    img:"/images/placeholder/300x300.svg",
  },
];

function page() {
  var first = 0;
  var last = 0;
  var current = 4;
  return (
    <>
      <section>
        {jobsgallery.map(() => {
          if (last > jobsgallery.length - 1) {
            return;
          }
          first = last;
          last = first + current;
          current === 4 ? (current = 3) : (current = 4);
          return (
            <>
            <div className="flex flex-col gap-6 justify-center items-center   lg:flex-row mt-8 lg:my-[-40px] flex-wrap">
              {jobsgallery.slice(first, last).map((values) => {
                const { id, img } = values;
                // eslint-disable-next-line react/jsx-key
                return <Hexagon id={id} photo={img} />;
              })}
            </div>
              </>
          );
        })}
      </section>
    </>
  );
}

export default page;
