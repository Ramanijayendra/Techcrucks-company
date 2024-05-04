import React from "react";
import Footer from "../../../components/footer/page";
import Button from "@/components/button/page"


function page() {
  return (
    <>
      <div className="container ">
        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-white shadow-xl p-6">
              <ul className="py-7">
                <li className="text-[23px] text-gray-600 mb-2">ILLUSTRATION</li>
                <li className="text-[#ee6557] text-[19px] mb-7">
                  MEANINGFUL & BEAUTIFUL CONTENT
                </li>
                <li className="text-gray-400 mb-4">
                  Whether the illustrations will live on a website, for social
                  or as part of a larger campaign we can put together beautiful
                  images in a number of styles. Everything is done in-house to
                  make sure it is perfectly matched to the brand tone.{" "}
                </li>
                <li className="text-gray-400 mb-4">
                  Whether the illustrations will live on a website, for social
                  or as part of a larger campaign we can put together beautiful
                  images in a number of styles. Everything is done in-house to
                  make sure it is perfectly matched to the brand tone.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-slate-200">
              <div className="flex justify-between flex-col  lg:flex-row p-8">
                <div className="mt-4 lg:order-1 order-2 text-center lg:text-start">
                  <h1 className="text-[20px] text-gray-400">
                    INTERESTED IN WORKING WITH US?
                  </h1>
                  <p className="py-4 text-gray-400">
                    Launch our project planner to get started.
                  </p>
                  <Button title="LAUNCH IT" />
                </div>
                <div className="mt-4 lg:order-2 order-1">
                  <div className="flex justify-center">
                    <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#dedede] flex justify-center items-center">
                      <svg
                        className="w-14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                          stroke="#494c4e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                          stroke="#494c4e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.32 12H10.97C11.24 12 11.58 12.18 11.72 12.4L12.85 14.1C13.08 14.44 13.03 14.95 12.74 15.24L10.28 17.7C9.93 18.05 9.35 18.05 9 17.7L6.54 15.24C6.25 14.95 6.2 14.44 6.43 14.1L7.56 12.4C7.72 12.18 8.06 12 8.32 12Z"
                          stroke="#494c4e"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
