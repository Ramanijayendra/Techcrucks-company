"use client";
import React, { useState } from "react";

import logo from "/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

function page() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <>
      {/* <div className="container w-full flex justify-center ">
        <div className="py-12  ">
          <p className="flex justify-center mt-4  lg:hidden ">
            <Link href="">
              <Image src={logo} alt="navbar-images" className="w-40  h-40" />{" "}
            </Link>
          </p>

          <div className="flex justify-center">
            <ul className="lg:w-11/12 grid grid-cols-3  lg:grid-cols-7 text-center items-center gap-6  lg:gap-10 text-gray-500 p-5 ">
              <li className={`order-1 lg:border-b-[1px] lg:text-start  lg:border-black ${activeLink === 'home' ? 'text-red-500 font-bold' : 'text-black'}`}>
                <Link href="/home" onClick={() => setActiveLink('home')}>HOME</Link>
              </li>
              <li className={`order-2 lg:border-b-[1px] lg:text-start lg:border-black ${activeLink === 'work' ? 'text-red-500 font-bold' : 'text-black'}`}>
                <Link href="/work"  onClick={() => setActiveLink('work')}>WORK</Link>
              </li>
              <li className={`order-3 lg:border-b-[1px] lg:text-start lg:border-black ${activeLink === 'about' ? 'text-red-500 font-bold' : 'text-black'}`}>
                <Link href="/about" onClick={() => setActiveLink('about')}>ABOUT</Link>
              </li>
              <li className=" logoitem order-4  hidden lg:block">
                <Link href="">
                  <Image
                    src={logo}
                    alt="navbar-images"
                    className="w-40 h-36"
                  />{" "}
                </Link>
              </li>
              <li className={`order-4 lg:border-b-[1px] lg:text-end lg:border-black ${activeLink === 'feed' ? 'text-red-500 font-bold' : 'text-black'}`}>
                <Link href="/feed" onClick={() => setActiveLink('feed')}>FEED</Link>
              </li>
              <li className={`order-5 lg:border-b-[1px] lg:text-end lg:border-black ${activeLink === 'jobs' ? 'text-red-500 font-bold' : 'text-black'}`}>
                <Link href="/jobs" onClick={() => setActiveLink('jobs')}>JOBS</Link>
              </li>
              <li className={`order-6 lg:border-b-[1px] lg:text-end lg:border-black ${activeLink === 'contact' ? 'text-red-500 font-bold' : 'text-black'}`}>
                <Link href="/contact" onClick={() => setActiveLink('contact')}>CONTACTS</Link>
              </li>
            </ul>
          </div>
        </div>

      </div> */}

      <div className="container w-full flex justify-center ">
        <div className="py-12  ">
          <p className="flex justify-center mt-4  lg:hidden ">
            <Link href="">
              <Image src={logo} alt="navbar-images" className="w-40  h-40" />{" "}
            </Link>
          </p>

          <div className="flex justify-center">
            <ul className="lg:w-11/12 grid grid-cols-3 text-[14px] font-bold  lg:grid-cols-7 text-center items-center gap-6  lg:gap-10 text-gray-500 p-5 ">
              <li
                className={`order-1  ${
                  activeLink === "home"
                    ? "text-red-500 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/home" onClick={() => setActiveLink("home")}>
                  <p className="box flex justify-center items-center border-0 bg-[#d5d2d2] h-12 w-24">
                   HOME
                  </p>
                </Link>
              </li>
              <li
                className={`order-2 ${
                  activeLink === "work"
                    ? "text-red-500 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/work" onClick={() => setActiveLink("work")}>
                  <p className="box flex justify-center items-center border-0 bg-[#d5d2d2] h-12 w-24">
                   WORK
                  </p>
                </Link>
              </li>
              <li
                className={`order-3  ${
                  activeLink === "about"
                    ? "text-red-500 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/about" onClick={() => setActiveLink("about")}>
                  <p className="box flex justify-center items-center border-0 bg-[#d5d2d2] h-12 w-24">
                   ABOUT
                  </p>
                </Link>
              </li>
              <li className=" logoitem order-4  hidden lg:block">
                <Link href="">
                  <Image src={logo} alt="navbar-images" className="w-40 h-36" />{" "}
                </Link>
              </li>
              <li
                className={`order-4  ${
                  activeLink === "feed"
                    ? "text-red-500 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/feed" onClick={() => setActiveLink("feed")}>
                  <p className="box flex justify-center items-center border-0 bg-[#d5d2d2] h-12 w-24">
                    FEED 
                  </p>
                </Link>
              </li>
              <li
                className={`order-5  ${
                  activeLink === "jobs"
                    ? "text-red-500 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/jobs" onClick={() => setActiveLink("jobs")}>
                  <p className="box flex justify-center items-center border-0 bg-[#d5d2d2] h-12 w-24">
                    JOBS 
                  </p>
                </Link>
              </li>
              <li
                className={`order-6 l ${
                  activeLink === "contact"
                    ? "text-red-500 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/contact" onClick={() => setActiveLink("contact")}>
                  <p className="box flex justify-center items-center border-0 bg-[#d5d2d2] h-12 w-24">
                 CONTACTS 
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
