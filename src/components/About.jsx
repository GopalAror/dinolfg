import React from 'react'
import bg from "../assets/images/about-under.webp";
import left from "../assets//images/about-tree.webp";
import right from "../assets//images/about-tree2.webp";
const About = () => {
    return (
        <div className='overflow-x-clip'>
            <div className=' bg-[#09655A] w-full bg-no-repeat bg-full relative' id='about'>
                <div className="max-w-[599px] relative z-[2] mx-auto px-3 sm:pt-[76px] pb-[50px] flex flex-col items-center">
                    <div className=" flex gap-[22px] items-center pb-[10px] sm:pb-[42px]" data-aos="zoom-in-down"><h2 className='text-white text-center font-chewy font-normal md:text-[64px] sm:text-[48px] text-[30px] leading-[83px]'>About</h2>
                        <h2 className="ff-lucky font-normal leading-[66px] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] sm:text-[48px] md:text-[69px] text-[30px]">
                            D<span className="text-[#23AAAC]">i</span>
                            <span className="text-[#D45B07]">n</span>
                            <span className="text-[#8EC627]">o</span>
                            <span className="text-[#FCCA2B]">L</span>
                            <span className="text-[#8F78D2]">F</span>
                            <span className="text-[#8EC627]">G</span>
                        </h2>
                    </div>
                    <p className='font-Balsamiq-Sans text-center text-white text-[20px] sm:text-[24px] font-normal leading-[28px]' data-aos="fade-right">$DINO is a meme coin with very strong utility.</p>
                    <p className='font-Balsamiq-Sans text-center pt-[18px] pb-[10px] text-white text-[20px] sm:text-[24px] font-normal leading-[28px]' data-aos="fade-left">Biggest problem of meme coins is lack of utility and usecase, <span className='text-[#8EC627]'>$</span><span className='text-[#FBA11D]'>D</span><span className='text-[#23AAAC]'>I</span><span className='text-[#D45B07]'>N</span><span className='text-[#FB5352]'>O</span> is going to fix it.</p>
                    <p className='font-Balsamiq-Sans text-center text-white text-[20px] sm:text-[24px] font-normal leading-[28px]' data-aos="fade-right">We want to bring a lot of usecases and utility to $DINO holders, just sit back and relax.</p>
                    <p className='font-Balsamiq-Sans text-center text-white text-[20px] sm:text-[24px] font-normal leading-[28px] pt-[14px]' data-aos="fade-left">In $DINO, we want to build a very strong community, that’s why we are going to have a lot of games and crypto tips in our Telegram and Twitter.</p>
                </div>
                <img className='absolute bottom-[-5%] left-0 max-md:max-w-[200px] max-sm:max-w-[150px]' src={left} alt="left-ellipis" />
                <img className='absolute bottom-[-5%] right-0 max-md:max-w-[200px] max-sm:max-w-[150px]' src={right} alt="right-ellipis" />
            </div>
            <img src={bg} alt="bg" />
        </div>
    )
}

export default About
