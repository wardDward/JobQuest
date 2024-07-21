import EmployerCarousel from "../../components/navigations/EmployerCarousel";
import SearchSection from "../../components/navigations/SearchSection";
import RecentSearch from "../../components/navigations/dropdown/RecentSearch";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from "react-router-dom";
export default function HeroPage() {
  return (
    <>
      <SearchSection />
      <RecentSearch />
      <div className="px-2 sm:px-10 md:px-[80px] lg:px-[200px] xl:px-[300px] ">
        <div className="bg-slate-200 p-10 rounded-lg w-full flex justify-center items-center flex-col">
          <div className="flex items-center">
            <Link
              to="/login"
              className="py-2 border-[2px] border-black text-md sm:text-lg px-3 sm:px-10 mx-5 sm:mx-12 rounded-lg"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="mx-5 sm:mx-12 text-md sm:text-lg underline tracking-wide"
            >
              Register
            </Link>
          </div>
          <p className="mt-5 text-sm md:text-lg">
            Sign in to manage your Jobstreet Profile, save searches and view
            your recommended jobs.
          </p>
        </div>
        <EmployerCarousel />
        <a
          href="#"
          className="py-2 border-[2px] border-darkerBlue mt-5 px-5 hover:text-white text-darkeerBlue text-lg font-medium rounded-lg hover:bg-darkerBlue"
        >
          See More
        </a>
        <div className="flex justify-between items-stretch  px-[80px] my-[50px] h-full">
          <div className="p-10 bg-magenta-200 rounded-lg min-h-[300px] w-[49.5%] flex flex-col justify-center">
            <div>
              <p className="text-white text-2xl italic mb-4 text-center">
                {' "Quality workmanship, delivered on time and within budget." '}
              </p>
              <p className="text-white mt-2 text-sm">
                We specialize in delivering quality workmanship, ensuring each task is completed on time and within your specified budget. Our team is committed to meticulous planning and execution, using only the highest quality materials and equipment to guarantee exceptional results. With a focus on customer satisfaction, we aim to exceed your expectations by providing transparent pricing and clear terms.
              </p>
            </div>
          </div>
          <div className="p-10 bg-darkerBlue rounded-lg min-h-[300px] w-[49.5%] flex flex-col justify-center">
            <div>
              <p className="text-white text-2xl italic mb-4 text-center">
                {'"Building your vision, one detail at a time."'}
              </p>
              <p className="text-white mt-2 text-sm">
                We are excited to provide you with this quote for your upcoming project. We take pride in building your vision one detail at a time. Our comprehensive quote outlines the scope of work, including labor, materials, and any additional costs, ensuring clarity and transparency throughout the process. With a commitment to quality and efficiency, we promise to adhere to the agreed timeline and budget, delivering outstanding results that align with your expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-9">
          <h1 className="text-lg font-semibold text-gray-600">Quick Search</h1>
          <div className="flex flex-col mt-5">
            <div className="flex items-center">
              <span className="text-sm text-black">Classifications:</span>
              <div className="gap-2 flex items-center ml-5">
                <a href="" className="text-sm text-gray-600 underline font-medium">Accounting</a>
                <a href="" className="text-sm text-gray-600 underline font-medium">Accounting</a>
                <a href="" className="text-sm text-gray-600 underline font-medium">Accounting</a>
                <a href="" className="text-sm text-gray-600 underline font-medium">Accounting</a>
                <a href="" className="text-sm text-gray-600 underline font-medium flex items-center">View All
                  <ExpandMoreIcon sx={{ fontSize: 17 }} />
                </a>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <span className="text-sm text-black">Other:</span>
              <div className="gap-2 flex items-center ml-5">
                <a href="" className="text-sm text-gray-600 underline font-medium">
                  All Jobs</a>
                <a href="" className="text-sm text-gray-600 underline font-medium">Work From Home Jobs</a>
                <a href="" className="text-sm text-gray-600 underline font-medium">Virtual Assistant Jobs</a>
                <a href="" className="text-sm text-gray-600 underline font-medium">Urgent Hiring Jobs</a>
                <a href="" className="text-sm text-gray-600 underline font-medium">Government Jobs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
