import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify';
import { timeAgo } from '../utils/dateHelper';

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
        <Link href="#" className="mb-2">
            <div className="w-full border-[2px] border-gray-500 rounded-md max-h-[400px] lg:max-h-[600px] hover:border-darkerBlue py-3 px-[30px] flex relative flex-col hover:border-[3px] mb-3">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/150px-Shell_logo.svg.png" alt="" className={`h-[50px] w-[50px] ${job.author.additional_info.company_logo === null ? 'hidden' : 'block'}`} />
                <div>
                </div>
                <h1 className="my-4 font-medium text-lg">{job.author.additional_info.company_name}</h1>
                <div>
                    <p className="text-gray-700 text-md">{job.author.additional_info.location}</p>
                    <p className="text-gray-700 text-md">Developes/Programmers (Information Technology & communication)</p>
                </div>
                <div className='my-2 flex items-center'>
                    <p className="text-gray-700 text-md">From: ₱
                        <span className='font-semibold'>{job.starting_salary}</span></p>
                    <span className='text-gray-700 font-bold mx-3'>
                        -
                    </span>
                    <p className="text-gray-700 text-md">To: ₱
                        <span className='font-semibold'>{job.starting_salary}</span></p>
                </div>
                <div className='my-2'
                    dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}
                />

                <span className="text-md text-gray-600">{timeAgo(job.created_at)}</span>
            </div>
        </Link>
    )
}
