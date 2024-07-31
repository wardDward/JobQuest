import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import DOMPurify from 'dompurify';
import { useDispatch } from 'react-redux';
import { deleteMark ,storeMark } from '../redux/actions/bookmarkAction';
import { useState } from 'react';

export default function JobCard({ job, choosenJob }) {

    const dispatch = useDispatch()
    const [optimistic, setOptimistic] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(job.bookmark); 

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    const truncatedDescription = truncateDescription(job.description, 200);
    const sanitizedMarkup = DOMPurify.sanitize(truncatedDescription);

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


    return (
        <div className="mb-2" onClick={() => choosenJob(job)}>
            <div className="w-full border-[2px] border-gray-100 rounded-md max-h-[400px] lg:max-h-[600px] hover:border-darkerBlue py-3 px-[30px] flex relative flex-col hover:border-[3px] cursor-pointer">
                {job.author?.additional_info.company_logo !== null ?
                    <img src={`http://api.jobquest.test/api/storage/app/company_logo/${job.user_id}/${job.author?.additional_info.company_logo}`} alt="" className="h-[50px] w-[50px]" /> : ''
                }
                <div className={`absolute top-[2px] right-[10px] cursor-pointer hover:bg-slate-200/60 rounded-full p-2 z-[9999999]`}  onClick={() => toggleBookmark(job.id)}>
                {optimistic || isBookmarked ? (
                        <BookmarkIcon sx={{ fontSize: 25 }} className="text-gray-600"/>
                    ) : (
                        <BookmarkBorderOutlinedIcon sx={{ fontSize: 25 }} className="text-gray-600" />
                    )}
                </div>
                <h1 className="my-4 font-medium text-lg">{job.title}</h1>
                <div>
                    <p className="text-gray-700 text-md flex items-center mb-2">
                        <LocationOnOutlinedIcon />
                        {job.location}
                    </p>
                    <p className="text-gray-700 text-md mb-2">
                        <WorkOutlineOutlinedIcon />
                        {job.position}</p>
                </div>

                <div className="my-2">
                    <div className='prose prose-sm h-[100px] overflow-hidden'
                        dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}
                    />
                </div>
                <span className="text-md text-gray-600">1d ago</span>
            </div>
        </div>
    )
}
