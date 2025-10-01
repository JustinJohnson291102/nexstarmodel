"use client";

import Image from "next/image";

// 🔥 FIX: URLs ko working content links (uc?id=FILE_ID) mein change kiya gaya hai.
const clientLogos = [
  { src: "https://drive.google.com/uc?export=download&id=1zCWkBc3CvzOA1aJLOPqNWK0CvhRY0XjG", alt: "Client 9" },
  { src: "https://drive.google.com/uc?export=download&id=1j2qPrDz4DksDoFWUlcw4SH_FzIqyKT4W", alt: "Client 8" },
  { src: "https://drive.google.com/uc?export=download&id=1Z0qzQSkiuCXCfBTFByuLTTTUK8_5TJQq", alt: "Client 7" },
  { src: "https://drive.google.com/uc?export=download&id=1V-1ZN6YRSXiFwrg8SC2fZ40pacv20LSu", alt: "Client 6" },
  { src: "https://drive.google.com/uc?export=download&id=1R7erTvruugfy6TonWIEYiAYDClLZKT_V", alt: "Client 5" },
  { src: "https://drive.google.com/uc?export=download&id=1PPd2IcOvjjNdjXkGB0ujmfFv6SideA63", alt: "Client 4" },
  { src: "https://drive.google.com/uc?export=download&id=1MtWFo7keLU5ReO-1Bvda0ZlQqwYugEAp", alt: "Client 3" },
  { src: "https://drive.google.com/uc?export=download&id=1L7f9fjN0-jQc349EcttHLhnj0JyZqZph", alt: "Client 2" },
  { src: "https://drive.google.com/uc?export=download&id=1Kd0-0XP3HgMxJq7KEQXb2ZMGcS5KU0l8", alt: "Client 1" },
];

export default function OurClients({ showTitle = true }: { showTitle?: boolean }) {
  // Continuous loop ke liye logos ko duplicate kiya gaya hai
  const extendedLogos = [...clientLogos, ...clientLogos]; 
  
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {showTitle && (
            <h2 className="font-headline text-primary text-2xl md:text-3xl font-bold tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
              Our Clients
            </h2>
          )}
          <div
            // Main container: flex, overflow-x-hidden, aur w-full
            className="relative flex overflow-x-hidden w-full group"
          >
            {/* Pehla set: w-max aur flex-shrink-0 continuous strip ensure karte hain */}
            <div className="flex w-max animate-marquee-slow flex-shrink-0">
              {extendedLogos.map((logo, index) => (
                <div key={`set1-${index}`} className="mx-10 flex items-center justify-center h-24 opacity-50 transition-opacity duration-300 hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={195}
                    height={98}
                    className="object-contain h-24 w-auto"
                  />
                </div>
              ))}
            </div>

            {/* Doosra set: Loop ko complete karta hai */}
            <div className="flex w-max animate-marquee-slow flex-shrink-0" aria-hidden="true">
              {extendedLogos.map((logo, index) => (
                <div key={`set2-${index}`} className="mx-10 flex items-center justify-center h-24 opacity-50 transition-opacity duration-300 hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={195}
                    height={98}
                    className="object-contain h-24 w-auto"
                  />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
