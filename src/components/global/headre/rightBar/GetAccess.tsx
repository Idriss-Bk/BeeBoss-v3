"use client"
import React, { useEffect, useRef } from 'react';
import { MdCardMembership } from "react-icons/md";
import gsap from 'gsap';

const GetAccess: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, { scale: 1.05, duration: 0.3, ease: 'power2.inOut' });
      });

      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
      });
    }
  }, []);

  return (
    <div className="hidden md:flex md:items-center md:space-x-3 gap-2">
      <button
        ref={buttonRef}
        className="accessButton flex justify-center items-center gap-2 px-5 py-2 bg-white font-poppins text-sm text-black rounded-full border border-transparent "
      >
        <MdCardMembership />
        Get Access
      </button>
    </div>
  );
};

export default GetAccess;
