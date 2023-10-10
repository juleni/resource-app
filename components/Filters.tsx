"use client";

import { useState } from "react";

const links = ["all", "Next 13", "frontend", "backend", "fullstack"];

const Filters = () => {
  const [active, setActive] = useState("");

  const handleFilter = (link: string) => {
    setActive(link);
  };

  return (
    <ul
      className="text-white-800 body-text no-scrollbar flex gap-2 
    overflow-auto py-10 max-w-full sm:max-w-2xl"
    >
      {links.map((link) => (
        <button
          key={link}
          onClick={() => {
            handleFilter(link);
          }}
          className={`whitespace-nowrap rounded-lg px-8 py-2.5 capitalize hover:text-slate-600
          ${active === link ? "gradient_blue-purple" : ""}`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
