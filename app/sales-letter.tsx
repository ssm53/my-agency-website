/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import "./globals.css"; // Ensure this points to where your CSS is located

const SalesLetter = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 text-center">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Transform Your Google Reviews & Ratings Today
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-left mx-auto">
        Dear F&B Owners, let’s have a candid conversation. <br />
        <br /> Are you monitoring your Google reviews and ratings? If not, they
        may be suffering by default. <br /> <br />
        Every day, more customers search for F&B places on Google, making their
        decision about your establishment in just 5 seconds! That's right....
        just 5 seconds!
        <br />
        <br />
        Why? They do this by comparing your reviews and ratings with those of
        your competitors. It’s an easy way for them to choose.
        <br />
        <br />
        Even if your food and drinks are superior, it won't matter if this isn’t
        reflected on Google. <br />
        <br />
        Customers will choose places with higher ratings and better reviews.
        It's as simple as that.
        <br /> <br />
        We don't want this to happen to you... <br /> <br />
        That’s why we’ve created a strategy that filters out negative reviews.
        Only the positive reviews will appear on Google, while the negative ones
        won’t.
        <br />
        <br />
        That's right... only good reviews go to Google. Bad reviews will not!
        <br />
        <br />
        This gives us the confidence to promise better reviews and ratings on
        Google. <br />
        <br />
        If we don’t deliver, you pay RM 0 and get all your money back.
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

export default SalesLetter;
