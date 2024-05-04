"use client";

import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (

    <>

  <section>
    <div className="flex justify-center text-center mt-7 p-5">

    <div className="lg:w-8/12 lg:h-48" >
      <div id="myTabContent">
        <div
          className={`${activeTab === "home" ? "block" : "hidden"} tab-pane`} id="home-tab-pane" role="tabpanel"  >
          <h1 className="text-[18px] text-gray-500">“techcrucks were a delight to work with. Not only are they insanely talented but they're great listeners meaning we got a site that we wanted but with their genius on top. ”</h1>
          <p className="text-[13px] text-gray-400 py-5">JAMES KENDALL, BRIGHTON SOURCE</p>
        </div>

        <div
          className={`${activeTab === "profile" ? "block" : "hidden"} tab-pane`} id="profile-tab-pane"role="tabpanel" >
          <h1 className="text-[18px] text-gray-500">“techcrucks have built us an excellent site here, backed up by honest and reliable service.”</h1>
          <p className="text-[13px] text-gray-400 py-5">GARY SCOTT, BORED OF SOUTHSEA</p>
        </div>

        <div
          className={`${activeTab === "contact" ? "block" : "hidden"} tab-pane`} id="contact-tab-pane" role="tabpanel"  >
         <h1 className="text-[18px] text-gray-500">“techcrucks can always be relied upon. Excellent work, friendly service and fun to work with!”</h1>
          <p className="text-[13px] text-gray-400 py-5">IAN AHERNE, SALON SUPPLIES</p>
        </div>

        <div
          className={`${activeTab === "blog" ? "block" : "hidden"} tab-pane`} id="blog-tab-pane" role="tabpanel"  >
           <h1 className="text-[18px] text-gray-500">“Reflecting the values of our organisation, techcrucks has transformed our web device presence, backed by an efficient and reliable team.”</h1>
          <p className="text-[13px] text-gray-400 py-5">ANDY LOCKE, OPEN AIR THEATRE</p>
        </div>

        <div
          className={`${activeTab === "about" ? "block" : "hidden"} tab-pane`} id="about-tab-pane" role="tabpanel"  >
            <h1 className="text-[18px] text-gray-500">“We're thrilled with the work techcrucks has done creating a website we are truly proud of. We love Jason's innovative design, and have benefitted hugely from Dan's strategic and technical knowledge and advice. In Mozzarella, techcrucks has created a superb and highly intuitive CMS system, meaning the back end works as well as the front looks. ”</h1>
          <p className="text-[13px] text-gray-400 py-5">JAMES GRIEVE, BUSH THEATRE</p>
        </div>

      </div>


      <ul className="flex justify-center  gap-6 " id="myTab" role="tablist">
        <li className={  `${  activeTab === "home" ? "border-4 border-[#ee6557]  " : "bg-[#c5c5c5] hover:bg-[#16a6b6] " } w-8 h-8 rounded-full cursor-pointer`} >
          <button className="w-8 h-8" onClick={() => handleTabChange("home")} role="tab" aria-controls="home-tab-pane" aria-selected={activeTab === "home" ? "true" : "false"} > </button>
        </li>

        <li className={`${ activeTab === "profile" ? "border-4 border-[#ee6557] " : "bg-[#c5c5c5] hover:bg-[#16a6b6] "}  w-8 h-8 rounded-full cursor-pointer`} >
            <button className=" w-8 h-8" onClick={() => handleTabChange("profile")} role="tab" aria-controls="profile-tab-pane" aria-selected={activeTab === "profile" ? "true" : "false"}  >  </button>
        </li>

        <li className={`${  activeTab === "contact" ? "border-4 border-[#ee6557] " : "bg-[#c5c5c5] hover:bg-[#16a6b6] " } w-8 h-8 rounded-full cursor-pointer`} >
          <button className=" w-8 h-8" onClick={() => handleTabChange("contact")} role="tab" aria-controls="contact-tab-pane" aria-selected={activeTab === "contact" ? "true" : "false"} >   </button>
        </li>
        <li className={`${  activeTab === "blog" ? "border-4 border-[#ee6557] " : "bg-[#c5c5c5] hover:bg-[#16a6b6] " }  w-8 h-8 rounded-full cursor-pointer`} >
          <button className=" w-8 h-8" onClick={() => handleTabChange("blog")} role="tab" aria-controls="blog-tab-pane" aria-selected={activeTab === "blog" ? "true" : "false"} >   </button>
        </li>
        <li className={`${  activeTab === "about" ? "border-4 border-[#ee6557] " : "bg-[#c5c5c5] hover:bg-[#16a6b6] " }  w-8 h-8 rounded-full cursor-pointer`} >
          <button className=" w-8 h-8" onClick={() => handleTabChange("about")} role="tab" aria-controls="about-tab-pane" aria-selected={activeTab === "about" ? "true" : "false"} >   </button>
        </li>

      </ul>
    </div>

    </div>
    </section>
    </>
  );
};

export default Tabs;
