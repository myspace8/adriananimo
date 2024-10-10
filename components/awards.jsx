import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AwardsCarousel from "./ui/awardsCarousel";

export default function RecentAwards() {
  const cardsContent = [
    {
      image: "/images/1.png", // Correct the image path as needed
    },
    {
      image: "/images/3.png", // Correct the image path as needed
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-6">
      <h2 className="capitalize mb-4 font-semibold text-xl">
        Recent awards
      </h2>
      <div className="flex flex-col space-y-4 w-full">
        <AwardsCarousel />
        {/* <div className="relative">
          <div style={{ position: 'relative', height: '45vh' }}>
            <div className="absolute flex flex-col gap-2 bottom-0 right-0 left-0 z-50 p-6 bg-gradient-to-t from-black via-black/65 to-black/0 text-white">
              <h2 className="text-xs uppercase text-center">Best Business Creation project of the Totalenergies Startupper of the Year</h2>
              <p className="text-2xl text-center">Winner</p>
              <p className="text-xs text-center">March 2022</p>
            </div>
            <Image
              alt="A picture of Adriana excited about her award"
              src={`/images/adriana-wins-award.jpeg`}
              fill
              quality={100}
              sizes="(min-width: 808px) 50vw, 100vw"
              className="z-30 object-cover"
            />
          </div>
        </div> */}
        {cardsContent.map((card, index) => (
          <Card key={index} className="rounded-none">
            <CardContent className="flex flex-col">
              <Image src={card.image} width={300} height={300} alt={card.image} className="w-full h-full object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

