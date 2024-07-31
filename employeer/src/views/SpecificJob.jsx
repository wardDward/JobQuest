import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchJob, jobPublication } from "../redux/actions/useJobs"
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { timeAgo } from "../utils/dateHelper";
import DOMPurify from "dompurify";

const JobInfo = ({ info }) => {
    const sanitizedMarkup = DOMPurify.sanitize(info?.description);
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async() => {
        await dispatch(jobPublication(info?.id))
        navigate('/queue')
    }

    return (
        <>
            <div className="flex justify-end items-center gap-2 mt-5">
                <div className="flex items-center py-1 px-[10px] hover:bg-slate-200 rounded-md cursor-pointer" onClick={() => handleSubmit()}>
                    {
                        info?.deleted_at === null ? <div>
                            <UnpublishedOutlinedIcon className="text-gray-700" sx={{ fontSize: 26 }} />
                            <span className="text-sm mt-1 text-gray-700 font-semibold ml-1">Unpublished</span>
                        </div> : <div>
                            <PublishedWithChangesOutlinedIcon className="text-gray-700" sx={{ fontSize: 26 }} />
                            <span className="text-sm mt-1 text-gray-700 font-semibold ml-1">Published</span>
                        </div>
                    }
                </div>
            </div>
            <hr className="border-x-0 border-t-[5px] border-b-[0px] my-4" />
            <form className="p-[10px] md:p-[80px]">
                <div className="flex justify-end items-center">
                    <p className="text-gray-600 text-sm mr-2">Posted</p>
                    <p className="text-sm text-gray-600">{timeAgo(info?.created_at)}</p>
                </div>
                <div className="flex flex-col">
                    <img src={`http://api.jobquest.test/api/storage/app/company_logo/${info?.user_id}/${info.author?.additional_info.company_logo}`} alt={info.author?.additional_info.company_logo} className={`h-[50px] w-[50px]`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 my-3">{info.author?.additional_info.company_name}</h3>
                <div className=" ">
                    <p className="text-lg font-semibold text-gray-600">Salary:</p>
                    <div className="flex gap-8 items-center mt-2">
                        <div className="text-sm font-medium">
                            <div className="flex items-center">
                                <p className="font-bold flex items-center">Starting:
                                    <span className='block ml-2'>₱{`${info.starting_salary}`}</span>
                                </p>
                            </div>
                        </div>
                        <div className="text-sm font-medium ml-2">
                            <div className="flex items-center">
                                <p className="font-bold flex items-center">To:
                                    <span className='block ml-2'>₱{`${info.to_salary}`}</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-4">
                    <div className="flex items-center text-gray-700 mb-3">
                        <LocationOnOutlinedIcon className="mr-3" sx={{ fontSize: 23 }} />
                        <span className="text-sm">{info.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700 mb-3">
                        <WorkOutlineOutlinedIcon className="mr-3" sx={{ fontSize: 23 }} />
                        <span className="text-sm">{info.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700 mb-3">
                        <AccessTimeOutlinedIcon className="mr-3" sx={{ fontSize: 23 }} />
                        <span className="text-sm">{info.location}</span>
                    </div>
                </div>
                <div className='my-[20px] prose prose-sm'
                    dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}
                />

            </form>
        </>

    )
}

export default function SpecificJob() {
    const { id } = useParams()
    const [info, setInfo] = useState({})

    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.jobs)
    useEffect(() => {
        const handleFetching = async () => {
            const response = await dispatch(fetchJob(id))

            if (response.meta.requestStatus === 'fulfilled') {
                setInfo(response.payload)
            }
        }
        handleFetching()
    }, [id, dispatch])


    return (
        <div className="">
            {isLoading ? <div className="flex justify-center items-center">
                <span className="loading loading-dots loading-md"></span>
            </div> : <JobInfo info={info} />}
        </div>
    )
}
