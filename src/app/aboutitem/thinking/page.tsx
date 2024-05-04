import React from "react";
import Footer from "../../../components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";
import UserexperienceIcons from "@/components/icons/userexperience";

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
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2.5 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    LAUNCH IT
                  </button>
                </div>
                <div className="mt-4 lg:order-2 order-1">
                  <div className="flex justify-center">
                    <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#b9b5b5] flex justify-center items-center">
                      <UserexperienceIcons className="w-14 h-14 hover:fill-white" />{" "}
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
