import React from 'react'
import topbg from "../assets/images/utility-top-bg.webp";
import img1 from "../assets/images/utility-img1.webp";
import img2 from "../assets/images/utility-img2.webp";
import tree from "../assets/images/utility-tree.webp";
import bottombg from "../assets/images/utility-bottom-bg.webp";
const Utility = () => {
    return (
        <div className='relative overflow-x-clip'>
            <img className='w-full -mt-1' src={topbg} alt="topbg" />
            <div className="max-w-[1064px] px-3 mx-auto">
                <h2 className='text-white text-center font-chewy font-normal sm:text-[48px] text-[30px] md:text-[64px] leading-[83px] pb-[20px] sm:pb-[158px]'>Utility and Usecase</h2>
                <div className="border relative z-[2] bg-[#09655A] border-white rounded-[20px] max-w-[1014px] min-h-[266px] mx-auto" data-aos="fade-right">
                    <div className='pl-[39px] max-[450px]:pr-[20px] pr-[150px] sm:pr-[280px] max-[450px]:py-5 py-[62px]'>
                        <p className=' font-Balsamiq-Sans font-normal text-[20px] sm:text-[32px] text-white leading-[25px] sm:leading-[38px] max-[450px]:pr-[60px]'>We are going to work hard in otder to add <span className='text-[#8EC627] font-bold'>$</span><span className='text-[#FBA11D] font-bold'>D</span><span className='text-[#23AAAC] font-bold'>I</span><span className='text-[#D45B07] font-bold'>N</span><span className='text-[#FB5352] font-bold'>O</span> to main platforms as a form of payment</p>
                        <p className=' font-Balsamiq-Sans pt-[28px] font-normal text-[20px] sm:text-[32px] text-white leading-[25px] sm:leading-[38px]'>You will be able to buy a lot of things with <span className='text-[#8EC627] font-bold'>$</span><span className='text-[#FBA11D] font-bold'>D</span><span className='text-[#23AAAC] font-bold'>I</span><span className='text-[#D45B07] font-bold'>N</span><span className='text-[#FB5352] font-bold'>O</span> </p>
                        <img className='absolute right-0 top-[20%] sm:right-[1%] sm:top-[-22%] max-[450px]:max-w-[80px] max-[450px]:top-3 max-sm:max-w-[150px] max-[450px]:min-h-[80px] animate-bounce2' src={img1} alt="img1" />
                    </div>
                </div>
                <img className='absolute right-0 bottom-[28%] z-0' src={tree} alt="tree" />
                <div className="border relative border-white bg-[#09655A] mt-[125px] rounded-[20px] max-w-[1014px] min-h-[150px] sm:min-h-[266px] mx-auto" data-aos="fade-left">
                    <img className='absolute max-sm:max-w-[150px] left-0 top-[-30%] max-[400px]:max-w-[80px] max-[400px]:top-[31%] animate-bounce2' src={img2} alt="img1" />
                    <div className='pr-[30px] pl-[110px] sm:pl-[300px] py-[40px] sm:py-[95px]'>
                        <p className=' font-Balsamiq-Sans font-normal text-right text-[20px] sm:text-[32px] text-white leading-[25px] sm:leading-[38px]'>We are going to have staking and buyback/ burning mechanism</p>
                    </div>
                </div>
            </div>
            <img className='w-full mt-[50px] sm:mt-[168px] -mb-5' src={bottombg} alt="bottombg" />
        </div>
    )
}

export default Utility
