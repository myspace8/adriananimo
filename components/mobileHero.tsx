import Header from "@/components/header"
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function MobileHero() {
    return (
        <div className="relative">
            <div style={{ position: 'relative', height: '85vh' }}>
                <div className="absolute top-0 right-0 left-0 z-50 text-white">
                    <Header />
                </div>
                <Image
                    alt="A picture of Adriana in her office"
                    src={`/images/adraina-1.jpeg`}
                    fill
                    quality={100}
                    // sizes="(min-width: 808px) 50vw, 100vw"
                    className="z-30 object-cover"
                />
            </div>
            <div className="bg-white left-0 right-0 pt-36 clip-path pb-12 flex justify-center items-center absolute bottom-0 z-40 h-96">
                <div className="relative">
                    <div>
                        <h1>Hi I{`'`}m</h1>
                        <h2 className="font-bold text-xl">Adriana Appiagyia Nsia Nimo</h2>
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Impact Driven Entrepreneur</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4 z-50">
                        <p className="border p-2 w-min">
                            <FaPhoneAlt className="text-xl text-gray-400" />
                        </p>
                        <p className="border p-2 w-min">
                            <MdEmail className="text-xl text-gray-400" />
                        </p>
                        <p className="border p-2 w-min">
                            <FaLinkedin className="text-xl text-gray-400" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
