import React from "react";
import Footer from "@/components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";
import Button from "@/components/button/page"


function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-white shadow-xl p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div>
                  <ul className="py-7">
                    <li className="text-[23px] text-gray-600 mb-2">DESIGN</li>
                    <li className="text-[#ee6557] text-[19px] mb-7">
                      NOT JUST PAINTING THE CANVAS
                    </li>
                    <li className="text-gray-400 mb-4">
                      Design can be a tough one to get right. We might hit the
                      jackpot first time or we may require some iteration to get
                      things the way you want.
                    </li>
                    <li className="text-gray-400 mb-4">
                      The difference between a run-of-the-mill website and a
                      meaningful one is in the details. That means obsessing
                      about every pixel.
                    </li>

                    <li className="text-gray-400 mb-4">
                      We have a few principles to guide us that we should get
                      off our chest straight away:{" "}
                    </li>

                    <li className="text-gray-400 mb-4">
                      We don t do designs for a pitch unless paid. We don t
                      think it is a fair way to compare/rate an agency but are
                      happy to treat as a paid project to get a feel for our
                      approach.{" "}
                    </li>

                    <li className="text-gray-400 mb-4">
                      We don t provide multiple concepts from the outset as we
                      believe it dilutes ideas - we prefer to focus on what we
                      feel is the right approach and iterate from there. On the
                      odd occasion we do need to start afresh and that is fine.
                    </li>

                    <li className="text-gray-400 mb-4">
                      We use the wireframes as our basis for visual design so
                      making sure they are right is important to our process.{" "}
                    </li>

                    <li className="text-gray-400 mb-4">
                      Obviously we make sure everything we design scales down
                      well to smaller screens like a tablet or phone.{" "}
                    </li>

                    <li className="text-gray-400 mb-4">
                      Overall we are looking for everything to come together to
                      create something engaging, flowing and beautiful. If we
                      have done that at the end of a project then we can all
                      sleep easy.{" "}
                    </li>
                  </ul>
                </div>

                <div className="lg:w-11/12 lg:mt-10">
                  <Image src={placeimg} className=" " alt="desingimages" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-slate-200">
              <div className="flex justify-between flex-col  lg:flex-row p-10 ">
                <div className="mt-4 lg:order-1 order-2 text-center lg:text-start">
                  <h1 className="text-[20px] text-gray-400">
                    INTERESTED IN WORKING WITH US?
                  </h1>
                  <p className="py-4 text-gray-400">
                    Launch our project planner to get started.
                  </p>
                  <Button  title="LAUNCH IT" />
                  
                </div>
                <div className="mt-4 lg:order-2 order-1">
                  <div className="flex justify-center">
                    <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#dedede] flex justify-center items-center">
                      <svg
                        fill="#494c4e"
                        className="w-14"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M472.178,34.62H39.822C17.864,34.62,0,52.485,0,74.442c0,17.955,0,345.233,0,363.115
				c0,21.958,17.864,39.822,39.822,39.822h432.356c21.958,0,39.822-17.864,39.822-39.822c0-17.89,0-345.165,0-363.115
				C512,52.485,494.136,34.62,472.178,34.62z M477.867,437.557c0,3.137-2.552,5.689-5.689,5.689H39.822
				c-3.137,0-5.689-2.552-5.689-5.689V153.839h443.733V437.557z M477.867,119.706H34.133V74.442c0-3.137,2.552-5.689,5.689-5.689
				h432.356c3.137,0,5.689,2.552,5.689,5.689V119.706z"
                              />
                              <circle cx="71.805" cy="94.231" r="12.836" />
                              <circle cx="112.959" cy="94.231" r="12.836" />
                              <circle cx="154.112" cy="94.231" r="12.836" />
                              <path
                                d="M189.914,419.105l66.082-51.274l66.089,51.274c11.193,8.685,27.527,0.683,27.527-13.485V191.464
				c0-9.425-7.641-17.067-17.067-17.067H179.453c-9.425,0-17.067,7.641-17.067,17.067v214.157
				C162.386,419.882,178.796,427.732,189.914,419.105z M196.519,208.531h118.961v29.687H196.519V208.531z M196.518,272.352H315.48
				v98.428l-49.022-38.035c-6.155-4.776-14.766-4.776-20.924,0.001l-49.015,38.031V272.352z"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
