import { Outlet } from "react-router-dom";
import Logo from '../../assets/logo.png'

export default function AuthLayout({ children }) {
    return (
        <>
            <div className="flex items-center px-[20px] py-[15px] fixed top-0 left-0 right-0 bg-magenta-100">
                <img src={Logo} alt="Quest" className="h-[50px] w-[50px]" />
                <span className="ml-2 text-md font-semibold tracking-wide text-white">EmployerQuest</span>
            </div>
            <div className="h-screen w-full flex justify-center items-center">
                <Outlet />
            </div>
        </>
    )
}
