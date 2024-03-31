import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";


// Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at. Their community is second-to-none, speed of feature release is exceptional, and the support in their Discord is incredible.


export const TwitterDiv = (props) => {
    return (
        <>
            <div className='tBox  md:min-h-60 p-7 '>

                <div className='flex items-center  gap-2'>
                    <img src="./assets/profile.svg" className='w-10' alt="" />
                    <div className='text-white text-sm font-mona-sans-medium'>
                        <p>{props.name}</p>
                        <p>@{props.username}</p>
                    </div>
                </div>

                <div className='text-white'>
                    <p className='font-mona-sans-regular text-gray-400 text-center text-sm px-2 py-3'>
                        {props.desc}
                    </p>
                </div>

                <div className='borderGrad w-1/2 mx-auto my-3'></div>

                <div className='flex justify-center items-center pt-3'>
                    <FaXTwitter size={24} className='text-gray-300 ' />
                </div>

            </div>

        </>
    )
}

export const LinkedinDiv = (props) => {
    return (
        <>
            <div className='tBox md:w-5/6 w-4/4 min-h-24 p-6 '>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center  gap-2'>
                        <img src="./assets/profile.svg" className='w-10' alt="" />
                        <div className='text-white text-sm font-mona-sans-medium'>
                            <p>{props.name}</p>
                            <p>@{props.username}</p>
                        </div>
                    </div>

                    <div>
                        <IoLogoLinkedin size={28} className='text-gray-300 ' />
                    </div>
                </div>

                <div className='text-white'>
                    <p className='font-mona-sans-regular md:pr-7 text-gray-400 text-left text-sm px-2 pt-3'>{props.desc}</p>
                </div>



            </div>

        </>
    )
}


const Testimonials = React.memo(() => {
    return (
        <main>

            <div className='flex justify-center items-center flex-col my-14  sm:px-12 md:px-44'>
                <div>
                    <p className='headingT'>Testimonials</p>
                </div>



                <div className='hidden md:flex flex-col gap-5 justify-center items-center '>
                    <div className='grid grid-cols-4 mt-8 place-items-center   '>


                        <TwitterDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at. Their community is second-to-none, speed of feature release is exceptional, and the support in their Discord is incredible."} />

                        <div className=' flex flex-col justify-center items-center col-span-2 l gap-10 min-h-60 p-8 '>


                            <LinkedinDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at."} />
                            <LinkedinDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at."} />



                        </div>


                        <TwitterDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at. Their community is second-to-none, speed of feature release is exceptional, and the support in their Discord is incredible."} />


                    </div>

                    <div className='grid grid-cols-2  place-items-center'>

                       
                    <LinkedinDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at."} />

                       
                    <LinkedinDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at."} />
                    </div>
                </div>

                <div className='flex flex-col gap-5 mx-5 mt-12 md:hidden'>
                    <TwitterDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at. Their community is second-to-none, speed of feature release is exceptional, and the support in their Discord is incredible."} />

                    <LinkedinDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at."} />
                    <TwitterDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at. Their community is second-to-none, speed of feature release is exceptional, and the support in their Discord is incredible."} />

                    <LinkedinDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at."} />
                    <TwitterDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at. Their community is second-to-none, speed of feature release is exceptional, and the support in their Discord is incredible."} />

                    <LinkedinDiv name={"Nilay Jain"} username={"nilayjain"} desc={"Been a huge supporter of CNCF for over a year, championing it even at the companies I was working at."} />

                </div>




            </div>

        </main>
    );
});

export default Testimonials;
