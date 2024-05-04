import React from "react";
import Footer from "@/components/footer/page";
import placeimg from "/public/images/placeholder/300x300.svg";
import Image from "next/image";
import DevelopmentIcons from "@/components/icons/development";

function page() {
  return (
    <>
      <div className="container ">
        <section>
          <div className="flex justify-center items-center flex-col">
            <div className="lg:w-9/12  bg-white shadow-xl p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div>
                  <ul className="py-7">
                    <li className="text-[23px] text-gray-600 mb-2">
                      DEVELOPMENT
                    </li>
                    <li className="text-[#ee6557] text-[19px] mb-7">
                      MAKING IT ALL WORK
                    </li>
                    <li className="text-gray-400 mb-4">
                      We have built backend for iOS apps, full social networking
                      sites, complex business critical applications and
                      countless marketing focus websites.
                    </li>
                    <li className="text-gray-400 mb-4">
                      We have been the founding team for a number of startups
                      that have gone on to raise serious funding. We have then
                      helped those companies scale and hire their own team.
                    </li>

                    <li className="text-gray-400 mb-4">
                      Most of all we just enjoy building things. Interesting
                      ideas we can get our teeth stuck into and equally quick
                      fun projects that are live before you know it.
                    </li>

                    <li className="text-gray-400 mb-4">
                      For frontend we build using modern HTML, CSS, Javascript
                      and SVG. We use React for client-side applications, and a
                      simple, standards-focused frontend setup for Ruby on Rails
                      and Craft CMS sites. For those of a tech nature we use
                      Webpack, Babel and PostCSS.
                    </li>

                    <li className="text-gray-400 mb-4">
                      For backend we usually build using Ruby on Rails with
                      PostgreSQL, Elasticsearch and Redis as our core tools, but
                      we're comfortable using Crystal if what we're building
                      requires more intensive processing or is going to receive
                      more traffic.
                    </li>

                    <li className="text-gray-400 mb-4">
                      In the past, we've built with PHP, MySQL, a number of
                      NoSQL databases, Solr, Lucene, Memcached as well as
                      countless APIs and services for external data. We enjoy
                      adapting to the best tool for the job, whatever that might
                      be.
                    </li>

                    <li className="text-gray-400 mb-4">
                      We generally use open source software. For hosting we
                      prefer using Amazon Web Services (AWS) with Linux as
                      operating system.
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
              <div className="flex justify-between flex-col  lg:flex-row p-8 ">
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
                      <DevelopmentIcons className="w-14 h-14 " />{" "}
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
