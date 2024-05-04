import React from "react";
import Footer from "../../../components/footer/page";
import IllustrationIcons from "@/components/icons/Illustration";

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
                      <IllustrationIcons className="w-14 h-14 hover:fill-white" />{" "}
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
