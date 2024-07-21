import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function SIdebar() {
    return (
        <aside className='hidden lg:flex flex-col w-full lg:w-[15%] border-r-[2px] fixed top-[74px] bottom-0  px-[20px]'>
            <Link to={'/'} className="flex justify-center items-center py-[20px]">
                <img src={Logo} alt="" className='h-[50px] w-[50px]' />
            </Link>
            <div className='py-[80px]  flex flex-col'>
                <p className='text-gray-500 text-sm'>Menus</p>
                <div className='my-3 flex flex-col'>
                    <Link to={'/'} className='text-gray-600 flex items-center px-[10px] hover:bg-gray-200 py-2 rounded-md my-1'>
                        <GridViewOutlinedIcon sx={{ fontSize: 25 }} />
                        <p className='ml-2 text-sm'>Dashboard</p>
                    </Link>
                    <Link to={"/queue"} className='text-gray-600 flex items-center px-[10px] hover:bg-gray-200 py-2 rounded-md my-1'>
                        <WorkOutlineOutlinedIcon sx={{ fontSize: 25 }} />
                        <p className='ml-2 text-sm'>Job Queue</p>
                    </Link>
                    <Link to={'/resumes'} className='text-gray-600 flex items-center px-[10px] hover:bg-gray-200 py-2 rounded-md my-1'>
                        <ArticleOutlinedIcon sx={{ fontSize: 25 }} />
                        <p className='ml-2 text-sm'>Resumes</p>
                    </Link>
                    <Link to={'/create_job_post'} className='text-gray-600 flex items-center px-[10px] hover:bg-gray-200 py-2 rounded-md my-1'>
                        <AddBoxOutlinedIcon sx={{ fontSize: 25 }} />
                        <p className='ml-2 text-sm'>Create Job Post</p>
                    </Link>
                </div>
            </div>
        </aside>
    )
}