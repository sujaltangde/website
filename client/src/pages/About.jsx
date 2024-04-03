import React from "react";

const About = React.memo(() => {
  return (
    <main>


        <div className="pt-24 flex md:flex-row flex-col md:gap-12 gap-2 md:px-20 px-4 min-h-screen pb-12">
            <div className="flex md:w-2/3 flex-col gap-10 justify-center pb-12 pr-12">
                <p className="text-white font-mona-sans-bold gradient-text md:text-7xl text-5xl md:pr-28">What sets us apart</p>
                <div className="text-gray-400 font-mona-sans-regular text-xl">
                <p className=" ">Nestled in the heart of Nagpur, the Cloud Native Nagpur community thrives as a vibrant hub for cloud developers seeking to harness the power of modern cloud technologies. </p>
                <p className="  mt-4">With a fervent dedication to innovation and collaboration, this community serves as a beacon for professionals eager to explore the limitless possibilities of cloud-native architectures.</p>
                </div>
            </div>
            <div className="flex md:w-1/3 justify-center items-center gap-10 flex-col md:py-10 py-5">
                <img src="assets/aboutImg1.svg" alt="aboutImg1" />
                <img src="assets/aboutImg2.svg" alt="aboutImg2" />
            </div>
        </div>
     
    </main>
  );
});


export default About;
