import React, { useState } from "react";
import down from "../assets/images/down.svg";
import topbg from "../assets/images/faq-top-bg.webp";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function OpenSign({ id, open }) {
    return (
        <div className="relative ">
            <div className="w-[36px] h-[36px] flex items-center justify-center bg-white rounded-full">
                <img className={`${id === open ? "rotate-180" : ""} h-5 w-5   transition-transform`} src={down} alt="" />
            </div>
        </div>
    );
}

const Faq = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <img className="w-full -mt-5" src={topbg} alt="bg" />
            <div className="relative z-[6] bg-[#0a4740] overflow-x-clip">
                <div className="max-w-[800px] mx-auto px-3 relative z-[1]" id='Faq'>
                    <div className="  pb-[12px]">
                        <h2 className="sm:text-[48px] md:text-[69px] text-[30px] font-chewy leading-[84px] font-normal text-center mb-6 md:mb-[61px] text-white">
                            Faq
                        </h2>
                        <Accordion
                            className=" border-[#fff] bg-[#09655a] border mb-4 sm:mb-8 rounded-[40px] " data-aos="fade-left"
                            open={open === 1}
                            icon={<OpenSign id={1} open={open} />}
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(1)}
                                className="  font-Balsamiq-Sans px-5 sm:px-10 py-3 sm:py-[20px] text-[16px] sm:text-xl text-start font-bold  text-white leading-[24px]  border-transparent"
                            >
                                Maecenas laoreet, sapien vel cursus ultricies?
                            </AccordionHeader>
                            <AccordionBody className="font-Balsamiq-Sans text-[14px] sm:text-[16px]  font-bold px-5 sm:px-10 leading-[120%] sm:leading-[160%]  py-3 text-[#CCD0D1] max-w-[880px] pt-2">
                                En Exclusive Games, ofrecemos experiencias únicas y
                                personalizadas, respaldadas por más de 15 años de dedicación al
                                desarrollo de multiplataformas para juegos de azar.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            className=" border-[#fff] bg-[#09655a] border mb-4 sm:mb-8 rounded-[40px]  overflow-hidden " data-aos="fade-right"
                            open={open === 2}
                            icon={<OpenSign id={2} open={open} />}
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(2)}
                                className="font-Balsamiq-Sans px-5 sm:px-10 py-3 sm:py-[20px] text-[16px] sm:text-xl text-start font-bold text-white leading-[24px] border-transparent"
                            >
                                Maecenas laoreet, sapien vel cursus ultricies?
                            </AccordionHeader>
                            <AccordionBody className="font-Balsamiq-Sans text-[14px] md:text-[16px] font-medium leading-[120%] sm:leading-[160%] px-5 sm:px-10  py-3 text-[#CCD0D1] max-w-[880px] pt-2">
                                En Exclusive Games, ofrecemos experiencias únicas y
                                personalizadas, respaldadas por más de 15 años de dedicación al
                                desarrollo de multiplataformas para juegos de azar.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            className=" border-whitex bg-[#09655a] border mb-4 sm:mb-8 rounded-[40px] " data-aos="fade-left"
                            open={open === 3}
                            icon={<OpenSign id={3} open={open} />}
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(3)}
                                className="font-Balsamiq-Sans px-5 sm:px-10 py-3 sm:py-[20px] text-[16px] sm:text-xl text-start font-bold text-white leading-[24px] border-transparent"
                            >
                                {" "}
                                Maecenas laoreet, sapien vel cursus ultricies?
                            </AccordionHeader>
                            <AccordionBody className="font-Balsamiq-Sans text-[14px]  md:text-[16px] font-medium leading-[120%] sm:leading-[160%] px-5 sm:px-10 py-3 text-[#CCD0D1] max-w-[880px] pt-2  ">
                                En Exclusive Games, ofrecemos experiencias únicas y
                                personalizadas, respaldadas por más de 15 años de dedicación al
                                desarrollo de multiplataformas para juegos de azar.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            className=" border-[#fff] bg-[#09655a] border mb-4 sm:mb-8 rounded-[40px] " data-aos="fade-right"
                            open={open === 4}
                            icon={<OpenSign id={4} open={open} />}
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(4)}
                                className="font-Balsamiq-Sans px-5 sm:px-10 py-3 sm:py-[20px] text-[16px] sm:text-xl text-start font-bold text-white leading-[24px] border-transparent"
                            >
                                Maecenas laoreet, sapien vel cursus ultricies?
                            </AccordionHeader>
                            <AccordionBody className="font-Balsamiq-Sans text-[14px]  md:text-[16px] font-medium leading-[120%] sm:leading-[160%] px-5 sm:px-10 py-3 text-[#CCD0D1] max-w-[880px] pt-2  ">
                                En Exclusive Games, ofrecemos experiencias únicas y
                                personalizadas, respaldadas por más de 15 años de dedicación al
                                desarrollo de multiplataformas para juegos de azar.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            className=" border-[#fff] bg-[#09655a] border mb-4 sm:mb-8 rounded-[40px]  " data-aos="fade-left"
                            open={open === 5}
                            icon={<OpenSign id={5} open={open} />}
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(5)}
                                className="font-Balsamiq-Sans px-5 sm:px-10 py-3 sm:py-[20px] text-[16px] sm:text-xl text-start font-bold text-white leading-[24px]  border-transparent"
                            >
                                Maecenas laoreet, sapien vel cursus ultricies?
                            </AccordionHeader>
                            <AccordionBody className="font-Balsamiq-Sans text-base  md:text-[16px] px-5 sm:px-10 font-medium leading-[120%] sm:leading-[160%] py-3 text-[#CCD0D1] max-w-[880px] pt-2  ">
                                En Exclusive Games, ofrecemos experiencias únicas y
                                personalizadas, respaldadas por más de 15 años de dedicación al
                                desarrollo de multiplataformas para juegos de azar.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;
