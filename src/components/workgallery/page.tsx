import React from "react";
import Hexagonwork from "@/components/hexagonwork/page";

export const Imagesgallery = [
  {
    id: 1,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 2,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 3,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 4,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 5,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 6,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 7,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 8,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 9,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 10,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 11,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 12,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 13,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 14,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 15,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 16,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 17,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 18,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 19,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 20,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 21,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 22,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 23,
    img:"/images/placeholder/300x300.svg"
  },
  {
    id: 24,
    img:"/images/placeholder/300x300.svg"
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
