import SearchSection from "../components/navigations/SearchSection";
import JobCard from "../components/JobCard";
import JobDetails from "../components/JobDetails";

export default function JobFinder() {   

    return (
        <>
            <SearchSection />

            <div className="px-[20px] lg:px-[150px] mt-[80px] mb-[20px]">
                <div className="flex items-center justify-between w-full lg:w-[30%]">
                    <h3 className="text-gray-600 text-sm">1,345 Jobs</h3>
                    <div className="flex items-center">
                        <label htmlFor="sorted" className="text-sm mr-2">Sorted By: </label>
                        <select name="sorted" id="sorted" className="w-[100px] font-semibold">
                            <option value="Relevance">Relevance</option>
                            <option value="Date">Date</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-0 lg:gap-[10%] mt-2">
                    <div className="w-full lg:w-[30%] flex flex-col">
                        <JobCard />
                    </div>

                    <div className="w-[60%] overflow-y-scroll max-h-[1000px] hidden lg:flex sticky top-0">
                        {/* <div className="bg-slate-200/80 w-full p-[60px] rounded-2xl">
                            <div className="">
                                <p className="text-gray-700 flex flex-col">
                                    <div className="flex items-center">
                                        <ArrowBackIcon sx={{ fontSize: 32 }} />
                                        <h1 className="ml-3 text-2xl font-medium">Select a job</h1>
                                    </div>
                                    <p className="ml-10 text-md mt-2 tracking-wider">Diplay details here</p>

                                </p>
                            </div>
                            <div className="flex justify-center items-center h-full">
                                <img src={Papers} alt="" />
                            </div>
                        </div> */}
                        <JobDetails/>
                    </div>
                </div>
            </div>
        </>
    )
}
