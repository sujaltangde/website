import React from "react";

const About = React.memo(() => {
  return (
    <main>


      <div className="pt-24 flex md:flex-row flex-col md:gap-12 gap-2 md:px-20 px-4 min-h-screen pb-24">
        <div className="flex md:w-2/3 flex-col gap-10 justify-center md:pb-12 pb-6 pr-12">
          <p className="text-white font-mona-sans-bold gradient-text text-4xl md:text-5xl lg:text-7xl md:pr-28 pr-1">
            What sets us apart
          </p>

          <div className="text-gray-300 font-mona-sans-regular md:text-xl text-lg">
            <p className=" ">Nestled in the heart of Nagpur, the Cloud Native Nagpur community thrives as a vibrant hub for cloud developers seeking to harness the power of modern cloud technologies. </p>
            <p className="  mt-4">With a fervent dedication to innovation and collaboration, this community serves as a beacon for professionals eager to explore the limitless possibilities of cloud-native architectures.</p>
          </div>
        </div>
        <div className="flex md:w-1/3 justify-center md:items-center items-start gap-10 flex-col md:py-10 pb-5 pt-0">
          <img src="assets/aboutImg1.svg" className="md:w-96 w-72" alt="aboutImg1" />
          <img src="assets/aboutImg2.svg" className="md:w-96 w-72" alt="aboutImg2" />
        </div>
      </div>

    </main>
  );
});


export default About;
