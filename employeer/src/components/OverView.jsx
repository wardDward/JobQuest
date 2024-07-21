import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
export default function OverView() {
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl text-gray-600 font-bold">Overview</h1>
        <div className="flex my-2 gap-4 px-10 lg:px-[100px] flex-wrap justify-center">
          <div className="w-full md:w-[47%] flex flex-col flex-wrap justify-center items-center">
            <div className="flex justify-between items-center w-full my-3 p-7 bg-white border rounded-md shadow-md">
              <div className="flex flex-col items-center justify-center flex-1">
                <p className="text-md font-bold text-gray-600 text-center">{"Resume's"} Pending</p>
                <p className="text-5xl mt-1 font-bold text-gray-600">45</p>
              </div>
              <ArticleIcon sx={{
                fontSize: 65
              }} className='text-currentDarker' />
            </div>
            <div className="flex justify-between items-center w-full my-3 p-7 bg-white border rounded-md shadow-md">
              <div className="flex flex-col items-center justify-center flex-1">
                <p className="text-md font-bold text-gray-600 text-center">Currently Job Posted</p>
                <p className="text-5xl mt-1 font-bold text-gray-600">45</p>
              </div>
              <WorkIcon sx={{
                fontSize: 65
              }} className='text-lime-500 ' />
            </div>
          </div>
          <div className="w-full md:w-[47%] bg-white border shadow-md rounded-lg ">
            <p className='text-gray-700 text-md font-bold tracking-wide p-4 border-b-[3px] border-gray-300'>
              {"Employees"} Resume
            </p>
            <div className='h-[300px] overflow-y-scroll flex flex-col'>
              <div className='py-2 px-4 border-b-[1px] border-gray-300 bg-white flex items-center justify-between cursor-pointer hover:bg-gray-200 w-full'>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[40px] w-[40px] rounded-full border border-gray-500' alt="" />
                  <div className='flex flex-col ml-2'>
                    <span className='text-xs lg:text-sm text-gray-600 font-semibold'>edward taligatos</span>
                    <span className='text-gray-400 text-xs'>Web developer</span>
                  </div>
                </div>
                <p className='text-xs lg:text-md text-amber-600'>
                  Pending
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>

    </>

  )
}
