import Image from "next/image";
import React from "react";

import boneimages from "/public/images/placeholder/900x650.svg";
import gallery from "/public/images/placeholder/900x1500.svg";
import Footer from "../../../components/footer/page"

function page() {
  return (
    <>
      <div className="container">
        <div className="mt-6">
        <div className="flex flex-col justify-center gap-8 p-5 lg:flex-row py-8 ">
          <div className=" lg:w-9/12">
            <Image
              src={boneimages}
              className="w-full lg:h-screen"
              alt="boneimages"
            />
          </div>

          <div className="lg:w-3/12 lg:text-start text-center text-gray-400 ">
            <h1 className="text-3xl font-bold mb-5 text-black">7Bone</h1>
            <p className="mb-5">
              Growing from their initial roots in Southampton 7Bone have grown
              to a number of sites across the UK. They make wonderful burgers
              and do it with passion and attitude.
            </p>
            <p className="mb-5">
              We took their brand and humour to create an experimental site that
              brings a nostalgic feel with retro UI, animations and sound. Easy
              to find location information and a clear menu to make it easy to
              choose what to order.
            </p>
            <p className="mb-5">
              They can keep things updated easily using Craft CMS.
            </p>
            <ul className="mb-5">
              <li className="text-orange-500">UX</li>
              <li className="py-2">User Interface Design</li>
              <li>Frontend Development</li>
              <li className="py-2">Backend Development</li>
            </ul>
            <div className="mt-5">
              <button className="bg-[#c5c5c5] p-2.5 rounded text-white hover:bg-[#ee6557]">
                VIEW LIVE SITE
              </button>
            </div>
          </div>
        </div>



        <div className="flex justify-center p-5 lg:justify-start mb-14 ">
            <Image src={gallery} className="lg:w-7/12 w-full h-full" alt="boneimages" /> 
        </div>

        <Footer/>
      </div>
      </div>
      
    </>
  );
}

export default page;