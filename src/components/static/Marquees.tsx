import React from "react";
import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <section className="bg-black px-5 lg:px-0">
      <h2 className="font-fraunces text-slate-100 font-light text-xl md:text-4xl text-center mb-2">Unsere Partner</h2>
      <Marquee
        pauseOnHover
        className="container mx-auto !bg-transparent"
        gradient={true}
        gradientWidth={50}
        gradientColor="#070707"
        play={true}
      >
        <div className="flex justify-center items-center gap-10">
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542555_Frame%2018610.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542554_Amazon%20logo.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255d_toyota.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542558_Frame%2018611.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542559_deloitte.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255c_Frame%2018608.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542556_Frame%2018608.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
            alt=""
            className="w-32"
          />
        </div>
      </Marquee>
    </section>
  );
};

export default Marquees;
