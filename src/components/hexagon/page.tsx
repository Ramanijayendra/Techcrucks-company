import Image from "next/image";
import React from "react";

function page(props: { id: number; photo: string }) {
  return (
    <>
      <div
        className="hexagonhome-container lg:relative lg:w-1/6 lg:h-64 lg:border-2 border-[#eee2e2] bg-[#fcfbfb]"
        key={props.id}
      >
        <Image
          src={props.photo}
          className="hexagonhome-image lg:absolute h-[100%] w-[100%] lg:bg-[white] "
          alt="homeimages"
        />
      </div>
    </>
  );
}

export default page;
