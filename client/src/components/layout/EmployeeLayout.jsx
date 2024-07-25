import { Outlet } from "react-router-dom";
import NavigationBar from "../navigations/NavigationBar";
import useAuth from '../../hooks/useAuth'

export default function EmployeeLayout() {
    const { } = useAuth()
    return (
        <>
            <NavigationBar />
            <div className="mt-[60px]">
                <Outlet />
            </div>
        </>
    )
}
