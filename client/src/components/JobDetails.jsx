import StarIcon from '@mui/icons-material/Star';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import DOMPurify from 'dompurify';
import { deleteMark, storeMark } from '../redux/actions/bookmarkAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { applyJob } from '../redux/actions/jobAction';


export default function JobDetails({ selectedJob }) {

    const dispatch = useDispatch()

    const sanitizedMarkup = DOMPurify.sanitize(selectedJob.description)
    
    const [optimistic, setOptimistic] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(selectedJob.bookmark)
    const [jobOpstimistic, setJobOptimistic] = useState(false)


    const bookmark = async (id) => {
        setOptimistic(true);
        setIsBookmarked(true)
        try {
            await dispatch(storeMark({ id }));
        } catch (error) {
            setOptimistic(false);
            setIsBookmarked(false)
        }
    };

    const unBookmarked = async (id) => {
        setOptimistic(false);
        setIsBookmarked(false)
        try {
            await dispatch(deleteMark({ id }));
        } catch (error) {
            setOptimistic(false);
            setIsBookmarked(false)
        }
    };

    const toggleBookmark = (id) => {
        if (isBookmarked) {
            unBookmarked(id);
        } else {
            bookmark(id);
        }
    };

    const hanldeApply = async (e) => {
        e.preventDefault()
        setJobOptimistic(true)
        try {
            await dispatch(applyJob(selectedJob.id))
        } catch (error) {
            setJobOptimistic(false)
        }
    }

    return (
        <>
            <div className="flex flex-col border w-full max-h-[1000px] px-[40px] py-[30px]">
                <div className="flex flex-col">
                    {selectedJob.author?.additional_info.company_logo !== null ?
                        <img src={`http://api.jobquest.test/api/storage/app/company_logo/${selectedJob.user_id}/${selectedJob.author?.additional_info.company_logo}`} alt="" className="h-[50px] w-[50px]" /> : ''
                    }
                    <h1 className="my-2 text-2xl text-gray-800 font-semibold tracking-wider">
                        {selectedJob.title}
                    </h1>
                    <div className="flex items-center">
                        <div className='flex items-center'>
                            <StarIcon className='text-amber-400' sx={{ fontSize: 28 }} />
                            <span className='text-gray-600 text-md font-semibold ml-1 mt-1'>5.0</span>
                        </div>
                        <a href="#" className='flex items-center mx-4 mt-1'>
                            <span className='text-gray-600 text-md font-medium underline'>8 reviews</span>
                        </a>
                        <a href="#" className='flex items-center underline'>
                            <span className='text-gray-600 text-md font-medium ml-1 mt-1'>view all jobs</span>
                        </a>
                    </div>
                    <div className='mt-5'>
                        <p className='flex items-center'>
                            <LocationOnOutlinedIcon className="text-gray-700" />
                            <span className='text-md text-gray-600 ml-2'>{selectedJob.location}</span>
                        </p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex items-center'>
                            <ClassOutlinedIcon className="text-gray-700" />
                            <span className='text-md text-gray-600 ml-2'>{selectedJob.position}</span>
                        </p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex items-center'>
                            <AccessTimeOutlinedIcon className="text-gray-700" />
                            <span className='text-md text-gray-600 ml-2'>{selectedJob.employement}</span>
                        </p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex items-center'>
                            <LocalAtmOutlinedIcon className="text-gray-700" />
                            <span className='text-md text-gray-600 ml-2'>
                                ₱ {selectedJob.starting_salary}
                            </span>
                            <span className='text-md text-gray-600 ml-2'>
                                -
                            </span>
                            <span className='text-md text-gray-600 ml-2'>
                                ₱ {selectedJob.to_salary}
                            </span>
                        </p>
                    </div>
                    <p className='text-gray-600 text-sm mt-5'>Posted 1d ago</p>
                    <form onSubmit={hanldeApply} className='my-5 flex items-center'>
                        <button role='submit' className='text-white bg-magenta-100 hover:bg-magenta-200 py-2 px-7 rounded-lg tracking-wider mr-3 flex items-center justify-center'>
                            <span className="text-md font-semibold">
                            { jobOpstimistic|| selectedJob.is_applied ? 'Applied' : 'Apply'}
                            </span>
                            <IosShareOutlinedIcon sx={{ fontSize: 20 }} />
                        </button>
                        <div role="button" className='text-darkerBlue bg-slate-300 hover:bg-slate-40   0 text-md font-semibold  py-2 px-7 rounded-lg tracking-wider' onClick={() => toggleBookmark(selectedJob.id)}>
                            {isBookmarked ? 'Unsaved' : 'Save'}
                        </div>
                    </form>
                    <div className='my-5 text-md text-gray-800 prose prose-sm ' dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}
                    />

                </div>
            </div>
        </>
    )
}
