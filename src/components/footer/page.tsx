"use client";
import Link from "next/link";
import Button from "@/components/button/page"

export const Footerdata = [
  {
    id: 1,
    logo: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14"
        mirror-in-rtl="true"
      >
        <path
          fill="#494c4e"
          d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"
        />
        <path
          fill="#494c4e"
          d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z"
        />
        <path
          fill="#494c4e"
          d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z"
        />
      </svg>
    ),
    title: " PROJECT PLANNER",
    text: "Interested in working with us? Launch our proposal planner to get started.",
    btn: "LAUNCH IT",
    linkdata: "/planner",
  },
  {
    id: 2,
    logo: (
      <svg
        viewBox="0 0 17 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="si-glyph si-glyph-connect-2 w-14"
      >
        <defs></defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M14.5,13.043 C14.242,13.043 14.002,13.112 13.79,13.225 L10.531,9.954 C10.738,9.664 10.885,9.331 10.953,8.968 L12.086,8.968 C12.287,9.544 12.84,9.96 13.5,9.96 C14.329,9.96 15,9.308 15,8.502 C15,7.696 14.329,7.044 13.5,7.044 C12.826,7.044 12.264,7.479 12.074,8.073 L10.955,8.073 C10.893,7.725 10.764,7.401 10.573,7.119 L13.863,3.817 C14.057,3.906 14.271,3.96 14.5,3.96 C15.329,3.96 16,3.308 16,2.502 C16,1.696 15.329,1.044 14.5,1.044 C13.672,1.044 13.002,1.696 13.002,2.502 C13.002,2.763 13.077,3.005 13.201,3.217 L9.945,6.486 C9.652,6.279 9.316,6.133 8.949,6.067 L8.949,4.886 C9.556,4.7 10,4.155 10,3.502 C10,2.696 9.329,2.044 8.5,2.044 C7.672,2.044 7.002,2.696 7.002,3.502 C7.002,4.157 7.447,4.705 8.06,4.889 L8.06,6.066 C7.696,6.13 7.36,6.271 7.069,6.474 L3.809,3.203 C3.927,2.994 4,2.758 4,2.503 C4,1.697 3.329,1.045 2.5,1.045 C1.672,1.045 1.002,1.697 1.002,2.503 C1.002,3.309 1.672,3.961 2.5,3.961 C2.734,3.961 2.955,3.904 3.152,3.811 L6.437,7.108 C6.241,7.393 6.107,7.721 6.044,8.075 L4.926,8.075 C4.737,7.48 4.173,7.046 3.499,7.046 C2.671,7.046 2.001,7.698 2.001,8.504 C2.001,9.31 2.671,9.962 3.499,9.962 C4.159,9.962 4.714,9.546 4.913,8.97 L6.046,8.97 C6.114,9.339 6.267,9.677 6.48,9.97 L3.226,13.236 C3.01,13.119 2.765,13.047 2.499,13.047 C1.671,13.047 1.001,13.699 1.001,14.505 C1.001,15.311 1.671,15.963 2.499,15.963 C3.328,15.963 3.999,15.311 3.999,14.505 C3.999,14.279 3.942,14.068 3.849,13.879 L7.124,10.59 C7.401,10.774 7.718,10.899 8.059,10.959 L8.059,12.118 C7.447,12.302 7.001,12.849 7.001,13.505 C7.001,14.311 7.671,14.963 8.499,14.963 C9.328,14.963 9.999,14.311 9.999,13.505 C9.999,12.853 9.556,12.307 8.948,12.121 L8.948,10.958 C9.292,10.896 9.611,10.768 9.89,10.581 L13.159,13.862 C13.06,14.056 13.001,14.273 13.001,14.505 C13.001,15.311 13.671,15.963 14.499,15.963 C15.328,15.963 15.999,15.311 15.999,14.505 C15.999,13.699 15.329,13.043 14.5,13.043 L14.5,13.043 Z"
            fill="#434343"
            className="si-glyph-fill"
          ></path>
        </g>
      </svg>
    ),
    title: "CONNECT",
    text: "hello@techcrucks.com",
    btn: "CONTACT",
    linkdata: "/contact",
  },
  {
    id: 3,
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
          stroke="#434343"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: " CALENDLY",
    text: "Schedule a time to talk to us and get things moving.",
    btn: "BOOK IN",
    linkdata: "/calendly",
  },
];

function page() {
  const date = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="flex flex-col gap-8 p-6 justify-center lg:flex-row ">
          {Footerdata.map((value) => {
            return (
              <Link href={value.linkdata} className=" lg:w-1/4 " key={value.id}>
                <div className="border-t-2 border-gray-400 ">
                  <div className="py-5 flex justify-center mt-5">
                    <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#e7e7e7] flex justify-center items-center ">
                      {value.logo}
                    </p>
                  </div>
                  <h1 className="text-center text-xl h-6">{value.title}</h1>
                  <p className="text-center text-gray-500 mt-4 h-14">
                    {value.text}
                  </p>
                  <div className="py-5 text-center">
                    <Button title={value.btn}/>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center P-4">
          <div className="flex justify-center">
            <p className=" w-9/12 border-t-2 border-gray-500"></p>
          </div>
          <p className="py-7 text-gray-500">
            WE ARE PROUD TO BE RECOMMENDED BY THESE FINE FOLKS:
          </p>
          <div className="flex flex-col gap-8 p-3 lg:flex-col justify-center">
            <div className="text-center text-gray-500">
              <p>
                Copyright © 2006 - {date}{" "}
                <Link
                  href="/home"
                  className="text-gray-600 hover:text-green-500 "
                >
                  TechCrucks Limited.
                </Link>{" "}
                All rights reserved.
              </p>

              <div className="py-4">
                <Link href="/legal" className=" hover:text-[#5fd0c5]">
                  {" "}
                  Read the boring legal stuff
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default page;
