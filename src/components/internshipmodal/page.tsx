"use client";
import React from "react";
import "react-responsive-modal/styles.css";

import Hexagonabout from "../../components/hexagonabout/page"


export const internshipdata = [
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
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
];

function page() {

  var current_list = 3;
  var frist = 0;
  var last = 0;

  return (
    <>


     <section>
        {internshipdata.map(() => {
          if (last > internshipdata.length - 1) {
            return;
          }
          frist = last;
          last = frist + current_list;
          current_list === 3 ? (current_list = 4) : (current_list = 3);

          return (
            <div className="flex justify-center flex-col items-center gap-6 mt-5  lg:flex-row lg:mt-[-50px] ">
              {internshipdata.slice(frist, last).map((values) => {
                return (


                  <Hexagonabout 
                   id={values.id}
                   key={values.id}
                  />
                );
              })}
            </div>
          );
        })}
     </section>


    </>
  );
}

export default page;
