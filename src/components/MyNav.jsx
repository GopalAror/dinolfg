import React, { useState } from 'react'
import twitr from "../assets/images/twitr.svg";
import insta from "../assets/images/insta.svg";
import discord from "../assets/images/discord.svg";
const MyNav = () => {
    const [show, setShow] = useState(true);
    function view() {
        setShow(!show)
        document.body.classList.toggle("max-lg:overflow-hidden");
    }
    return (
        <div className='max-w-[1132px] mx-auto px-3 pt-[13px]'>
            <nav className="lg:pl-6 lg:pr-2 px-4 bg-white rounded-[61.102px] border-b-4 border-b-[black] flex items-center justify-between sm:mb-20 mb-10 h-[67px]">
                <a href="#home">
                    <h2 className="ff-lucky font-normal cursor-pointer leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] sm:text-[40px] text-[28px]">
                        D<span className="text-[#23AAAC]">i</span>
                        <span className="text-[#D45B07]">n</span>
                        <span className="text-[#8EC627]">o</span>
                        <span className="text-[#FCCA2B]">L</span>
                        <span className="text-[#8F78D2]">F</span>
                        <span className="text-[#8EC627]">G</span>
                    </h2>
                </a>
                <ul
                    className={`${show ? "left-[-100%]" : "left-0 bg-[#ffffff]"} flex items-center gap-6 flex-row max-lg:fixed max-lg:z-50 max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}
                >
                    <li onClick={view}
                    >
                        <a
                            href="#about"
                            className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                        >
                            About
                        </a>
                    </li>
                    <li onClick={view}
                    >
                        <a
                            href="#Tokenomic"
                            className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                        >
                            Tokenomic
                        </a>
                    </li>
                    <li onClick={view}
                    >
                        <a
                            href="#Roadmap"
                            className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                        >
                            Roadmap
                        </a>
                    </li>
                    <li onClick={view}
                    >
                        <a
                            href="#Faq"
                            className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                        >
                            FAQ
                        </a>
                    </li>
                    <li className="lg:hidden flex" onClick={view}
                    >
                        <a
                            href="#joinus"
                            className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[11px] pb-[20px]"
                        >
                            Join Now
                        </a>
                    </li>
                    <li className="gap-2 items-center sm:hidden flex">
                        <a href="https://www.twitter.com" target="_blank">
                            <img className='hover:scale-[1.1] duration-300' src={twitr} alt="twitr" />
                        </a>
                        <a href="https://www.discord.com" target="_blank">
                            <img className='hover:scale-[1.1] duration-300' src={discord} alt="discord" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <img className='hover:scale-[1.1] duration-300' src={insta} alt="insta" />
                        </a>
                    </li>
                </ul>
                <ul className="gap-2 items-center sm:flex hidden">
                    <li>
                        <a href="https://www.twitter.com" target="_blank">
                            <img className='hover:scale-[1.1] duration-300' src={twitr} alt="twitr" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.discord.com" target="_blank">
                            <img className='hover:scale-[1.1] duration-300' src={discord} alt="discord" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <img className='hover:scale-[1.1] duration-300' src={insta} alt="insta" />
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
                            className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[10px] pb-[17px] lg:block hidden hover:text-white transition-all duration-500 ease-in-out"
                        >
                            Join Now
                        </a>
                    </li>
                </ul>
                <label className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col" onClick={view}>
                    <span className={`${show
                        ? ""
                        : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                        } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                    ></span>
                    <span className={`${show ? "" : "hidden"
                        } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                    ></span>
                    <span className={`${show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                        } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                    ></span>
                </label>
            </nav>
        </div>
    )
}

export default MyNav
