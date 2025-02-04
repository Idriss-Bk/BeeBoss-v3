import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center mt-3">
      <div className="w-32 h-16 sm:w-40 sm:h-20 md:w-40 md:h-20 lg:w-52 lg:h-28 xl:w-52 xl:h-28 relative">
        <Image
          src="/logo.png"
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Logo;
