import Link from "next/link";
import React from "react";
import Image from 'next/image'
import Footer from "../components/footer/page"

function page() {
  return (
    <>
      <div className="container">
        <div className="flex justify-center">
          <div className="lg:w-6/12">
            <div className="text-center   m-auto">
                <div className="flex justify-center">
                <Image src={"/images/error/sad-astronaut-111111.png"} width={"100"} height={"100"} alt="errorimages" />
               </div>
               <h1 className="text-6xl mb-10  font-bold mt-6"> Error !!</h1>
              <h1 className="text-6xl mb-10  font-bold">Argh, no!</h1>
              <p className="text-[21px] text-gray-400 font-normal ">
               Don t be mad, but that URL doesn t live here. To make things worse, we don t even have a funny 404 page to enjoy.
              </p>
              <Link href="/feed"><p className="py-14 text-gray-500">Seeing as you seem to be into aimless clicking, maybe you d like this</p></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
