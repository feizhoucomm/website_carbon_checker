import React from "react";
import Hero from "../assets/hero.png";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="
      bg-[#f4f7fa]
      grid
      gap-y-8
      px-6
      py-4
      
      md:bg-red-40000
      md:px-32
      md:py-16
      
      lg:bg-cyan-40000
      lg:grid-cols-2
      lg:gap-x-10
      lg:px-12
      xl:bg-yellow-4000
      xl:px-44
      xl:grid-cols-2

      2xl:bg-cyan-4000
      2xl:px-48
      2xl:grid-cols-2
  "
    >
      <div className="image w-fit">
        <img
          src={Hero}
          alt="Carbon Emissions Calculator for Websites"
          srcSet=""
          className="rounded-2xl not-drag"
        />
      </div>
      <div className="hero-content flex flex-col space-y-4 2xl:gap-y-0 w-fit">
        <div className="text-4xl flex gap-x-3 font-bold text-gray-800">
          <p>About</p>
          <div className="flex">
            <p className="text-orange-500">Feizhou</p>
            Com
          </div>
        </div>
        <p className="text-md md:text-md min-w-full text-gray-700">
          FeizhouCom is the first agency in Morocco to offer green website
          creation services. Our commitment to environmental sustainability is
          demonstrated through our innovative approach to minimizing the carbon
          footprint of each website we create. By choosing FeizhouCom, you opt
          for an optimization of the carbon transmission of your digital
          platforms up to 80% with the possibility of obtaining international
          green certification badges.
        </p>
        {/* <div className="button">
          <BookDemoButton />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
