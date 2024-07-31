import SearchSection from "../components/navigations/SearchSection";
import JobCard from "../components/JobCard";
import JobDetails from "../components/JobDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJobs } from "../redux/actions/jobAction";

export default function JobFinder() {

    const dispatch = useDispatch()
    const { jobs } = useSelector(state => state.clientJob)

    const [selectedJob, setSelectedJob] = useState(null)

    const choosenJob = (data) => {
        if (window.innerWidth >= 1024) {
            setSelectedJob(data)
            console.log(data);
        } else {
            // Redirect user on medium screens
            window.location.href = `/view_job/${data.id}`;
        }
    };

    useEffect(() => {
        const handleFetching = async () => {
            await dispatch(fetchJobs())
        }

        handleFetching()
    }, [dispatch])

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
                        {jobs.map(job => (<JobCard job={job} key={job.id} choosenJob={choosenJob} />))}
                    </div>

                    <div className="w-[60%] overflow-y-scroll max-h-[1000px] hidden lg:flex sticky top-0">
                        {selectedJob === null ? '' :
                            <JobDetails selectedJob={selectedJob} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
