import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const ReviewCard = ({ text, author }) => {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-2xl p-10 relative text-center max-w-3xl mx-auto border-4 border-blue-100 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute top-6 left-6 z-10">
        <div className="flex text-yellow-400 justify-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className="h-8 w-8 drop-shadow-md transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-10">
        <motion.p
          className="text-gray-800 italic text-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-6xl text-blue-200 absolute -left-2 -top-4 opacity-50">
            "
          </span>
          {text}
          <span className="text-6xl text-blue-200 absolute -right-2 -bottom-4 opacity-50">
            "
          </span>
        </motion.p>
        <div className="text-right mt-4">
          <span className="text-blue-900 font-bold text-xl tracking-wide relative group">
            - {author}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      text: "The instructor, Palwasha Beedar was very easy to work with and had a great personality. My daughter enjoyed driving with her",
      author: "Parent",
    },
    {
      text: "I recently passed my g2 with the help of Palwasha Beedar. She is an amazing instructor and person! She is always so helpful and kind. She cares about her students and provides them with great instructions! I highly recommend her and this school!",
      author: "Student",
    },
    {
      text: "Had a great experience with my driving instructor she was so helpful and taught me in a very sweet but effective manner. Helped me gain so much confidence in my self and always had my best interest in mind.",
      author: "Student",
    },
  ];

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div
      className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
      id="reviews"
    >
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Students Say
          </motion.h2>
          <motion.p
            className="text-xl text-blue-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hear inspiring stories from students who have transformed their
            driving skills from our expert instructor.
          </motion.p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <motion.button
            onClick={handlePrevReview}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 lg:left-10 z-10 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronLeftIcon className="h-12 w-12 text-blue-600 hover:text-blue-800" />
          </motion.button>

          {/* Review Card with Animation */}
          <AnimatePresence mode="wait">
            <div
              className="w-full flex justify-center"
              key={currentReviewIndex}
            >
              <ReviewCard
                text={reviews[currentReviewIndex].text}
                author={reviews[currentReviewIndex].author}
              />
            </div>
          </AnimatePresence>

          {/* Right Arrow */}
          <motion.button
            onClick={handleNextReview}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 lg:right-10 z-10 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronRightIcon className="h-12 w-12 text-blue-600 hover:text-blue-800" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentReviewIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-500 ease-in-out ${
                index === currentReviewIndex
                  ? "bg-blue-600 w-8 h-3"
                  : "bg-blue-200 w-3 h-3 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
