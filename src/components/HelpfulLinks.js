import React from "react";

export function HelpfulLinks() {

  const links = [
    { displayText: "Tax Due Dates", urlLink: "" },
    { displayText: "Tax Rates", urlLink: "" },
    { displayText: "Where is my refund", urlLink: "" },
  ];

  return (
    <ul>
      {links.map((item, index) => (
        <li key={index}>
          <a href={item.urlLink}>{item.displayText}</a>
        </li>
      ))}
    </ul>
  );

}
