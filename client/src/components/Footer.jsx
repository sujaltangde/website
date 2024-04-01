import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer-bg pt-12'>
    <div className='bg-gradient-to-b from-blue-500 to bg-green-400 w-11/12 h-0.5 ml-11'></div>



      <div className='flex md:flex-row flex-col footer-bg items-center justify-center md:gap-20 gap-8 py-8'>
        <div className='flex md:w-1/2 flex-col justify-center items-center gap-8'>
          <img src="/assets/footerLogo.svg" className='w-12' alt="" />

          <p className='font-mona-sans-regular text-white text-center md:px-20 px-4'>Cloud Native Nagpur is a community-organized event supported by the Cloud Native Computing Foundation (CNCF) to help grow and sustain the Kubernetes and cloud-native community.</p>
        </div>


        <div className='md:mt-5 mt-2 bg-gradient-to-b from-blue-500 to bg-green-400 md:h-36 md:w-1 h-0.5 w-72'></div>

        <div className='md:w-1/2 flex justify-center items-center flex-col md:pr-44 pr-28'>
            <p className='text-white text-lg font-mona-sans-semibold pr-3'>QUICK LINKS</p>
            <ul className='text-white font-mona-sans-semibold text-sm mt-5 flex flex-col items-start gap-4'>
              <li className='flex gap-2  items-center'><img className='w-5' src="/assets/rightArrow.svg" alt="" />  <span>About CNCF</span></li>
              <li className='flex gap-2  items-center'><img className='w-5' src="/assets/rightArrow.svg" alt="" />  <span>CNCF Nagpur Chapter</span></li>
              <li className='flex  gap-2 items-center'><img className='w-5' src="/assets/rightArrow.svg" alt="" />  <span>Privacy Policy</span></li>
              <li className='flex gap-2  items-center'><img className='w-5' src="/assets/rightArrow.svg" alt="" />  <span>Code of Conduct</span></li>
            </ul>

        </div>
      </div>


      <div className='flex justify-center md:mt-16 mt-12 flex-col items-center'>
          {/* <div className='bg-gradient-to-b from-blue-500 to bg-green-400 w-11/12 h-0.5 '></div> */}

          <div className='text-white my-8'>
            <p className='font-mona-sans-regular text-center text-xs md:text-sm md:px-0 px-4'>
             <span className='gradient-text font-mona-sans-semibold'> Copyright © 2023</span> The Linux Foundation®. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. 
            {" "}<span className='font-mona-sans-semibold underline'> Terms of Use.</span></p>
          </div>

      </div>



    </div>
    </>
  )
}

export default Footer
