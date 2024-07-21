import { useState } from "react";

const Annual = () => {
  return (
    <>
      {[
        "150k",
        "200k",
        "300k",
        "400k",
        "500k",
        "600k",
        "750k",
        "900k",
        "1.1M",
        "1.3M",
        "1.5M",
        "2M",
        "2M+",
      ].map((salary, index) => (
        <div key={index} className="my-2 flex items-center">
          <input
            type="radio"
            name="radio-3"
            className="radio radio-secondary"
          />
          <label className="ml-3 text-gray-600 text-md font-medium">
            {salary}
          </label>
        </div>
      ))}
    </>
  );
};
const Hourly = () => {
  return (
    <>
      {[
          "0",
          "50",
          "100",
          "150",
          "200",
          "250",
          "300",
          "400",
          "450",
          "500",
          "700",
          "900",
      ].map((salary, index) => (
        <div key={index} className="my-2 flex items-center">
          <input
            type="radio"
            name="radio-3"
            className="radio radio-secondary"
          />
          <label className="ml-3 text-gray-600 text-md font-medium">
            {salary}
          </label>
        </div>
      ))}
    </>
  );
};

const Monthly = () => {
  return (
    <>
      {[
        "10k",
        "15k",
        "20k",
        "30k",
        "40k",
        "60k",
        "70k",
        "80k",
        "100k",
        "120k",
        "150k",
        "150k+",
      ].map((salary, index) => (
        <div key={index} className="my-2 flex items-center">
          <input
            type="radio"
            name="radio-3"
            className="radio radio-secondary"
          />
          <label className="ml-3 text-gray-600 text-md font-medium">
            {salary}
          </label>
        </div>
      ))}
    </>
  );
};

const renderComponent = (name) => {
  switch (name) {
    case "Annual":
      return <Annual />;
    case "Hourly":
      return <Hourly />;
    case "Monthly":
      return <Monthly />;
    default:
      return null;
  }
};

export default function ToDrop() {
  const [selectedType, setSelectedType] = useState("Annual");

  const chooseType = (e, name) => {
    e.preventDefault();
    setSelectedType(name);
  };

  return (
    <>
      <div className="text-black absolute top-full  md:left-[14%] lg:left-[18%] mt-2 bg-white w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-tl-sm rounded-b-lg z-[999999  overflow-hidden shadow-lg">
        <div className="flex items-center border-b-[2px] border-gray-400 p-2">
          <button
            role="button"
            onClick={(e) => chooseType(e, "Annual")}
            className="px-3 py-1 text-gray-500 text-lg font-medium"
          >
            Annual
          </button>
          <button
            role="button"
            onClick={(e) => chooseType(e, "Hourly")}
            className="px-3 py-1 text-gray-500 text-lg font-medium"
          >
            Hourly
          </button>
          <button
            role="button"
            onClick={(e) => chooseType(e, "Monthly")}
            className="px-3 py-1 text-gray-500 text-lg font-medium"
          >
            Monthly
          </button>
        </div>
        <div className="p-5">
          <h3 className="text-gray-700 text-sm">Salary (PHP)</h3>
          <div className="overflow-y-scroll h-[250px]">
            {renderComponent(selectedType)}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
