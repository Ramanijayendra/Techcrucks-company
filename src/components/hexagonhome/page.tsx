import Image from "next/image";
import Link from "next/link";
import React from "react";

function page(props: { id: number;  img: string }) {
  return (
    <>
      <div
        className="hexagonhome-container lg:relative lg:w-1/6 lg:h-64 lg:border-2 border-[#eee2e2] bg-[#fcfbfb]"
        key={props.id}
      >
        <Link href={`/home/${props.id}`}>
          <Image
            src={props.img}
            className="hexagonhome-image lg:absolute h-[100%] w-[100%] lg:bg-[white]"
            alt="homeimages"
            width={"100"}
            height={"100"}
          />
        </Link>
      </div>
    </>
  );
}

export default page;
