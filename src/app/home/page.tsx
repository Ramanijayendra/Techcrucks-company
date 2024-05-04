"use client";
import Footer from "@/components/footer/page";
import Counter from "@/components/counter/page";
import Slider from "@/components/slider/page";
import Gallery from "@/components/homegallery/page";
function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="m-auto text-center p-6 lg:mb-20  w-full  lg:w-7/12">
            <h1 className="text-5xl mb-10  font-bold">A higher plain</h1>
            <p className="text-[23px] text-gray-400 font-normal ">
              We build brands and beautiful websites for clients who need a
              little help to create something truly special. We do it with love
              in Brighton for clients all around the world and we can do it for
              you too...
            </p>
          </div>
          <div className="mb-20">
            <Gallery />
          </div>
        </section>

        <section>
          <p className="text-center text-[25px] lg:py-10 text-gray-500 ">
            <span className=" border-t-2 border-gray-500 w-44 py-3 ">
              A FEW STATS
            </span>
          </p>
          <Counter />
        </section>

        <section className="py-20">
          <div className="text-center">
            <p className="text-center text-[25px] text-gray-500 ">
              <span className=" border-t-2 border-gray-500 w-44 py-3 ">
                HAPPY CLIENTS
              </span>
            </p>
          </div>
          <Slider />

          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
