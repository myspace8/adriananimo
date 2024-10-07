import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Assuming you have these components set up correctly
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Insights() {
  const cardsContent = [
    {
      title: "The Future of Social Entrepreneurship: Trends and Opportunities for Young Innovators",
      date: "Aug 2024",
      description:
        "Discussing emerging trends in social entrepreneurship and how young leaders can capitalize on them",
      image: "/images/photo_5947026960783886263_y.jpg", // Correct the image path as needed
    },
    {
      title: "Building a Sustainable Startup: Lessons from Leading Reecoplast",
      date: "Sept 2024",
      description:
        "Sharing experiences and challenges in founding and growing a green business focused on sustainability",
      image: "/images/tennis.jpg", // Correct the image path as needed
    },
    {
      title: "Bridging the STEM gap in rural areas: Strategies for enhancing access to science and technology education",
      date: "Sept 2024",
      description:
        "Offering strategies to improve STEM education in undeserved communities",
      image: "/images/F_8kgOjbgAAKCDv.jpeg", // Correct the image path as needed
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-6">
      <h2 className="capitalize mb-4 font-semibold text-xl">
        Read my blog
      </h2>

      <div className="flex flex-col gap-4 w-full">
        {cardsContent.map((card, index) => (
          <Card key={index} className="rounded-none border-none shadow-none">
            <CardContent className="flex justify-between items-start gap-4">
              <div className="text-left flex flex-col gap-1">
                <h2 className="mb-1 font-semibold text-lg"><Balancer>{card.title}</Balancer></h2>
                <p className="text-sm">{card.description}</p>
                <p className="text-xs mt-2 text-black/80">{card.date}</p>
              </div>
              <Image src={card.image} width={100} height={100} className="w-[24vw] h-full object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

