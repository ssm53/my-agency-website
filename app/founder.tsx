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
          Yellow there, I'm Shaun Menezes, and I run RaveWave Digital. Hope all
          is groovy with you whilst you're reading this!
          <br />
          <br /> I realised that many F&B outlets were spending (or wasting)
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
          <br />
          A little bit about me... <br />I was working in finance in the UK, and
          was living my dream of working in an 'orang putih' country enjoying
          those British Pounds! <br />
          <br />
          But I wanted to follow my dream of being an entrepreneur, so I risked
          it all to start a crypto company, which generated RM1.2 million. In
          2023, I sold my share and learnt to code. <br />
          <br />
          Now, I'm applying those skills in my new venture, RaveWave Digital!{" "}
          <br />
          <br />
          Btw, if you ever to meet up for coffee just to have a chat about
          anything, let's go! Coffee's on me!
        </p>
      </div>
    </div>
  );
};

export default Founder;
