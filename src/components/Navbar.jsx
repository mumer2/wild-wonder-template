import React from 'react'
import '../styles/Navbar.css';
import logo from '../images/Logo.png';
import font1 from '../images/Font1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <div>
        <div className='cover-image'>
            <div className=" h-[102px] text-[20px] w-full px-[30px] py-[30px]">
            <nav className="flex justify-between items-center">
        {/* Left Links */}
        <ul className="flex items-center space-x-8 text-white font-bold uppercase">
          <li className="group relative gap-3">
            <a href="/" className='text-[23px]  font-600 '>
            Shop <FontAwesomeIcon icon={faAngleUp} className="text-white ml-2 " />
            </a>
            <div className="absolute left-0 hidden group-hover:block bg-[#C2EAF3] w-full h-[433px] p-2 shadow-lg">
              <a href="/" className="block px-4 py-2">Option 1</a>
              <a href="/" className="block px-4 py-2">Option 2</a>
            </div>
          </li>
          <li>
            <a href="/" className="ml-[140px] mx-20 text-[24px] font-600">
              Bundles
            </a>
          </li>
        </ul>

        {/* Logo */}
        <div className="text-white font-extrabold text-2xl text-[30px] font-600">
          {/* wildwonder® */}
          <img src={logo} alt="wildwonder" className="w-[240px] h-[30px]" />
        </div>

        {/* Right Links */}
        <ul className="flex items-center space-x-8 text-white font-bold uppercase">
        <li className="group relative">
            <a href="/" className='text-[24px] font-600'>
            Learn <FontAwesomeIcon icon={faAngleUp} className="text-white ml-2 " />
            </a>
            <div className="absolute left-0 hidden group-hover:block mt-2 bg-[#C2EAF3] w-full p-2 shadow-lg">
              <a href="/" className="block px-4 py-2">Option 1</a>
              <a href="/" className="block px-4 py-2">Option 2</a>
            </div>
          </li>
          <li>
            <a href="/" className='text-[23px] font-600'>
              Find Wildwonder
            </a>
          </li>
          <li className="flex items-center space-x-4 text-[23px] font-600">
            {/* Icons */}
            <FontAwesomeIcon icon={faUser} className="text-white" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
          </li>
        </ul>
      </nav>

      <div className=' mt-[36px]'>
<img src={font1} alt="wildwonder" className="w-[380px] h-[166px] block" />
<h1 className='line mt-3 text-[25px] font-[500] w-[380px] text-white text-center'>Reset your gut, refresh your vibe,
recharge your year</h1>
<button className='bg-[#FF0AB9] text-white font-[500] text-[20px] rounded w-[303px] h-[56px] uppercase m-6'>Shop Now</button>
</div>



        </div>
            </div>
        
    </div>
  )
}
