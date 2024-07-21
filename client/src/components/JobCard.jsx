import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function JobCard() {
    return (
        <a href="#" className="mb-2">
            <div className="w-full border-[2px] border-gray-100 rounded-md max-h-[400px] lg:max-h-[600px] hover:border-darkerBlue py-3 px-[30px] flex relative flex-col hover:border-[3px]">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/150px-Shell_logo.svg.png" alt="" className="h-[50px] w-[50px]" />
                <div className="absolute top-[2px] right-[10px] cursor-pointer hover:bg-slate-200/60 rounded-full p-2">
                    <BookmarkBorderOutlinedIcon sx={{ fontSize: 25 }} className="text-gray-600" />
                </div>
                <h1 className="my-4 font-medium text-lg">Shell Inc.</h1>
                <div>
                    <p className="text-gray-700 text-md">Metro Manila</p>
                    <p className="text-gray-700 text-md">Developes/Programmers (Information Technology & communication)</p>
                </div>
                <div className="my-2">
                    <p className="text-gray-700 text-md">• Enjoy the flexibility of working from home.</p>
                    <p className="text-gray-700 text-md">• Launch a digital career with international oppurtinues</p>
                    <p className="text-gray-700 text-md">• Developes/Programmers (Information Technology & communication)</p>
                </div>
                <p className="text-sm text-gray-700 my-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum maiores alias quos quo aut maxime animi dolores aspernatur aperiam.
                </p>
                <span className="text-md text-gray-600">1d ago</span>
            </div>
        </a>
    )
}
