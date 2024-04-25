import React from "react";
import Image from "next/image";

import placeimg from "/public/images/placeholder/300x300.svg";
import placecompany from "/public/images/placeholder/250.svg";

import Footer from "../../components/footer/page";
import Link from "next/link";

function page() {
  return (
    <>
        <div className="container">
          <div className="text-center p-6 py-16 m-auto lg:w-7/12">
            <h1 className="text-5xl mb-10  font-bold">Selected work</h1>
            <p className="text-[23px] text-gray-400 font-normal ">
              Here’s a selection of some of the projects we’ve lovingly crafted
              over the last few years. If you’d like to see more, just shout.
            </p>
          </div>

          <div className="py-16">
            <div className="flex gap-6 flex-col mb-5  justify-center items-center lg:flex-row ">
              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/bone">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/eigen-technology">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/north">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>

            <div className="flex gap-6 flex-col mb-5  justify-center items-center lg:flex-row lg:gap-6 lg:mt-[-65px] mt-10">
              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/reliably">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image  lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/synova">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/down">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/aventura">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>

            <div className="flex gap-6 flex-col mb-5  justify-center items-center lg:flex-row lg:gap-6 lg:mt-[-65px] mt-10">
              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/cpj">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/mint">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/wildlife">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>

            <div className="flex gap-6 flex-col mb-5  justify-center items-center lg:flex-row lg:gap-6 lg:mt-[-65px] mt-10">
              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/apt">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/boxfusion">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/domus">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/homeitem/undercover">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>

            <div className="flex gap-6 flex-col mb-5  justify-center items-center lg:flex-row  lg:mt-[-65px] mt-10">
              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/infrata">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/cognosis">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/dcm">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>

            <div className="flex gap-6 flex-col mb-5  justify-center items-center lg:flex-row lg:gap-6 lg:mt-[-65px] mt-10">
              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/koryo">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/knock">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/charles">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/openair">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>

            <div className="flex gap-6 flex-col mb-5 justify-evenly items-center lg:flex-row lg:mt-[-65px]">
              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/mason">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative lg:w-[250px] lg:h-[270px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="/workitem/channel">
                  <Image
                    src={placeimg}
                    className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="pb-20">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 text-center text-[23px] text-gray-500">
              SOME PEOPLE WE'VE WORKED WITH
            </p>


            <div className="p-5">
            <div className="flex flex-col gap-6  justify-center items-center lg:flex-row   ">
              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute  w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6  justify-center items-center lg:flex-row lg:mt-[-40px]  ">
              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                <Link href="https://brightonsource.co.uk/">
                  <Image
                    src={placecompany}
                    className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                    alt="homeimages"
                  />
                </Link>
              </div>
            </div>



            <div className="flex flex-col gap-6  justify-center items-center lg:flex-row lg:mt-[-40px] ">
              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
               <Link href="https://brightonsource.co.uk/">
                <Image
                  src={placecompany}
                  className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
              </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
              <Link href="https://brightonsource.co.uk/">
                <Image
                  src={placecompany}
                  className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
              </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
              <Link href="https://brightonsource.co.uk/">
                <Image
                  src={placecompany}
                  className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
              </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
              <Link href="https://brightonsource.co.uk/">
                <Image
                  src={placecompany}
                  className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
              </Link>
              </div>

              <div className="hexagonhome-container lg:relative w-full lg:w-[210px] lg:h-[230px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
              <Link href="https://brightonsource.co.uk/">
                <Image
                  src={placecompany}
                  className="hexagonhome-image lg:absolute w-[100%] h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
              </Link>
              </div>
            </div>
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
}

export default page;
