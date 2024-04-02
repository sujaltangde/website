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
        <main>
            <div className="benefit-container">
                <h1 className="heading-benefit">Perks & Benefits</h1>
            </div>

            <div className="flex justify-center items-center h-screen">
                {slides.map((slide) => (
                    <div
                        key={slide.key}
                        className={`transition-all duration-300 relative ${hoveredIndex !== null && hoveredIndex !== slide.key
                                ? "opacity-50 transform scale-90"
                                : ""
                            } ${hoveredIndex === slide.key
                                ? "transform scale-110 shadow-lg bg-blue-200"
                                : "bg-blue-400"
                            } w-32 h-32 m-2 flex items-center justify-center`}
                        onMouseEnter={() => handleHover(slide.key)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={{ zIndex: 1 }}
                        >
                            {slide.content}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
});

Benefits.displayName = "Benefits";

export default Benefits;
