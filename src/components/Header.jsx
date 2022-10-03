import React from 'react'
import { useLocation ,useNavigate} from 'react-router'
import logo from '../components/logo.png'
import {FcHome} from "react-icons/fc"
import {MdOutlineLocalOffer}  from 'react-icons/md'

const Header = () => {
    const loction=useLocation();
    const navigte=useNavigate();
    function pathMatchRoute(route) {
        if(route===loction.pathname){
            return true
        }

    }

  return (
    <div className='bg-neutral-200			 border-b shadow-sm sticky top-1'>
   <header className='flex justify-between items-center px-4 max-w-6xl mx-auto'>
   <div>
   <img src={logo} alt='logo' className='h-28 cursor-pointer'
   onClick={() => navigte("/")}
   />
   </div>



   <ul className="flex space-x-10">
   <li
     className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
       pathMatchRoute("/") && "text-black border-b-gray-500"
     }`}
     onClick={() => navigte("/")}

   >
     Home
   </li>
   <li
     className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
       pathMatchRoute("/Offer") && "text-black border-b-red-500"
     }`}
     onClick={() => navigte("/Offer")}

   >
     Offers
   </li>
   <li
     className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
       (pathMatchRoute("/Hold") || pathMatchRoute("/profile")) &&
       "text-black border-b-red-500"
     }`}
     onClick={() => navigte("/Hold")}

   >
   Signin
   </li>
 </ul>
   </header>
   </div>
  )
}

export default Header