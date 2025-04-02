import React from "react";
import placeimg from "/public/images/placeholder/250.svg";
import Hexagonworkone from "@/components/hexagonworkone/page";

export const workgallery = [
  {
    id: 1,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 2,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 3,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 4,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 5,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 6,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 7,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 8,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 9,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 10,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 11,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 12,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 13,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
  {
    id: 14,
    img: placeimg,
    linkdata: "https://brightonsource.co.uk",
  },
];

function page() {
  var current_list = 3;
  var first = 0;
  var last = 0;

  return (
    <>
      <section className=" my-24">
        {workgallery.map(() => {
          if (last > workgallery.length - 1) {
            return;
          }
          first = last;

          last = first + current_list;
          current_list === 3 ? (current_list = 4) : (current_list = 3);

          return (
            <>
           
            <div className="flex flex-col gap-7 justify-center items-center mt-8 lg:my-[-40px] lg:flex-row">
              {workgallery.slice(first, last).map((value) => {
                return (
                  < Hexagonworkone 
                    id={value.id}
                    linkdata={value.linkdata}
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
