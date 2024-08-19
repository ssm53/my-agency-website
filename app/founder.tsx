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
          A little bit about me... <br />I was working as a financial accountant
          in Deloitte, UK. I was comfortable.... <br />
          <br />
          but I've always wanted to add value to people, and the best way I know
          to do that is through entrepeneurship... so I risked it all, came back
          to Malaysia to start a crypto company, which generated a profit of RM
          1 million in 2021. In 2023, I moved on from that project and learnt to
          code as I saw from my previous venture how crucial it can be to a
          business. <br />
          <br />
          After a few months of learning, I decided to start coding for others,
          and RaveWave Digital was born!
          <br />
          <br />
          Initially, we focused on the medical GP sector in Malaysia, but now
          we're venturing out.
          <br />
          <br />I can't wait to add vaue to your business!
        </p>
      </div>
    </div>
  );
};

export default Founder;
