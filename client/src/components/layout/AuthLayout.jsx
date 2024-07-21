import NavigationBar from "../../components/navigations/NavigationBar";

import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
     <NavigationBar />
      <div className="h-screen flex justify-center items-center bg-slate-50">
        <div className="w-full md:w-[70%] lg:w-[50%] xl:w-[30%] mt-[50px] ">
          <a
            href="#"
            className="flex justify-end mb-1 text-current font-semibold hover:underline"
          >
            Are you an employer?
          </a>
          <div className="w-full bg-white shadow-lg rounded-md h-[85%] p-2 md:p-[50px] flex flex-col mb-10">
            <Outlet/>
          </div>
        </div>
      </div>
    
    </>
  )
}
