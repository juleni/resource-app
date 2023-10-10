"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
const SearchForm = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="flex-center mx-auto mt-5 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="Search"
        />
        {/**https://ui.shadcn.com/docs/components/input */}
        <Input
          type="text"
          placeholder="Search text ..."
          onChange={(e) => setSearch(e.target.value)}
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 
        text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-700"
        />
      </label>
    </form>
  );
};

export default SearchForm;
