import Image from "next/image";
import React from "react";

function Footer() {
  return (
    
    <div className="  bg-[#170f0f]">
      <div className="max-w-6xl m-auto">
        <div className=" text-gray-500 flex items-center">
          <Image src={"/azwarapp.png"} width={140} height={100} alt="Image"/>
          <span className="text-4xl font-light pr-3">|</span>
          <span className="pt-2">AZWAR APP @ ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
