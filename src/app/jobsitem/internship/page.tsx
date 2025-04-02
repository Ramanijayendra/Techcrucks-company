import React from "react";
import Footer from "@/components/footer/page";
import Shipmodal from "@/components/internshipmodal/page";
import Interns from "@/components/interns/page";



function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="text-center p-4 py-16 m-auto lg:w-1/2">
            <h1 className="text-5xl mb-10  font-bold">Internship</h1>
            <p className="text-[19px] text-gray-400 font-normal ">
              Since 2013 we have offered an internship programme that gives
              talented students a chance to do a placement of anything up to 6
              months in length. To make the initial application process a little
              easier we would put together everything you need to know and a way
              to apply online.
            </p>
          </div>

          <div className="flex justify-center p-4 ">
            <div className="shadow-md lg:w-1/2 p-4  bg-white text-center py-6">
              <p className="text-[16px] text-gray-500">
                As we re currently working remotely, we re unable to support new
                interns. We will reopen internships when we return to the
                office. Please check back later.
              </p>
            </div>
          </div>

          <div className="flex justify-center text-center mt-16">
            <p className="border-t-2 border-gray-500 w-28 "></p>
          </div>

          <div className="flex justify-center mt-6 p-3">
            <span className="text-center text-[20px] text-gray-500 ">
              WHAT WE ARE LOOKING FOR
            </span>
          </div>
        </section>

        <section>
          <div className="flex justify-center text-center text-gray-500 p-3">
            <div className="lg:w-1/2 ">
              <ul>
                <li className="mt-8">
                  You need to be passionate about your future career, have
                  projects online that show your skills and be someone we can
                  rely on for the duration of the placement.
                </li>
                <li className="mt-7">
                  We want people who are independent, enjoy exploring a new
                  location and like a bit of fun mixed in with their working
                  day. We do ask for potential applicants to be well skilled but
                  we will give you a lot in return if you have the talent.
                </li>
                <li className="mt-7">
                  You must have the relevant working permit or permissions to be
                  eligible for the position if you are from outside the UK. If
                  English isn t your first language that is fine but you need to
                  be conversant and be comfortable writing your code in English.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center text-center mt-20">
            <p className="border-t-2 border-gray-500 w-28 "></p>
          </div>

          <div className="flex justify-center mt-4 p-3">
            <span className="text-center text-[20px] text-gray-500 ">
              IF YOU ARE…
            </span>
          </div>

          <Interns />
        </section>

        <section>
          <div className="flex justify-center mt-8 p-4">
            <div className="shadow-md lg:w-1/2 p-4  bg-white text-center py-6">
              <h1 className="text-[14px]">FOOTNOTE:</h1>
              <p className="text-[15px] text-gray-500">
                If you are a rare person with both design and development chops
                then we really want you to apply.
              </p>
            </div>
          </div>

          <div className="flex justify-center text-center mt-20">
            <p className="border-t-2 border-gray-500 w-28 "></p>
          </div>

          <div className="flex justify-center mt-4 p-3">
            <span className="text-center text-[20px] text-gray-500 ">
              WHAT YOU WILL GET{" "}
            </span>
          </div>

          <div className=" flex flex-col justify-center lg:flex-row lg:gap-8 mt-7 p-4 ">
            <div className=" lg:w-1/3">
              <div className="flex flex-row  gap-2 mb-2">
                <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                <p className="text-gray-400">Help to find an apartment</p>
              </div>
              <div className="flex flex-row  gap-2 mb-2">
                <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                <p className="text-gray-400">
                  Guidance from some really smart people
                </p>
              </div>
              <div className="flex flex-row  gap-2 mb-2">
                <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                <p className="text-gray-400">
                  You will also be integrated in team and we won’t just have you
                  making drinks
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 ">
              <div className="flex  gap-2 mb-2">
                <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                <p className="text-gray-400">Real projects to work on </p>
              </div>
              <div className="flex  gap-2 mb-2">
                <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                <p className="text-gray-400">
                  Use of a Mac if you don’t have a machine
                </p>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                <p className="text-gray-400">
                  A modest wage and who knows maybe a job at the end of it
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-center mt-20">
            <p className="border-t-2 border-gray-500 w-28 "></p>
          </div>
        </section>

        <section>
          <div className="flex justify-center mb-20 p-3">
            <span className="text-center text-[20px] text-gray-500 ">
              WHAT OUR PREVIOUS INTERNS SAY
            </span>
          </div>

          <Shipmodal />

          <div className="flex justify-center text-center mt-20">
            <p className="border-t-2 border-gray-500 w-28 "></p>
          </div>

          <div className="text-center mt-4 p-3">
            <span className="text-center text-[20px] text-gray-500 ">
              REQUIRED READING…
            </span>
            <p className="mt-4 text-[19px] text-gray-500">
              Here are a few things you can look into improving before starting…
            </p>
          </div>
        </section>

        <section>
          <div className="flex justify-center ">
            <div className="lg:w-7/12 ">
              <p className="py-4 text-[15px] text-gray-800">DESIGNERS:</p>

              <div className="flex justify-center flex-col lg:gap-6 lg:flex-row">
                <div className="lg:w-6/12 w-72 ">
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">
                      Photoshop / Illustrator / InDesign
                    </p>
                  </div>
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Icon design</p>
                  </div>
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Illustration</p>
                  </div>
                </div>

                <div className="lg:w-6/12 w-72 ">
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">
                      Understanding of grid systems
                    </p>
                  </div>
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">
                      Typography and color treatment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="lg:w-7/12 ">
              <p className="py-4 text-[15px] text-gray-800">FRONT-END:</p>

              <div className="flex justify-center flex-col lg:gap-6 lg:flex-row">
                <div className="lg:w-6/12 w-72 ">
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Sass</p>
                  </div>
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Foundation</p>
                  </div>
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">
                      Average to intermediate understanding of popular JS
                      frameworks{" "}
                    </p>
                  </div>
                </div>

                <div className="lg:w-6/12 w-72 ">
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Semantic HTML</p>
                  </div>
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Grid systems for web </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="lg:w-7/12 ">
              <p className="py-6 text-[15px] text-gray-800">BACK-END:</p>

              <div className="flex justify-center flex-col lg:gap-8 lg:flex-row">
                <div className="lg:w-1/2 w-72 ">
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">
                      Why s (Poignant) Guide to Ruby
                    </p>
                  </div>
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Intro to the command line</p>
                  </div>
                </div>

                <div className="lg:w-1/2 w-72 ">
                  <div className="flex flex-row  gap-3 mb-2">
                    <p className="w-2 h-2 rounded-full bg-[#e15339] mt-2"></p>
                    <p className="text-gray-400">Getting started with gitML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-4 py-10 ">
            <div className="shadow-md lg:w-7/12 p-4  bg-white text-center py-6">
              <p className="text-[16px] text-gray-500">
                As we re currently working remotely, we re unable to support new
                interns. We will reopen internships when we return to the
                office. Please check back later.
              </p>
            </div>
          </div>

          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
