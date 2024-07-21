import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../navigations/NavigationBar";
import SIdebar from "../navigations/SIdebar";
import useAuth from '../../hooks/useAuth'
import { useState } from "react";
export default function MainLayout() {
    const location = useLocation()
    const {} = useAuth()

  
    
    return (
        <>
            <NavigationBar />
            <main className="mt-[72px] flex">
                <SIdebar />
                <div className={`w-full ml-0  lg:ml-[15%] ${location.pathname === '/' || location.pathname === '/resumes' ? 'mt-[0px]' : 'mt-[20px] '} lg:mt-[0]`}>
                    <Outlet/>
                </div>
            </main>
        </>
    )
}
