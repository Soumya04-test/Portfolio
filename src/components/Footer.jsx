import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return <>
    <div className="container-footer w-full h-[135px] bg-black text-white flex flex-row items-center justify-center mt-20">
        <FaRegCopyright/> <p className="ml-2"> 2022-2025 All Rights Reserved</p>
    </div>  
  </>;
};

export default Footer;
