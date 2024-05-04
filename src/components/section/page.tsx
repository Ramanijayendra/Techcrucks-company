"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [counters, setCounters] = useState([
    {
      target: 51292,
      current: 0,
      label: "TWEETS",
      logo: (
        <svg
          className="w-16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z"
            fill="#494c4e"
          />
        </svg>
      ),
    },

    {
      target: 40,
      current: 0,
      label: "BROKEN IPHONES",
      logo: (
        <svg
          className="w-16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 3L16 3C17.1046 3 18 3.89543 18 5L18 19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19L6 5C6 3.89543 6.89543 3 8 3L9 3M15 3V4C15 5.10457 14.1046 6 13 6H11C9.89543 6 9 5.10457 9 4L9 3M15 3L9 3"
            stroke="#494c4e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      target: 83254,
      current: 0,
      label: "SONGS PLAYED",
      logo: (
        <svg
          className="w-16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            stroke="#494c4e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 6h-6m6 4h-6m6 4h-8m8 4H4"
          />
          <path fill="#494c4e" d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          <path
            stroke="#494c4e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 0V7m0 0h2V6H8v1z"
          />
        </svg>
      ),
    },

    {
      target: 27,
      current: 0,
      label: "AVERAGE AGE",
      logo: (
        <svg
          fill="#494c4e"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-16"
          viewBox="0 0 162.978 162.978"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M162.978,101.101l-19.611-39.224l-19.611,39.224h13.209c-8.315,25.958-32.633,44.826-61.324,44.826
			c-35.529,0-64.438-28.908-64.438-64.438c0-35.529,28.909-64.438,64.438-64.438c27.376,0,50.764,17.19,60.077,41.325l6.44-12.882
			c-12.813-23.595-37.82-39.649-66.512-39.649C33.936,5.844,0,39.778,0,81.489c0,41.708,33.936,75.645,75.645,75.645
			c34.924,0,64.331-23.809,72.997-56.032H162.978z"
              />
              <path
                d="M35.486,96.582h7.084l2.15-7.749h8.645l2.332,7.749h7.345l-9.362-30.192h-8.96L35.486,96.582z M47.494,77.32
			c0.493-1.749,0.941-4.034,1.39-5.823h0.088c0.449,1.789,0.988,4.036,1.527,5.823l1.882,6.413h-6.675L47.494,77.32z"
              />
              <path
                d="M81.737,71.722c3.311,0,5.371,0.583,7.029,1.294l1.436-5.466c-1.479-0.715-4.482-1.48-8.377-1.48
			c-9.901,0-17.2,5.731-17.253,15.769c-0.042,4.434,1.48,8.372,4.26,10.978c2.778,2.688,6.763,4.076,12.277,4.076
			c3.98,0,7.975-0.985,10.075-1.701V79.289H79.943v5.331h4.665v6.313c-0.542,0.274-1.798,0.449-3.365,0.449
			c-5.604,0-9.497-3.677-9.497-9.904C71.746,74.944,76.042,71.722,81.737,71.722z"
              />
              <polygon
                points="115.175,71.993 115.175,66.395 96.539,66.395 96.539,96.582 115.804,96.582 115.804,90.989 103.394,90.989 
			103.394,83.821 114.507,83.821 114.507,78.261 103.394,78.261 103.394,71.993 		"
              />
            </g>
          </g>
        </svg>
      ),
    },

    {
      target: 51292,
      current: 0,
      label: "LINES OF CODE",
      logo: (
        <svg
          className="w-16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12"
            stroke="#494c4e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 4L13 6L15 8"
            stroke="#494c4e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 4L21 6L19 8"
            stroke="#494c4e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V20"
            stroke="#494c4e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 20H16"
            stroke="#494c4e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]);

  useEffect(() => {
    const updateCounters = () => {
      setCounters((prevCounters) => {
        let allTargetsReached = true;

        const updatedCounters = prevCounters.map((counter) => {
          const { target, current } = counter;
          const incr = target / 27;
          if (current < target) {
            allTargetsReached = false;
            return { ...counter, current: Math.round(current + incr) };
          } else {
            return { ...counter, current: target };
          }
        });

        if (allTargetsReached) {
          clearInterval(interval);
        }

        return updatedCounters;
      });
    };

    const interval = setInterval(updateCounters, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div className="py-10 flex flex-col justify-center gap-8 items-center lg:flex-row lg:justify-center">
          {counters.map((value, index) => {
            return (
              <div className="text-center " key={index}>
                <p className="rounded-tl-[20px] rounded-br-[20px] p-9 bg-[#d7d0d0]   flex justify-center items-center">
                  {value.logo}
                </p>
                <p
                  className="text-[#d76944] text-[16px] mt-6"
                  data-target={value.target}
                >
                  {value.current}
                </p>
                <p className="text-gray-500 py-4 text-[15px]">{value.label}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default page;
