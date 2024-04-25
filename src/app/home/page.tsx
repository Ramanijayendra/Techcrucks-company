"use client";
import Image from "next/image";

import placeimg from "/public/images/placeholder/300x300.svg";

import Footer from "../../components/footer/page";
import Link from "next/link";
import Counter from "../../components/counter/page";
import Slider from "../../components/slider/page";

function page() {
  return (
    <>
      <div className="container ">
        <div className=" m-auto text-center p-6 py-10 w-full  lg:w-7/12">
          <h1 className="text-5xl mb-10  font-bold">A higher plain</h1>
          <p className="text-[23px] text-gray-400 font-normal ">
            We build brands and beautiful websites for clients who need a little
            help to create something truly special. We do it with love in
            Brighton for clients all around the world and we can do it for you
            too...
          </p>
        </div>

        <div className="flex flex-col gap-8  justify-center items-center lg:flex-row   ">
          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/bone">
              {" "}
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/eigen-technology">
              {" "}
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/north">
              {" "}
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/reliably">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/synova">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8  justify-center items-center lg:flex-row lg:mt-[-40px] mt-8  ">
          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/down">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/aventura">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/cpj">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/mint">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8  justify-center items-center lg:flex-row lg:mt-[-40px] mb-28 mt-8  ">
          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/wildlife">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/apt">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/boxfusion">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/domus">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>

          <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
            <Link href="/homeitem/undercover">
              <Image
                src={placeimg}
                className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                alt="homeimages"
              />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-center text-[25px] text-gray-500 ">
            <span className=" border-t-2 border-gray-500 w-44 py-3 ">
              A FEW STATS
            </span>
          </p>

          <Counter />
          
        </div>

        <div className="py-20 text-center">
          <p className="text-center text-[25px] text-gray-500 ">
            <span className=" border-t-2 border-gray-500 w-44 py-3 ">
              HAPPY CLIENTS
            </span>
          </p>

          <div>
            <Slider />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
