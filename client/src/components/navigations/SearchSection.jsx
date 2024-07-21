import TuneIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import StartingDrop from "./dropdown/StartingDrop";
import ToDrop from "./dropdown/ToDrop";

export default function SearchSection() {
  const [option, setOption] = useState(false);
  const [start, setStart] = useState(false);
  const [to, setTo] = useState(false);

  const toggleOption = () => {
    setOption(!option);
  };

  const toggleStart = (e) => {
    e.preventDefault();
    setStart(!start);
    setTo(false);
  };

  const toggleTo = (e) => {
    e.preventDefault();
    setTo(!to);
    setStart(false);
  };

  return (
    <>
      <div className="py-7 px-5 lg:px-7 bg-darkerBlue flex flex-col justify-center items-center">
        <form
          action=""
          className="flex items-center justify-center md:justify-start flex-wrap"
        >
          <div className="flex flex-col w-full md:w-[25%]">
            <label className="text-white font-bold tracking-wider">What</label>
            <input
              type="text"
              placeholder="Enter Keywords"
              className="py-2 px-3 rounded-md outline-none w-full"
            />
          </div>
          <div className="flex flex-col mt-[22px] mx-0 md:mx-3 w-full md:w-[25%]">
            <select className="py-[8.5px] px-3 rounded-md outline-none text-gray-500 w-full" defaultValue="">
              <option disabled value="">
                Any Classification
              </option>
              {/* Add your options here */}
            </select>
          </div>
          <div className="flex flex-col w-full md:w-[25%] mt-[30px] md:mt-0">
            <label className="text-white font-bold tracking-wider">Where</label>
            <input
              type="text"
              placeholder="Enter Keywords"
              className="py-2 px-3 rounded-md outline-none w-full"
            />
          </div>
          <div className="ml-0 md:ml-3 mt-[30px] md:mt-[22px] hidden md:flex flex-col w-full md:w-[15%]">
            <button
              type="submit"
              className="bg-magenta-100 py-2 text-white hover:bg-magenta-200 rounded-md text-center"
            >
              Seek
            </button>
          </div>
          {option && (
            <>
              <div className="flex flex-wrap w-full items-center mt-3 justify-center md:justify-start relative">
                <div className="flex flex-col w-full sm:w-[23%] md:w-[15%] mt-2">
                  <select className="py-[10px] px-3 text-white bg-darkerBlue border-[2px] border-white rounded-full w-full outline-none" defaultValue="">
                    <option disabled value="">
                      All work types
                    </option>
                    <option value="Full time">Full time</option>
                    <option value="Part time">Part time</option>
                    <option value="Contract/Temp">Contract/Temp</option>
                    <option value="Casual/Vacation">Casual/Vacation</option>
                  </select>
                </div>
                <div className="flex mx-0 sm:mx-3 w-full sm:w-[23%] md:w-[15%] mt-2">
                  <div
                    className={`py-[10px] px-3 border-[2px] border-white rounded-full w-full outline-none flex justify-between cursor-pointer ${start ? 'text-darkerBlue bg-white' : ' text-white bg-darkerBlue'}`}
                    onClick={(e) => toggleStart(e)}
                  >
                    <span> to ₱ 0 </span>
                    <ExpandMoreIcon sx={{ fontSize: 20 }}  className={`${start ? 'transform rotate-[180deg]' : ''}`}/>
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-[23%] md:w-[15%] mt-2">
                  <div
                    className={`py-[10px] px-3 border-[2px] border-white rounded-full w-full outline-none flex justify-between cursor-pointer ${to ? 'text-darkerBlue bg-white' : ' text-white bg-darkerBlue'}`}
                    onClick={(e) => toggleTo(e)}
                  >
                    <span> to ₱150k </span>
                    <ExpandMoreIcon sx={{ fontSize: 20 }}  className={`${to ? 'transform rotate-[180deg]' : ''}`}/>
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-[23%] md:w-[15%] mt-2 ml-0 sm:ml-2">
                  <select className="py-[10px] px-3 text-white bg-darkerBlue border-[2px] border-white rounded-full w-full outline-none" defaultValue="">
                    <option disabled value="">
                      Listed any time
                    </option>
                    <option value="anytime">Any time</option>
                    <option value="today">Today</option>
                    <option value="3 days">Last 3 days</option>
                    <option value="7 days">Last 7 days</option>
                    <option value="14 days">Last 14 days</option>
                    <option value="30 days">Last 30 days</option>
                  </select>
                </div>
                {start && <StartingDrop />}
                {to && <ToDrop />}
              </div>
            </>
          )}
          <div className="ml-0 md:ml-3 mt-[30px] md:mt-[22px] flex md:hidden flex-col w-full md:w-[15%]">
            <button
              type="submit"
              className="bg-magenta-100 py-2 text-white font-bold tracking-widest hover:bg-magenta-200 rounded-md text-center"
            >
              Seek
            </button>
          </div>
        </form>
        <div className=" flex justify-end items-end text-end mt-4 w-full">
          <div
            className="text-white font-semibold cursor-pointer py-1 px-3 rounded-md hover:bg-slate-100/40 text-sm"
            onClick={() => toggleOption()}
          >
            More options <TuneIcon sx={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
    </>
  );
}
