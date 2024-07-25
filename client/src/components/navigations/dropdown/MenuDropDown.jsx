import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import LogoutIcon from '@mui/icons-material/Logout';

export default function MenuDropDown() {
    const { users } = useSelector(state => state.users)
    return (
        <div className="flex flex-col p-2">
            <Link to={'/profile'} className="flex items-center py-2 shadow-lg px-4 border border-gray-200 rounded-md hover:bg-slate-100">
                <img src="" alt="pic" className={`h-[50px] w-[50px] rounded-full border mr-2`} />
                <span className="text-sm truncate">
                    {users?.firstname === null ? <div className="text-red-600">Update Profile</div> : <div className="text-gray-600">{`${users?.firstname} ${users?.lastname}`}</div>}
                </span>
            </Link>

            <div className="my-4">
                <Link to={'/resume'} className="flex items-center hover:bg-slate-100 rounded-md py-2 px-1">
                    <ContentPasteSearchIcon sx={{ fontSize: 22 }} />
                    <span className="text-sm text-gray-600 mt-1 ml-2">Resume</span>
                </Link>
                <div className="flex items-center py-2 px-1 hover:bg-slate-100 rounded-sm cursor-pointer">
                    <LogoutIcon sx={{ fontSize: 22 }} />
                    <span className="text-sm text-gray-600 mt-1 ml-2">Logout</span>
                </div>
            </div>
        </div>
    )
}
