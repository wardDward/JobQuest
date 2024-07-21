import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';

export default function NavigationBar() {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className='py-3 px-5 bg-white border-b-[2px] fixed top-0 w-full flex items-center justify-between z-[999999999]'>
      <Link to={'/'} className='flex items-center'>
        <img src={Logo} alt="quest" className='h-[50px] w-[50px] z-40' />
        <span className='text-md text-gray-800 ml-2 font-bold tracking-wider'>EmployeerQuest</span>
      </Link>
      <div onClick={() => toggleMenu()} className='cursor-pointer p-2 rounded-full hover:bg-slate-200'>
        <KeyboardArrowDownIcon />
      </div>
      {menu && <DropDownMenu />}
    </nav>
  )
}
