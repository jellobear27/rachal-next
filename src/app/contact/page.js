"use client";

import { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRequestFailed(false);
    setRequestSuccess(false);

    const data = new FormData(e.target);

    const token = await executeRecaptcha("form_submit");
    data.append("g-recaptcha-response", token);

    if (token) {
      try {
        const response = await fetch("/submit/contact", {
          method: "POST",
          body: data,
        });

        if (response.ok) {
          setRequestSuccess(true);
        } else {
          setRequestFailed(true);
        }
      } catch (error) {
        console.error(error);
        setRequestFailed(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="text-[#2a5f87]">
      <form className="flex flex-col [&>*]:mt-3 [&>*]:border [&>*]:p-4 w-full" onSubmit={handleSubmit}>
        <div className="font-medium text-3xl">Please complete entire form</div>
        <input type="text" placeholder="first name here.." />
        <input type="text" placeholder="last name here.." />
        <input type="email" placeholder="email  here.." />
        <input type="phone" placeholder="phone  here.." />
        <select>
          <option value="" disabled selected>
            Preferred Contact Method
          </option>
          <option value={"zoom"}>Zoom</option>
          <option value={"phone"}>Phone</option>
        </select>
        <input
          type="text"
          name="firstNameLol"
          placeholder="first name please"
          className=" w-2 h-0 bg-[#f5f7f9] outline-transparent border-none absolute placeholder:text-[#f5f7f9] cursor-default -z-10"
        />
        <button type="submit" className="bg-slate-600 text-white" disabled={isLoading || requestSuccess}>
          Submit
        </button>
        {requestSuccess && (
        <div className="mt-12 text-2xl text-[green]">
          Submission received! Thank you!
        </div>
      )}
      {requestFailed && (
        <div className="mt-12 text-2xl text-[red]">
          Sorry, there's been an error... Try again later.
        </div>
      )}

      </form>
    </div>
  );
}

export default page;
