"use client";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";
import placeusers from "/public/images/placeholder/user.jpg";
import Link from "next/link";
import Button from "@/components/button/page"

function page(props: { id: number }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <div key={props.id}>
        <Link href="" onClick={onOpenModal}>
          <div className="contact-carts hexagonhome-container relative  lg:w-[260px] lg:h-[290px] lg:border-2 border-[#eee2e2] bg-[#16a6b6]">
            <Image
              src={placeusers}
              className="hexagonhome-image images-carts block   lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
              alt="homeimages"
              onClick={onOpenModal}
            />
            <div className="overlay-carts absolute top-0 bottom-0 left-0  right-0  w-[100%] h-[100%] opacity-0 bg-[#16a6b6]">
              <div className="text-carts text-center  text-white top-[50%]  left-[50%] absolute ">
                <div className="text-center">
                  <p className="mb-4"> JASPER</p>
                  <div className="flex justify-center">
                    <p className="w-16 border-[1px] border-white"></p>
                  </div>
                  <p className="mt-3">TECHNICAL DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Modal open={open} onClose={onCloseModal} center>
          <div className=" flex flex-col lg:flex-row gap-8 p-5 bg-slate-200">
            <div className="lg:w-[700px] h-96 ">
              <ul>
                <li className="text-[19px] mb-2 ">JASPER</li>
                <li className="text-[16px] mb-4 ">TECHNICAL DIRECTOR</li>
                <li className=" mb-3">
                  Methodical, organised and not afraid to wrestle with complex
                  databases, Jasper’s talents lie in constantly pushing his
                  skills further.
                </li>
                <li className=" mb-3">
                  Experienced in database design, object oriented programming
                  and front end coding he combines these with an eye for design
                  and a love of photography.
                </li>
                <li className=" mb-5">
                  Jasper is also a managing partner in Buffalo and looks after
                  many of our pure development clients.
                </li>
                <li className="flex flex-col lg:flex-row  gap-5">
                  <Button title="Follow Dan on Twitter"/>
                  <Button title="Visit Dan's website"/>
                </li>
              </ul>
            </div>
            <div className="mt-32 lg:mt-14">
              <div className="hexagonhome-container lg:relative lg:w-[230px] lg:h-[240px] lg:border-2 border-[#eee2e2] bg-[#fcfbfb]">
                {" "}
                <Image
                  src={placeusers}
                  className="hexagonhome-image lg:absolute lg:w-[100%] lg:h-[100%] lg:text-center lg:bg-[white] "
                  alt="homeimages"
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default page;
