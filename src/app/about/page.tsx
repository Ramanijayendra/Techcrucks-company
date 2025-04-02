import Image from "next/image";
import React from "react";

import Footer from "@/components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Link from "next/link";
import Sectionone from "@/components/section/page";
import Modalslider from "@/components/modal/page";
import Aboutsection from "@/components/aboutsection/page";
import Jobsgallery from "@/components/jobsgallery/page";

function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="text-center p-5 py-16 m-auto lg:w-7/12">
            <h1 className="text-5xl  mb-10  font-bold">We are Techcrucks</h1>
            <p className="text-2xl text-gray-400 font-normal text-[19px] ">
              {" "}
              Founded in 2006, techcrucks is a small web design & development
              agency based in indian. Over the last few years we ve made a
              reputation for building websites that look great and are
              easy-to-use.
            </p>
            <p className="text-center text-[19px] mt-6 text-gray-400">
              If you like what we do, and think we could work together, then get
              in touch or launch our project planner.
            </p>
          </div>

          <div>
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 text-center text-[23px] text-gray-500">
              WHAT WE DO{" "}
            </p>
          </div>

          <Aboutsection />

          <div className="py-8">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 text-center text-[23px] text-gray-500">
              THE PLAYERS{" "}
            </p>
          </div>
        </section>

        <section>
          <Modalslider />

          <div className="py-8 p-4">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 text-center text-[23px] text-gray-500">
              BEVERAGES CONSUMED THIS WEEK{" "}
            </p>
          </div>

          <div className=" flex justify-center gap-6 py-10">
            <div className="w-16 h-10 flex justify-between">
              <p className="w-5 h-5 rounded-full bg-slate-300 pe-3"></p>
              <p>TEA</p>
            </div>
            <div className="w-24 h-10 flex justify-between">
              <p className="w-5 h-5 rounded-full bg-[#16a6b6] pe-3"></p>
              <p>COFFEE</p>
            </div>
            <div className="w-20 h-10 flex justify-between">
              <p className="w-5 h-5 rounded-full bg-[#ee6557] pe-3"></p>
              <p>BEER</p>
            </div>
          </div>

          <div className="py-14">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 text-center text-[23px] text-gray-500">
              TECHCRUCKS BY NUMBERS{" "}
            </p>
          </div>
        </section>

        <section>
          <Sectionone />

          <div className="py-8 p-4">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 text-center text-[23px] text-gray-500">
              PARTNERS{" "}
            </p>
          </div>

          <div className="flex flex-col gap-8  p-7  justify-center items-center lg:flex-row pb-16  ">
            <div className="contact-carts hexagonhome-container relative w-[100%] lg:w-[260px] lg:h-[290px] lg:border-2 border-[#eee2e2] bg-[#df3e3e]">
              <Link href="https://www.awfulgood.co.uk/">
                <Image
                  src={placeimg}
                  className="hexagonhome-image images-carts block w-[100%]  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
                <div className="overlay-carts absolute top-0 bottom-0 left-0  right-0  w-[100%] h-[100%] opacity-0 bg-[#db390d]">
                  <div className="text-carts text-center  text-white top-[50%]  left-[50%] absolute ">
                    <div className="text-center">
                      <p className="mb-4"> JASPER</p>
                      <div className="flex justify-center">
                        <p className="w-16 border-[1px] border-white"></p>
                      </div>
                      <p className="mt-3">TECHNICAL DIRECTOR</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="contact-carts hexagonhome-container relative w-[100%] lg:w-[260px] lg:h-[290px] lg:border-2 border-[#eee2e2] bg-[#df3e3e]">
              <Link href="https://www.djgbradley.com/">
                <Image
                  src={placeimg}
                  className="hexagonhome-image images-carts block w-[100%]  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
                <div className="overlay-carts absolute top-0 bottom-0 left-0  right-0  w-[100%] h-[100%] opacity-0 bg-[#db390d]">
                  <div className="text-carts text-center  text-white top-[50%]  left-[50%] absolute ">
                    <div className="text-center">
                      <p className="mb-4"> JASPER</p>
                      <div className="flex justify-center">
                        <p className="w-16 border-[1px] border-white"></p>
                      </div>
                      <p className="mt-3">TECHNICAL DIRECTOR</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className=" pb-10 p-4">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 mb-20 text-center text-[23px] text-gray-500">
              TECHCRUCKS SNAPS{" "}
            </p>
          </div>
        </section>

        <section>
          <Jobsgallery />
          <div className="mt-20 p-4">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-16"></p>
            </div>
            <p className="py-3 text-center text-[16px] text-gray-500">FEED </p>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
