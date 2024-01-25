"use client"
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
import Link from 'next/link';

function Header() {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Services",
      link: "#services"
    },
    {
      title: "Client-Hub",
      link: "#client"
    },
    {
      title: "Contact",
      link: "/contact"
    },
  ];

  const toggleMenu = () => {
    setToggle(false);
  };

  return (
    <div className="flex items-center justify-between border-b-2">
      <div className="pb-6">
        <Image
          className="w-20"
          src="/logo.jpeg"
          alt="Logo"
          width={592}
          height={598}
        />
      </div>
      
      <div className="hidden md:flex gap-4">
        {menuList.map((item, index) => (
          <div key={index}>
            <h2 className="md:text-white bg-[#2a5f87] hover:border-[4px] border-[#68f8f8] rounded-full text-[15px] px-3 py-1 cursor-pointer">
              <Link href={item.link}>{item.title}</Link>
            </h2>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        {!toggle ? (
          <HiBars3BottomRight onClick={() => setToggle(!toggle)} className="text-[#2a5f87] text-[22px]" />
        ) : (
          <HiOutlineXMark onClick={() => setToggle(!toggle)} className="text-[#2a5f87] text-[22px] cursor-pointer" />
        )}
        {toggle ? <MenuOverlay menuList={menuList} onMenuClick={toggleMenu} /> : null}
      </div>
    </div>
  );
}

export default Header;
