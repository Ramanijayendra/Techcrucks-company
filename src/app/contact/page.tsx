import React from "react";

import Techitem from "@/components/techitem/page";

import Footer from "@/components/footer/page";

function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="text-center p-6 py-16 m-auto lg:w-1/2">
            <h1 className="text-5xl mb-10  font-bold">Contact techcrucks</h1>
            <p className="text-2xl text-gray-400 font-normal ">
              Get in touch with us to get the ball rolling
            </p>
          </div>

          <Techitem />

          <div className="flex justify-center text-center  py-10">
            <p className="border-t-2 border-gray-500 w-28 ">
              <span className="text-center text-2xl ">FIND US</span>
            </p>
          </div>
        </section>

        <section>
          <div className="flex flex-col lg:flex-col text-center  items-center mb-20  ">
            <div className=" bg-gray-300 flex justify-center text-5xl items-center lg:w-10/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.453342276471!2d72.88369137471933!3d21.213864381396316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f708f3f3c75%3A0x22819f3cf6b1cc28!2sThe%20Palladium%20Mall!5e0!3m2!1sen!2sin!4v1712841800240!5m2!1sen!2sin"
                className=" lg:w-full w-90 h-96 lg:h-[550px]"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
