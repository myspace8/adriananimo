"use client"

import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"

export default function AwardsCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const slides = [
        {
            image: "/images/adriana-wins-award.jpeg",
            title: "Welcome to Our Carousel",
            description: "Explore our amazing content!",
        },
        { image: "/images/1650977812099.jpeg" },
        { image: "/images/7bf78e78-13b3-4ac6-bc9f-592ab290fc14.jpg" },
        { image: "/images/PHOTO-2023-10-24-14-31-40 2.jpg" },
        { image: "/images/PHOTO-2023-10-24-14-31-40.jpg" },
    ]

    return (
        <div>
            <Carousel setApi={setApi} className="w-full max-w-md">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                                    <Image
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    {index === 0 && (
                                        <div className="absolute bottom-0 right-0 left-0 flex flex-col items-center justify-center bg-gradient-to-t from-black via-black/65 to-black/0 text-white p-4">
                                            <h2 className="text-xs uppercase text-center">Best Business Creation project of the Totalenergies Startupper of the Year</h2>
                                            <p className="text-2xl text-center my-2">Winner</p>
                                            <p className="text-xs text-center">March 2022</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="flex justify-center gap-2 py-2">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-gray-300"
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}