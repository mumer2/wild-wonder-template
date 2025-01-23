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
        <div className=" h-[102px] text-[20px]  w-full px-[30px] py-[30px]">
          <nav className="flex justify-between items-center">
            {/* Left Links */}
            <ul className="flex items-center space-x-8 text-white font-bold uppercase">
              <li className="group relative gap-3">
                <a href="/" className='text-[23px]  font-600 '>
                  Shop <FontAwesomeIcon icon={faAngleUp} className="text-white ml-2 " />
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-[#C2EAF3] w-full h-[385px] top-11 p-2 shadow-lg">
                  <a href="/" className="block px-4 py-2">Option 1</a>
                  <a href="/" className="block px-4 py-2">Option 2</a>
                </div>
              </li>
              <li>
                <a href="/" className="ml-[120px] mx-16 text-[24px] font-600">
                  Bundles
                </a>
              </li>
            </ul>

            {/* Logo */}
            <div className="text-white mx-10 font-extrabold text-2xl text-[30px] font-600">
              {/* wildwonder® */}
              <img src={logo} alt="wildwonder" className="w-[240px] h-[30px]" />
            </div>

            {/* Right Links */}
            <ul className="flex items-center space-x-8 text-white font-bold uppercase">
              <li className="group relative">
                <a href="/" className='text-[24px] font-600'>
                  Learn <FontAwesomeIcon icon={faAngleUp} className="text-white ml-2 " />
                </a>
                <div className="absolute left-0 hidden group-hover:block h-[385px] top-11 bg-[#C2EAF3] w-full p-2 shadow-lg">
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

          <div className=' mt-[40px]'>
            <img src={font1} alt="wildwonder" className="w-[380px] h-[166px] block" />
            <h1 className='line mt-3 text-[25px] font-[500] w-[380px] text-white text-center'>Reset your gut, refresh your vibe,
              recharge your year</h1>
            <button className='bg-[#FF0AB9] text-white font-[500] text-[20px] rounded w-[303px] h-[56px] uppercase m-6'>Shop Now</button>
          </div>



        </div>
      </div>


      <marquee width="100%" direction="left" height="70px" className="bg-[#C2EAF3]">
        <div className='flex gap-10 items-center space-x-4 uppercase'>
          <span className='flex items-center gap-2 space-x-4'>
        <img src="//drinkwildwonder.com/cdn/shop/files/Artwork_30_100x.png?v=1659158550" alt="" />
        <h1>Vegan</h1>
          </span>
          <span className='flex items-center space-x-4'>
        <img src="//drinkwildwonder.com/cdn/shop/files/Component_1_1_468d54f2-2b04-4479-89e7-25b9f6c9b700_100x.png?v=1659158550" alt="" />
        <h1>40 Caloroies per can</h1>
          </span>
          <span className='flex items-center space-x-4'>
        <img src="//drinkwildwonder.com/cdn/shop/files/Component_2_1_100x.png?v=1659158551" alt="" />
        <h1>WOMAN-OWNED</h1>
          </span>
          <span className='flex items-center space-x-4'>
        <img src="////drinkwildwonder.com/cdn/shop/files/Artwork_23_100x.png?v=1659158550.com/cdn/shop/files/Artwork_30_100x.png?v=1659158550" alt="" />
        <h1>USDA ORGANIC</h1>
          </span>
          <span className='flex items-center space-x-4'>
        <img src="////drinkwildwonder.com/cdn/shop/files/Component_3_1_100x.png?v=1659158550.com/cdn/shop/files/Artwork_30_100x.png?v=1659158550" alt="" />
        <h1>6g SUGAR PER CAN</h1>
          </span>

        </div>
      </marquee>
    </div>
  )
}
