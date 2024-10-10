"use client"

import * as React from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

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
                <Link className="border p-2 w-min" href={"tel:+233240894565"}>
                    <p>
                        <FaPhoneAlt className="text-xl text-gray-400" />
                    </p>
                </Link>
                <Link className="border p-2 w-min" href={"mailto:adrianaappiagyeinnimo@gmail.com"}>
                    <p>
                        <MdEmail className="text-xl text-gray-400" />
                    </p>
                </Link>
                <Link className="border p-2 w-min" href={"https://www.linkedin.com/in/adriana-nimo-b70000104/"} target="_blank">
                    <p>
                        <FaLinkedin className="text-xl text-gray-400" />
                    </p>
                </Link>
            </div>
        </div>
    );
}

