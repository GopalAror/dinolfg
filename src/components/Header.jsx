import React from 'react'
import aeroplanehero from "../assets/images/aeroplanehero.webp";
const Header = () => {
    return (
        <div className='overflow-x-clip'>
            <div className="max-w-[1132px] px-3 mx-auto">
                <div className="flex flex-wrap max-sm:flex-col-reverse flex-row -mx-3">
                    <div className="sm:w-5/12 w-full px-3 flex max-sm:pt-5 items-center justify-center">
                        <img className='w-full max-w-[394px] animate-bounce2' src={aeroplanehero} alt="aeroplane" data-aos="zoom-in" />
                    </div>
                    <div className="sm:w-7/12 w-full px-3 flex justify-center" data-aos="zoom-in">
                        <h1 className="ff-lucky max-w-[398px] text-center font-normal leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] md:text-[175px] text-[80px] sm:text-[130px]">
                            D<span className="text-[#23AAAC]">I</span>
                            <span className="text-[#D45B07]">N</span>
                            <span className="text-[#8EC627]">O</span>
                            <br />
                            <span className="text-[#FCCA2B]">L</span>
                            <span className="text-[#8F78D2]">F</span>
                            <span className="text-[#8EC627]">G</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
