"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewRef = useRef<HTMLDivElement | null>(null);

  const reviews = [
    { text: '"The social media content feed has been a game-changer, boosting my engagement significantly with curated, high-quality posts"', author: 'John Doe', image: '/auth-1.webp' },
    { text: '" incredibly easy to use and has helped me reach a wider audience, keeping them engaged and interested', author: 'Jane Smith', image: '/auth-2.webp' },
    { text: 'The social media content feed has been a game-changer, boosting my engagement significantly with curated, high-quality posts.', author: 'Alice Johnson', image: '/auth-3.webp' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    if (reviewRef.current) {
      gsap.fromTo(
        reviewRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentReview]);

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className='min-h-screen bg-black py-10 mt-20'>
      <div className='container mx-auto px-4 mt-32'>
        <div className='flex flex-col items-center justify-center bg-yellow-50 text-black'>
          <div className='w-full flex justify-between'>
            <div className='w-58% p-6 flex flex-col justify-center items-start relative overflow-hidden'>
              <div ref={reviewRef} className='review-text font-fraunces font-light text-3xl leading-snug w-[600px]'>
                {reviews[currentReview].text}
              </div>
              <div className='review-author font-poppins text-lg mt-4 absolute bottom-0 left-0 flex items-center p-10'>
                <img src={reviews[currentReview].image} alt={reviews[currentReview].author} className='w-10 h-12 rounded-lg mr-2' />
                {reviews[currentReview].author}
              </div>
            </div>
            <div className='w-42% p-0 flex justify-center items-center'>
              <img src='/bosses.jpeg' alt='Boss' className='w-[350px] h-[500px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-start mt-6 space-x-4 ml-4'>
        <button onClick={handlePrevReview} className='control-button'>
          <MdChevronLeft className='text-2xl' />
        </button>
        <button onClick={handleNextReview} className='control-button'>
          <MdChevronRight className='text-2xl' />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
