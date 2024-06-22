/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import "./globals.css"; // Ensure this points to where your CSS is located
import { Bold } from "lucide-react";

const WhyItMatters = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 text-center">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Why Do Google Reviews & Ratings Matter?
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        People judge your business online in 5 seconds.
        <br />
        <br />
        5 seconds?? Yeap, all they need to see is your Google reviews & ratings.
        <br />
        <br />
        If it's bad, they'll just ignore your business.
        <br />
        <br />
        If it's good, then they will look further into your business. <br />
        <br />
        Odds are, you have a great business, which provides value to your
        customers. <br />
        <br />
        But your Google reviews & ratings are still bad!
        <br />
        <br />
        Let's fix that.
      </p>
      <Link
        href={"https://wa.me/60123397028"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white button-shimmer"
      >
        Chat on Whatsapp
      </Link>
    </div>
  );
};

export default WhyItMatters;
