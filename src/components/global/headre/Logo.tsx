// src/components/global/header/Logo.tsx
import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center mt-3">
      <Image src="/logo.png" alt="Logo" width={200} height={100}></Image>
      
    </div>
  );
};

export default Logo;
