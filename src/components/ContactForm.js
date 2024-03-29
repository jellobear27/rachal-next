"use client";
import { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

function ContactForm() {
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
      <form
        className="flex flex-col [&>*]:mt-3 [&>*]:border [&>*]:p-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="font-medium text-3xl">Schedule a Consultaion</div>
        <style jsx>{`
          input,
          textarea,
          select {
            padding: 16px; /* Thick padding */
            margin-bottom: 8px; /* Space between fields */
            border: 4px solid #ccc; /* Subtle border */
            background-color: #f0f0f0;
          }
          button {
            padding: 16px;
            background-color: slate-600;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 8px;
          }
          button:disabled {
            background-color: #999;
          }
        `}</style>
        <input name="firstName" type="text" placeholder="First Name" />
        <input name="lastName" type="text" placeholder="Last Name" />
        <input name="email" type="email" placeholder="Email" />
        <input name="phone" type="phone" placeholder="Cell/Phone Number" />
        <textarea 
          name="services"
          placeholder="Briefly tell me how I can help you:"
          required
        ></textarea>
        <select name="contactMethod">
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
        <button
          type="submit"
          className="text-white text-full px-10 pb-2.5 py-2.5 bg-button-gradient border-[0.5px] border-black transition duration-200 ease-in-out hover:bg-button-gradient-hover shadow-custom-dark"
          disabled={isLoading || requestSuccess}
        >
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
      <div className="pb-20"></div>
      <div className="border-b-2"></div>
      <div className="pb-10"></div>
      <div className="mt-8">
        <div className="font-medium text-xl">Our Address and Hours</div>
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
        <p className="font-bold">Tax Season Hours:</p>
        <p>Tuesday - Saturday: 9:00 AM - 6:00 PM</p>
        <p>Sunday & Monday: Closed</p>
        <p className="font-bold">Non Tax Season: by appointment only</p>
      </div>
    </div>
  );
}

export default ContactForm;
