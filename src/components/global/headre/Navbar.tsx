"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Logo from './Logo';
import GetAccess from './rightBar/GetAccess';


const Navbar: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.navbar', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full  z-50 bg-black bg-opacity-90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className='flex gap-2'>
            <GetAccess />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
