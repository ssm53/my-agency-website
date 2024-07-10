/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./globals.css"; // Ensure this points to where your CSS is located
import { IoCloseOutline } from "react-icons/io5";

const QualifyModal = ({
  scrollToSalesLetter,
}: {
  scrollToSalesLetter: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  const [message, setMessage] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setMessage(""); // Reset message when opening/closing modal
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ratingValue = parseFloat(rating);
    const reviewsValue = parseInt(reviews);

    if (ratingValue > 4.0 && reviewsValue > 50) {
      setMessage(
        "Perfect! You worked hard to ensure your reputation online is solid. Now, let's get you to the top of Google."
      );
    } else {
      setMessage(
        "Great news doc, there is so much we can do to increase your revenue! It's important to have solid Google reviews & ratings before spending a few thousand each month on Google Ads... So I created RatingUp - a tech system which filter out bad reviews before reaching Google. So, I guarantee to improve your Google reviews & ratings...or you get 100% of your money back."
      );
    }
  };

  const handleReputationManagementClick = () => {
    toggleModal(); // Close the modal
    scrollToSalesLetter(); // Scroll to the sales letter
  };

  return (
    <div className="text-center">
      {/* <button
        onClick={toggleModal}
        className="cursor-pointer flex items-center justify-center border rounded-lg w-48 p-2 mx-auto my-6 text-white hover:text-black hover:bg-white"
      >
        Let's see if you qualify
      </button> */}
      <button
        onClick={toggleModal}
        className="cursor-pointer flex items-center justify-center border rounded-lg w-80 p-2 mx-auto my-6 text-white hover:text-black hover:bg-white shimmer-effect font-extrabold"
      >
        CHECK IF YOUR CLINIC IS SUITABLE
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-black"
            >
              <IoCloseOutline className="text-lg" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Check if you qualify</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Google Rating:</label>
                <input
                  type="number"
                  step="0.1"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Number of Reviews:
                </label>
                <input
                  type="number"
                  value={reviews}
                  onChange={(e) => setReviews(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
            {message && (
              <div className="mt-4 text-lg font-bold text-center">
                <p>{message}</p>
                {message.includes("Perfect, your clinic qualifies!") && (
                  <Link
                    href={"https://wa.me/60123397028"}
                    className="cursor-pointer flex items-center justify-center border rounded w-48 p-2 mx-auto my-6 text-white bg-black hover:text-black hover:bg-white"
                  >
                    Let's chat on Whatsapp
                  </Link>
                )}
                {!message.includes("Perfect, your clinic qualifies!") && (
                  <button
                    onClick={handleReputationManagementClick}
                    className="cursor-pointer flex items-center justify-center border rounded w-48 p-2 mx-auto my-6 text-white bg-black hover:text-black hover:bg-white"
                  >
                    See More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QualifyModal;
