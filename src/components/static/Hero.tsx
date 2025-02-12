"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const strategiesRef = useRef<HTMLSpanElement | null>(null);
  const usersRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  // New refs for the mobile section
  const strategiesRefMobile = useRef<HTMLSpanElement | null>(null);
  const usersRefMobile = useRef<HTMLSpanElement | null>(null);

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

      // Animate video container first
      tl.fromTo(
        videoContainerRef.current,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );

      // Animate title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );

      // Animate button
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );

      // Animate numbers for desktop
      tl.fromTo(
        strategiesRef.current,
        { innerText: 0 },
        { innerText: 10, duration: 2, ease: 'power2.out', roundProps: 'innerText' },
        '-=0.5'
      );
      tl.fromTo(
        usersRef.current,
        { innerText: 0 },
        { innerText: 2800, duration: 2, ease: 'power2.out', roundProps: 'innerText' },
        '-=2'
      );

      // Animate numbers for mobile
      tl.fromTo(
        strategiesRefMobile.current,
        { innerText: 0 },
        { innerText: 10, duration: 2, ease: 'power2.out', roundProps: 'innerText' },
        '-=0.5'
      );
      tl.fromTo(
        usersRefMobile.current,
        { innerText: 0 },
        { innerText: 2800, duration: 2, ease: 'power2.out', roundProps: 'innerText' },
        '-=2'
      );
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className=' bg-black md:mt-0 sm:mt-0 mt-10'>
      <div className='lg:flex py-6 h-[600px] mb-20 lg:mt-10 flex justify-center items-center gap-1 lg:gap-10 p-2'>
        <div className='lg:w-5/12 p-2 flex justify-center items-center flex-col mt-10 absolute lg:relative z-30 lg:z-0 text-center lg:text-left'>
          <div ref={titleRef} className='font-fraunces text-4xl lg:text-6xl text-gray-50 font-light'>
            The Future of <span className='gradient-text font-bold'>Dropshipping</span> is Here
          </div>
          <div ref={subtitleRef} className='font-poppins text-md lg:text-lg text-gray-50 font-light'>
            High-Quality Products, Reliable Fulfillment, and Custom Branding Solutions
          </div>
          <button ref={buttonRef} className='coolBeans text-md font-poppins text-white border-2 border-white rounded-full px-10 py-4 mt-10'>
            Explore Solutions Now
          </button>
          <div className='hidden lg:block'>
          <div className='flex justify-center mt-10 gap-20'>
            <div className='flex justify-center items-center flex-col'>
              <h2 className='text-5xl font-fraunces text-white'>
                <span ref={strategiesRef}>0</span>
                <span className='text-orange-300'>+</span>
              </h2>
              <p className='font-poppins text-lg text-gray-50'>Product Nisches</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <h2 className='text-5xl font-fraunces text-white'>
                <span ref={usersRef}>0</span>
                <span className='text-orange-300'>+</span>
              </h2>
              <p className='font-poppins text-lg text-gray-50'>Users</p>
            </div>
          </div>
          </div>
        </div>
        <div ref={videoContainerRef} className='lg:w-7/12 video-container rounded-2xl ' style={{ width: '600px', height: '400px' }}>
          <video className='video-hero rounded-2xl' style={{ width: '100%', height: '100%' }} autoPlay loop muted playsInline>
            <source src='/video-hero.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          {/* Mobile gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden'></div>
          <div className='block lg:hidden'>
          <div className='flex justify-center mt-10 gap-20'>
            <div className='flex justify-center items-center flex-col'>
              <h2 className='text-5xl font-fraunces text-white'>
                <span ref={strategiesRefMobile}>0</span>
                <span className='text-orange-300'>+</span>
              </h2>
              <p className='font-poppins text-lg text-gray-50'>Proven Strategies</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <h2 className='text-5xl font-fraunces text-white'>
                <span ref={usersRefMobile}>0</span>
                <span className='text-orange-300'>+</span>
              </h2>
              <p className='font-poppins text-lg text-gray-50'>Users</p>
              

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
