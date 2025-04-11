import React from 'react'
import png from "../assets/Png.png"

function Header() {
  return (
    <div className='md:flex  '>

      <div className='p-3 relative md:top-[2rem] mx-0'>
        <div className='space-y-2 '>
          <p className='text-[#8e8e8e] text-[12px] font-sans-Bold  '>Rate <strong className='text-[#FFFFFF]'>5.0</strong> on Shopify </p>
          <h1 className='text-white leading-[3.2rem] font-sans w-full md:w-3/2 md:text-[60px] md:leading-[4rem] font-[500] text-[45px]'>Meet the <span className=' underline decoration-wavy decoration-[#f8fdaf]'> Super-fast</span>  E-commence Video <span className= 'text-gray-300 '>Platform</span></h1>
          <small className='text-[#858585]  font-sans-Bold relative top-2 text-[12px]'>Packed with lightning-fast Shoppable videos, Interactive cideo quizzes, Live-stream shopping & more - All 3x faster than YouTube</small>
        </div>
        

        <div className=' mt-9 flex gap-[10px]'>
          <button className='w-[150px] md:w-[200px] text-[12px] font-[700] font-sans-Bold h-[40px] bg-[#ffda62] rounded-[20px]'>Get Started-For Free!</button>
          <button className='w-[150px] h-[40px] text-[12px] bg-transparent font-sans-Bold font-[800] text-[#fefefe] border-[1px] border-solid  rounded-[20px]'>Book A Demo</button>
        </div>

      </div>
      <div className='justify-items-center relative md:top-[2rem] md:1/2  mt-2 '>
        <img src={png}  className='md:w-[700px]  md:h-[40vh] ' ></img>
      </div>
      

      
    </div>
  )
}

export default Header