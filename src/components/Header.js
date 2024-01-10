"use client"

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
      title: "ABOUT",
      link: "/about"
    },
    {
      title: "SERVICES",
      link: "/services"
    },
    {
      title: "CONTACT",
      link: "/contact"
    },
  ];
  return (
    <div className="flex items- justify-between">
      <div>
        <h2 className="text-[24px] font-bold text-[#0b090a]">
          Rachal
          <span className="text-red-500"> Skeen</span>
        </h2>
      </div>
      <div className="hidden md:flex gap-4">
        {menuList.map((item, index) => (
          <div key={index}>
            <h2
              className="text-white
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