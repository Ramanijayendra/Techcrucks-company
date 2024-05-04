import React from "react";

import placeimg from "/public/images/placeholder/300x300.svg";

import Hexagon from "@/components/hexagon/page";

export const jobsgallery = [
  {
    id: 1,
    img: placeimg,
  },
  {
    id: 2,
    img: placeimg,
  },
  {
    id: 3,
    img: placeimg,
  },
  {
    id: 4,
    img: placeimg,
  },
  {
    id: 5,
    img: placeimg,
  },
  {
    id: 6,
    img: placeimg,
  },
  {
    id: 7,
    img: placeimg,
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
            <div className="flex flex-col gap-6 justify-center items-center   lg:flex-row mt-8 lg:my-[-40px] flex-wrap">
              {jobsgallery.slice(first, last).map((values) => {
                const { id, img } = values;
                return <Hexagon id={id} photo={img} />;
              })}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default page;
