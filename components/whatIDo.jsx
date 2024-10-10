import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Assuming you have these components set up correctly
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function WhatIDo() {
  const cardsContent = [
    {
      title: "Assistant Program Manager, Youth Advocacy & Community Empowerment Program",
      date: "Jun 2024 - present",
      description:
        "Coordinates civic leadership and community engagement projects for youth in Ghana, ensuring effective program delivery and strategic growth.",
      image: "/images/photo_5947026960783886263_y.jpg", // Correct the image path as needed
    },
    {
      title: "Peer Mentor, Royal Ace Tennis Club",
      date: "Apr 2020 – Present",
      description:
        "Conducts training sessions and offers personalized coaching to improve players’ skills and match play strategies.",
      image: "/images/tennis.jpg", // Correct the image path as needed
    },
    {
      title: "Operations Manager, Bismuth Technologies",
      date: "Oct 2019 – Dec 2020",
      description:
        "Design and ran technology and entrepreneurship programs for youth, partnering with schools and tech companies to enhance educational opportunities",
      image: "/images/F_8kgOjbgAAKCDv.jpeg", // Correct the image path as needed
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-6">
      <h2 className="capitalize mb-4 font-semibold text-xl">
        What I have been doing so far
      </h2>

      <div className="flex flex-col space-y-4 w-full">
        {cardsContent.map((card, index) => (
          <Card key={index} className="rounded-none">
            <CardContent className="flex flex-col">
              <Image src={card.image} width={300} height={300} alt={card.title} className="w-full h-[25vh] object-cover" />
              <div className="text-left mt-2 p-4">
                <p className="my-1 text-sm text-black/80">{card.date}</p>
                <h2 className="mb-1 font-semibold text-lg"><Balancer>{card.title}</Balancer></h2>
                <p className="text-sm">{card.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

