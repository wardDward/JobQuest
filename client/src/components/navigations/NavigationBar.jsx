import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useRef, useState } from "react";
import MenuDropDown from "./dropdown/MenuDropDown";


export default function NavigationBar() {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef(null)
  const { users } = useSelector(state => state.users)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu()
    }
  }

  useEffect(() => {
    if (menu) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menu])


  return (
    <>
      <div className="h-[60px] bg-white border-b-[1px] py-[10px] px-[40px] flex items-center justify-between z-[99999999] fixed top-0 inset-x-0">
        <div>
          <img src={Logo} alt="jobquest" className="h-[50px] w-[50px]" />
        </div>

        {/* show this is not authenticated */}
        <div className="flex items-center">
          <Link to={'/login'} className={`${users ? 'hidden' : 'block'} border-[2px] border-current txet-current px-3 py-1 rounded-md text-current hover:text-white hover:bg-current cursor-pointer`}>
            Sign In
          </Link>
          <div className="ml-4 text-sm text-current hover:underline font-semibold cursor-pointer">
            {users === null ? '' : <div onClick={toggleMenu} className="p-1 hover:bg-slate-100 rounded-full"> <KeyboardArrowDownIcon /> </div>}
          </div>
        </div>
        {menu && (
          <div ref={menuRef} className='absolute top-full right-2 w-[30%] xl:w-[15%] py-4 px-[10px] z-[99999999] bg-white shadow-lg '>
            <MenuDropDown closeMenu={closeMenu} />
          </div>
        )}
      </div>
    </>

  );
}
