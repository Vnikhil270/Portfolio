import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return <div className="bg-[#F5F5DC] px-5 sm:px-10 lg:px-20 pb-20">
  <Navbar/>
  <Experience />
  </div>
}

export default page;
