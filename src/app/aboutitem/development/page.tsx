import React from "react";
import Footer from "@/components/footer/page";
import Image from "next/image";
import Button from "@/components/button/page"


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
                      we re comfortable using Crystal if what we re building
                      requires more intensive processing or is going to receive
                      more traffic.
                    </li>

                    <li className="text-gray-400 mb-4">
                      In the past, we ve built with PHP, MySQL, a number of
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
                  <Image src={"/images/placeholder/300x300.svg"} width={"100"} height={"100"} alt="desingimages" />
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
                  <Button title="LAUNCH IT" />

                </div>
                <div className="mt-4 lg:order-2 order-1">
                  <div className="flex justify-center">
                    <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#dedede] flex justify-center items-center">
                      <svg
                        className="w-16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z"
                          stroke="#494c4e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 9L7 12L10 15M14 9L17 12L14 15"
                          stroke="#494c4e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
