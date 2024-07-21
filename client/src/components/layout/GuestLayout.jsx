import { Outlet } from "react-router-dom";
import NavigationBar from "../navigations/NavigationBar";

export default function GuestLayout() {
  return (
    <>
    <NavigationBar/>
    <div>
        <Outlet/>
    </div>
    </>
  )
}
