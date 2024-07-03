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

export default function Home() {
  const salesLetterRef = useRef<HTMLDivElement>(null);

  const scrollToSalesLetter = () => {
    salesLetterRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
          We specialise in helping you appear Top 3 in Google via Google Ads
        </div>
        <p className="pt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Get Guaranteed Results, <br />
          or Get 100% of Your Money Back.
        </p>
        <QualifyModal scrollToSalesLetter={scrollToSalesLetter} />
        <Link
          href={"https://wa.me/60123397028"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white hover:text-black hover:bg-white"
        >
          Chat on Whatsapp
        </Link>

        <div className="w-full pt-20">
          <StepByStep scrollToSalesLetter={scrollToSalesLetter} />
          <div ref={salesLetterRef}>
            <SalesLetter />
          </div>
          <WhyItMatters />
          <Founder />
          <FAQS />
        </div>
      </div>
    </div>
  );
}
