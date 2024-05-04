import React from "react";
import Footer from "@/components/footer/page";
import Link from "next/link";
import Jobsgallery from "@/components/jobsgallery/page";

function page() {
  return (
    <>
      <div className="container">
        <section>
          <div className="text-center p-5  m-auto lg:w-7/12">
            <h1 className="text-5xl mb-10  font-bold">Work at techcrucks</h1>
            <p className="text-[23px] text-gray-500 font-normal ">
              {" "}
              We are a small but perfectly formed creative web agency based in
              Brighton. We have been making pretty things online since 2006 and
              are always on the lookout for like-minded people.
            </p>
            <p className="text-[19px] py-5 text-gray-400">
              We will give you a chance to work on some great projects and
              develop your skills in exchange for dedication in doing what you
              love. You will join a culture that doesn't obsess about how many
              days holiday you have left and rewards people for their efforts.
            </p>
            <p className="text-[19px] mb-5 text-gray-400">
              Fresh fruit, regular lunches, soft drinks and great Small Batch
              Coffee are provided on demand. We have an ongoing Ping Pong
              league, organise decent field trips and set aside time so you can
              develop personal projects.
            </p>
            <p className="text-[19px] mb-5 text-gray-400">
              We also provide things like a Mac, nice Aeron chair, iPhone and
              anything else you need to do the job. We use Macs, but you'll be
              free to use whatever you want to get the job done.
            </p>

            <div className="py-12">
              <div className="flex justify-center ">
                <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
              </div>
              <p className="py-4 text-center text-[23px] text-gray-500">
                WE'RE ALL GOOD RIGHT NOW
              </p>
              <p className="text-[17px] text-gray-500 text-center">
                However, if you think you're just that good, get in touch. We're
                always looking for awesome new people to work with.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center">
            <div className="hexagonhome-container lg:relative w-[290px] h-[290px] lg:w-[245px] lg:h-[260px] lg:border-2 border-[#20999b] bg-[#20999b]">
              <div className="hexagonhome-image text-white lg:absolute w-[100%] h-[100%]  lg:w-[100%] lg:h-[100%] lg:text-center bg-[#20999b] ">
                <div className="flex justify-center">
                  <h1 className="mt-10 text-[16px]  py-3">NO AGENCIES EVER </h1>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <p className="border border-white w-20"></p>
                </div>
                <div className="flex justify-center mt-5">
                  <h1 className=" text-[16px] ">
                    SERIOUSLY, DON'T EVEN BOTHER{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-16">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>

            <div className="py-5 text-center">
              <p className="text-center text-[23px] text-gray-500">INTERNS</p>
              <p className="mt-5 text-xl">
                We love talented interns and since 2013 we have offered an
                internship programme.
              </p>
            </div>

            <div className=" text-center py-6">
              <Link
                href="/jobsitem/internship"
                className="bg-[#0071e2] hover:bg-[#24b4fb] text-white  py-3 px-5 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                FIND OUT MORE
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="py-16">
            <div className="flex justify-center ">
              <p className="flex justify-center  border-t-2 border-gray-400 w-28"></p>
            </div>
            <p className="text-center mt-6 text-2xl text-gray-500 mb-20">
              TECHCRUCKS SNAPS
            </p>
            <Jobsgallery />
          </div>

          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
