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
                {/* <div className="flex justify-start">
                  <a href="#" className="w-6 mx-1">
                    <svg
                      className="fill-current cursor-pointer text-white"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlSpace="preserve"
                      xmlns:serif="http://www.serif.com/"
                      style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 2,
                      }}
                    >
                      <path
                        id="Facebook"
                        d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
            5.373,-12 12,-12c6.627,0 12,5.373
            12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
            0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
            -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                      />
                    </svg>
                  </a>
                  <a href="#" className="w-6 mx-1">
                    <svg
                      className="fill-current cursor-pointer text-white"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlSpace="preserve"
                      xmlns:serif="http://www.serif.com/"
                      style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 2,
                      }}
                    >
                      <path
                        id="Shape"
                        d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
            3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
            -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
            -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
            -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
            0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
            3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
            -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
            -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
            1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
            -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
            -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
            0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
            0.4,1.5l0,4.5l2.9,0Z"
                      />
                    </svg>
                  </a>
                </div> */}
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
