import React, { useState } from "react";
import axios from "axios";
import feizhouCom from "../assets/feizhouCom.png";
import ResultModal from "./ResultModal";
import Modal from "./Modal";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const handleSearch = async () => {
    console.log("clicked");
    // search with axios :
    try {
      const response = await fetch(
        `http://localhost:3001/carbon?url=${encodeURIComponent(inputValue)}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("======================data=======================");
      console.log(data);

      if (data.error) {
        setError(`Error: ${data.error.message}`);
      } else {
        const carbonEmissions = data.statistics.co2.total;
        setData(`Carbon Emissions: ${carbonEmissions.toFixed(2)} gCO2`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div className="hero-section md:px-32 pt-28 lg:py-16 bg-gradient-to-b from-[#8cc842] to-[#3d9b4a] min-w-[100%] min-h-[82dvh]">
      <div className="w-[100%] h-fit text-center pt-20 md:pt-52 flex flex-col items-center justify-center">
        <div id="titles" className="flex flex-col gap-y-4">
          <h1 className="hero-section text-3xl md:text-5xl font-bold text-white">
            Website Carbon Checker
          </h1>
          <p className="hero-section text-md text-white px-3 md:px-0">
            Free online tool for quick web page audits.
          </p>
        </div>
        {/* <div
          id="inputs"
          className="flex flex-col lg:flex-row mt-8 gap-y-2 w-full px-8 md:px-0 sm:min-w-[45vw] md:w-[35dvw]"
        >
          <input
            type="text"
            placeholder="Enter your website"
            className="w-full text-base py-3 px-4 border-none focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="w-full py-3 text-white bg-[#5656a6] rounded-3xl lg:rounded-s-none lg:w-fit text-nowrap px-8 font-semibold"
          >
            Get you results
          </button>
          <Modal handleSearch={handleSearch} />
        </div> */}
        <Modal />
        <p className="hero-section mt-5 text-[.9rem] px-8 text-gray-200">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <div className="mt-6 md:mt-8 flex flex-col gap-y-2 md:gap-y-3 md:flex-row gap-x-4 p-4 items-center">
          <p className="hero-section text-[.8rem] text-gray-200">Powered by</p>
          <a
            href="https://FeizhouCom.com"
            target="_blank"
            className="text-white md:relative md:bottom-1.5"
          >
            <img
              src={feizhouCom}
              alt="Feizhoucom"
              width={155}
              srcSet=""
              className="not-drag"
            />
          </a>
          <p className="hero-section text-[.8rem] text-gray-200">company</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
