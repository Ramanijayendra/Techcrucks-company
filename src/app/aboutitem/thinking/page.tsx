import React from "react";
import Footer from "../../../components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";
import Button from "@/components/button/page"


function page() {
  return (
    <>
      <div className="container ">
        <section>
          <div className="flex justify-center items-center flex-col">
            <div className="lg:w-9/12  bg-white shadow-xl p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div>
                  <ul className="py-7">
                    <li className="text-[23px] text-gray-600 mb-2">
                      USER EXPERIENCE
                    </li>
                    <li className="text-[#ee6557] text-[19px] mb-7">
                      THINKING ABOUT PEOPLE
                    </li>
                    <li className="text-gray-400 mb-4">
                      We try to call users people - because that is what they
                      are after all. We interview and test with real people
                      (both client and user groups) with the end output being
                      documentation such as sitemaps, archetypes, flows and
                      wireframes.
                    </li>
                    <li className="text-gray-400 mb-4">
                      Wireframes are simply layouts of pages that provide
                      guidance on structure. They are not styled but exist to
                      create a solid framework we can use for design and
                      content.
                    </li>

                    <li className="text-gray-400 mb-4">
                      These outputs replace the original brief and serve as
                      living documents that can be updated easily to reflect
                      content and to test flow.
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
          <div className="flex justify-center items-center flex-col">
            <div className="lg:w-9/12  bg-slate-200">
              <div className="flex justify-between flex-col  lg:flex-row p-8 ">
                <div className="mt-4 lg:order-1 order-2 text-center lg:text-start">
                  <h1 className="text-[20px] text-gray-400">
                    INTERESTED IN WORKING WITH US?
                  </h1>
                  <p className="py-4 text-gray-400">
                    Launch our project planner to get started.
                  </p>
                  <Button title=" LAUNCH IT" />
                 
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
                          d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                          stroke="#494c4e"
                          strokeWidth="2"
                        />
                        <path
                          d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                          stroke="#494c4e"
                          strokeWidth="2"
                        />
                        <path
                          d="M6 19C6.63819 16.6928 8.27998 16 12 16C15.72 16 17.3618 16.6425 18 18.9497"
                          stroke="#494c4e"
                          strokeWidth="2"
                          strokeLinecap="round"
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
