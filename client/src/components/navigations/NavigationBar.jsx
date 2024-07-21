import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
export default function NavigationBar() {
  const { users } = useSelector(state => state.users)
  return (
    <>
      <div className="h-[60px] bg-white border-b-[1px] py-[10px] px-[40px] flex items-center justify-between z-[99999999]">
        <div>
          <img src={Logo} alt="jobquest" className="h-[50px] w-[50px]" />
        </div>

        {/* show this is not authenticated */}
        <div className="flex items-center">
          <Link to={'/login'} className="border-[2px] border-current txet-current px-3 py-1 rounded-md text-current hover:text-white hover:bg-current cursor-pointer">
            Sign In
          </Link>
          <Link className="ml-4 text-sm text-current hover:underline font-semibold cursor-pointer">

            {users === null ? <div>tetset</div> : <div>  Employer Site</div>}
          </Link>
        </div>
      </div>
    </>

  );
}
