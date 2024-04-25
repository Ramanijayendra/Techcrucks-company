import React from "react";
import Footer from "../../../components/footer/page";
import IllustrationIcons from "@/components/icons/Illustration";

function page() {
  return (
    <>
      <div className="container ">
        <div className="flex justify-center items-center flex-col p-3">
          <div className="lg:w-9/12  bg-white shadow-xl p-6">
            <ul className="py-7">
              <li className="text-[23px] text-gray-600 mb-2">ILLUSTRATION</li>
              <li className="text-[#ee6557] text-[19px] mb-7">
                MEANINGFUL & BEAUTIFUL CONTENT
              </li>
              <li className="text-gray-400 mb-4">
                Whether the illustrations will live on a website, for social or
                as part of a larger campaign we can put together beautiful
                images in a number of styles. Everything is done in-house to
                make sure it is perfectly matched to the brand tone.{" "}
              </li>
              <li className="text-gray-400 mb-4">
                Whether the illustrations will live on a website, for social or
                as part of a larger campaign we can put together beautiful
                images in a number of styles. Everything is done in-house to
                make sure it is perfectly matched to the brand tone.
              </li>
            </ul>
          </div>

          <div className="lg:w-9/12  bg-slate-200">
            <div className="flex justify-between flex-col  lg:flex-row p-8">
              <div className="mt-4 lg:order-1 order-2 text-center lg:text-start">
                <h1 className="text-[20px] text-gray-400">
                  INTERESTED IN WORKING WITH US?
                </h1>
                <p className="py-4 text-gray-400">
                  Launch our project planner to get started.
                </p>
                <button className="p-2 bg-[#c5c5c5] text-white hover:bg-[#ee6557] rounded">
                  LAUNCH IT
                </button>
              </div>
              <div className="mt-4 lg:order-2 order-1">
                <div className="flex justify-center">
                  <p className="w-24 h-24 rounded-full border-2 border-[#ee6557] hover:bg-[#ee6557] flex justify-center items-center">
                    <IllustrationIcons className="w-14 h-14 hover:fill-white" />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
