import React from "react";

export function HelpfulLinks() {
  const links = [
    { displayText: "Tax Due Dates", urlLink: "#" },
    { displayText: "Tax Rates", urlLink: "#" },
    { displayText: "Where is my refund", urlLink: "#" },
  ];

  return (
    <ul>
      {links.map((item, index) => (
        <li key={index} className="mb-2">
          <a href={item.urlLink} className="text-white hover:border-red-500 border border-transparent
            font-bold rounded-full text-[20px] px-3 py-1  transition-all">
            {item.displayText}
          </a>
        </li>
      ))}
    </ul>
  );
}
