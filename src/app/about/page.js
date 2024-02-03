import React from "react";
import Image from "next/image";

function about() {
  return (
    <div>
       <a id="/about"></a>
      <Image
        className="w-full"
        src="/about.jpeg"
        alt="About"
        width={1792}
        height={488}
      />
      <div className="my-6"></div>
      <p className="text-[#4fa3a1] font-bold  text-[28px]">
        Get to Know Rachal
      </p>
      <div className="my-6"></div>
      <p className="px-4 py-2 text-gray-800 text-justify font-medium text-sm lg:text-base leading-relaxed lg:leading-loose lg:px-20">
        As a proud alumnus of the University of Nebraska at Kearney, I graduated with a Master of Business Administration, specializing in Accounting, in 2008. My journey into the world of taxation began during my time in graduate school in 2007, where I gained invaluable experience working at a local CPA firm. This foundational period was crucial in shaping my understanding of accounting principles and client service excellence.<br>
        </br><br></br>

        Upon completing my advanced degree, I embarked on the next chapter of my career in Lincoln, where I contributed my skills to a prominent CPA firm. This experience not only honed my expertise in tax services but also deepened my commitment to ethical and meticulous financial practices.<br>
        </br><br></br>

        In 2012, with a desire to root my growing family in a nurturing environment, I returned to Kearney. This move marked a significant milestone in my personal and professional life, leading to the establishment of Rachal Skeen CPA in 2018. My firm is a testament to my dedication to serving the Kearney community with integrity, precision, and a personalized approach to accounting.

        I am deeply committed to the prosperity of our community and the success of its members. With a decade-long career in accounting and taxation, I bring a wealth of knowledge, experience, and a passion for fostering financial empowerment. At Rachal Skeen CPA, I look forward to continuing my contribution to the community's growth and wellbeing for many years to come.
      </p>
    </div>
  );
}

export default about;


