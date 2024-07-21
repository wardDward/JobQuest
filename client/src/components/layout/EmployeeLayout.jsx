import { Outlet } from "react-router-dom";
import NavigationBar from "../navigations/NavigationBar";
import useAuth from '../../hooks/useAuth'

export default function EmployeeLayout() {
    const {} = useAuth()
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}
