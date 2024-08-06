import React from "react";
import LogoSolo from "../assets/Logo-solo-lg.png";
import BookDemoButton from "./BookDemoButton";

const FeizouComConsists = () => {
  return (
    <section
      className="
      flex flex-col bg-[#f4f7fa] items-center pt-4 gap-6
      md:flex-col md:px-32 pb-10 md:bg-red-4000
      lg:flex-row
      xl:px-72
  "
    >
      <div className="logo w-fit h-fit bg-red-5000">
        <img
          src={LogoSolo}
          alt="Eco-Friendly Web Design Solutions"
          className="max-w-[12rem] md:max-w-[14rem] lg:max-w-[14rem] h-auto not-drag"
        />
      </div>
      <div className="flex flex-col space-y-3 p-4">
        <h1 className="text-2xl text-start font-semibold text-gray-900">
          FeizhouCom Solution consists of 5 pillars:{" "}
        </h1>
        <p className="text-base text-start text-gray-700">
          Optimization of carbon transmission up to 80% and Minimizing Energy
          Consumption, ü Improvement of up to 50% in loading times, Employ
          modern security practices and technologies, we create a more appealing
          Design, easy to navigate, and optimize web seo.
        </p>
        <BookDemoButton />
      </div>
    </section>
  );
};

export default FeizouComConsists;
