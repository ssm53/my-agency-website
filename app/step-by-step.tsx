/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import "./globals.css"; // Ensure this points to where your CSS is located

const StepByStep = ({
  scrollToSalesLetter,
}: {
  scrollToSalesLetter: () => void;
}) => {
  return (
    <div className="max-w-5xl mx-auto py-20 text-center">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Here is what you get
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        <strong>STEP 1</strong>
        <br />
        Ensure your Google Reviews & Ratings are brilliant with my tech system,{" "}
        <strong
          className="underline cursor-pointer"
          onClick={scrollToSalesLetter}
        >
          RatingUp
        </strong>
        <br />
        <br />
        <strong>STEP 2</strong>
        <br />
        I will build you a beautiful website with a focus on getting potential
        patients to contact you.
        <br />
        <br />
        <strong>STEP 3</strong>
        <br />
        Boost your clinic with Google Ads. <br />
        <br />
        <strong>STEP 4</strong> <br />
        Appear as Top 3 on Google or get 100% of your money back.
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

export default StepByStep;
