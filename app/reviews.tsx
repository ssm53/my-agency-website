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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "Amazing service! Highly recommend.",
    client: "Dr. Smith",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "My website looks fantastic. Thank you!",
    client: "Jane Doe, Makeup Artist",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "Professional and efficient. Great work!",
    client: "John Realtor",
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
        Client Reviews
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4">
        {reviews.map((review, index) => (
          <div key={index} className="relative group block p-2 h-full w-full">
            <Card>
              <div className="flex items-center justify-center">
                <ReactPlayer url={review.videoUrl} width="100%" />
              </div>
              <CardDescription>{review.text}</CardDescription>
              <CardTitle>{review.client}</CardTitle>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
