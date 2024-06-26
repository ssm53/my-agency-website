/* eslint-disable react/no-unescaped-entities */
"use client";

import "./globals.css"; // Ensure this points to where your CSS is located

const Pricing = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4 text-center">
      <h2
        className="text-4xl pb-5 md:text-5xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Limited Time Pricing Offer
      </h2>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg mx-auto">
        Originally priced at <span className="line-through">RM2000</span>, now
        available for only{" "}
        <span className="text-blue-500 font-bold">RM500</span>!
        <br /> <br />
        One Time Payment.
        <br />
        100% Money Back Guarantee
      </p>
    </div>
  );
};

export default Pricing;
