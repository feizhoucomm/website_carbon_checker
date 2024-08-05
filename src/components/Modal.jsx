import { useState } from "react";
import { HiMiniComputerDesktop, HiMiniServerStack } from "react-icons/hi2";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import logo from "../assets/Logo-solo-lg.png";
export default function Modal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://website-carbon-checker-back.vercel.app/carbon?url=${encodeURIComponent(
          inputValue
        )}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.error) {
        setError(`Error: ${result.error.message}`);
        setData(null);
      } else {
        setData(result);
      }
      setLoading(false);
    } catch (error) {
      setError(`Error: ${error.message}`);
      setData(null);
      setLoading(false);
    }
  };

  return (
    <>
      <div
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
          onClick={() => {
            handleSearch();
            handleOpen();
          }}
          className="w-full py-3 text-white bg-[#5656a6] rounded-3xl lg:rounded-s-none lg:w-fit text-nowrap px-8 font-semibold"
        >
          Get your results
        </button>
      </div>
      <div>
        <Dialog className="p-4" size="xl" open={open} handler={handleOpen}>
          <DialogHeader className="justify-between bg-red-4000 py-0">
            <img src={logo} alt="exclamation" className="w-10 h-10" />
            <IconButton
              color="gray"
              size="sm"
              variant="text"
              onClick={handleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </DialogHeader>
          <DialogBody className="overflow-y-scroll max-h-[78vh]">
            <Typography
              color="blue-gray"
              className="mb-1 font-bold"
            ></Typography>
            <Typography
              variant="paragraph"
              className="font-normal text-gray-900 max-w-lg"
            >
              Our team gladely colaborate in reduction carbon emission in the
              global digital sphere.
            </Typography>

            {loading ? (
              <div className="flex loading-container p-8">
                <HiMiniComputerDesktop size={120} />
                <div className="w-full flex items-center">
                  <div className="h-1.5 w-full bg-[#d3ff9d] overflow-hidden">
                    <div className="animate-progress w-full h-full bg-[#5dc22f] origin-left-right"></div>
                  </div>
                </div>
                <HiMiniServerStack size={120} />
              </div>
            ) : error ? (
              <p className="text-red-500 text-lg leading-relaxed">
                Something went wrong, Please try again!
              </p>
            ) : data ? (
              <div>
                <div className="border p-6 rounded-lg shadow-lg bg-green-500 text-green-50">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Carbon Footprint</h3>
                      <p className="text-4xl font-bold">
                        {(
                          data.statistics.co2.grid.grams +
                          data.statistics.co2.renewable.grams
                        ).toFixed(2)}{" "}
                        gCO2
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Energy Usage</h3>
                      <p className="text-4xl font-bold">
                        {data.statistics.energy.toFixed(6)} kWh
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Rating</h3>
                      <p className="text-4xl font-bold">{data.rating}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-2xl font-bold mb-4">
                    Detailed Statistics
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left">Metric</th>
                          <th className="px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-2">URL</td>
                          <td className="px-4 py-2">{data.url}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-2">Carbon Footprint (Grid)</td>
                          <td className="px-4 py-2">
                            {data.statistics.co2.grid.grams.toFixed(2)} gCO2
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-2">
                            Carbon Footprint (Renewable)
                          </td>
                          <td className="px-4 py-2">
                            {data.statistics.co2.renewable.grams.toFixed(2)}{" "}
                            gCO2
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-2">Energy Usage</td>
                          <td className="px-4 py-2">
                            {data.statistics.energy.toFixed(6)} kWh
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-2">Cleaner Than</td>
                          <td className="px-4 py-2">
                            {(data.cleanerThan * 100).toFixed(2)}%
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-2">Rating</td>
                          <td className="px-4 py-2">{data.rating}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <p>
                {error ||
                  "something went wrong, please enter a valid URL and try again!"}
              </p>
            )}
            <div>
              {loading && (
                <div className="flex flex-col md:flex-row justify-between">
                  <Typography
                    variant="small"
                    className="mt-6 mb-2 text-gray-600 font-normal"
                  >
                    We're just loading your results..
                  </Typography>
                  <Button
                    onClick={handleOpen}
                    color="red"
                    className="w-full max-h-10 lg:max-w-[12rem]"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </>
  );
}

// <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
//   <DialogHeader className="justify-between">
//     <img
//       src="/image/exclamation.svg"
//       alt="exclamation"
//       className="w-10 h-10"
//     />
//     <IconButton
//       color="gray"
//       size="sm"
//       variant="text"
//       onClick={handleOpen}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//         className="h-4 w-4"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     </IconButton>
//   </DialogHeader>
//   <DialogBody className="overflow-y-scroll">
//     <Typography color="blue-gray" className="mb-1 font-bold">

//     </Typography>
//     <Typography
//       variant="paragraph"
//       className="font-normal text-gray-600 max-w-lg"
//     >
//       Are you sure you want to reset all settings to their default values?
//       This action cannot be undone.
//     </Typography>
//     <div>
//       <Typography
//         variant="small"
//         className="mt-6 mb-2 text-gray-600 font-normal"
//       >
//         Please type{" "}
//         <strong className="text-gray-900">
//           &quot;Reset settings&quot;
//         </strong>{" "}
//         to confirm.
//       </Typography>
//       <div className="flex flex-col md:flex-row gap-2">
//         <Input
//           color="gray"
//           label="Reset settings"
//           size="lg"
//           className="w-full md:max-w-lg"
//         />
//         <Button color="gray" className="w-full lg:max-w-[15rem]">
//           I understant, reset settings
//         </Button>
//       </div>
//     </div>
//   </DialogBody>
// </Dialog>
// import { useState } from "react";

// export default function Modal() {
//   const [showModal, setShowModal] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [data, setData] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleSearch = async () => {
//     console.log("clicked");
//     // search with axios :
//     try {
//       setLoading(true);
//       setError("");
//       const response = await fetch(
//         `http://localhost:3001/carbon?url=${encodeURIComponent(inputValue)}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       setLoading(false);
//       console.log("======================data=======================");
//       console.log(data);

//       if (data.error) {
//         setError(`Error: ${data.error.message}`);
//       } else {
//         const carbonEmissions = data.statistics.co2.total;
//         setData(`Carbon Emissions: ${carbonEmissions} gCO2`);
//       }
//     } catch (error) {
//       setLoading(false);
//       setError(`Error: ${error.message}`);
//     }
//   };
//   return (
//     <>
//       <div
//         id="inputs"
//         className="flex flex-col lg:flex-row mt-8 gap-y-2 w-full px-8 md:px-0 sm:min-w-[45vw] md:w-[35dvw]"
//       >
//         <input
//           type="text"
//           placeholder="Enter your website"
//           className="w-full text-base py-3 px-4 border-none focus:outline-none"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             handleSearch();
//             setShowModal(true);
//           }}
//           className="w-full py-3 text-white bg-[#5656a6] rounded-3xl lg:rounded-s-none lg:w-fit text-nowrap px-8 font-semibold"
//         >
//           Get your results
//         </button>
//       </div>

//       {showModal && (
//     <>
//       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//         <div className="relative w-auto my-6 mx-auto max-w-3xl">
//           {/* Content */}
//           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//             {/* Body */}
//             <div className="relative">
//               {loading ? (
//                 <div className="flex items-center justify-center h-full">
//                   <svg
//                     className="animate-spin h-8 w-8 text-blue-500"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 8v4m0 4v4m0-4v4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//               ) : (
//                 ""
//               )}
//               {error ? (
//                 <p className="text-red-500 text-lg leading-relaxed">
//                   {error}
//                 </p>
//               ) : data ? (
//                 <div className="">
//                   {/* <div className="space-y-4 text-center">
//                     <h1 className="text-3xl font-bold">
//                       Website Carbon Data
//                     </h1>
//                     <p className="text-muted-foreground">
//                       Discover the environmental impact of your website and
//                       take steps to reduce its carbon footprint.
//                     </p>
//                   </div> */}
//                   <div className="mt-10">
//                     <div
//                       className="border p-6 rounded-lg shadow-lg bg-green-500 text-green-50"
//                       data-v0-t="card"
//                     >
//                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                         <div className="space-y-2">
//                           <h3 className="text-2xl font-bold">
//                             Carbon Footprint
//                           </h3>
//                           <p className="text-4xl font-bold">0.5 kg CO2</p>
//                         </div>
//                         <div className="space-y-2">
//                           <h3 className="text-2xl font-bold">
//                             Energy Usage
//                           </h3>
//                           <p className="text-4xl font-bold">1.2 kWh</p>
//                         </div>
//                         <div className="space-y-2">
//                           <h3 className="text-2xl font-bold">Rating</h3>
//                           <p className="text-4xl font-bold">A</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-10">
//                     <h2 className="text-2xl font-bold mb-4">
//                       Detailed Statistics
//                     </h2>
//                     <div className="overflow-x-auto">
//                       <table className="w-full table-auto">
//                         <thead>
//                           <tr className="bg-muted text-muted-foreground">
//                             <th className="px-4 py-2 text-center">Metric</th>
//                             <th className="px-4 py-2 text-center">Value</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr className="border-b">
//                             <td className="px-4 py-2">Carbon Footprint</td>
//                             <td className="px-4 py-2">0.5 kg CO2</td>
//                           </tr>
//                           <tr className="border-b">
//                             <td className="px-4 py-2">Energy Usage</td>
//                             <td className="px-4 py-2">1.2 kWh</td>
//                           </tr>
//                           <tr className="border-b">
//                             <td className="px-4 py-2">Rating</td>
//                             <td className="px-4 py-2">A</td>
//                           </tr>
//                           <tr className="border-b">
//                             <td className="px-4 py-2">Website Visits</td>
//                             <td className="px-4 py-2">10,000</td>
//                           </tr>
//                           <tr className="border-b" />
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <p>No results</p>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//               <button
//                 className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={() => setShowModal(false)}
//               >
//                 Close
//               </button>
//               {/* <button
//                 className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={() => setShowModal(false)}
//               >
//                 Save Changes
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//     </>
//   )}
// </>
//   );
// }
// -------------------------------------------------
// {/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-h-[90vh] pt-12   m-auto">
//   <div className="relative w-auto my-6 mx-auto max-w-3xl">
//     {/* Content */}
//     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//       {/* Body */}
//       <div className="relative p-6 flex-auto">
//         {loading ? (
//           <div className="flex items-center justify-center h-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="xMidYMid"
//               width={165}
//               height={165}
//               style={{
//                 shapeRendering: "auto",
//                 display: "block",
//                 background: "rgb(255, 255, 255)",
//               }}
//             >
//               <g data-idx={1}>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="63.41047668457031"
//                   cx="-0.5"
//                   data-idx={2}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="60.197025299072266"
//                   cx="4.5"
//                   data-idx={4}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="55.4295654296875"
//                   cx="9.5"
//                   data-idx={6}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="49.52984619140625"
//                   cx="14.5"
//                   data-idx={8}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="43.739749908447266"
//                   cx="19.5"
//                   data-idx={10}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="39.20600128173828"
//                   cx="24.5"
//                   data-idx={12}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="36.22478485107422"
//                   cx="29.5"
//                   data-idx={14}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="34.59037399291992"
//                   cx="34.5"
//                   data-idx={16}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="34.01173400878906"
//                   cx="39.5"
//                   data-idx={18}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="34.28458023071289"
//                   cx="44.5"
//                   data-idx={20}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="35.522674560546875"
//                   cx="49.5"
//                   data-idx={22}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="38.005340576171875"
//                   cx="54.5"
//                   data-idx={24}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="41.9981803894043"
//                   cx="59.5"
//                   data-idx={26}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="47.442256927490234"
//                   cx="64.5"
//                   data-idx={28}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="53.468544006347656"
//                   cx="69.5"
//                   data-idx={30}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="58.721473693847656"
//                   cx="74.5"
//                   data-idx={32}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="62.47101593017578"
//                   cx="79.5"
//                   data-idx={34}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="64.74203491210938"
//                   cx="84.5"
//                   data-idx={36}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="65.81427001953125"
//                   cx="89.5"
//                   data-idx={38}
//                 ></circle>
//                 <circle
//                   fill="#8cc842"
//                   r={2}
//                   cy="65.9573974609375"
//                   cx="94.5"
//                   data-idx={40}
//                 ></circle>
//                 <circle
//                   fill="#3e9b4a"
//                   r={2}
//                   cy="65.23326110839844"
//                   cx="99.5"
//                   data-idx={42}
//                 ></circle>
//                 <g data-idx={44} />
//               </g>
//               <text
//                 data-watermark="true"
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//                 strokeOpacity="0.1"
//                 fill="black"
//                 fillOpacity="0.1"
//                 stroke="white"
//                 strokeWidth={1}
//                 fontSize={5.0}
//                 x={50}
//                 y={50}
//                 data-idx={45}
//                 style={{ opacity: 1, fontSize: 5 }}
//               >
//                 LOADING.IO
//               </text>
//             </svg>
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-lg leading-relaxed">
//             Something went wrong, Please try again!
//           </p>
//         ) : data ? (
//           <div>
//             <div className="border p-6 rounded-lg shadow-lg bg-green-500 text-green-50">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                 <div className="space-y-2">
//                   <h3 className="text-2xl font-bold">
//                     Carbon Footprint
//                   </h3>
//                   <p className="text-4xl font-bold">
//                     {(
//                       data.statistics.co2.grid.grams +
//                       data.statistics.co2.renewable.grams
//                     ).toFixed(2)}{" "}
//                     gCO2
//                   </p>
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-2xl font-bold">Energy Usage</h3>
//                   <p className="text-4xl font-bold">
//                     {data.statistics.energy.toFixed(6)} kWh
//                   </p>
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-2xl font-bold">Rating</h3>
//                   <p className="text-4xl font-bold">{data.rating}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4">
//               <h2 className="text-2xl font-bold mb-4">
//                 Detailed Statistics
//               </h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full table-auto border-collapse">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="px-4 py-2 text-left">Metric</th>
//                       <th className="px-4 py-2 text-left">Value</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b">
//                       <td className="px-4 py-2">URL</td>
//                       <td className="px-4 py-2">{data.url}</td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-2">
//                         Carbon Footprint (Grid)
//                       </td>
//                       <td className="px-4 py-2">
//                         {data.statistics.co2.grid.grams.toFixed(2)}{" "}
//                         gCO2
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-2">
//                         Carbon Footprint (Renewable)
//                       </td>
//                       <td className="px-4 py-2">
//                         {data.statistics.co2.renewable.grams.toFixed(
//                           2
//                         )}{" "}
//                         gCO2
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-2">Energy Usage</td>
//                       <td className="px-4 py-2">
//                         {data.statistics.energy.toFixed(6)} kWh
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-2">Cleaner Than</td>
//                       <td className="px-4 py-2">
//                         {(data.cleanerThan * 100).toFixed(2)}%
//                       </td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-2">Rating</td>
//                       <td className="px-4 py-2">{data.rating}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>No results</p>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//         <button
//           className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//           type="button"
//           onClick={() => setShowModal(false)}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
