import React from "react";

const SectionComponent = ({
  id,
  title,
  description,
  imageUrl,
  imageAlt,
  reverse,
}) => (
  <div
    className={`flex font-Saira flex-col-reverse${
      reverse ? " md:flex-row-reverse " : " md:flex-row "
    } items-center my-8`}
  >
    <div className="md:w-1/2 p-4">
      <div className="items-center justify-start gap-2 hidden md:flex">
        <h1 className="text-[3rem] font-bold pb-4 text-emerald-500">0{id}</h1>
        <h2
          className={`text-2xl text-gray-700 font-normal mb-4 uppercase border-b-2 border-b-emerald-200 w-fit px-1`}
        >
          {title}
        </h2>
      </div>
      <p className="text-xl font-extralight text-gray-800">{description}</p>
    </div>
    <div className="md:w-1/2 p-6">
      <img
        src={imageUrl}
        alt={"Feizhoucom"}
        className="w-full rounded-lg not-drag"
      />
    </div>
    <div className="w-full items-center justify-start px-5 gap-2 flex md:hidden">
      <h1 className="text-3xl text-gray-700 font-bold pb-4">0{id}</h1>
      <h2 className={`text-2xl text-gray-700 font-bold mb-4`}>{title}</h2>
    </div>
  </div>
);

export default SectionComponent;