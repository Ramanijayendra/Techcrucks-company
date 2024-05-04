
import React from "react";
import Footer from "@/components/footer/page";
import Button from "@/components/button/page"

function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-white shadow-xl p-4">
              <ul className="py-7">
                <li className="text-[23px] text-gray-600 mb-2">BRANDING</li>
                <li className="text-[#ee6557] text-[19px] mb-7">
                  WHERE EVERYTHING STARTS
                </li>
                <li className="text-gray-400 mb-4">
                  We help people turn a name on a piece of paper into a brand
                  with impact...sometimes we even help with the name.
                </li>
                <li className="text-gray-400 mb-4">
                  We have a few approaches depending on budget - from a simple
                  logomark treatment to a full brand design with exhaustive
                  guidelines.
                </li>
                <li className="text-gray-400 mb-4">
                  We start off by asking a lot of questions to really understand
                  your business and the competition. We need to learn as much as
                  we can about your customers in order to create something they
                  will love.{" "}
                </li>
                <li className="text-gray-400 mb-4">
                  We do pretty much everything in-house but if you do need help
                  with revising brand messaging or copywriting we work with a
                  wonderful partner.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center flex-col ">
            <div className="lg:w-9/12  bg-slate-200">
              <div className="flex justify-between flex-col  lg:flex-row p-8 ">
                <div className="mt-4 lg:order-1 order-2 text-center lg:text-start">
                  <h1 className="text-[20px] text-gray-400">
                    INTERESTED IN WORKING WITH US?
                  </h1>
                  <p className="py-4">
                    Launch our project planner to get started.
                  </p>

                  <Button title=" LAUNCH IT"/>
                
                </div>
                <div className="mt-4 lg:order-2 order-1">
                  <div className="flex justify-center">
                    <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#dedede] flex justify-center items-center">
                      <svg
                        fill="#494c4e"
                        className="w-16"
                        viewBox="0 0 14 14"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M 7,13 C 3.671,13 1,10.291 1,7 1,3.671 3.671,1 7,1 c 3.329,0 6,2.671 6,6 0,3.291 -2.671,6 -6,6 z M 7,2.007 C 4.2515,2.007 2.0065,4.2515 2.0065,7 2.0065,9.749 4.2515,11.994 7,11.994 9.749,11.994 11.9935,9.749 11.9935,7 11.9935,4.2515 9.749,2.007 7,2.007 Z m 2.9425,5.574 -4.336,0 c -0.192,0 -0.3475,-0.1545 -0.349,-0.3455 l 0,-0.506 C 5.2575,6.536 5.413,6.381 5.6065,6.381 l 4.374,0 c 0.1935,0 0.3485,0.1555 0.3485,0.3485 l 0,0.503 C 10.2905,7.426 10.1355,7.581 9.9425,7.581 Z m -1.123,-1.9355 -4.374,0 C 4.254,5.6465 4.097,5.492 4.0965,5.3 l 0,-0.505 c 0,-0.1555 0.155,-0.3105 0.3485,-0.3105 l 4.374,0 c 0.155,0 0.31,0.1555 0.31,0.3095 l 0,0.503 C 9.1295,5.49 8.974,5.6455 8.8195,5.6455 Z m -4.374,2.709 4.374,0 c 0.194,0 0.348,0.1555 0.348,0.3485 l 0,0.503 C 9.1685,9.3975 9.013,9.5535 8.822,9.5545 l -4.3765,0 C 4.2515,9.5165 4.097,9.361 4.097,9.168 l 0,-0.503 C 4.0965,8.51 4.2515,8.3545 4.4455,8.3545 Z" />
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
