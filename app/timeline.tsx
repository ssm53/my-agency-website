"use client";
import React from "react";

const accomplishments = [
  {
    title: "Launched HeyLearn2Code",
    description: [
      "A full-stack coding bootcamp based in Malaysia which guarantees a software developer job upon graduation",
      "The most affordable and personalised bootcamp out there. Well, at least based of my research",
    ],
    year: "Aug 2024",
  },
  {
    title: "Built EZLA - AI SaaS",
    description: [
      "Automated resume & cover letter generation",
      "In under 20 seconds",
      "300 invite-only-users. 95% say it reduces job application time by 70%!",
      "Currently in beta mode. Launching Q4 2024.",
    ],
    year: "Aug 2024",
  },
  {
    title: "Freelance Software Developer",
    description: [
      "Actually earned a living with coding (super proud of this)",
      "Built ClinitOS which is an all-in-one clinic management system. Tackles the issue of hard-to-use medical tech softwares.",
      "Built RatingUp, which I innovated myself. This system filters out bad reviews before it reaches Google. That way, business owners don't need to be scared of bad reviews anymore!",
    ],
    year: "Dec 2023 - July 2024",
  },
  {
    title: "Landed 4 software developer jobs",
    description: [
      "I never wanted to actually go for a job and wanted to freelance, but I wanted to actually test if I'm able to land a software developer job.",
      "Received these offers ater only 2 weeks of applying",
      "I always had the idea of starting a coding bootcamp at the back of my mind. So, I wanted to see for myself what level of coding is able to get you a job... Now I know!",
    ],
    year: "Nov 2023",
  },
  {
    title: "Learnt To Code",
    description: [
      "Well, I took on the daunting challenge of learning to code... without a Degree or Master's",
    ],
    year: "Apr 2023 - Nov 2023",
  },
  {
    title: "Co-founded The Degens",
    description: [
      "A crypto company selling digital collectibles",
      "Generated 7-figure profit in 2021 with starting capital of RM60,000.",
      "Ultimately failed, but it was my greatest lesson learnt.",
      "After this failure, I put head down and learnt to code.",
    ],
    year: "Sept 2021 - December 2022",
  },
  {
    title: "Senior Associate & Associate at Deloitte",
    description: [
      "Working in Deloitte, Manchester, UK was brilliant. Loved the people, didnt like the food hahaha",
      "Promoted to Senior Associate in 9 months, rather than the usual 12 months",
      "Left Deloitte to pursue my own dreams - not what society thinks is successful",
    ],
    year: "Jan 2021 - Jan 2022",
  },
  {
    title: "Crypto Trader",
    description: ["Traded cryptocurrencies which funded my education overseas"],
    year: "June 2016 - July 2020",
  },
  {
    title: "Crypto Miner",
    description: [
      "Rented a house in the UK to mine cryptocurrencies",
      "Generated a x3 return",
    ],
    year: "Dec 2017 - July 2018",
  },
];

const Timeline = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        What Have I Done on Planet Earth
      </div>
      <div className="space-y-8">
        {accomplishments.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between p-6 bg-neutral-800 rounded-lg shadow-lg"
          >
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-neutral-50">
                {item.title}
              </h3>
              <ul className="list-disc list-inside mt-2 text-neutral-300">
                {item.description.map((point, i) => (
                  <li key={i} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/4 mt-4 md:mt-0 text-right">
              <span className="text-2xl font-bold text-blue-500">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
