import React from "react";

function page() {



  return (
    <div className="text-[#2a5f87]">
      <form className="flex flex-col [&>*]:mt-3 [&>*]:border [&>*]:p-4 w-full" >
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
        <button type="submit" className="bg-slate-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default page;
