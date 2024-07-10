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
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        We've created a strategy that filters out negative Google reviews.
        <br />
        <br />
        That's right... only good reviews go to Google. Bad reviews will not!{" "}
        <br />
        <br />
        When someone finds your business on Google, my aim is for them to go
        "Wow this business looks great!"
        <br />
        <br />
        Google Ads can work wonders for your clinic and alot of people will see
        your clinic on Google, but if your reviews & ratings are bad, you don't
        want people to see your clinic yet, and hence spending on Google Ads now
        can be a waste of money. Focus on improving your online reputation
        (Google reviews & ratings) first, then it's worth it to boost your
        clinic with Google Ads.
        <br />
        <br />
        If we don’t improve your reviews & ratings, you pay RM 0 and get all
        your money back. <br />
        <br />
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg mx-auto">
          Originally priced at <span className="line-through">RM2000</span>, now
          available for only{" "}
          <span className="text-blue-500 font-bold">RM500</span>!
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
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white button-shimmer"
      >
        Chat on Whatsapp
      </Link>
    </div>
  );
};

export default SalesLetter;
