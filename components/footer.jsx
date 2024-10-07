"use client"

import * as React from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="flex flex-col justify-center items-center gap-3 text-center p-12">
            <button 
            onClick={scrollToTop}
            className="flex flex-col justify-center items-center gap-2 w-full">
                <RiArrowUpDoubleFill />
                <p>Back to top</p>
            </button>
            <div className="flex items-center gap-2 mt-4 z-50">
                <p className="border p-2 w-min">
                    <FaPhoneAlt className="text-xl text-gray-400" />
                </p>
                <p className="border p-2 w-min">
                    <MdEmail className="text-xl text-gray-400" />
                </p>
                <p className="border p-2 w-min">
                    <FaLinkedin className="text-xl text-gray-400" />
                </p>
            </div>
        </div>
    );
}

