"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section>
      <div className="flex justify-center text-center mt-7 p-5">
        <div className="lg:w-8/12 lg:h-48">
          <div>
            <div className={`${activeTab === "home" ? "block" : "hidden"}`} role="tabpanel">
              <h1 className="text-[18px] text-gray-500">
                “techcrucks were a delight to work with. Not only are they insanely talented but they’re great listeners meaning we got a site that we wanted but with their genius on top.”
              </h1>
              <p className="text-[13px] text-gray-400 py-5">JAMES KENDALL, BRIGHTON SOURCE</p>
            </div>

            <div className={`${activeTab === "profile" ? "block" : "hidden"}`} role="tabpanel">
              <h1 className="text-[18px] text-gray-500">
                “techcrucks have built us an excellent site here, backed up by honest and reliable service.”
              </h1>
              <p className="text-[13px] text-gray-400 py-5">GARY SCOTT, BORED OF SOUTHSEA</p>
            </div>

            <div className={`${activeTab === "contact" ? "block" : "hidden"}`} role="tabpanel">
              <h1 className="text-[18px] text-gray-500">
                “techcrucks can always be relied upon. Excellent work, friendly service and fun to work with!”
              </h1>
              <p className="text-[13px] text-gray-400 py-5">IAN AHERNE, SALON SUPPLIES</p>
            </div>

            <div className={`${activeTab === "blog" ? "block" : "hidden"}`} role="tabpanel">
              <h1 className="text-[18px] text-gray-500">
                “Reflecting the values of our organisation, techcrucks has transformed our web device presence, backed by an efficient and reliable team.”
              </h1>
              <p className="text-[13px] text-gray-400 py-5">ANDY LOCKE, OPEN AIR THEATRE</p>
            </div>

            <div className={`${activeTab === "about" ? "block" : "hidden"}`} role="tabpanel">
              <h1 className="text-[18px] text-gray-500">
                “We’re thrilled with the work techcrucks has done creating a website we are truly proud of. We love Jason’s innovative design, and have benefitted hugely from Dan&apos;s strategic and technical knowledge and advice. In Mozzarella, techcrucks has created a superb and highly intuitive CMS system, meaning the back end works as well as the front looks.”
              </h1>
              <p className="text-[13px] text-gray-400 py-5">JAMES GRIEVE, BUSH THEATRE</p>
            </div>
          </div>

          <ul className="flex justify-center gap-6 mt-4" role="tablist">
            {["home", "profile", "contact", "blog", "about"].map((tab) => (
              <li
                key={tab}
                className={`${
                  activeTab === tab
                    ? "border-4 border-[#ee6557]"
                    : "bg-[#c5c5c5] hover:bg-[#16a6b6]"
                } w-8 h-8 rounded-full cursor-pointer`}
              >
                <button
                  className="w-8 h-8"
                  onClick={() => handleTabChange(tab)}
                  role="tab"
                  aria-label={`${tab} tab`}
                  aria-selected={activeTab === tab ? "true" : "false"}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
