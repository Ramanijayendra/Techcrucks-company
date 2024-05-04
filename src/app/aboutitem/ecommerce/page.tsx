import React from "react";
import Footer from "@/components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/page"

function page() {
  return (
    <>
      <div className="container">
        <section>
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
                recent events have made you speed things up? Or your current
                shop uses an old platform and development has become a pain?
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
        </section>

        <section>
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
        </section>

        <section>
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
                <span className=" rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#e7e7e7] flex justify-center items-center">
                  <svg
                    className="w-16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.2 5H4.8C3.81 5 3.009 5.81 3.009 6.8L3 17.6C3 18.59 3.81 19.4 4.8 19.4H19.2C20.19 19.4 21 18.59 21 17.6V6.8C21 5.81 20.19 5 19.2 5ZM19.2 17.6H4.8V8.6L12 13.1L19.2 8.6V17.6ZM4.8 6.8L12 11.3L19.2 6.8H4.8Z"
                      fill="#494c4e"
                    />
                  </svg>
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
        </section>

        <section>
          <div className="mb-12">
            <p className="text-center text-xl text-gray-700 py-7">
              YOUR DETAILS
            </p>

            <form>
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
        </section>

        <section>
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

          <div className="flex lg:flex-row  flex-col justify-center  items-center gap-10 p-5 mb-10">
            <button
              type="button"
              className="relative inline-flex  w-full lg:w-72 items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">YES</span>
            </button>
            <button
              type="button"
              className="relative inline-flex w-full  lg:w-72 items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">NO</span>
            </button>
          </div>
        </section>

        <section>
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
                  <option value="volvo">Select month</option>
                  <option value={"1"}> Janaury</option>
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
                  <option value="volvo">Select Year</option>
                  <option value="1"> 2024</option>
                  <option value="2">2025</option>
                  <option value="3">2026</option>
                  <option value="4">2027</option>
                </select>
              </form>
            </div>
            <button
              type="button"
              className="relative inline-flex items-center lg:w-72  justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white"> No huge rush</span>
            </button>
          </div>
        </section>

        <section>
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
                  <option value="volvo">Select month</option>
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
                  <option value="volvo">Select Year</option>
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

            <button
              type="button"
              className="relative inline-flex items-center  lg: w-72  justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">   When it's done!</span>
            </button>
          </div>
        </section>

        <section>
          <p className="text-center text-xl text-gray-700 mb-7">
            LIKELY BUDGET{" "}
          </p>

          <div className="flex flex-col gap-6 justify-center items-center  lg:flex-row p-6 ">
                 <Button title="Under 20k" />
                 <Button title="20 - 30K" />
                 <Button title=" 30 - 50K" />
                 <Button title=" 50 - 75K" />
                 <Button title=" OVER 75K" />
          </div>

          <p className="text-center text-xl text-gray-700 mb-3">FINISHED? </p>

          <div className="flex flex-col gap-6 justify-center py-8 lg:flex-row mb-20 p-6 ">
      
            <button
              type="button"
              className="relative inline-flex items-center lg: w-72  justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white"> Yep, submit this</span>
            </button> 


          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
