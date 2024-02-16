import React from 'react'
import tokenics from "../assets/images/tokenics-img.webp";
import baby from "../assets/images/tokenics-baby.webp";
import svg1 from "../assets/images/tokenics-vector-1.svg";
import svg2 from "../assets/images/tokenics-vector-2.svg";
import svg3 from "../assets/images/tokenics-vector-3.svg";
import svg4 from "../assets/images/tokenics-vector-4.svg";
import svg5 from "../assets/images/tokenics-vector-5.svg";
import bottom from "../assets/images/bottom-bg.webp";
import left from "../assets/images/tokenics-left-tree.webp";
import bottomleft from "../assets/images/bottom-left-ellipis.svg";
import baby2 from "../assets/images/tokenics-baby-bottom.webp";
import right from "../assets/images/tokenics-right-tree.webp";
import short from "../assets/images/short-tree.svg";
import img1 from "../assets/images/short-tree-img1.webp";
import img2 from "../assets/images/short-tree-img2.webp";
import chart from "../assets/images/TokenFullChart.webp";
import rightellipis from "../assets/images/right-ellipis.svg";
const Tokenomics = () => {
    return (
        <div className='relative overflow-x-clip'>
            <img className='absolute right-0 top-[-10%]' src={rightellipis} alt="right" />
            <div className="max-w-[1140px] relative z-[2] pb-[190px] lg:pb-[43px] px-3 mx-auto flex flex-col items-center" id='Tokenomic'>
                <h2 className='text-white text-center font-chewy font-normal sm:text-[48px] text-[30px] md:text-[64px] mb-[20px] sm:mb-[80px] leading-[48px] sm:leading-[83px]'>Tokenomics</h2>
                <div className='flex items-start justify-between'>
                    <div className="flex max-sm:hidden items-center pt-[50px] mr-5 gap-[17px]" data-aos="fade-right">
                        <div className='flex-col flex items-end'>
                            <p className='text-[#FBA11D] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px]'>333,333,333</p>
                            <p className='text-white font-Balsamiq-Sans font-normal text-[18px] md:text-[24px] leading-[20px] sm:leading-[33px]'>Supply</p>
                        </div>
                        <img src={svg1} alt="svg1" />
                    </div>
                    <div className="">
                        <img className='w-full max-w-[429px] md:hidden block' src={chart} alt="" data-aos="zoom-in-down" />
                    </div>
                    <div className="relative md:block hidden" data-aos="zoom-in-down">
                        <img className='absolute max-w-[100px] lg:max-w-[133px] min-h-[157px] left-[38%] top-[-22%]' src={baby} alt="baby" />
                        <img className='lg:max-w-[589px] md:max-w-[420px] min-h-[299px] w-full' src={tokenics} alt="tokinecs" />
                    </div>
                    <div className="flex max-sm:hidden items-center pt-[50px] md:ml-1 lg:ml-5 gap-[17px]" data-aos="fade-left">
                        <img src={svg2} alt="svg1" />
                        <div className='flex-col flex items-start'>
                            <p className='text-[#8EC627] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px] max-w-[217px]'>Liquidity lock for 1 year</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end max-w-[919px] -mt-[60px] w-full">
                    <div className='flex max-sm:hidden gap-[17px] items-center' data-aos="fade-right">
                        <div className='flex flex-col items-end'>
                            <p className='text-[#23AAAC] font-Balsamiq-Sans font-normal text-[20px] md:text-[32px] leading-[20px] sm:leading-[38px] max-w-[217px]'>95% Uniswa</p>
                            <p className='text-[#23AAAC] font-Balsamiq-Sans font-normal text-[20px] md:text-[32px] leading-[20px] sm:leading-[38px] max-w-[217px]'>5% Marketing</p>
                            <p className='text-white font-Balsamiq-Sans font-normal text-[18px] md:text-[24px] leading-[20px] sm:leading-[33px]'>Allocation</p>
                        </div>
                        <img src={svg3} alt="svg1" />
                    </div>
                    <div className='-mb-10 max-sm:hidden' data-aos="fade-up" >
                        <div className="flex flex-col items-center">
                            <img src={svg5} alt="svg1" />
                            <p className='text-[#D45B07] font-Balsamiq-Sans font-normal text-[20px] md:text-[32px] leading-[20px] sm:leading-[38px] max-w-[217px]'>No Tax</p>
                        </div>
                    </div>
                    <div className='flex max-sm:hidden gap-[17px] sm:mt-3 items-center' data-aos="fade-left">
                        <img src={svg4} alt="svg1" />
                        <div className='flex flex-col  items-end'>
                            <p className='text-[#FB5352] font-Balsamiq-Sans font-normal text-[20px] md:text-[32px] leading-[20px] sm:leading-[38px]'>No Mint Function</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row sm:hidden mt-[75px] flex-wrap w-full -mx-3'>
                    <div className='w-6/12 max-[500px]:w-full px-3 pt-5'>
                        <div className="flex min-h-[70px] items-center gap-[20px] w-full border-dashed border-2 rounded-[16px] px-3 border-[#FBA11D]">
                            <div className="h-[36px] w-[36px] bg-[#FBA11D] rounded-[12px] border border-white"></div>
                            <div className="">
                                <p className='text-[#FBA11D] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px]'>333,333,333</p>
                                <p className='text-white font-Balsamiq-Sans font-normal text-[18px] md:text-[24px] leading-[20px] sm:leading-[33px]'>Supply</p></div>
                        </div>
                    </div>
                    <div className='w-6/12 max-[500px]:w-full px-3 pt-5'>
                        <div className="flex min-h-[70px] items-center py-4 gap-[20px] w-full border-dashed border-2 rounded-[16px] px-3 border-[#8EC627]">
                            <div className="h-[36px] w-[36px] bg-[#8EC627] rounded-[12px] border border-white"></div>
                            <div className="">
                                <p className='text-[#8EC627] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px]'>Liquidity lock for 1 year</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-6/12 max-[500px]:w-full px-3 pt-5'>
                        <div className="flex min-h-[70px] items-center gap-[20px] w-full border-dashed border-2 rounded-[16px] px-3 border-[#23AAAC]">
                            <div className="h-[36px] w-[36px] bg-[#23AAAC] rounded-[12px] border border-white"></div>
                            <div className="">
                                <p className='text-[#23AAAC] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px]'>95% Uniswa</p>
                                <p className='text-[#23AAAC] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px]'>5% Marketing</p>
                                <p className='text-white font-Balsamiq-Sans font-normal text-[18px] md:text-[24px] leading-[20px] sm:leading-[33px]'>Allocation</p></div>
                        </div>
                    </div>
                    <div className='w-6/12 max-[500px]:w-full px-3 pt-5'>
                        <div className="flex min-h-[70px] items-center gap-[20px] w-full border-dashed border-2 rounded-[16px] px-3 border-[#D45B07]">
                            <div className="h-[36px] w-[36px] bg-[#D45B07] rounded-[12px] border border-white"></div>
                            <div className="">
                                <p className='text-[#D45B07] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px]'>No Tax</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-6/12 max-[500px]:w-full px-3 pt-5'>
                        <div className="flex min-h-[70px] items-center gap-[20px] w-full border-dashed border-2 rounded-[16px] px-3 border-[#FB5352]">
                            <div className="h-[36px] w-[36px] bg-[#FB5352] rounded-[12px] border border-white"></div>
                            <div className="">
                                <p className='text-[#FB5352] font-Balsamiq-Sans font-normal text-[20px] sm:text-[26px] md:text-[32px] leading-[20px] sm:leading-[38px]'>No Mint Function</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute left-0 bottom-0 max-w-[252px] min-h-[446px] max-sm:left-[-25%]' src={left} alt="left" />
            <img className='absolute left-0 bottom-0 max-w-[211px] min-h-[193px] animate-bounce2' src={baby2} alt="left" />
            <img className='absolute left-[-7%] bottom-[-18%]' src={bottomleft} alt="bottomleft" />
            <img className='absolute left-[20%] max-sm:hidden bottom-[3%]' src={short} alt="short" />
            <img className='absolute bottom-[8%] max-sm:hidden left-[38%]' src={img1} alt="img1" />
            <img className='absolute bottom-[3%] max-sm:hidden left-[53%]' src={img2} alt="img2" />
            <img className='absolute bottom-0 right-[-30%] sm:bottom-[4%]  sm:right-[10%]' src={right} alt="img2" />
            <img className='w-full' src={bottom} alt="bottom-bg" />
        </div>
    )
}

export default Tokenomics