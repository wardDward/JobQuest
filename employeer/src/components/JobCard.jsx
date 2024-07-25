import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify';
import { timeAgo } from '../utils/dateHelper';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export default function JobCard({ job }) {

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    const truncatedDescription = truncateDescription(job.description, 200);
    const sanitizedMarkup = DOMPurify.sanitize(truncatedDescription);

    return (
        <Link to={{
            pathname: `/job/${job.id}`,
        }} className="mb-2">
            <div className="w-full border-[2px] border-gray-500 rounded-md max-h-[400px] lg:max-h-[600px] hover:border-darkerBlue py-3 px-[30px] flex relative flex-col hover:border-[3px] mb-3">
                <img src={`http://api.jobquest.test/api/storage/app/company_logo/${job.user_id}/${job.author?.additional_info.company_logo}`} alt="logo" className={`h-[50px] w-[50px] ${job.author.additional_info.company_logo === null ? 'hidden' : 'block'}`} />
                <div>
                </div>
                <h1 className="my-4 font-medium text-lg">{job.author.additional_info.company_name}</h1>
                <div className='flex flex-col justify-start'>
                    <div className="text-md mb-2 flex items-center">
                        <LocationOnOutlinedIcon className='text-gray-700' sx={{fontSize: 23}}/>
                        <span className="text-gray-700 text-sm">{job.author.additional_info.location}</span>
                    </div>
                    <div className="text-md mb-2 flex items-center">
                        <WorkOutlineOutlinedIcon className="text-gray-700" sx={{ fontSize: 23 }} />
                        <span className='mt-1 text-sm ml-1 text-gray-700'>Developes/Programmers (Information Technology & communication)</span>
                    </div>
                    <div className="text-md mb-2 flex items-center">
                        <AccessTimeOutlinedIcon className="text-gray-700" sx={{ fontSize: 23 }} />
                        <span className='mt-1 text-sm ml-1 text-gray-700'>{job.employement}</span>
                    </div>
                </div>
                <div className='mt-1 flex items-center'>
                    <p className="text-gray-700 text-sm">From: ₱
                        <span>{job.starting_salary}</span></p>
                    <span className='text-gray-700 font-bold mx-3'>
                        -
                    </span>
                    <p className="text-gray-700 text-sm">To: ₱
                        <span>{job.starting_salary}</span></p>
                </div>
                <hr/>
                <div className='prose prose-sm h-[100px] overflow-hidden'
                    dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}
                />

                <span className="text-md text-gray-600">{timeAgo(job.created_at)}</span>
            </div>
        </Link>
    )
}
