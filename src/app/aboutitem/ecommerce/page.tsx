import React from "react";
import Footer from "../../../components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";
import Link from "next/link";
import EmailIcons from "@/components/icons/email";

function page() {
  return (
    <>
      <div className="container">
        <div className="text-center p-3 mt-10 m-auto lg:w-8/12">
          <h1 className="text-6xl mb-10  font-bold">
            Move your products online…
          </h1>
          <p className="text-[20px] text-gray-400 font-normal  ">
            We have been creating beautiful, functional e-commerce websites
            since 2006.
          </p>

          <div className="flex justify-center text-center mt-5">
            <p className="border-t-2 border-gray-500 w-28 "></p>
          </div>

          <div className="text-center p-6  m-auto">
            <p className="text-[18px] text-gray-400 font-normal  ">
              Maybe you have been thinking about doing this for a while but
              recent events have made you speed things up? Or your current shop
              uses an old platform and development has become a pain?
            </p>
            <p className="text-[18px] mt-6 text-gray-400 font-normal  ">
              We have worked with a number of different businesses from small
              shops to those turning over millions so you can be sure we know
              our onions.{" "}
            </p>
          </div>

          <div className="flex justify-center text-center  py-10">
            <p className="border-t-2 border-gray-500 w-36 ">
              <span className="text-center text-2xl text-gray-400 ">
                PLATFORMS
              </span>
            </p>
          </div>

          <div className="text-center">
            <p className="text-[18px] mt-6 text-gray-400 font-normal  ">
              For most of our e-commerce projects we use Shopify. It’s easy to
              configure to any company’s needs no matter how complex their
              fulfilment or invoicing processes.{" "}
            </p>

            <p className="text-[18px] mt-6 text-gray-400 font-normal  ">
              If you need something more involved then we use Solidus. It is a
              flexible, open-source platform built on top of the Ruby on Rails
              framework.
            </p>
          </div>

          <div className="flex justify-center text-center  py-10">
            <p className="border-t-2 border-gray-500 w-36 ">
              <span className="text-center text-2xl text-gray-400 ">
                EXAMPLES
              </span>
            </p>
          </div>

          <div className="text-center">
            <p className="text-[16px] mt-6 text-gray-400 font-normal  ">
              We can guide you from idea all the way through to transacting
              site. Just as we have done for these businesses:
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row gap-8 p-6 py-7">
          <div className="contact-carts hexagonhome-container relative w-[100%] lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#df3e3e]">
            <Link href="/homeitem/undercover">
              <Image
                src={placeimg}
                className="hexagonhome-image images-carts block w-[100%]  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
              <div className="overlay-carts absolute top-0 bottom-0 left-0  right-0  w-[100%] h-[100%] opacity-0 bg-[#db390d]">
                <div className="text-carts text-center  text-white top-[50%]  left-[50%] absolute ">
                  <h1>Hello undercover</h1>
                </div>
              </div>
            </Link>
          </div>

          <div className="contact-carts hexagonhome-container relative w-[100%] lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#df3e3e]">
            <Link href="/workitem/mason">
              <Image
                src={placeimg}
                className="hexagonhome-image images-carts block w-[100%]  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
              <div className="overlay-carts absolute top-0 bottom-0 left-0  right-0  w-[100%] h-[100%] opacity-0 bg-[#db390d]">
                <div className="text-carts text-center  text-white top-[50%]  left-[50%] absolute ">
                  <h1>Hello mason</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center text-center items-center py-8">
          <p className="border-t-2 border-gray-500 w-36 "> </p>
        </div>

        <div className="text-center">
          <span className="text-center text-2xl text-gray-400 ">
            SOUND GOOD?
          </span>
          <p className="text-[17px] text-gray-400 mt-5">
            Get in touch with us to talk about planning an e-commerce project.
          </p>
        </div>

        <div className="py-6">
          <div className="text-center">
            <p className="flex justify-center items-center">
              <span className="w-28 h-28  rounded-full border-2 border-[#adadad] flex justify-center items-center hover:bg-[#adadad] hover:text-white">
                <EmailIcons className="w-16" />
              </span>
            </p>
            <p className="text-red-500 py-4 text-[17px]">EMAIL</p>
            <p>
              <span className=" text-[15px]">hello@techcrucks.com</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center text-center items-center py-8">
          <p className="border-t-2 border-gray-500 w-36 "> </p>
        </div>

        <div className="text-center p-4">
          <span className="text-center text-[18px] text-gray-400 ">
            OR GET PLANNING STRAIGHT AWAY:
          </span>
        </div>

        <div className="mb-12">
          <p className="text-center text-xl text-gray-700 py-7">YOUR DETAILS</p>

          <form action="">
            <div className="flex justify-center">
              <div className="lg:w-7/12 flex flex-col justify-center gap-5 mt-6 lg:flex-row">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 rounded bg-[#fff]"
                />
                <input
                  type="text"
                  placeholder="company"
                  className="w-full p-2 rounded bg-[#fff]"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="lg:w-7/12 flex flex-col justify-center gap-5 mt-6 lg:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 rounded bg-[#fff]"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full p-2 rounded bg-[#fff]"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="mb-8">
          <p className="text-center text-xl text-gray-700">
            PROJECT DESCRIPTION
          </p>
          <div className="flex justify-center py-6">
            <textarea
              id="message"
              rows={7}
              className="block p-3 w-64 lg:w-7/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>

        <p className="text-center text-xl text-gray-700 mb-7">
          {" "}
          DO YOU CURRENTLY HAVE AN E-COMMERCE SITE?{" "}
        </p>

        <div className="flex justify-center items-center gap-10 mb-10">
          <button className="p-2 bg-[#c5c5c5] w-32 rounded text-white hover:bg-[#ee6557]">
            Yes
          </button>
          <button className="p-2 bg-[#c5c5c5] w-32 rounded text-white hover:bg-[#ee6557]">
            No
          </button>
        </div>

        <p className="text-center text-xl text-gray-700 mb-7">
          IDEAL START DATE{" "}
        </p>

        <div className="flex flex-col gap-6 justify-center items-center py-8 lg:flex-row p-6 ">
          <div className=" bg-[#d7d4d4] lg: w-72  rounded ">
            <form action="/">
              <select
                name="cars"
                className="w-full p-3 text-gray-400 text-[16px] select-none border-none block "
                id="cars"
              >
                <option selected value="volvo">
                  Select month
                </option>
                <option value="1"> Janaury</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </form>
          </div>

          <div className=" bg-[#d7d4d4] lg: w-72  rounded ">
            <form action="/">
              <select
                name="cars"
                className="w-full p-3 text-gray-400 text-[16px] select-none border-none block "
                id="cars"
              >
                <option selected value="volvo">
                  Select Year
                </option>
                <option value="1"> 2024</option>
                <option value="2">2025</option>
                <option value="3">2026</option>
                <option value="4">2027</option>
              </select>
            </form>
          </div>

          <button className="p-3 bg-[#c5c5c5] lg: w-72  rounded text-white hover:bg-[#16a6b6]">
            No huge rush
          </button>
        </div>

        <p className="text-center text-xl text-gray-700 mb">
          IDEAL LAUNCH DATE{" "}
        </p>

        <div className="flex flex-col gap-6 justify-center items-center py-8 lg:flex-row p-6 ">
          <div className=" bg-[#d7d4d4] lg: w-72  rounded ">
            <form action="/">
              <select
                name="cars"
                className="w-full p-3 text-gray-400 text-[16px] select-none border-none block "
                id="cars"
              >
                <option selected value="volvo">
                  Select month
                </option>
                <option value="1"> Janaury</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </form>
          </div>

          <div className=" bg-[#d7d4d4] lg: w-72  rounded ">
            <form action="/">
              <select
                name="cars"
                className="w-full p-3 text-gray-400 text-[16px] select-none border-none block "
                id="cars"
              >
                <option selected value="volvo">
                  Select Year
                </option>
                <option value="1"> 2024</option>
                <option value="2">2025</option>
                <option value="3">2026</option>
                <option value="4">2027</option>
                <option value="5">2028</option>
                <option value="6">2029</option>
                <option value="7">2030</option>
              </select>
            </form>
          </div>

          <button className="p-3 bg-[#c5c5c5] lg: w-72  rounded text-white hover:bg-[#16a6b6]">
            When it's done!
          </button>
        </div>

        <p className="text-center text-xl text-gray-700 mb-7">LIKELY BUDGET </p>

        <div className="flex flex-col gap-6 justify-center items-center  lg:flex-row p-6 ">
          <button className="p-3 bg-[#c5c5c5] w-full lg:w-40  rounded text-white hover:bg-[#ee6557]">
            Under 20k
          </button>
          <button className="p-3 bg-[#c5c5c5] w-full  lg:w-40  rounded text-white hover:bg-[#ee6557]">
            20 - 30K
          </button>
          <button className="p-3  bg-[#c5c5c5] w-full  lg:w-40  rounded text-white hover:bg-[#ee6557]">
            30 - 50K
          </button>
          <button className="p-3 bg-[#c5c5c5] w-full  lg:w-40  rounded text-white hover:bg-[#ee6557]">
            50 - 75K
          </button>
          <button className="p-3 bg-[#c5c5c5] w-full  lg:w-40  rounded text-white hover:bg-[#ee6557]">
            OVER 75K
          </button>
        </div>

        <p className="text-center text-xl text-gray-700 mb-3">FINISHED? </p>

        <div className="flex flex-col gap-6 justify-center py-8 lg:flex-row mb-20 p-6 ">
          <button className="p-2 bg-[#ee6557] lg: w-72  rounded text-[20px] text-white hover:bg-[#6b6b6b]">
            Yep, submit this
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
