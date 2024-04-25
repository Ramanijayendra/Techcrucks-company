import BrandingIcons from "@/components/icons/branding";
import React from "react";
import Footer from "../../../components/footer/page"

function page() {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center flex-col p-3">
          <div className="lg:w-9/12  bg-white shadow-xl p-4">
            <ul className="py-7">
              <li className="text-[23px] text-gray-600 mb-2">BRANDING</li>
              <li className="text-[#ee6557] text-[19px] mb-7">
                WHERE EVERYTHING STARTS
              </li>
              <li className="text-gray-400 mb-4">
                We help people turn a name on a piece of paper into a brand with
                impact...sometimes we even help with the name.
              </li>
              <li className="text-gray-400 mb-4">
                We have a few approaches depending on budget - from a simple
                logomark treatment to a full brand design with exhaustive
                guidelines.
              </li>
              <li className="text-gray-400 mb-4">
                We start off by asking a lot of questions to really understand
                your business and the competition. We need to learn as much as
                we can about your customers in order to create something they
                will love.{" "}
              </li>
              <li className="text-gray-400 mb-4">
                We do pretty much everything in-house but if you do need help
                with revising brand messaging or copywriting we work with a
                wonderful partner.
              </li>
            </ul>
          </div>

          <div className="lg:w-9/12  bg-slate-200">
            <div className="flex justify-between flex-col  lg:flex-row p-8 ">
              <div className="mt-4 lg:order-1 order-2 text-center lg:text-start">
                <h1 className="text-[20px] text-gray-400">
                  INTERESTED IN WORKING WITH US?
                </h1>
                <p className="py-4">
                  Launch our project planner to get started.
                </p>
                <button className="p-2 bg-[#c5c5c5] text-white hover:bg-[#ee6557] rounded">
                  LAUNCH IT
                </button>
              </div>
              <div className="mt-4 lg:order-2 order-1">
                <div className="flex justify-center">
                  <p className="w-24 h-24 rounded-full border-2 border-[#ee6557] hover:bg-[#ee6557] flex justify-center items-center">
                    <BrandingIcons className="w-14 h-14 hover:fill-white" />{" "}
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
