/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";
import SalesLetter from "./sales-letter";
import Reviews from "./reviews";
import Founder from "./founder";
import Pricing from "./pricing";
import WhyItMatters from "./why-it-matters";

export default function Home() {
  // const servicesRef = useRef<HTMLDivElement>(null);
  // const faqRef = useRef<HTMLDivElement>(null);

  // const scrollToServices = () => {
  //   servicesRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  // };

  // const scrollToFaq = () => {
  //   faqRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="w-full md:items-center md: justify-center bg-black/[0.96] antialiased bg-grid-whilte/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight className="hidden md:flex md:left-80" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          ATTENTION BUSINESS OWNERS! <br />
          <br />
          Boost Your Google Ratings & Reviews Today!
        </div>
        <p className="pt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Get Guaranteed Results, <br />
          or Get 100% of Your Money Back.
        </p>
        <Link
          href={"https://wa.me/60123397028"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white hover:text-black hover:bg-white"
        >
          Chat on Whatsapp
        </Link>
        {/* <p className="pt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          & I will start making your website
        </p> */}
        <div className="w-full pt-20">
          {/* <SliderOne /> */}
          <Pricing />
          <SalesLetter />
          <WhyItMatters />
          <Founder />
          {/* <Reviews /> */}
          {/* <Services /> */}

          <FAQS />
        </div>
      </div>
    </div>
  );
}
