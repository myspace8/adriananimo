import Image from "next/image";

export default function MyWork() {
    return (
        <div className="items-center text-center py-6">
            <h2 className="capitalize mb-4 font-semibold text-xl">
                My work
            </h2>
            <div className="relative">
                <div style={{ position: 'relative', height: '45vh' }}>
                    <div className="absolute top-28 right-0 left-0 z-50 p-6 bg-black/65 text-white">
                        <h2 className="text-lg font-semibold text-center mb-2">Reecoplast</h2>
                        <p className="text-sm text-center">Founded in June 2021 with a mission to tackle the growing problem of plastic waste in Ghana. The company converts discarded plastics into eco-friendly products such as durable pavement blocks and pellets, which are used in various construction and manufacturing processes. By reducing plastic pollution both on land and in water bodies, Reecoplast addresses a critical environmental challenge while promoting sustainability</p>
                    </div>
                    <Image
                        alt="A picture of Adriana in her office"
                        src={`/images/photo_5947026960783886266_y.jpg`}
                        fill
                        quality={100}
                        // sizes="(min-width: 808px) 50vw, 100vw"
                        className="z-30 object-cover"
                    />
                </div>
            </div>

        </div>
    );
}
