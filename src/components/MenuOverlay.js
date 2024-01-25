import React from 'react';
import Link from 'next/link';

function MenuOverlay({ menuList, onMenuClick }) {
  return (
    <div className='absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7'>
        {menuList.map((item, index) => (
            <Link href={item.link} key={index}>
                <h1 onClick={onMenuClick} className='text-[#2a5f87] font-bold text-[24px] mb-6 justify-center mt-10 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                    {item.title}
                </h1>
            </Link>
        ))}
    </div>
  );
}

export default MenuOverlay;


