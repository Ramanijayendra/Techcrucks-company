"use client";
import React from "react";


import Hexagonabout from "@/components/hexagonabout/page";

export const modaldata = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

function page() {

  var current_list = 3;
  var frist = 0;
  var last = 0;

  return (
    <>
      <section className="py-10">
        {modaldata.map(() => {
          if (last > modaldata.length - 1) {
            return;
          }
          frist = last;

          last = frist + current_list;
          current_list === 3 ? (current_list = 4) : (current_list = 3);

          return (
            <div className="flex flex-col gap-7 justify-center items-center mt-8 lg:my-[-40px] lg:flex-row">
              {modaldata.slice(frist, last).map((values) => {
                return <Hexagonabout id={values.id} key={values.id} />;
              })}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default page;
