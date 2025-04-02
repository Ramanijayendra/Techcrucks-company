import React from "react";
import Lgbutton from "@/components/lgbutton/page"

export const plannerdata = [
  {
    id: 1,
    title: "STRATEGY",
    text: "Taking a simple idea through to a finished project by building a solid business foundation.",
  },
  {
    id: 2,
    title: "UX",
    text: "Taking a simple idea through to a finished project by building a solid business foundation.",
  },
  {
    id: 3,
    title: "DESING",
    text: "Taking a simple idea through to a finished project by building a solid business foundation.",
  },

  {
    id: 4,
    title: "DEVELOPMENT",
    text: "Taking a simple idea through to a finished project by building a solid business foundation.",
  },
  {
    id: 5,
    title: "CMS IMPLEMENTATION",
    text: " Taking a simple idea through to a finished project by building a solid business foundation.",
  },
  {
    id: 6,
    title: "NOT SURE",
    text: " Taking a simple idea through to a finished project by building a solid business foundation.",
  },
];

function page() {

  var first = 0;
  var last = 0;
  var currvalues = 3;

  return (
    <>

      {
        plannerdata.map(() => {
          if (last > plannerdata.length - 1) {
            return;
          }
          first = last;
          last = first + currvalues;
          currvalues === 3 ? (currvalues = 3) : (currvalues = 3)
          return (
            <>
              <div className="flex flex-col gap-6 justify-center items-center flex-wrap py-2 lg:flex-row p-6">
                {
                  plannerdata.slice(first, last).map((value) => {
                    return (
                      <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 " key={value.id}>
                        <span className="tooltiptext absolute bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700  text-white opacity-0 ">
                          <div className="p-4 text-[17px] ">
                            <p>
                              {value.text}
                            </p>
                          </div>
                        </span>

                        <Lgbutton title={value.title} />
                      </div>
                    )
                  })
                }
              </div>
            </>
          )
        })
      }

    </>
  );
}

export default page;
