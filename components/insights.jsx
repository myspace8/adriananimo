import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Assuming you have these components set up correctly
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Insights() {
  const cardsContent = [
    {
      title: "The Future of Social Entrepreneurship: Trends and Opportunities for Young Innovators",
      date: "Aug 2024",
      description:
        "Discussing emerging trends in social entrepreneurship and how young leaders can capitalize on them",
      image: "/images/photo_5947026960783886264_y.jpg", // Correct the image path as needed
      href: "/article-1"
    },
    {
      title: "Building a Sustainable Startup: Lessons from Leading Reecoplast",
      date: "Sept 2024",
      description:
        "Sharing experiences and challenges in founding and growing a green business focused on sustainability",
      image: "/images/tennis.jpg", // Correct the image path as needed
      href: "/article-2"
    },
    {
      title: "Bridging the STEM gap in rural areas: Strategies for enhancing access to science and technology education",
      date: "Sept 2024",
      description:
        "Offering strategies to improve STEM education in undeserved communities",
      image: "/images/F_8kgOjbgAAKCDv.jpeg", // Correct the image path as needed
      href: "/article-3"
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-black text-white text-center px-4 py-6">
      <h2 className="capitalize mb-4 font-semibold text-xl">
        Read my blog
      </h2>

      <div className="flex flex-col gap-6 w-full divide-y divide-gray-800">
        {cardsContent.map((card, index) => (
          <Card key={index} className="rounded-none pt-6 shadow-none bg-black text-white">
            <CardContent className="flex justify-between items-start gap-4">
              <div className="text-left flex flex-col gap-1">
                <p className="text-xs text-white/80">{card.date}</p>
                <h2 className="mb-1 font-semibold text-lg"><Balancer>{card.title}</Balancer></h2>
                <p className="text-sm">{card.description}</p>
                <Link href={card.href} className="mt-2 flex items-center w-max gap-1">
                  <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" href={"/"}>Read more</p>
                  <IoIosArrowRoundForward className="text-lg" />
                </Link>
              </div>
              <Image src={card.image} width={100} height={100} className="w-[24vw] h-full object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

