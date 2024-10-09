"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

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
            src: "/images/depositphotos_130616940-stock-photo-paving-stone-worker.jpg",
            title: "Reecoplast pavement blocks",
            description: "An innovative project using recycled plastic materials to manufacture high-quality construction blocks, reducing the need for traditional building materials while helping the environment.",
        },
    ];


    // Automatically cycle through images
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 8000); // Change image every 5 seconds

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
                                <p className="text-sm text-center">{image.description}</p>
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
