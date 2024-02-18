"use client";
import Image from "next/image";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import animationData from "@/assets/lottie.json";
import newAnimationData from "@/assets/lottie2.json";

import {
  HiClipboardCheck,
  HiOutlineCurrencyDollar,
  HiThumbUp,
  HiShieldCheck,
} from "react-icons/hi";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
        <div className="mb-20">
          {" "}
          {/* Adjusted margin */}
          <p className="text-[#4fa3a1] font-bold text-[38px] fade-in-up">
            Your Financial Growth, Personally Guided
          </p>
          <br></br>
          <p className="text-[#2a414f] text-[20px] font-serif">
            Welcome to Rachal Skeen CPA, where I combine personalized service
            with expert knowledge. With over 15 years of experience, I'm here to
            guide you through every step of your financial journey, focusing on
            your unique needs and building long-lasting relationships. Whether
            you're dealing with personal finances or running a small buisiness,
            I tailor my approach to help you maintain and grow your finances. At
            Rachal Skeen CPA, your financial goals are not just numbers; they're
            achievements we reach together.
          </p>
          <br></br>
          <div className="mt-4">
            <Link
              href="/contact"
              className="text-white text-full px-10 pb-2.5 py-2.5 bg-button-gradient rounded-full border-[0.5px] border-black transition duration-200 ease-in-out hover:bg-button-gradient-hover shadow-custom-dark"
            >
              Reach Out
            </Link>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#333333] to-white">
            <DotLottiePlayer src={animationData} autoplay loop />
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
      <div className="border-b-2"></div>
      <div className="pb-20"></div>

      <a id="services"></a>
      <p className="flex justify-center text-[#4fa3a1] font-bold text-[28px]">
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
              Income tax preparation for
            </p>
            <p className="text-[#2a414f]">
              Individuals, Partnerships,
              <br></br>Limited Liability Companies,<br></br> Corporations,
              Estates and Trust <br></br>
            </p>
          </div>
        </div>
        {/* Second icon-text pair */}
        <div className="flex items-center">
          <HiOutlineCurrencyDollar size={100} color="#4fa3a1" />
          <div className="ml-4">
            <p className="text-[#2a414f] text-[20px] font-bold">Tax Planning</p>
            <p className="text-[#2a414f]">
              I understand the value of your time
              <br />
              And the need to get your tax's done promptly, so you so you can
              focus on your daily routine
              <br />
            </p>
          </div>
        </div>
        {/* Third icon-text pair */}
        <div className="flex items-center">
          <HiThumbUp size={60} color="#4fa3a1" />
          <div className="ml-4">
            <p className="text-[#2a414f] text-[20px] font-bold">
              Sales Tax filings
            </p>
            <p className="text-[#2a414f]">
              Specializing in Quarterly payroll reports including W-2's
            </p>
          </div>
        </div>
        {/* Fourth icon-text pair */}
        <div className="flex items-center">
          <HiShieldCheck size={60} color="#4fa3a1" />
          <div className="ml-4">
            <p className="text-[#2a414f] text-[20px] font-bold">
              Support Services
            </p>
            <p className="text-[#2a414f]">
              Quarterly or annual review of books, <br />
              Full-service bookkeeping, <br />
              Monthly reconciliations, <br />
              Financial Statement Preparation <br />
            </p>
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
      <div className="border-b-2"></div>
      <div className="pb-20"></div>

      <a id="client"></a>
      <div className="flex justify-center ">
        <div className="h-40px w-40 p-2">
          <DotLottiePlayer src={newAnimationData} autoplay loop />
        </div>
      </div>

      <p className="flex justify-center text-[#4fa3a1] font-bold text-[28px]">
        To Send Client-Info, Please Follow Instructions:
      </p>
      <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Secure File Submission via Dropbox
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Step 1: Sign Up for Dropbox
          </h3>
          <p className="text-gray-600 mb-2">
            To ensure the secure and efficient transfer of your important
            financial documents, we utilize Dropbox. If you do not have a
            Dropbox account, follow these steps:
          </p>
          <ol className="list-decimal list-inside text-[#2a414f] bg-gray-100 rounded p-4">
            <li>
              Visit the Dropbox website:{" "}
              <a
                href="https://www.dropbox.com"
                className="text-blue-500 hover:text-blue-700"
              >
                www.dropbox.com
              </a>
            </li>
            <li>Click on “Sign up” to create a new account.</li>
            <li>Fill in your details and verify your email address.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Step 2: Accessing Our Shared Dropbox Folder
          </h3>
          <p className="text-gray-600 mb-2">
            After creating your account, you will receive an invitation to join
            a shared Dropbox folder:
          </p>
          <ol className="list-decimal list-inside text-[#2a414f] bg-gray-100 rounded p-4">
            <li>Check your email for an invitation from Dropbox.</li>
            <li>
              Click the invitation link and log in to your Dropbox account.
            </li>
            <li>Access the shared folder we've created for you.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Step 3: Uploading Your Documents
          </h3>
          <p className="text-gray-600">
            Drag and drop files into the shared folder or use the “Upload files”
            button:
          </p>
          <ul className="list-disc list-inside text-[#2a414f] bg-gray-100 rounded p-4">
            <li>Ensure that all files are correctly named and organized.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Step 4: Security and Privacy
          </h3>
          <p className="text-gray-600">
            Your data's security and privacy are our top priority. Dropbox uses
            advanced encryption and security measures to protect your
            information.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Need Assistance?
          </h3>
          <p className="text-gray-600">
            If you need help with Dropbox, please contact me at{" "}
            <a
              href="mailto:
rachalskeencpa@gmail.com"
              className="text-blue-500 hover:text-blue-700"
            >
              rachalskeencpa@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="pb-20"></div>
      <div className="border-b-2"></div>
      <div className="pb-10"></div>
      <div className="mt-8">
        <div className="font-medium text-[#2a5f87] text-xl">Our Address and Hours</div>
        <p>
          <a
            href="https://maps.app.goo.gl/eyVUeUn51LKSG5TL8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            2202 Central Ave, Ste 7 68847
          </a>
        </p>
        <p className="text-[#2a5f87] font-bold">Tax Season Hours:</p>
        <p className="text-[#2a5f87]">Tuesday - Saturday: 9:00 AM - 6:00 PM</p>
        <p className="text-[#2a5f87]">Sunday & Monday: Closed</p>
        <p className="text-[#2a5f87] font-bold">Non Tax Season: by appointment only</p>
      </div>
      </>
      
  );
}
