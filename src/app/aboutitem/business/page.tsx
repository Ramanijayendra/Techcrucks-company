import React from "react";
import Footer from "@/components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";
import Button from "@/components/button/page"


function page() {
  return (
    <>
      <div className="container ">
        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-white shadow-xl p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div>
                  <ul className="py-7">
                    <li className="text-[23px] text-gray-600 mb-2">STRATEGY</li>
                    <li className="text-[#ee6557] text-[19px] mb-7">
                      THE BUSINESS BIT
                    </li>
                    <li className="text-gray-400 mb-4">
                      When people come to us they know they want more than a
                      website. They are looking for someone who'll have their
                      back and give them the advice they truly need about their
                      brand and business.
                    </li>
                    <li className="text-gray-400 mb-4">
                      We love getting early to an idea and working to understand
                      the concept fully. This means talking to you, asking you
                      difficult questions and throwing out some ideas along the
                      way.
                    </li>

                    <li className="text-gray-400 mb-4">
                      For some clients we do this as part of a larger project
                      and for others it is done as a short consultative piece of
                      work.{" "}
                    </li>

                    <li className="text-gray-400 mb-4">
                      We often help with the business model and provide our
                      experience from working across many project types in
                      differing industries to get the most from our work.{" "}
                    </li>

                    <li className="text-gray-400 mb-4">
                      We like to challenge clients while we are still outsiders
                      whether it is a full fledged business or just the seed of
                      an idea.
                    </li>

                    <li className="text-gray-400 mb-4">
                      The output of working with us will be a renewed sense of
                      direction, focus and a plan for how to create something
                      with impact.
                    </li>
                  </ul>
                </div>

                <div className="lg:w-11/12 lg:mt-10">
                  <Image src={placeimg} className=" " alt="desingimages" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-slate-200">
              <div className="flex justify-between flex-col  lg:flex-row p-8 ">
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
                        className="w-16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 22H14M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 11.3787 17.8135 13.4694 16 14.7344L15.4582 17.3004C15.3097 18.2778 14.4695 19 13.4809 19H10.5191C9.53052 19 8.69027 18.2778 8.54177 17.3004L8 14.7453C6.18652 13.4804 5 11.3787 5 9Z"
                          stroke="#494c4e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 15H16"
                          stroke="#494c4e"
                          strokeWidth="2"
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
