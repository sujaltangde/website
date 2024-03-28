import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col gap-12 md:gap-24  md:px-24 px-4 pt-28 '>

      <div className='flex flex-col items-start'>
        <p className=' flex font-extrabold items-center gap-4 md:gap-8 font-mona-sans-bold text-5xl md:text-9xl'><span className='text-white '>Cloud</span><span className='gradient-text '>Native</span></p>

        <p className=' md:pl-3 pl-1 text-xl md:text-3xl mt-2 md:mt-5 font-mona-sans-bold gradient-text'>NAGPUR</p>
      </div>

      <div className='flex justify-center items-center'>
      <button className='text-white md:text-lg  text-base border-2 border-blue-500 rounded-3xl btn-bg2 py-0.5 font-mona-sans-semibold px-6 md:px-7'>Join Us</button>
      </div>

    </div>
  )
}
