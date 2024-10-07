import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"; 
import Image from "next/image";

export default function RecentAwards() {
    const cardsContent = [
        {
          image: "/images/1.png", // Correct the image path as needed
        },
        {
          image: "/images/2.png", // Correct the image path as needed
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
        {cardsContent.map((card, index) => (
          <Card key={index} className="rounded-none">
            <CardContent className="flex flex-col">
              <Image src={card.image} width={300} height={300} className="w-full h-full object-cover" />
            </CardContent>
          </Card>
        ))} 
      </div>
    </div>
  );
}

