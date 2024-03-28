import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";




export const Navbar = () => {


  const [toggle, setToggle] = useState(false)

  return (
    <>

        <div className='navBg fixed w-full flex  justify-around md:justify-evenly rounded-b-xl py-2  md:py-4 items-center'>

                <div>
                    <img src="/assets/navLogo.svg" className=' w-36 md:w-40' alt="" />
                   
                </div>
                <div>
                  <ul className='text-white  hidden md:flex justify-center items-center gap-12 text-base'>
                    <Link className='navLink'>Home</Link>
                    <Link className='navLink'>About Us</Link>
                    <Link className='navLink'>Roadmaps</Link>
                    <Link className='navLink'>Blogs</Link>
                    <Link className='navLink'>Events</Link>
                    <Link className='navLink'>Team</Link>
                    <Link className='navLink'>FAQs</Link>
                  </ul>
                </div>

                <div className='md:ml-0 ml-6'>
                  <button className='text-white text-xs md:text-sm border-2 border-blue-500 rounded-3xl btn-bg py-1 md:py-1.5 px-4 md:px-6'>Join Us</button>
                </div>

                <button onClick={()=>setToggle(!toggle)} className='md:hidden mr-2 text-white flex '>
                 {toggle? <RxCross1 size={24} /> :
                  <HiMiniBars3 size={24} />  
                }
                </button>



        </div>
        
        <div className={`md:hidden ${ toggle? "flex" : "hidden"} `}>

<ul className='text-white fixed mt-12 pb-4 pt-6 flex flex-col w-full  navBg rounded-b-xl text-left px-6  items-start gap-4 text-base'>
    <Link className='navLink'>Home</Link>
    <Link className='navLink'>About Us</Link>
    <Link className='navLink'>Roadmaps</Link>
    <Link className='navLink'>Blogs</Link>
    <Link className='navLink'>Events</Link>
    <Link className='navLink'>Team</Link>
    <Link className='navLink'>FAQs</Link>
  </ul>

</div>
    
    </>
  )
}
