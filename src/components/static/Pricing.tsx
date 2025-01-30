"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CiCircleCheck } from "react-icons/ci";

const Pricing = () => {
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
      tl.fromTo(
        sectionRef.current?.querySelector('.pricing-title'),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
      tl.fromTo(
        sectionRef.current?.querySelectorAll('.pricing-subtitle'),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2 },
        '-=0.5'
      );
      tl.fromTo(
        sectionRef.current?.querySelectorAll('.pricing-feature'),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2 },
        '-=0.5'
      );
      tl.fromTo(
        sectionRef.current?.querySelectorAll('.pric-coolBeans'),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2 },
        '-=0.5'
      );
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className='min-h-screen bg-black text-white p-10 flex flex-col items-center'>
      <div className='pricing-title font-fraunces text-4xl font-light text-center mb-10 flex items-center justify-center mt-40'>
        Unlock Your E-commerce Potential
      </div>

      <div className='flex justify-center items-center gap-10'>
        <div className='w-[400px] bg-gradient-to-r from-yellow-50 to-orange-300 text-black p-6 rounded-lg shadow-orange-300'>
          <div className='pricing-subtitle font-fraunces text-3xl font-light text-center mb-5'>
            Monthly <span className='font-bold text-4xl'>€89</span>
          </div>
          <div className='text-center text-sm font-light mb-4'>
            Unlock premium features and benefits
          </div>
          <hr className='border-t border-gray-800 opacity-50 my-4' />
          <div className='pricing-features font-poppins text-sm text-gray-900 text-left mb-10 space-y-4 px-4 py-8 rounded-xl backdrop-blur-md border border-black border-opacity-45'>
            <div className='pricing-feature flex items-center'>
              <CiCircleCheck className='text-lg mr-4' />
              Custom logo
            </div>
            <div className='pricing-feature flex items-start'>
              <CiCircleCheck className='text-xl mr-4' />
              AI theme for organic visibility without needing your own reach
            </div>
            <div className='pricing-feature flex items-start flex-col'>
              <div className='flex justify-center items-center'>
                <CiCircleCheck className='text-lg mr-4' />
                Access to over 100 hours of training material:
              </div>
              <div className='ml-9'>
                <div className='text-sm font-light'>- Dropshipping</div>
                <div className='text-sm font-light'>- Amazon</div>
                <div className='text-sm font-light'>- Digital products</div>
                <div className='text-sm font-light'>- Tax modules</div>
                <div className='text-sm font-light'>- Crypto</div>
              </div>
            </div>
            <div className='pricing-feature flex items-center'>
              <CiCircleCheck className='text-lg mr-4' />
              Over 1000 free product recommendations
            </div>
            <div className='pricing-feature flex items-start flex-col'>
              <div className='flex justify-center items-center'>
                <CiCircleCheck className='text-lg mr-4' />
                Diverse wholesalers in:
              </div>
              <div className='ml-9'>
                <div className='text-sm font-light'>- Fashion</div>
                <div className='text-sm font-light'>- Beauty</div>
                <div className='text-sm font-light'>- Kids</div>
                <div className='text-sm font-light'>- Home</div>
              </div>
            </div>
          </div>
          <button className='pric-coolBeans text-md font-poppins text-white border-2 border-white rounded-full px-10 py-4 flex justify-center mx-auto mb-4'>
            Get Monthly Access Now
          </button>
          <div className='text-center text-sm font-light'>
            Start your journey to e-commerce success today!
          </div>
        </div>

        <div className='w-[400px] bg-gradient-to-r from-yellow-50 to-orange-300 text-black p-6 rounded-lg shadow-orange-300 relative'>
          <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-2 rounded-lg shadow-lg font-fraunces font-light '>
            <span className='text-[12px] '>Most Popular</span>
          </div>
          <div className='pricing-subtitle font-fraunces text-3xl font-light text-center mb-5'>
            One-time <span className='font-bold text-4xl'>€999</span>
          </div>
          <div className='text-center text-sm font-light mb-4'>
            Unlock premium features and benefits
          </div>
          <hr className='border-t border-gray-800 opacity-50 my-4' />
          <div className='pricing-features font-poppins text-sm text-gray-900 text-left mb-10 space-y-4 px-4 py-8 rounded-xl bg-yellow bg-opacity-10 backdrop-blur-md border border-black border-opacity-45'>
            <div className='pricing-feature flex items-center'>
              <CiCircleCheck className='text-lg mr-4' />
              Custom logo
            </div>
            <div className='pricing-feature flex items-start'>
              <CiCircleCheck className='text-xl mr-4' />
              AI theme for organic visibility without needing your own reach
            </div>
            <div className='pricing-feature flex items-start flex-col'>
              <div className='flex justify-center items-center'>
                <CiCircleCheck className='text-lg mr-4' />
                Access to over 100 hours of training material:
              </div>
              <div className='ml-9'>
                <div className='text-sm font-light'>- Dropshipping</div>
                <div className='text-sm font-light'>- Amazon</div>
                <div className='text-sm font-light'>- Digital products</div>
                <div className='text-sm font-light'>- Tax modules</div>
                <div className='text-sm font-light'>- Crypto</div>
              </div>
            </div>
            <div className='pricing-feature flex items-center'>
              <CiCircleCheck className='text-lg mr-4' />
              Over 1000 free product recommendations
            </div>
            <div className='pricing-feature flex items-start flex-col'>
              <div className='flex justify-center items-center'>
                <CiCircleCheck className='text-lg mr-4' />
                Diverse wholesalers in:
              </div>
              <div className='ml-9'>
                <div className='text-sm font-light'>- Fashion</div>
                <div className='text-sm font-light'>- Beauty</div>
                <div className='text-sm font-light'>- Kids</div>
                <div className='text-sm font-light'>- Home</div>
              </div>
            </div>
          </div>
          <button className='pric-coolBeans text-md font-poppins text-white border-2 border-white rounded-full px-10 py-4 flex justify-center mx-auto mb-4'>
            Get One-time Access Now
          </button>
          <div className='text-center text-sm font-light'>
            Start your journey to e-commerce success today!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
