/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import "./globals.css"; // Ensure this points to where your CSS is located
import { Bold } from "lucide-react";

const SalesLetter = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 text-center">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Transform Your Google Reviews & Ratings with RatingUp
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-left mx-auto">
        We've created a strategy that filters out negative Google reviews.
        <br />
        <br />
        That's right... only good reviews go to Google. Bad reviews will not!{" "}
        <br />
        <br />
        People judge your clinic online in 5 seconds.
        <br />
        <br />
        5 seconds?? Yeap, all they need to see is your Google reviews & ratings.
        <br />
        <br />
        If it's bad, they'll just ignore your clinic.
        <br />
        <br />
        Before we explore more aggresive marketing techniques, your online
        reputation (Google ratings & reviews) should be solid first.
        <br />
        <br />
        Odds are, you have a great business, which provides value to your
        customers. <br />
        <br />
        But your Google reviews & ratings are still bad!
        <br />
        <br />
        Let's fix that.
        <br />
        <br />
        If we don’t improve your reviews & ratings, you pay RM 0 and get all
        your money back. <br />
        <br />
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg mx-auto">
          Originally priced at <span className="line-through">RM2000</span>, now
          available for only{" "}
          <span className="text-blue-500 font-bold">RM997</span>!
          <br /> <br />
          One Time Payment.
          <br />
          100% Money Back Guarantee
        </p>{" "}
        <br />
        <br />
        Sounds fair? Let's chat on whatsapp.
      </p>
      <Link
        href={"https://wa.me/60123397028"}
        className="cursor-pointer flex items-center justify-center border rounded-lg w-48 p-2 mx-auto my-6 text-white button-shimmer hover:text-blue-500"
      >
        Chat on Whatsapp
      </Link>
    </div>
  );
};

export default SalesLetter;
