import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { handleLogout } from "../../../redux/actions/userAction";
export default function MenuDropDown() {

    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users)
    const navigate = useNavigate()


    const logout = async (e) => {
        e.preventDefault()
        const response = await dispatch(handleLogout())

        if (response.meta.requestStatus === 'fulfilled') {
            navigate('/login')
        }

        return
    }

    return (
        <div className="flex flex-col p-2">
            <Link to={'/profile'} className="flex items-center py-2 shadow-lg px-4 border border-gray-200 rounded-md hover:bg-slate-100">
                <img src="" alt="pic" className={`h-[50px] w-[50px] rounded-full border mr-2`} />
                <span className="text-sm truncate">
                    {users?.firstname === null ? <div className="text-red-600">Update Profile</div> : <div className="text-gray-600">{`${users?.firstname} ${users?.lastname}`}</div>}
                </span>
            </Link>

            <div className="my-4">
                <Link to={'/jobfinder'} className="flex items-center hover:bg-slate-100 rounded-md py-2 px-1">
                    <HomeOutlinedIcon sx={{ fontSize: 22 }} />
                    <span className="text-sm text-gray-600 mt-1 ml-2">Home</span>
                </Link>
                <Link to={'/resume'} className="flex items-center hover:bg-slate-100 rounded-md py-2 px-1">
                    <ContentPasteSearchIcon sx={{ fontSize: 22 }} />
                    <span className="text-sm text-gray-600 mt-1 ml-2">Resume</span>
                </Link>
                <Link to={'/saved'} className="flex items-center hover:bg-slate-100 rounded-md py-2 px-1">
                    <BookmarkBorderOutlinedIcon sx={{ fontSize: 22 }} />
                    <span className="text-sm text-gray-600 mt-1 ml-2">Saved</span>
                </Link>
                <form onSubmit={logout} >
                    <button className="flex items-center py-2 px-1 hover:bg-slate-100 rounded-sm cursor-pointer w-full">
                        <LogoutIcon sx={{ fontSize: 22 }} />
                        <span className="text-sm text-gray-600 mt-1 ml-2">Logout</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
