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
      
        <div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <div className="p-1">
                <div className="rounded-none">
                  <div className="flex">
                    <div className="flex flex-col">
                      <div
                        style={{ backgroundImage: `url("/images/photo_5947026960783886263_y.jpg")` }}
                        className="w-full h-[20vh] bg-no-repeat bg-center object-cover"
                      >
                      </div>
                      <div className="text-left mt-4">
                        <p className="my-1 text-black/70">June 2024 - Present</p>
                        <h2 className="mb-1 font-semibold text-lg">Assistant Program Manager, Youth Advocacy & Community Empowerment Program</h2>
                        <p>Coordinates civic leadership and community engagement projects for youth in Ghana, ensuring effective program delivery and strategic growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}
