import React from "react";
import Footer from "@/components/footer/page";
import Workgallery from "@/components/workgallery/page";
import Gallery from "@/components/workedgallery/page";

function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="text-center p-6 py-12 m-auto lg:w-7/12">
            <h1 className="text-5xl mb-10  font-bold">Selected work</h1>
            <p className="text-[23px] text-gray-400 font-normal ">
              Here’s a selection of some of the projects we’ve lovingly crafted
              over the last few years. If you’d like to see more, just shout.
            </p>
          </div>

          <Workgallery />
        </section>

        <section>
          <div className="mt-20">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="py-4 text-center text-[23px] text-gray-500">
              SOME PEOPLE WE VE WORKED WITH
            </p>
          </div>
          <Gallery />

          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
