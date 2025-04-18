import Image from "next/image";
import React from "react";
import Footer from "@/components/footer/page";
import Button from "@/components/button/page"


function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="flex flex-col justify-center gap-7 p-5 lg:flex-row py-4 ">
            <div className=" lg:w-11/12">
              <Image
                src={"/images/placeholder/1200x650.svg"}
                className="w-full h-full"
                alt="boneimages"
                width={"100"}
                height={"100"}
              />
            </div>

            <div className="lg:w-3/12 lg:text-start text-center text-gray-400 ">
              <h1 className="text-3xl font-bold mb-5 text-black">home item</h1>
              <p className="mb-5">
                Growing from their initial roots in Southampton 7Bone have grown
                to a number of sites across the UK. They make wonderful burgers
                and do it with passion and attitude.
              </p>
              <p className="mb-5">
                We took their brand and humour to create an experimental site
                that brings a nostalgic feel with retro UI, animations and
                sound. Easy to find location information and a clear menu to
                make it easy to choose what to order.
              </p>
              <p className="mb-5">
                They can keep things updated easily using Craft CMS.
              </p>
              <ul className="mb-5">
                <li className="text-orange-500">UX</li>
                <li className="py-2">User Interface Design</li>
                <li>Frontend Development</li>
                <li className="py-2">Backend Developmen t</li>
              </ul>
              <div className="mt-5">
                <Button title="VIEW LIVE SITE" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center p-5 lg:justify-start mb-14 ">
            <Image
              src={"/images/placeholder/900x1500.svg"}
              className="lg:w-7/12 w-full h-full"
              alt="boneimages"
              width={"100"}
              height={"100"}
            />
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
