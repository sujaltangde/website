import React, { useState } from "react";
import "../../styles/Benefits.css";

const Benefits = React.memo(() => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (index) => {
        setHoveredIndex(index);
    };

    const slides = [
        {
            key: 1,
            content: <div className="text-white">1</div>,
        },
        {
            key: 2,
            content: <div className="text-white">2</div>,
        },
        {
            key: 3,
            content: <div className="text-white">3</div>,
        },
    ];

    return (
        <main className=" md:px-24  mb-12">
            <div className="mb-12">
                <h1 className="heading-benefit">Perks & Benefits</h1>
            </div>

            <div className="flex md:flex-row md:gap-0  flex-col md:items-start items-center md:justify-center pt-4 mt-12 h-[70vh]">
                {slides.map((slide) => (
                    <div
                        key={slide.key}
                        className={` transition-all duration-300 relative ${hoveredIndex !== null && hoveredIndex !== slide.key
                                ? " transform scale-90"
                                : ""
                            } ${hoveredIndex === slide.key
                                ? "transform scale-110 shadow-lg perksBeniBgHover"
                                : "perksBeniBg"
                            } md:w-6/12 w-10/12 h-3/4  m-2  items-center justify-center flex flex-col `}
                        onMouseEnter={() => handleHover(slide.key)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div
                            className=" flex flex-col w-full  mb-12 items-end h-full absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            
                        >
                          
                           <div className=" w-full grayWhiteBorder2 p-3 text-white h-5/6 ">


                               {/* Content Here */}

                           </div>
                           <div className="bg-gray-900 grayWhiteBorder  w-full align-bottom  text-white text-center md:pt-3 pt-2 font-mona-sans-semibold md:h-1/6 h-2/6">Benefits</div>
                        </div>
                        
                    </div>
                    
                ))}
            </div>
        </main>
    );
});

Benefits.displayName = "Benefits";

export default Benefits;
