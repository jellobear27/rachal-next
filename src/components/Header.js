"use client"
import Image from "next/image";

import React, { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
import Link from 'next/link'

function Header() {
  const [toggle, setToggle] = useState(false);
  const menuList = [
    {
      title: "HOME",
      link: "/"
    },
    {
      title: "SERVICES",
      link: "/services"
    },
    {
      title: "ClIENT-PORTAL",
      link: "/client"
    },
    {
      title: "CONTACT",
      link: "/contact"
    },
  ];
  return (
    <div className="flex items-center justify-between">
        <div>
        <Image className="w-20"
          src="/logo.jpeg" // Assuming your logo is named 'logo.png' and located in the public folder
          alt="Logo" // Alt text for your logo
          width={592} // Adjust width as needed
          height={598} // Adjust height as needed
        />
      </div>
      <div className="hidden md:flex gap-4">
        {menuList.map((item, index) => (
          <div key={index}>
            <h2
              className="text-white bg-[#32536c]
            hover:border-[1px] border-red-500 rounded-full
            text-[15px] px-3 py-1 cursor-pointer"
            >
              <Link href={item.link}>{item.title}</Link>
              
            </h2>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        {!toggle? <HiBars3BottomRight onClick={()=>setToggle(!toggle)} className="text-white text-[22px]" />
        :<HiOutlineXMark onClick={()=>setToggle(!toggle)} className="text-white text-[22px] cursor-pointer" />}
          {toggle?<MenuOverlay menuList={menuList}/>:null}
      </div>
    </div>
  );
}

export default Header;