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
import Timeline from "./timeline";

export default function Home() {
  return (
    <div className="w-full md:items-center md: justify-center bg-black/[0.96] antialiased bg-grid-whilte/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight className="hidden md:flex md:left-80" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          I ENJOY BUILDING TECH PRODUCTS <br />
          {/* <br />
          cause its fun */}
        </div>
        <p className="pt-4 text-lg font-normal text-neutral-300 max-w-3xl text-center mx-auto px-4">
          By Shaun Menezes
        </p>
        <div className="w-full pt-20">
          <Founder />
          <Timeline />
          <Services />
          <Reviews />
          <FAQS />
        </div>
      </div>
    </div>
  );
}
