import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchJob } from '../redux/actions/jobAction'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import DOMPurify from 'dompurify';

export default function VIewJob() {
  const dispatch = useDispatch()
  const params = useParams()

  const [job, setJob] = useState({})

  const sanitizedMarkup = DOMPurify.sanitize(job.description)

  useEffect(() => {
    const handleFetch = async () => {
      const response = await dispatch(fetchJob(params.id))
      if (response.meta.requestStatus === 'fulfilled') {
        setJob(response.payload)
      }
    }
    handleFetch()
  }, [dispatch, params])
  return (
    <div className='px-[20px] md:px-[100px] lg:px-[500px] py-[50px] flex items-center w-full'>
      <div className='w-full'>
        {job.author?.additional_info.company_logo !== null && (
          <div className='w-full'>
            <img src={`http://api.jobquest.test/api/storage/app/company_logo/${job.user_id}/${job.author?.additional_info.company_logo}`} className='w-[50px] h-[50px]' />
          </div>
        )}
        <div className='my-2'>
          <h1 className='text-lg font-semibold'>{job.title}</h1>
        </div>
        <div className='flex flex-col'>
          <h1 className='mt-3 mb-3 font-bold text-lg tracking-wide text-gray-700'>Company Overview</h1>
          <div className='flex items-center my-2'>
            <LocationOnOutlinedIcon className='text-gray-700' />
            <span className='text-gray-700 ml-2 text-md'>{job.location}</span>
          </div>
          <div className='flex items-center my-2'>
            <WorkOutlineOutlinedIcon className='text-gray-700' />
            <span className='text-gray-700 ml-2 text-md'>{job.position}</span>
          </div>
          <div className='flex items-center my-2'>
            <WorkHistoryOutlinedIcon className='text-gray-700' />
            <span className='text-gray-700 ml-2 text-md'>{job.employement}</span>
          </div>
        </div>
        <div className='my-5 text-md text-gray-800 prose prose-sm ' dangerouslySetInnerHTML={{ __html: sanitizedMarkup }}
        />
        <form action="">
          <button className='text-white bg-magenta-100 hover:bg-magenta-200 py-2 px-7 rounded-lg tracking-wider mr-3 flex items-center justify-center'>
            <span className="text-md font-semibold">Apply</span>
            <IosShareOutlinedIcon sx={{ fontSize: 20 }} />
          </button>      
          </form>
      </div>

    </div>
  )
}
