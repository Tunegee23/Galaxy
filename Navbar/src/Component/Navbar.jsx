

import React, { useState } from 'react';
 
import menu from "../assets/menu.png";
import arrow from "../assets/arrowdown.png"
import Header from './Header';

const Navbar = () => {
  const navList = [
    { 
      href: '#', 
      label: 'Home', 
    },

    { href: '#', 
    label: 'Product',
    subitems: [ 
      { href: '#', label: 'Watson' }, 
      { href: '#', label: 'MY MY' } 
    ],
  
  },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!DropdownOpen)
  };


  return (
    <div className='bg-[#9b2204]  flex justify-center  items-center min-h-screen h-screen p-5 justify-items-center '>
      <nav className="bg-black  p-12 container  md:h-[90vh] rounded-[10px] relative top-3 ">
        <div className='justify-evenly  items-center  flex'>
          <div className="container mx-auto  flex gap-[3rem]  items-center">
            <h1 className="text-white font-sans text-[20px]"><a href="#">Galaxy</a></h1>
            <ul className="md:flex hidden font-sans-Bold space-x-4 text-[12px]">
              {navList.map((item) => (
                <li key={item.href} className="relative"> 
                  <a href={item.href} className="text-white flex  hover:text-gray-300 px-3 py-2 rounded">
                    {item.label}
                    {/* <button className='ml-[1rem]' onClick={toggleDropdown}></button>
                      {item.subitems && (
                      <ul className='absolute hidden font-sans-Bold text-white mt-4'>
                        {item.subitems.map((subitem) => (
                        <li key={subitem.href} className="p-1 ">
                          <a href={subitem.href} className="hover:bg-gray-700">{subitem.label}</a>
                        </li>
                        ))}
                      </ul>
                    )} */}
                  </a>

                </li>
              ))}
            </ul>
          </div>
          <div className=' md:flex hidden font-sans-Bold justify-items-center items-center '>
            <p className='text-white w-full text-[12px] '>Book A Demo</p>
            <button className=' w-[180px] h-[40px] bg-white font-[700] text-[12px] rounded-[20px] text-center'>Get Started</button>           
          </div>

          <div className=' md:hidden justify-items-center items-center '>
            <button 
              className="text-white px-3  py-2 rounded flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img 
                src={menu} 
                className={`h-5 w-5 ml-1 transition-transform  duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} 
                alt="" 
              />
            </button>
          </div>
        </div>
        
        <div 
          className={`relative top-0 md:hidden left-0 w-full  shadow-[#9b2204] rounded-[10px] h-[30vh] shadow-lg bg-[#000] z-50 ${isMenuOpen ? 'block' : 'hidden'} 
          transition-opacity duration-300`}>
            {navList.map((item) => (
              <li key={item.href} className='relative cursor-pointer  list-none p-2 space-y-[4rem] text-center '> 
              <a href={item.href} className="text-white   hover:text-gray-300 rounded">
                {item.label}
              </a>
              </li>
            ))}
    
        </div>

        <>
        <Header/>
        
        </>

      </nav>
    </div>
  );
};

export default Navbar;





  