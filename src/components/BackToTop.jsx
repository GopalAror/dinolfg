import React, { useState } from "react";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 font-bold font-Balsamiq-Sans text-white flex justify-center items-center p-2 w-[45px] h-[45px] rounded-[100%] bg-[#23AAAC] fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300  hover:shadow-[1px_1px_5px_5px_#23AAAC] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </button>
        </div>
    );
};

export default BackToTop;