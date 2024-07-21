import { useEffect } from "react";
import JobCard from "../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions/useJobs";

export default function JobQueue() {
  const dispatch = useDispatch();
  const { isLoading, jobs } = useSelector(state => state.jobs);

  useEffect(() => {
    const getJobs = async () => {
      await dispatch(fetchJobs());
    };

    getJobs();
  }, [dispatch]);

  return (
    <div className="">
      <div className="h-screen w-full flex flex-col p-7">
        <div>
          <h1 className="text-lg font-semibold tracking-wide text-gray-700 ">Job Queue</h1>
        </div>
        <div className="my-5 h-[90%]">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <span className="loading loading-dots loading-xs"></span>
            </div>
          ) : (
            jobs.length === 0 ? (
              <div className="flex items-center justify-center">
                <span className="text-gray-500">No jobs in the queue</span>
              </div>
            ) : (
              jobs?.map((job) => (
                <JobCard job={job} key={job.id} />
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
}
