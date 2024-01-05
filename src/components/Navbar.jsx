import React, {useState} from 'react'
import { GrFavorite } from "react-icons/gr";
import { IoMenuOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <div className='border relative'>
        <div className='flex justify-between px-5 lg:justify-around items-center'>
          <div>
            <img src={require('../assets/logo.png')} className='h-[50px]' alt="logo" />
          </div>
          <div className='lg:flex items-center hidden'>
            <p className='pe-10 hover:text-blue-600 cursor-pointer text-sm'>Features</p>
            <p className='pe-10 hover:text-blue-600 cursor-pointer text-sm'>Download</p>
            <p className='pe-10 hover:text-blue-600 cursor-pointer text-sm'>Support</p>
            <p className='pe-10 hover:text-blue-600 cursor-pointer text-sm'>Get Involved</p>
            <p className='pe-10 hover:text-blue-600 cursor-pointer text-sm'>About</p>
            <p className='pe-10 hover:text-blue-600 cursor-pointer text-sm'>Job</p>
            <p className='pe-10 hover:text-blue-600 cursor-pointer text-sm'>Store</p>
            <div className='flex items-center justify-center border px-2 py-1 bg-blue-500 rounded hover:bg-blue-400'>
              <GrFavorite className='me-2 text-xs text-white'/>
              <p className='cursor-pointer text-white text-sm'>Donate</p>
            </div>
          </div>
          <div className='block lg:hidden'>
              {isToggled === false ? <IoMenuOutline className='text-gray-800 text-2xl' onClick={() => setIsToggled(!isToggled)} /> : <MdClose className='text-gray-800 text-2xl' onClick={() => setIsToggled(!isToggled)}/>}
              
              
          </div>
        </div>
      </div>

      {/* Dropdown Links */}
      <div className={`${isToggled === true ? 'border z-10 translate-x-0 duration-300  w-[100%] absolute bg-white transition-transform ease-in-out transform shadow-sm' :
       'border z-10 translate-x-[-1800px] duration-300 opacity-100 w-[100%] absolute bg-white transition-transform ease-in-out transform shadow-sm'}`}>
          <div className='px-3'>
            <p className='py-3 border-b cursor-pointer'>Download</p>
            <p className='py-3 border-b cursor-pointer'>Support</p>
            <p className='py-3 border-b cursor-pointer'>Get Involved</p>
            <p className='py-3 border-b cursor-pointer'>About</p>
            <p className='py-3 border-b cursor-pointer'>Jobs</p>
            <p className='py-3 border-b cursor-pointer'>Store</p>
            <div className='flex items-center justify-start px-2 py-3 cursor-pointer'>
              <GrFavorite className='me-2 text-xs'/>
              <p>Donate</p>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Navbar