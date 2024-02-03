"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Services",
      link: "/#services",
    },
    {
      title: "Client-Info",
      link: "/#client",
    },
    {
      title: "Contact",
      link: "/contact",
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

      <div className="hidden md:flex gap-0.5">
        {menuList.map((item, index) => {
          if (item.link.includes("#")) {
            return (
              <div key={index}>
                <h2 className="md:text-white bg-[#2a5f87] border-[4px] hover:border-[#4eaeae] rounded-full text-[15px] px-3 py-1 cursor-pointer">
                  <a href={item.link}>{item.title}</a>
                </h2>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <h2 className="md:text-white bg-[#2a5f87] border-[4px] hover:border-[#4eaeae] rounded-full text-[15px] px-3 py-1 cursor-pointer">
                  <Link href={item.link}>{item.title}</Link>
                </h2>
              </div>
            );
          }
        })}
      </div>

      <div className="md:hidden">
        {!toggle ? (
          <HiBars3BottomRight
            onClick={() => setToggle(!toggle)}
            className="text-[#2a5f87] text-[22px]"
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setToggle(!toggle)}
            className="text-[#2a5f87] text-[22px] cursor-pointer"
          />
        )}
        {toggle ? (
          <MenuOverlay menuList={menuList} onMenuClick={toggleMenu} />
        ) : null}
      </div>
    </div>
  );
}

export default Header;
