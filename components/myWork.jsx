"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";
import Link from "next/link";

export default function MyWork() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true); // New state for play/pause

    const images = [
        {
            src: "/images/photo_5947026960783886266_y.jpg",
            title: "Company",
            description: "Founded in June 2021, Reecoplast is on a mission to tackle the growing problem of plastic waste in Ghana. The company converts discarded plastics into eco-friendly products such as durable pavement blocks and pellets, which are used in various construction and manufacturing processes.",
        },
        {
            src: "/images/plastic-palletes.jpeg",
            title: "Reecoplast pallets",
            description: "We produce high-quality pellets made from recycled plastic waste. These pellets can be used as raw materials in various industries such as, plastic manufacturing, packaging and more.",
        },
        {
            src: "/images/pavement-bricks.jpeg",
            title: "Reecoplast pavement blocks",
            description: "Our pavement bricks are engineered using a unique blend of recycled platic waste and other additives to create a durable and waterproof solution for various construction projects.",
        },
    ];


    // Automatically cycle through images
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);

            return () => clearInterval(interval); // Clean up on unmount
        }
    }, [isPlaying, images.length]);

    // Toggle play/pause state
    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <div className="items-center text-center pt-6 bg-gradient-to-t from-black via-black/45 to-white">
            <h2 className="capitalize mb-4 font-semibold text-xl">My Work</h2>
            <div className="relative">
                <div style={{ position: "relative", height: "65vh" }}>
                    {/* Image Container */}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                        >
                            <Image
                                alt={image.title}
                                src={image.src}
                                fill
                                quality={100}
                                sizes="(min-width: 808px) 50vw, 100vw"
                                className="z-30 object-cover"
                            />
                            {/* Overlay with Text */}
                            <div className="absolute bottom-0 right-0 left-0 z-50 p-6 bg-gradient-to-t from-black via-black/85 to-black/0 text-white">
                                <h2 className="text- font-semibold uppercase text-center mb-2">
                                    {image.title}
                                </h2>
                                <p className="text-sm text-center mb-2">{image.description}</p>
                                <Link href={"https://reecoplastghana.vercel.app"} target="_blank">
                                    <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Learn more</span>
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Play/Pause Button */}
                    <button
                        className="absolute top-2 right-2 text-white p-3 rounded-full z-50 hover:bg-black/45 transition-all"
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                    </button>
                </div>
            </div>
        </div>
    );
}
