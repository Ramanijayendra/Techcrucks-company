"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [counters, setCounters] = useState([
    { id:1, target: 40, current: 0, label: "CURRENT PROJECT CAPACITY" },
    { id:2, target: 80, current: 0, label: "AVG. CLIENT REVENUE INCREASE" },
    { id:3, target: 57, current: 0, label: "CLIENTS WHO WENT ON TO GET FUNDING" },
    { id:4, target: 83, current: 0, label: "REPEAT CUSTOMERS" },
    { id:5, target: 90, current: 0, label: "NEW BUSINESS FROM REFERRALS" },
  ]);

  useEffect(() => {
    const updateCounters = () => {
      setCounters((prevCounters) => {
        let allTargetsReached = true;

        const updatedCounters = prevCounters.map((counter) => {
          const { target, current } = counter;
          const incr = target / 25;
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
      <div className="container">
        <div className="py-10 flex flex-col justify-center gap-8 items-center lg:flex-row ">
          {counters.map((value) => {
            return (
              <div className="w-full  lg:w-32 lg:h-48 text-center" key={value.id}>
                <div className="flex justify-center">
                  <p
                    className="w-28 h-28  box flex justify-center items-center bg-[#d5d2d2] "
                    data-target={value.target}>
                      <span className="text-[28px] font-bold "> {value.current}%</span>
                    </p>
                </div>
                <p className="mt-3 text-[17px] text-gray-500">{value.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default page;
