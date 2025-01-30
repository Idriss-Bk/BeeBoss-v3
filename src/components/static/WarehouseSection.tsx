"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const WarehouseSection = () => {
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
      const sectionTitle = sectionRef.current?.querySelector('.section-title');
      if (sectionTitle) {
        tl.fromTo(
          sectionTitle,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
      }

      // Animate subtitle
      const sectionSubtitle = sectionRef.current?.querySelector('.section-subtitle');
      if (sectionSubtitle) {
        tl.fromTo(
          sectionSubtitle,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.5'
        );
      }

      // Animate description
      const sectionDescription = sectionRef.current?.querySelector('.section-description');
      if (sectionDescription) {
        tl.fromTo(
          sectionDescription,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.5'
        );
      }

      // Animate button
      const sectionButton = sectionRef.current?.querySelector('.section-button');
      if (sectionButton) {
        tl.fromTo(
          sectionButton,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.5'
        );
      }
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className='min-h-screen bg-black text-white p-10 flex flex-col items-center'>
      <div className='relative w-full h-[600px] overflow-hidden'>
        <img src='/warehousee.jpg' alt='Warehouse' className='w-full h-full object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50'>
          <h1 className='section-title font-fraunces text-7xl font-light text-center mb-4'>
            Utilize Our Warehouse in <span className='font-bold '>Germany</span>
          </h1>
          <h2 className='section-subtitle font-poppins text-2xl font-light text-center mb-8'>
            High-Quality Dropshipping Products from Europe, Italy, and Turkey
          </h2>
        </div>
      </div>
      <div className='section-description font-poppins font-light text-lg max-w-4xl mt-10 mb-6'>
        Utilize our warehouse in Germany for shipping and returns of high-quality dropshipping products from Europe, Italy, and Turkey. Our products come from the European market, and we offer direct tracking service for your customers through DHL Germany.

        The best part? You can operate without any upfront payments or storage costs! Earn money as a middleman and use our custom packaging that we prepare just for you.

        Start now with this all-in-one solution and take your online business to the next level!
      </div>
      <button className='section-button coolBeans text-md font-poppins text-white border-2 border-white rounded-full px-10 py-4 flex justify-center mx-auto'>
        Get Started Now
      </button>
    </div>
  );
};

export default WarehouseSection;
