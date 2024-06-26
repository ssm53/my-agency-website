/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "./globals.css"; // Ensure this points to where your CSS is located

const Founder = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <Image
          src="/images/founder-picture.jpg" // Replace with the actual path to the image
          alt="Founder Image"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="text-neutral-300">
        <h2 className="text-4xl pb-5 md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50">
          About the Founder
        </h2>
        <p className="mt-4 text-lg font-normal max-w-lg mx-auto md:mx-0">
          Yellow there, <br />
          I'm Shaun Menezes, and I run RaveWave Digital. Hope all is groovy with
          you whilst you're reading this!
          <br /> <br />
          {/* <br /> I realised that many F&B outlets were spending (or wasting)
          thousands trying to market their outlet. <br />
          <br />I thought to myself that there must be way to market F&B outlets
          with guaranteed results without spending thousands each month. <br />
          <br /> So, I built a software which guarantees that you increase your
          reviews & ratings on Google.
          <br />
          <br /> I want to provide value to you and only get paid if I deliver
          you results.. Hence, I give you all your money back if I don't deliver
          you results.
          <br />
          <br /> */}
          A little bit about me... <br />I was working in finance/accounting in
          the UK, and was living my dream of working in an 'orang putih' country
          enjoying those British Pounds! <br />
          <br />
          But I've always wanted to add value to people, and the best way I know
          to do that is through entrepeneurship... so I risked it all, came back
          to Malaysia to start a crypto company, which generated revenue of over
          RM 1 million . In 2023, I moved on from that project and learnt to
          code. <br />
          <br />
          Whilst all this, I sort of did my own research and had chats with
          various business owners about their business. <br />
          <br />
          I found that many of them cared about their Google reviews &
          ratings...but didn't exactly know how to improve it. In particular,
          they were scared of bad reviews.
          <br />
          <br />I wanted to fix this, and together with my tech skills, I
          started RaveWave Digital. <br />
          <br />I can't wait to add vaue to your business!
        </p>
      </div>
    </div>
  );
};

export default Founder;
