import React from "react";
import Logo from "../assets/Logo.webp";

const Footer = () => {
  return (
    <footer className="footer ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3e9b4a"
          fillOpacity="1"
          d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="relative bg-[#3e9b4a] w-full py-4 border-none">
        <div className="absolute w-full bg-[#3e9b4a] py-2 -top-2"></div>
        {/* component */}
        <div className="flex items-end w-full bg-[#3e9b4a]">
          <div className="w-full bg-[#3e9b4a]">
            {" "}
            <div className="w-full bg-red-3000 flex justify-center u lg:justify-around flex-wrap md:flex-nowrap gap-x-10">
              <div className="bg-yellow-3000 grid">
                <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
                  <img
                    src={Logo}
                    alt="Feizhoucom"
                    width={null}
                    className="max-w-72 not-drag"
                  />
                </a>
              </div>
              <div className="w-full px-4 lg:w-1/4 text-center">
                <h2 className="mb-3 text-md font-semibold tracking-widest text-white uppercase title-font">
                  About
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a
                      href="https://feizhoucom.com/"
                      target="_blank"
                      className="text-white cursor-pointer hover:border-b hover:text-white"
                    >
                      Company
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="https://feizhoucom.com/carriere"
                      target="_blank"
                      className="text-white cursor-pointer hover:border-b hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="https://feizhoucom.com/blog"
                      target="_blank"
                      className="text-white cursor-pointer hover:border-b hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 text-center">
                <h2 className="mb-3 text-md font-semibold tracking-widest text-white uppercase title-font">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-white cursor-pointer hover:border-b hover:text-white">
                      Contact Support
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-white cursor-pointer hover:border-b hover:text-white">
                      Help Resources
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-white cursor-pointer hover:border-b hover:text-white">
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
            </div>{" "}
            <div className="bg-[#3e9b4a] text-center">
              <p className="text-sm text-white capitalize xl:text-center">
                Lotissement Assafa GH2 IMM 02 M5 – S.M - Casablanca{" "}
              </p>
              <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-white capitalize xl:text-center">
                  © {new Date().getFullYear()} feizhouCom. All rights reserved{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
