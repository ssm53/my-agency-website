/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

const SalesLetter = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 text-center">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Let Me Build Your Website
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        All you need to do is WhatsApp me "Yes" <br />
        <br /> and I will build a customized website for you. <br />
        <br />
        After 7 days, I will show it to you. <br />
        <br />
        If you like it, you pay me. <br />
        <br />
        If you don't like it, you don't have to pay me anything.
      </p>
      {/* <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        I build websites for doctors, make-up artists, and realtors.
      </p> */}
      <Link
        href={"https://wa.me/60123397028"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white hover:text-black hover:bg-white"
      >
        I want a website
      </Link>
    </div>
  );
};

export default SalesLetter;
