"use client";
import Image from "next/image";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import animationData from "@/assets/lottie.json";

import { HelpfulLinks } from "@/components/HelpfulLinks";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
        <div className="mb-10">
          {" "}
          {/* Adjusted margin */}
          <p className="text-[#32536c] font-bold text-[24px]">
            Your Financial Growth, Personally Guided
          </p>
          <br></br>
          <p className="text-[#292a2d] text-[14px] font-bold">
            "Welcome to Rachal Skeen CPA, where personal attention meets
            professional expertise. With 15 years of dedicated experience, I
            specialize in nurturing each client's financial journey with a focus
            on individual needs and lasting relationships. Whether you're
            navigating personal finances or managing a small business, my
            approach is tailored to ensure your financial health and growth. At
            Rachal Skeen CPA, your financial goals are not just numbers; they're
            the milestones we achieve together."
          </p>
          <br></br>
          {/* <div>
            <video
              className="coh-video-background-inner"
              autoPlay
              loop
              muted
              playsInline
              src="/bg.mp4"
            ></video>
            <div className="z-50">
              <p className="text-black text-[30px] font-bold -mt-[250px]">
                Helplful Links
              </p>
              <HelpfulLinks />
            </div>
          </div> */}
          <div className="mt-4">
            <button className="text-white text-full px-10 pb-2.5 py-2.5 bg-button-gradient rounded-full border-[0.5px] border-black transition duration-200 ease-in-out hover:bg-button-gradient-hover shadow-custom-dark">
              Reach Out
            </button>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-white to-">
            <DotLottiePlayer src={animationData} autoplay loop />
          </div>
        </div>
      </div>
    </>
  );
}
