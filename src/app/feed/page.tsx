import React from "react";

import Image from "next/image";

import { TwittreIcons } from "@/components/icons/twitter";
import { InstagramIcons } from "@/components/icons/instagram";

import placeimage from "/public/images/placeholder/backphoto-.jpg";

import Footer from "../../components/footer/page";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="container">
        <div className="text-center py-16">
          <h1 className="text-5xl mb-10 font-bold">TechCrucks feed</h1>
          <p className="text-xl text-gray-400 font-normal">
            Tasty morsels from our online chatter
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 p-4 ">
          <div className="text-center flex justify-center">
            <p className="w-32 border-b-2 border-gray-400 "></p>
          </div>

          <div className="py-6 flex justify-center">
            <p className="w-28 h-28 rounded-full border-2 border-[#ee6557]  flex justify-center items-center ">
              <InstagramIcons className="w-14 h-14 text-gray-500  " />
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 items-center lg:flex-row ">
            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <small className="border-b-2 border-gray-400">5 YEARS AGO</small>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center gap-10 p-4">
          <div className="text-center flex justify-center">
            <p className="w-32 border-b-2 border-gray-400 "></p>
          </div>
          <div className="text-center mt-6">
            <p className="text-balck text-3xl">TWITTER</p>
          </div>

          <div className="py-10 flex justify-center">
            <p className="w-28 h-28 rounded-full border-2 border-[#ee6557]  flex justify-center items-center ">
              <TwittreIcons className="w-14 h-14 text-gray-500 font-bold " />
            </p>
          </div>

          <div className="lg:w-8/12 flex justify-center items-center text-center feedimages ">
            <Link href="">
              <p className="text-2xl text-gray-400">
                Our 'Yellow Room' is being hired out tonight for it's first
                non-TechCrucks event, Link natural, organic and biodynamic wi…{" "}
              </p>
            </Link>
          </div>

          <div className="flex justify-center pt-10">
            <small className="border-b-2 border-gray-400">5 YEARS AGO</small>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center gap-10 p-4">
          <div className="text-center flex justify-center">
            <p className="w-32 border-b-2 border-gray-400 "></p>
          </div>

          <div className="py-6 flex justify-center">
            <p className="w-28 h-28 rounded-full border-2 border-[#ee6557]  flex justify-center items-center ">
              <InstagramIcons className="w-14 h-14 text-gray-500  " />
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 items-center lg:flex-row">
            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <small className="border-b-2 border-gray-400">5 YEARS AGO</small>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center gap-10 p-4">
          <div className="text-center flex justify-center">
            <p className="w-32 border-b-2 border-gray-400 "></p>
          </div>

          <div className="py-6 flex justify-center">
            <p className="w-28 h-28 rounded-full border-2 border-[#ee6557]  flex justify-center items-center ">
              <InstagramIcons className="w-14 h-14 text-gray-500  " />
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 items-center lg:flex-row ">
            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <small className="border-b-2 border-gray-400">5 YEARS AGO</small>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center gap-10 p-4">
          <div className="text-center flex justify-center">
            <p className="w-32 border-b-2 border-gray-400 "></p>
          </div>
          <div className="text-center mt-6">
            <p className="text-balck text-3xl">TWITTER</p>
          </div>

          <div className="py-6 flex justify-center">
            <p className="w-28 h-28 rounded-full border-2 border-[#ee6557]  flex justify-center items-center ">
              <TwittreIcons className="w-14 h-14 text-gray-500 font-bold " />
            </p>
          </div>

          <div className="lg:w-8/12 flex justify-center items-center text-center feedimages ">
            <Link href="">
              <p className="text-2xl text-gray-400 ">
                RT @CodebarBrighton: Great fun at last nights workshop! Thanks
                to @techcrucks.com for the awesome space and the delicious pizza{" "}
              </p>
            </Link>
          </div>

          <div className="flex justify-center pt-10">
            <small className="border-b-2 border-gray-400">5 YEARS AGO</small>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center gap-10 p-4">
          <div className="text-center flex justify-center">
            <p className="w-32 border-b-2 border-gray-400 "></p>
          </div>

          <div className="py-6 flex justify-center">
            <p className="w-28 h-28 rounded-full border-2 border-[#ee6557]  flex justify-center items-center ">
              <InstagramIcons className="w-14 h-14 text-gray-500  " />
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 items-center lg:flex-row ">
            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <Link href="">
                <Image src={placeimage} alt="feedimagees" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <small className="border-b-2 border-gray-400">5 YEARS AGO</small>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center gap-10 p-4">
          <div className="text-center flex justify-center">
            <p className="w-32 border-b-2 border-gray-400 "></p>
          </div>
          <div className="text-center mt-6">
            <p className="text-balck text-3xl">TWITTER</p>
          </div>

          <div className="py-6 flex justify-center">
            <p className="w-28 h-28 rounded-full border-2 border-[#ee6557]  flex justify-center items-center  ">
              <TwittreIcons className="w-14 h-14 text-gray-500 font-bold " />
            </p>
          </div>

          <div className="lg:w-8/12  flex justify-center items-center text-center feedimages ">
            <Link href="">
              <p className="text-2xl text-gray-400   ">
                Psyching ourselves up for the Indoor Karting Design Agencies
                Team Challenge tonight - not saying we're competitive…{" "}
              </p>
            </Link>
          </div>

          <div className="flex justify-center pt-10">
            <small className="border-b-2 border-gray-400">5 YEARS AGO</small>
          </div>
        </div>

        <div className="py-14 flex justify-center">
          <button className="text-xl p-3 bg-[#c5c5c5] rounded text-white hover:bg-[#ee6557]  ">
            SHOW MORE
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default page;
