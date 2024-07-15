/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Your Clinic's Partner in Digital Growth
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
      >
        Our services are crafted to enhance your clinic’s visibility and
        reputation, and hence bring more patients to your clinic.
      </p>

      <CardHoverEffectDemo />
      <Link
        href={"https://wa.me/60123397028"}
        className="cursor-pointer flex items-center justify-center border rounded-lg w-48 p-2 mx-auto my-6 text-white button-shimmer hover:text-blue-500 hover:bg-white"
      >
        Chat on Whatsapp
      </Link>
    </div>
  );
};

export default Services;
