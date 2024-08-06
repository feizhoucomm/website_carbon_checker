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
        `${import.meta.env.VITE_SERVER_API}/carbon?url=${encodeURIComponent(
          inputValue
        )}`,
        {
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (result.error) {
        setError(`Error: ${result.error.message}`);
        setData(null);
        console.log(
          "============Error msg =============== : ",
          result.error.message
        );
      } else {
        setData(result);
        console.log("============ Result =============== : ");
        console.log(result);
      }
      setLoading(false);
    } catch (error) {
      setError(`Error: ${error.message}`);
      setData(null);
      setLoading(false);
      console.log("============ Catch error =============== : ", error.message);
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
