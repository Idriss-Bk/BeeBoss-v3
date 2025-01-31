"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MdReadMore } from "react-icons/md";
// import Winning from '../popups/winning';
// import Product from '../popups/product';
// import Fulfillment from '../popups/fulfillment';
// import Packaging from '../popups/packaging';
// import Content from '../popups/content';
// import Optimization from '../popups/optimization';
// import Modal from '../Modal';


const CES: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

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
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.2,
              ease: 'power2.out',
            }
          );

          card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.inOut' });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
          });
        }
      });
    }
  }, [isVisible]);

  const categories = [
    {
      title: 'Winning Products',
      subtitle: 'Discover top-selling products.',
      icon: '/cup.svg',
    //   detailedContent: <Winning />,
    },
    {
      title: 'Product Pictures',
      subtitle: 'High-quality images for your products.',
      icon: '/camera.svg',
    //   detailedContent: <Product />,
    },
    {
      title: 'Fulfillment',
      subtitle: 'Reliable and fast order fulfillment.',
      icon: '/truck.svg',
    //   detailedContent: <Fulfillment />,
    },
    {
      title: 'Packaging',
      subtitle: 'Custom and eco-friendly packaging solutions.',
      icon: '/gift.svg',
    //   detailedContent: <Packaging />,
    },
    {
      title: 'Content / Social Media Feed',
      subtitle: 'Engaging content for your social media.',
      icon: '/social-media.svg',
    //   detailedContent: <Content />,
    },
    {
      title: 'Optimization',
      subtitle: 'Optimize your store for better performance.',
      icon: '/coding.svg',
    //   detailedContent: <Optimization />,
    },
  ];

  const handleShowMore = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <div ref={sectionRef} className='bg-white py-10 px-10 mt-20'>
      <div className='text-4xl font-fraunces text-gray-900 mb-20'>Comprehensive E-commerce Solutions</div>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className='card bg-gray-100 rounded-xl p-6  lg:h-[450px] sm:h-[200px] md:h-[250px]  flex flex-col justify-between shadow-custom'
            >
              <div>
                <h2 className='font-fraunces text-3xl lg:text-3xl sm:text-lg md:text-2xl text-gray-900 font-light'>{category.title}</h2>
                <p className='font-poppins  lg:text-lg sm:text-sm md:text-base text-gray-800 mt-4'>{category.subtitle}</p>
              </div>
              <div className='flex justify-center items-center mt-6'>
                <img src={category.icon} alt={category.title} className='w-28 h-28 lg:w-28 lg:h-28 sm:w-20 sm:h-20 md:w-20 md:h-20' />
              </div>
              <button
                // onClick={() => handleShowMore(category.detailedContent)}
                className='showMoreButton text-md font-poppins text-white border-2 border-white rounded-full px-10 py-4 mt-10 flex justify-center items-center gap-2'
              >
                Show More <MdReadMore className='text-2xl' />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal> */}
    </div>
  );
};

export default CES;
