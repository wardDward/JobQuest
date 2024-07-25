import { Link } from "react-router-dom";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function DropDownMenu() {
    return (
        <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
            <Link className="py-3 px-5 flex justify-between items-center shadow-lg m-2 rounded-md hover:bg-slate-100">
                <img src="../../assets/logo.png" className="h-[40px] w-[40px] rounded-full" alt="" />
                <span className="truncate m-2 text-sm font-semibold">Edward Taligatos</span>
            </Link>
            <div className="flex flex-col lg:hidden">
                <Link to={'/'} className="text-sm text-gray-600 flex items-center py-2 px-4 my-2 hover:bg-slate-200 rounded-md">
                    <GridViewOutlinedIcon />
                    <span className="text-md tracking-wide ml-2 mt-1">Dashboard</span>
                </Link>
                <Link to={'/queue'} className="text-sm text-gray-600 flex items-center py-2 px-4 my-2 hover:bg-slate-200 rounded-md">
                    <WorkOutlineOutlinedIcon />
                    <span className="text-md tracking-wide ml-2 mt-1">JobQueue</span>
                </Link>
                <Link to={'/resumes'} className="text-sm text-gray-600 flex items-center py-2 px-4 my-2 hover:bg-slate-200 rounded-md">
                    <ArticleOutlinedIcon />
                    <span className="text-md tracking-wide ml-2 mt-1">Resumes</span>
                </Link>
                <Link to={'/create_job_post'} className="text-sm text-gray-600 flex items-center py-2 px-4 my-2 hover:bg-slate-200 rounded-md">
                    <AddBoxOutlinedIcon />
                    <span className="text-md tracking-wide ml-2 mt-1">Create Job Post</span>
                </Link>
            </div>
            <div className="mt-4 px-4">
                <form action="">
                    <button type="submit" className="text-gray-500 font-semibold tracking-wider hover:bg-slate-100 w-full text-start text-xs py-2 px-5">Log out</button>
                </form>
            </div>
        </div>
    )
}
