import React from "react";
import placeimg from "/images/placeholder/300x300.svg";
import Hexagonwork from "@/components/hexagonwork/page";

export const Imagesgallery = [
  {
    id: 1,
    img: placeimg
  },
  {
    id: 2,
    img: placeimg
  },
  {
    id: 3,
    img: placeimg
  },
  {
    id: 4,
    img: placeimg
  },
  {
    id: 5,
    img: placeimg
  },
  {
    id: 6,
    img: placeimg
  },
  {
    id: 7,
    img: placeimg
  },
  {
    id: 8,
    img: placeimg
  },
  {
    id: 9,
    img: placeimg
  },
  {
    id: 10,
    img: placeimg
  },
  {
    id: 11,
    img: placeimg
  },
  {
    id: 12,
    img: placeimg
  },
  {
    id: 13,
    img: placeimg
  },
  {
    id: 14,
    img: placeimg
  },
  {
    id: 15,
    img: placeimg
  },
  {
    id: 16,
    img: placeimg
  },
  {
    id: 17,
    img: placeimg
  },
  {
    id: 18,
    img: placeimg
  },
  {
    id: 19,
    img: placeimg
  },
  {
    id: 20,
    img: placeimg
  },
  {
    id: 21,
    img: placeimg
  },
  {
    id: 22,
    img: placeimg
  },
  {
    id: 23,
    img: placeimg
  },
  {
    id: 24,
    img: placeimg
    },
];

function page() {
  var current_count = 3;
  var start = 0;
  var end = 0;

  return (
    <>
      <section className="py-10">
        {Imagesgallery.map(() => {
          if (end > Imagesgallery.length - 1) {
            return;
          }
          start = end;
          end = start + current_count;

          current_count === 3 ? (current_count = 4) : (current_count = 3);
          return (
            <>
            <div className="flex flex-col gap-7 justify-center items-center mt-8 lg:my-[-40px] lg:flex-row">
              {Imagesgallery.slice(start, end).map((value) => {
                return (
                  <Hexagonwork
                    id={value.id}
                    img={value.img}
                    key={value.id}
                  />
                );
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
