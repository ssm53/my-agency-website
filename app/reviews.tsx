"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card-hover-effect";

const reviews = [
  {
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "5 stars to Shaun for assisting Klinik Menggatal in setting up our own website and improving our google review system. Shaun has provided us with heaps of information on how to market our clinic. He came just in time to help us! Our clinic position has now went up to second rank with more google reviews and patients coming are starting to increase. The system that Shaun created also helps us to get more good reviews but at the same time let us follow up with any bad reviews which is helpful for our clinic improvement. We are immensely delighted with Shaun's help and would highly recommend other clinics to use his service. He is also friendly and easy to talk to which made us feel at ease during discussions. 💯🔥👍🏻⭐️",
    client: "Dr. Je & Dr Joan",
  },
  {
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "Hi Shaun, firstly thank you for doing this for us. You have given us a very comprehensive platform to boost our business. The review system and website has improved our patient load, and has helped patients to choose our clinic. You were very patient in explaining to us about all the tech stuffs in a very understandable manner. The layout you designed is very usuer friendly and patients also find it convenient to leave us a review as they only have to scan the provided qr code. We came to you with our problems and you came up with this simple solution in no time. You attended to our requests and questions very accurately. So, yes I would definitely recommend other doctors to try out your service for their clinics 💪🏽💪🏽💪🏽",
    client: "Dr. Uma",
  },
  {
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "Thank you Shaun for your meticulous work in setting up my clinic  website and linking me up to Google. My patient traffic has increased in the past few weeks. Dr Jeyanthi, Clinic Ideal Care",
    client: "Dr. Jeyanthi",
  },
  {
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "Shaun's clinic management system was brilliant. It is really easy to use, and it is very specific to GP's in Malaysia. We are implementing it once our current contract with our current tech provider is over",
    client: "Dr. Kevin",
  },
  {
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "Shaun's tech rating system was excellent. He guaranteed results which got me to buy his product, and best of all, he delivered! Definitely exceeded my expextations",
    client: "Dr. Suresh",
  },
  {
    stars: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "I bought this as I wanted a way to market my clinic. Shaun's attention to detail in his work is excellent, and you got me results. Good job! ",
    client: "Dr. Ramesh",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Some of my client reviews...
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4">
        {reviews.map((review, index) => (
          <div key={index} className="relative group block p-2 h-full w-full">
            <Card>
              {/* <div className="flex items-center justify-center">
                <ReactPlayer url={review.videoUrl} width="100%" />
              </div> */}
              <CardTitle className="text-center">{review.stars}</CardTitle>
              <CardTitle className="text-center">{review.client}</CardTitle>
              <CardDescription>{review.text}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
