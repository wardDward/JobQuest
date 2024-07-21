import StarIcon from '@mui/icons-material/Star';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';


export default function JobDetails() {
    return (
        <>
            <div className="flex flex-col border w-full max-h-[1000px] px-[40px] py-[30px]">
                <div className="flex flex-col">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/150px-Shell_logo.svg.png" alt="" className="h-[50px] w-[50px]" />
                    <h1 className="my-2 text-2xl text-gray-800 font-semibold tracking-wider">Ad Operations OperationsOperations OperationsOperationsOperations Coordinator (Work from home)</h1>
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
                            <span className='text-md text-gray-600 ml-2'>Metro Manila</span>
                        </p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex items-center'>
                            <ClassOutlinedIcon className="text-gray-700" />
                            <span className='text-md text-gray-600 ml-2'>Developers/Programmers (Information & Communication Technology)</span>
                        </p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex items-center'>
                            <AccessTimeOutlinedIcon className="text-gray-700" />
                            <span className='text-md text-gray-600 ml-2'>Full time</span>
                        </p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex items-center'>
                            <LocalAtmOutlinedIcon className="text-gray-700" />
                            <span className='text-md text-gray-600 ml-2'>Add expected salary to your profile for insights</span>
                        </p>
                    </div>
                    <p className='text-gray-600 text-sm mt-5'>Posted 1d ago</p>
                    <div className='my-5 flex items-center'>
                        <button className='text-white bg-magenta-100 hover:bg-magenta-200 py-2 px-7 rounded-lg tracking-wider mr-3 flex items-center justify-center'>
                            <span className="text-md font-semibold">Apply</span>
                            <IosShareOutlinedIcon sx={{ fontSize: 20 }} />
                        </button>
                        <button className='text-darkerBlue bg-slate-300 hover:bg-slate-40   0 text-md font-semibold  py-2 px-7 rounded-lg tracking-wider'>Save</button>
                    </div>
                    <p className='my-5 text-md text-gray-800'>
                        Are you ready to kick-start your career in digital advertising? Do you thrive in a fast-paced, dynamic environment? Join our team as an Ad Operations Coordinator and play a key role in delivering high-quality digital ad campaigns from the comfort of your home!
                    </p>
                    <div className="flex flex-col">
                        <h1 className='text-md font-bold text-gray-800 mb-3'>Responsibilities:</h1>
                        <div className='flex flex-col'>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col my-6">
                        <h1 className='text-md font-bold text-gray-800 mb-3'>Responsibilities:</h1>
                        <div className='flex flex-col'>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                            <p className='text-gray-800'>• Ensure all newsletter ads and native banners are added correctly to the newsletter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
