/* eslint-disable react/no-unescaped-entities */
"use client";
import Navbar from "@/components/ui/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { useRef } from "react";
import SalesLetter from "./sales-letter";
import FAQS from "./faq";
import Founder from "./founder";
import Pricing from "./pricing";
import WhyItMatters from "./why-it-matters";
import QualifyModal from "./qualify-modal";
import StepByStep from "./step-by-step";
import Services from "./services";
import Reviews from "./reviews";

export default function Home() {
  const salesLetterRef = useRef<HTMLDivElement>(null);

  const scrollToSalesLetter = () => {
    salesLetterRef.current?.scrollIntoView({
      behavior: "smooth",
      // block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="w-full md:items-center md: justify-center bg-black/[0.96] antialiased bg-grid-whilte/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight className="hidden md:flex md:left-80" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          ATTENTION GP & DENTAL CLINIC OWNERS <br />
          <br />
          We will market your clinic online
        </div>
        <p className="pt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
          So you can focus on what you do best....practicing medicine/dentistry!
          <br />
        </p>
        <Link
          href={"https://wa.me/60123397028"}
          className="cursor-pointer flex items-center justify-center border rounded-lg w-48 p-2 mx-auto my-6 text-white button-shimmer hover:text-blue-500 hover:bg-white"
        >
          Chat on Whatsapp
        </Link>
        {/* <QualifyModal scrollToSalesLetter={scrollToSalesLetter} /> */}
        {/* <p className="pt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
          If you're not suitable, improve your Google Review & Ratings using{" "}
          <strong>RatingUp</strong>
          <br />
          100% money-back guarantee if we don't improve your Google Reviews &
          Ratings
        </p>
        <Link
          href={"https://wa.me/60123397028"}
          className="cursor-pointer flex items-center justify-center border rounded-lg w-48 p-2 mx-auto my-6 text-white hover:text-black hover:bg-white"
        >
          Chat on Whatsapp
        </Link> */}
        <div className="w-full pt-20">
          <Services />
          <Reviews />
          {/* <StepByStep scrollToSalesLetter={scrollToSalesLetter} /> */}
          <div ref={salesLetterRef}>
            <SalesLetter />
          </div>
          {/* <WhyItMatters /> */}
          <Founder />
          <FAQS />
        </div>
      </div>
    </div>
  );
}
