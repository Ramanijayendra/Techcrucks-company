"use client";
import React from "react";
import Footer from "@/components/footer/page";

function page() {
  // const handlesubmit = (event) => {
  //   event.preventDefault();
  //   let form = new FormData(event.target);
  //   let formobject = Object.fromEntries(form.entries());
  //   console.log(formobject);
  // };
  // onSubmit={handlesubmit}
  return (
    <>
      <div className="container">
        <section>
          <div className="text-center p-6 py-16 m-auto lg:w-6/12">
            <h1 className="text-6xl mb-10  font-bold">Project Planner</h1>
            <p className="text-2xl text-gray-400 font-normal text-[20px]">
              Interested in working with us on a project? Give us all the
              details below, and we’ll get back to you as soon as possible.{" "}
            </p>
          </div>

          <p className="text-center text-xl text-gray-700">YOUR DETAILS</p>
        </section>

        <section>
          <form >
            <div className="flex justify-center">
              <div className="w-8/12 flex flex-col justify-center gap-5 mt-6 lg:flex-row">
                <input
                  type="text"
                  placeholder="Fullname"
                  name="fullname"
                  className="w-full p-2 rounded bg-[#fff]"
                />
                <input
                  type="text"
                  placeholder="company"
                  className="w-full p-2 rounded bg-[#fff]"
                  name="company"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-8/12 flex flex-col justify-center gap-5 mt-6 lg:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 rounded bg-[#fff]"
                  name="email"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full p-2 rounded bg-[#fff]"
                  name="phone"
                />
              </div>
            </div>

            
          </form>
        </section>

        <section>
          <p className="text-center text-xl text-gray-700 mt-16">
            TYPE OF PROJECT{" "}
          </p>

          <div className="flex flex-col gap-6 justify-center items-center py-4 lg:flex-row p-6">
            <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 ">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p> From a simple site to a complex e-commerce platform</p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                WEBSITE
              </button>
            </div>

            <div className="tooltip text-center w-72 relative cursor-pointer hover:z-20">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p>Looking to build a larger scale web application?</p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                APPLICATION
              </button>
            </div>

            <div className="tooltip text-center w-72 relative cursor-pointer hover:z-20">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p> We like to be challenged - what have you got for us?</p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                SOMETHING ELSE
              </button>
            </div>
          </div>
        </section>

        <section>
          <p className="text-center text-xl text-gray-700 mt-16">
            BRIEF DESCRIPTION
          </p>

          <div className="flex justify-center py-6">
            <textarea
              id="message"
              rows={7}
              className="block p-3 w-10/12 lg:w-1/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <p className="text-center text-xl text-gray-700 mt-16">
            WHAT DO YOU NEED?
          </p>
        </section>

        <section>
          <div className="flex flex-col gap-6 justify-center items-center py-2 lg:flex-row mt-8 p-6">
            <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 ">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p>
                    Taking a simple idea through to a finished project by
                    building a solid business foundation.
                  </p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                STRATEGY
              </button>
            </div>

            <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 ">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p>
                    Taking a simple idea through to a finished project by
                    building a solid business foundation.
                  </p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                UX
              </button>
            </div>

            <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 ">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p>
                    Taking a simple idea through to a finished project by
                    building a solid business foundation.
                  </p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                DESING
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-6 justify-center items-center py-2 lg:flex-row p-6">
            <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 ">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p>
                    Taking a simple idea through to a finished project by
                    building a solid business foundation.
                  </p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                DEVELOPMENT
              </button>
            </div>

            <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 ">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p>
                    Taking a simple idea through to a finished project by
                    building a solid business foundation.
                  </p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                CMS IMPLEMENTATION
              </button>
            </div>

            <div className="tooltip text-center w-72 relative cursor-pointer  hover:z-20 ">
              <span className="tooltiptext absolute bg-[#24b4fb]  text-white opacity-0 ">
                <div className="p-4 text-[17px] ">
                  <p>
                    Taking a simple idea through to a finished project by
                    building a solid business foundation.
                  </p>
                </div>
              </span>
              <button className="p-3 bg-[#0071e2] w-72 rounded text-white hover:bg-[#24b4fb] ">
                {" "}
                NOT SURE
              </button>
            </div>
          </div>
        </section>

        <section>
          <p className="text-center text-xl text-gray-700 mt-16">
            IDEAL START DATE
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
                </select>
              </form>
            </div>

            <button className="p-3 bg-[#0071e2] lg: w-72  rounded text-white hover:bg-[#24b4fb]">
              No huge rush
            </button>
          </div>
        </section>

        <section>
          <p className="text-center text-xl text-gray-700 mt-16">
            IDEAL LAUNCH DATE
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

            <button className="p-3 bg-[#0071e2] lg: w-72  rounded text-white hover:bg-[#24b4fb]">
              When it's done!
            </button>
          </div>
        </section>

        <section>
          <p className="text-center text-xl text-gray-700 mt-16">
            LIKELY BUDGET
          </p>

          <div className="flex flex-col gap-6 justify-center items-center py-8 lg:flex-row p-6 ">
            <button className="p-3 bg-[#0071e2] lg:w-52 w-full  rounded text-white hover:bg-[#24b4fb]">
              £20,000 - £30,000
            </button>
            <button className="p-3 bg-[#0071e2] lg:w-52 w-full  rounded text-white hover:bg-[#24b4fb]">
              £30,000 - £50,000
            </button>
            <button className="p-3 bg-[#0071e2] lg:w-52 w-full  rounded text-white hover:bg-[#24b4fb]">
              £50,000 - £75,000
            </button>
            <button className="p-3 bg-[#0071e2] lg:w-52 w-full  rounded text-white hover:bg-[#24b4fb]">
              Over £75,000
            </button>
          </div>

          <p className="text-center text-xl text-gray-700 mt-16">FINISHED?</p>

          <div className="flex flex-col gap-6 justify-center py-8 lg:flex-row mb-20 p-6 ">
            <button
              type="button"
              className="bg-[#0071e2] hover:bg-[#24b4fb] text-white  py-2.5 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Yep, submit this
            </button>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
