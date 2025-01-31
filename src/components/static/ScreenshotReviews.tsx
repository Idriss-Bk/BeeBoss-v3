"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ScreenshotReviews = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {  
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to('.screenshot-review-left', { x: '-100%', duration: 10, ease: 'none' }, 0)
        .to('.screenshot-review-left', { x: '100%', duration: 0, ease: 'none' }, '+=0')
        .to('.screenshot-review-right', { x: '100%', duration: 10, ease: 'none' }, 0)
        .to('.screenshot-review-right', { x: '-100%', duration: 0, ease: 'none' }, '+=0');
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className='min-h-screen bg-black text-white p-10 flex flex-col items-center overflow-x-hidden'>
        <div className='text-xl text-center font-fraunces font-light mb-10 lg:text-4xl xl:text-4xl'>Inspiring Success Stories:<span className='font-bold '>2800<span className='text-orang-300'>+</span></span>  Users and Counting</div>
      <div className='screenshot-reviews flex flex-col items-center space-y-4 w-full'>
        <div className='screenshot-line flex space-x-4 w-max'>
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className='screenshot-review-left w-[250px] h-[300px] bg-gray-700 bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex-shrink-0'
            >
              <img src={`/ScreenReviews/rev${index + 1}.png`} alt={`Screenshot ${index + 1}`} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
        <div className='screenshot-line flex space-x-4 w-max'>
          {Array.from({ length: 11 }).map((_, index) => (
            <div
              key={index}
              className='screenshot-review-right w-[250px] h-[300px] bg-gray-700 bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex-shrink-0'
            >
              <img src={`/ScreenReviews/rev${index + 9}.png`} alt={`Screenshot ${index + 9}`} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotReviews;