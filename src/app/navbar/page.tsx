"use client";
import React, { useState } from "react";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeLink, setActiveLink] =useState("home");

  return (
    <>
      <div className="container w-full flex justify-center ">
        <header>
          <div className="py-12  ">
            <p className="flex justify-center mt-4  lg:hidden ">
              <Link href="">
                <Image src={logo} alt="navbar-images" width={"100"} height={"100"} className="w-40  h-40" />{" "}
              </Link>
            </p>

            <div className="flex justify-center">
              <ul className="lg:w-11/12 grid grid-cols-3 text-[13px] font-bold  lg:grid-cols-7 text-center items-center gap-6  lg:gap-10 text-gray-500 p-5 ">
                <li
                  className={`order-1  ${
                    activeLink === "home"
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link href="/home" onClick={() => setActiveLink("home")}>
                    <p className=" rounded-tl-[20px] rounded-br-[20px] py-4 px-4 flex justify-center items-center border-0 bg-[#d5d2d2]  ">
                      HOME
                    </p>
                  </Link>
                </li>
                <li
                  className={`order-2 ${
                    activeLink === "work"
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link href="/work" onClick={() => setActiveLink("work")}>
                    <p className="rounded-tl-[20px] rounded-br-[20px] py-4 px-5  flex justify-center items-center border-0 bg-[#d5d2d2]">
                      WORK
                    </p>
                  </Link>
                </li>
                <li
                  className={`order-3  ${
                    activeLink === "about"
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link href="/about" onClick={() => setActiveLink("about")}>
                    <p className="rounded-tl-[20px] rounded-br-[20px] py-4 px-5  flex justify-center items-center border-0 bg-[#d5d2d2] ">
                      ABOUT
                    </p>
                  </Link>
                </li>
                <li className=" logoitem order-4  hidden lg:block">
                  <Link href="">
                    <Image
                      src={logo}
                      alt="navbar-images"
                      width={"100"} height={"100"}
                      className="w-40 h-36"
                    />{" "}
                  </Link>
                </li>
                <li
                  className={`order-4  ${
                    activeLink === "feed"
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link href="/feed" onClick={() => setActiveLink("feed")}>
                    <p className="rounded-tl-[20px] rounded-br-[20px] py-4 px-5  flex justify-center items-center border-0 bg-[#d5d2d2] ">
                      FEED
                    </p>
                  </Link>
                </li>
                <li
                  className={`order-5  ${
                    activeLink === "jobs"
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link href="/jobs" onClick={() => setActiveLink("jobs")}>
                    <p className="rounded-tl-[20px] rounded-br-[20px] py-4 px-5  flex justify-center items-center border-0 bg-[#d5d2d2]">
                      JOBS
                    </p>
                  </Link>
                </li>
                <li
                  className={`order-6 l ${
                    activeLink === "contact"
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link
                    href="/contact"
                    onClick={() => setActiveLink("contact")}
                  >
                    <p className="rounded-tl-[20px] rounded-br-[20px] py-4 px-5  flex justify-center items-center border-0 bg-[#d5d2d2]">
                      CONTACTS
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default page;
