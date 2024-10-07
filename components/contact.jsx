import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Assuming you have these components set up correctly
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Contact() {
    const cardsContent = [
        {
            title: "Collaborate",
            description: "+233 24 089 4565",
        },
        {
            title: "Say hello",
            description: "adriananimo44@gmail.com",
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center text-center px-4 py-6">
            <h2 className="capitalize mb-4 font-semibold text-xl">
                Get in touch
            </h2>

            <div className="flex flex-col gap-4 w-full">
                {cardsContent.map((card, index) => (
                    <Card key={index} className="rounded-none p-4">
                        <CardContent className="flex justify-between items-start gap-4">
                            <div className="text-left flex flex-col gap-1">
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

