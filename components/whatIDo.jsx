import * as React from "react"
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function WhatIDo() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <h2 className="capitalize mb-1 font-semibold text-xl">What I have been doing so far</h2>
      {/* <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="rounded-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div style={{ position: 'relative', height: '35vh' }}>
                      <Image
                        alt="A picture of Adriana in her office"
                        src={`/images/adraina-1.jpeg`}
                        fill
                        quality={100}
                        sizes="(min-width: 808px) 50vw, 100vw"
                        className="z-50 object-cover"
                      />
                      <div className="absolute bottom-0 z-50">
                        <p>June 2024 - Present</p>
                        <h2>Assistant Program Manager, Youth Advocacy & Community Empowerment Program</h2>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  )
}
