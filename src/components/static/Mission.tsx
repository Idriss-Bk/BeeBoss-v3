"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Mission = () => {
  const successfulProjectsRef = useRef<HTMLSpanElement | null>(null);
  const productLaunchesRef = useRef<HTMLSpanElement | null>(null);
  const happyCustomersRef = useRef<HTMLSpanElement | null>(null);
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
      const tl = gsap.timeline();

      // Animate title
      tl.fromTo(
        sectionRef.current?.querySelector('.mission-title'),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Animate subtitle
      tl.fromTo(
        sectionRef.current?.querySelector('.mission-subtitle'),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );

      // Animate numbers
      tl.fromTo(
        successfulProjectsRef.current,
        { innerText: 0 },
        { innerText: 300, duration: 2, ease: 'power2.out', roundProps: 'innerText' },
        '-=0.5'
      );
      tl.fromTo(
        productLaunchesRef.current,
        { innerText: 0 },
        { innerText: 200, duration: 2, ease: 'power2.out', roundProps: 'innerText' },
        '-=2'
      );
      tl.fromTo(
        happyCustomersRef.current,
        { innerText: 0 },
        { innerText: 99, duration: 2, ease: 'power2.out', roundProps: 'innerText' },
        '-=2'
      );
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className='h-screen bg-black'>
      <div className='lg:flex flex'>
        <div className='lg:w-5/12 p-2 flex items-start text-gray-50 font-poppins font-light text-lg max-w-[300px] mx-auto mt-20 mission-title'>
          We focus on delivering innovative, all-in-one e-commerce solutions.
        </div>
        <div className='lg:w-7/12 p-2 flex flex-col'>
          <div className='text-2xl font-fraunces font-light text-gray-50 mt-40 mission-subtitle'>
            Building a successful dropshipping business is undeniably challenging. It requires a deep understanding of user needs, market trends, and technical feasibility. Our platform provides everything you need to succeed, from winning products to seamless fulfillment and custom branding.
          </div>
          <div className='text-gray-50 flex justify-center mt-20 gap-20'>
            <div className='flex justify-center items-center flex-col'>
              <h2 className='text-5xl font-fraunces text-white'>
                <span ref={successfulProjectsRef}>0</span>
                <span className='text-orange-300'>+</span>
              </h2>
              <p>Successful Projects</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <h2 className='text-5xl font-fraunces text-white'>
                <span ref={productLaunchesRef}>0</span>
                <span className='text-orange-300'>+</span>
              </h2>
              <p>Product Launches</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <h2 className='text-5xl font-fraunces text-white'>
                <span ref={happyCustomersRef}>0</span>
                <span className='text-orange-300'>%</span>
              </h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
