import React from "react";
import Footer from "@/components/footer/page";
import DesingIcons from "@/components/icons/desing";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";

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
                      We don't do designs for a pitch unless paid. We don't
                      think it is a fair way to compare/rate an agency but are
                      happy to treat as a paid project to get a feel for our
                      approach.{" "}
                    </li>

                    <li className="text-gray-400 mb-4">
                      We don't provide multiple concepts from the outset as we
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
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2.5 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    LAUNCH IT
                  </button>
                </div>
                <div className="mt-4 lg:order-2 order-1">
                  <div className="flex justify-center">
                    <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#b9b5b5] flex justify-center items-center">
                      <DesingIcons className="w-14 h-14 hover:fill-white" />{" "}
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
