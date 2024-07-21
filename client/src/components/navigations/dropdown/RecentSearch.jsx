import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function RecentSearch() {
  const [showSearch, setShowSearch] = useState(true);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className="p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 text-2xl font-semibold tracking-wide">
            Recent Searches
          </h1>
          <div className="lg:hidden cursor-pointer" onClick={toggleSearch}>
            <ExpandMoreIcon className="text-gray-600" sx={{ fontSize: 25 }} />
          </div>
        </div>
        <div className={`${showSearch ? 'flex' : 'hidden'} lg:flex items-center flex-wrap mt-[15px]`}>
          <a href="#" className="py-2 px-3 text-black bg-slate-200 rounded-lg mx-2 mt-3">
            <SearchIcon sx={{ fontSize: 20 }} />
            <span className="ml-2 text-gray-700 text-sm font-semibold">All Jobs</span>
          </a>
          <a href="#" className="py-2 px-3 text-black bg-slate-200 rounded-lg mx-2 mt-3">
            <SearchIcon sx={{ fontSize: 20 }} />
            <span className="ml-2 text-gray-700 text-sm font-semibold">Accounting</span>
          </a>
          <a href="#" className="py-2 px-3 text-black bg-slate-200 rounded-lg mx-2 mt-3">
            <SearchIcon sx={{ fontSize: 20 }} />
            <span className="ml-2 text-gray-700 text-sm font-semibold">Programmer/Developer</span>
          </a>
          <a href="#" className="py-2 px-3 text-black bg-slate-200 rounded-lg mx-2 mt-3">
            <SearchIcon sx={{ fontSize: 20 }} />
            <span className="ml-2 text-gray-700 text-sm font-semibold">Database administration</span>
          </a>
          <a href="#" className="py-2 px-3 text-black bg-slate-200 rounded-lg mx-2 mt-3">
            <SearchIcon sx={{ fontSize: 20 }} />
            <span className="ml-2 text-gray-700 text-sm font-semibold">Database administration</span>
          </a>
          <a href="#" className="py-2 px-3 text-black bg-slate-200 rounded-lg mx-2 mt-3">
            <SearchIcon sx={{ fontSize: 20 }} />
            <span className="ml-2 text-gray-700 text-sm font-semibold">Database administration</span>
          </a>
        </div>
      </div>
    </>
  );
}
