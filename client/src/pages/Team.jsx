import React from 'react'
import { Link } from 'react-router-dom';
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



const TeamArray = [
    {
        name: "Vedant Kakde",
        position: "LEAD",
        image: "assets/vedantKakde.png",
        linkedin: "https://www.linkedin.com/in/vedant-kakde",
        x: "https://twitter.com/vedantstwt"
    },
    {
        name: "Aditya Dahake",
        position: "CONTENT",
        image: "assets/adityaDahake.png",
        linkedin: "https://www.linkedin.com/in/adityadahake24/",
        x: "https://twitter.com/slugtera24"
    },
    {
        name: "Sakshi Hardwani",
        position: "CONTENT CREATION",
        image: "assets/sakshiHardwani.png",
        linkedin: "https://www.linkedin.com/in/sakshi-hardwani/",
        x: "https://twitter.com/SakshiHardwani"
    },
    {
        name: "Harshit Ghagre",
        position: "CONTENT CREATION",
        image: "assets/harshitGhagre.png",
        linkedin: "https://www.linkedin.com/in/harshit-ghagre/",
        x: "https://twitter.com/harshitghagre"
    },
    {
        name: "Harshal Honde",
        position: "WEB DEVELOPER",
        image: "assets/harshalHonde.png",
        linkedin: "https://www.linkedin.com/in/harshalhonde/",
        x: "https://twitter.com/harshal_honde21"
    },
    {
        name: "Sujal Tangde",
        position: "WEB DEVELOPER",
        image: "assets/sujalTangde.png",
        linkedin: "https://www.linkedin.com/in/sujal-tangde",
        x: "https://twitter.com/SujalTangde"
    },
    {
        name: "Rugved Deshmukh",
        position: "GRAPHIC DESIGNER",
        image: "assets/rugvedDeshmukh.png",
        linkedin: "https://www.linkedin.com/in/rugved-deshmukh-0ab239260/",
        x: "https://x.com/Rugved_D_?t=zDOZgi9Q3NdvhVmTdHSNpA&s=09"
    },
    {
        name: "Nilay Jain",
        position: "GRAPHIC DESIGNER",
        image: "assets/nilayJain.png",
        linkedin: "https://www.linkedin.com/in/nilay-jain-779ab9263",
        x: "https://x.com/nilayjain__?t=_gyjNZUTFYsL6Jppa3iZGg&s=35"
    },
]

const Team = () => {
    return (
        <div className='min-h-screen pt-20 text-white'>
            <div className='flex items-center justify-center pt-6'>
                <p className='heading-benefit md:w-2/5 w-full text-3xl'>Team</p>
            </div>
          
            <div className='flex flex-wrap gap-12 mb-32  w-full mt-16 md:px-24 px-4 items-center justify-center'>
                {
                    TeamArray.map((e, i) => (
                       
                       

                        <div key={i} className='w-60 mx-8 '>
                            <div className='  rounded-2xl h-60  relative'>
                                <img src={e.image} alt={e.name} className='w-full  rounded-2xl  h-full object-cover' />
                                <div className='absolute inset-0 teamCardHover opacity-0 hover:opacity-100  rounded-2xl transition-opacity duration-300 flex justify-center items-center'>
                                    <div className='flex items-center gap-4'>
                                        <Link target="_blank" rel="noopener noreferrer" to={e.x}><FaXTwitter size={40} /></Link>
                                        <Link target="_blank" rel="noopener noreferrer" to={e.linkedin}><CiLinkedin size={48}/></Link>
                                        
                                        
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col items-center mt-2 justify-center'>
                                <p className='text-lg font-mona-sans-medium'>{e.name}</p>
                                <p className='text-xs text-gray-400 font-mona-sans-medium'>{e.position}</p>
                            </div>
                        </div>


                    ))
                }



            </div>

        </div>
    )
}


export default Team;
