"use client";
import Image from "next/image";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import animationData from "@/assets/lottie.json";
import {
  HiClipboardCheck,
  HiOutlineCurrencyDollar,
  HiThumbUp,
  HiShieldCheck,
} from "react-icons/hi";

import { HelpfulLinks } from "@/components/HelpfulLinks";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
        <div className="mb-10">
          {" "}
          {/* Adjusted margin */}
          <p className="text-[#4fa3a1] font-bold text-[30px]">
            Your Financial Growth, Personally Guided
          </p>
          <br></br>
          <p className="text-[#2a414f] text-[19px] font-serif">
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
      <div className="pb-20"></div>
      <div className="border-b-2"></div>
      <div className="pb-10"></div>

      <a id="services"></a>
      <p className="text-[#4fa3a1] font-bold text-[28px]">
        What Rachal Skeen CPA Can Do For You
      </p>
      <br></br>

      <div className="mt-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {" "}
        {/* Use grid layout for responsiveness */}
        {/* First icon-text pair */}
        <div className="flex items-center">
          <HiClipboardCheck size={60} color="#4fa3a1" />
          <div className="ml-4">
            <p className="text-[#2a414f] text-[20px] font-bold">
              Personal Tax Returns
            </p>
            <p className="text-[#2a414f]">
              I prepare and file your tax returns <br />
              tying together all your income <br />
              sources through an open discussion
            </p>
          </div>
        </div>
        {/* Second icon-text pair */}
        <div className="flex items-center">
          <HiOutlineCurrencyDollar size={60} color="#4fa3a1" />
          <div className="ml-4">
            <p className="text-[#2a414f] text-[20px] font-bold">
              Competitive Rates
            </p>
            <p className="text-[#2a414f]">
              I understand the value of your <br />
              hard-earned money which is
              <br />
              why I've structured my pricing to <br />
              ensure you receive top-notch <br />
              service without overstretching your budget.
            </p>
          </div>
        </div>
        {/* Third icon-text pair */}
        <div className="flex items-center">
          <HiThumbUp size={60} color="#4fa3a1" />
          <div className="ml-4">
            <p className="text-[#2a414f] text-[20px] font-bold">
              CPA Prepared from Beginning to End
            </p>
            <p className="text-[#2a414f]">
              As a CPA I don't just crunch numbers <br />
              I bring a wealth of experience and strategic <br />
              insight, ensuring that every financial decision <br />
              is informed, compliant, and tailored to your unique goals.
            </p>
          </div>
        </div>
        {/* Fourth icon-text pair */}
        <div className="flex items-center">
          <HiShieldCheck size={60} color="#4fa3a1" />
          <div className="ml-4">
            <p className="text-[#2a414f] text-[20px] font-bold">
              File a Return with Accuracy and Confidence
            </p>
            <p className="text-[#2a414f]">
              Entrust your finances to me, <br />
              and experience the peace of mind that <br />
              comes from knowing your financial matters <br />
              are in the hands of a seasoned professional <br />
              who's committed to excellence in every detail
            </p>
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
      <div className="border-b-2"></div>
      <div className="pb-10"></div>
    
      <a id="client"></a>
      <p className="text-[#4fa3a1] font-bold text-[28px]">For Client-Portal Please Follow Instructions:</p>
      <div class="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Secure File Submission via Dropbox</h2>
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Step 1: Sign Up for Dropbox</h3>
        <p class="text-gray-600 mb-2">To ensure the secure and efficient transfer of your important financial documents, we utilize Dropbox. If you do not have a Dropbox account, follow these steps:</p>
        <ol class="list-decimal list-inside text-[#2a414f] bg-gray-100 rounded p-4">
            <li>Visit the Dropbox website: <a href="https://www.dropbox.com" class="text-blue-500 hover:text-blue-700">www.dropbox.com</a></li>
            <li>Click on “Sign up” to create a new account.</li>
            <li>Fill in your details and verify your email address.</li>
        </ol>
    </div>

    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Step 2: Accessing Our Shared Dropbox Folder</h3>
        <p class="text-gray-600 mb-2">After creating your account, you will receive an invitation to join a shared Dropbox folder:</p>
        <ol class="list-decimal list-inside text-[#2a414f] bg-gray-100 rounded p-4">
            <li>Check your email for an invitation from Dropbox.</li>
            <li>Click the invitation link and log in to your Dropbox account.</li>
            <li>Access the shared folder we've created for you.</li>
        </ol>
    </div>

    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Step 3: Uploading Your Documents</h3>
        <p class="text-gray-600">Drag and drop files into the shared folder or use the “Upload files” button:</p>
        <ul class="list-disc list-inside text-[#2a414f] bg-gray-100 rounded p-4">
            <li>Ensure that all files are correctly named and organized.</li>
        </ul>
    </div>

    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Step 4: Security and Privacy</h3>
        <p class="text-gray-600">Your data's security and privacy are our top priority. Dropbox uses advanced encryption and security measures to protect your information.</p>
    </div>

    <div>
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Need Assistance?</h3>
        <p class="text-gray-600">If you need help with Dropbox, please contact me at <a href="mailto:
rachalskeencpa@gmail.com" class="text-blue-500 hover:text-blue-700">
rachalskeencpa@gmail.com</a>.</p>
    </div>
</div>

    </>
  );
}
