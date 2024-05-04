import React from "react";
import Link from "next/link";
import Button from "@/components/button/page"

export const Aboutdata = [
  {
    id: 1,
    logo: (
      <svg fill="#494c4e" className="w-16" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M 7,13 C 3.671,13 1,10.291 1,7 1,3.671 3.671,1 7,1 c 3.329,0 6,2.671 6,6 0,3.291 -2.671,6 -6,6 z M 7,2.007 C 4.2515,2.007 2.0065,4.2515 2.0065,7 2.0065,9.749 4.2515,11.994 7,11.994 9.749,11.994 11.9935,9.749 11.9935,7 11.9935,4.2515 9.749,2.007 7,2.007 Z m 2.9425,5.574 -4.336,0 c -0.192,0 -0.3475,-0.1545 -0.349,-0.3455 l 0,-0.506 C 5.2575,6.536 5.413,6.381 5.6065,6.381 l 4.374,0 c 0.1935,0 0.3485,0.1555 0.3485,0.3485 l 0,0.503 C 10.2905,7.426 10.1355,7.581 9.9425,7.581 Z m -1.123,-1.9355 -4.374,0 C 4.254,5.6465 4.097,5.492 4.0965,5.3 l 0,-0.505 c 0,-0.1555 0.155,-0.3105 0.3485,-0.3105 l 4.374,0 c 0.155,0 0.31,0.1555 0.31,0.3095 l 0,0.503 C 9.1295,5.49 8.974,5.6455 8.8195,5.6455 Z m -4.374,2.709 4.374,0 c 0.194,0 0.348,0.1555 0.348,0.3485 l 0,0.503 C 9.1685,9.3975 9.013,9.5535 8.822,9.5545 l -4.3765,0 C 4.2515,9.5165 4.097,9.361 4.097,9.168 l 0,-0.503 C 4.0965,8.51 4.2515,8.3545 4.4455,8.3545 Z"/></svg>
    ),
    title: "BRANDING",
    text: "From initial naming to full visual rollout we can look after everything brand.",
    btn: "FIND OUT MORE",
    linkdata: "/aboutitem/branding",
  },

  {
    id: 2,
    logo: (
      <svg className="w-14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#494c4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#494c4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.32 12H10.97C11.24 12 11.58 12.18 11.72 12.4L12.85 14.1C13.08 14.44 13.03 14.95 12.74 15.24L10.28 17.7C9.93 18.05 9.35 18.05 9 17.7L6.54 15.24C6.25 14.95 6.2 14.44 6.43 14.1L7.56 12.4C7.72 12.18 8.06 12 8.32 12Z" stroke="#494c4e" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "ILLUSTRATION",
    text: " Beautiful images all done in house in a number of styles to make sure it is perfectly matched to the brand tone.",
    btn: "FIND OUT MORE",
    linkdata: "/aboutitem/working",
  },

  {
    id: 3,
    logo: (
      <svg fill="#494c4e" className="w-14" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xmlSpace="preserve">
<g>
	<g>
		<g>
			<path d="M472.178,34.62H39.822C17.864,34.62,0,52.485,0,74.442c0,17.955,0,345.233,0,363.115
				c0,21.958,17.864,39.822,39.822,39.822h432.356c21.958,0,39.822-17.864,39.822-39.822c0-17.89,0-345.165,0-363.115
				C512,52.485,494.136,34.62,472.178,34.62z M477.867,437.557c0,3.137-2.552,5.689-5.689,5.689H39.822
				c-3.137,0-5.689-2.552-5.689-5.689V153.839h443.733V437.557z M477.867,119.706H34.133V74.442c0-3.137,2.552-5.689,5.689-5.689
				h432.356c3.137,0,5.689,2.552,5.689,5.689V119.706z"/>
			<circle cx="71.805" cy="94.231" r="12.836"/>
			<circle cx="112.959" cy="94.231" r="12.836"/>
			<circle cx="154.112" cy="94.231" r="12.836"/>
			<path d="M189.914,419.105l66.082-51.274l66.089,51.274c11.193,8.685,27.527,0.683,27.527-13.485V191.464
				c0-9.425-7.641-17.067-17.067-17.067H179.453c-9.425,0-17.067,7.641-17.067,17.067v214.157
				C162.386,419.882,178.796,427.732,189.914,419.105z M196.519,208.531h118.961v29.687H196.519V208.531z M196.518,272.352H315.48
				v98.428l-49.022-38.035c-6.155-4.776-14.766-4.776-20.924,0.001l-49.015,38.031V272.352z"/>
		</g>
	</g>
</g>
</svg>
    ),
    title: "DESIGN",
    text: " More than just pixel pushing - pulling everything together to make fluid exciting designs.    ",
    btn: "FIND OUT MORE",
    linkdata: "/aboutitem/desing",
  },

  {
    id: 4,
    logo: (
      <svg className="w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 22H14M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 11.3787 17.8135 13.4694 16 14.7344L15.4582 17.3004C15.3097 18.2778 14.4695 19 13.4809 19H10.5191C9.53052 19 8.69027 18.2778 8.54177 17.3004L8 14.7453C6.18652 13.4804 5 11.3787 5 9Z" stroke="#494c4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 15H16" stroke="#494c4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "STRATEGY",
    text: "Taking a simple idea through to a functioning business and everything in between.",
    btn: "FIND OUT MORE",
    linkdata: "/aboutitem/business",
  },

  {
    id: 5,
    logo: (
      <svg className="w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#494c4e" strokeWidth="2"/>
      <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="#494c4e" strokeWidth="2"/>
      <path d="M6 19C6.63819 16.6928 8.27998 16 12 16C15.72 16 17.3618 16.6425 18 18.9497" stroke="#494c4e" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "USER EXPERIENCE",
    text: " A crucial part of all our projects - ensuring a natural flow by prototyping and iterating - supported with research and interviews.",
    btn: "FIND OUT MORE",
    linkdata: "/aboutitem/thinking",
  },

  {
    id: 6,
    logo: (
      <svg className="w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z" stroke="#494c4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9L7 12L10 15M14 9L17 12L14 15" stroke="#494c4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "DEVELOPMENT",
    text: "From frontend code to complex backend and applications - all things technical.",
    btn: "FIND OUT MORE",
    linkdata: "/aboutitem/development",
  },

  {
    id: 7,
    logo: (
      <svg className="w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="#494c4e"/>
      </svg>
    ),
    title: "E-COMMERCE",
    text: " Advising on everything from payment to fulfilment.",
    btn: "FIND OUT MORE",
    linkdata: "/aboutitem/ecommerce",
  },
];

function page() {
  return (
    <>
      <section>
        <div className="py-10 flex flex-col justify-center items-center gap-10 p-6  lg:flex-row flex-wrap">
          {Aboutdata.map((value) => {
            return (
              <div className="text-center  lg:w-1/5   rounded mt-5 " key={value.id}>
                <Link href={value.linkdata}>
                  <div className="flex justify-center" key={value.id}>
                    <p className="rounded-tl-[20px] rounded-br-[20px] relative w-32 h-32 bg-[#dedede] flex justify-center items-center">
                    {value.logo}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-[16px] h-5 ">{value.title}</p>
                    <p className="py-4 text-gray-500 h-32 flex justify-center items-center">
                      {value.text}
                    </p>
                  </div>
                 <Button title={value.btn}/>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default page;
