
"use client";

import Image from "next/image";

const clientLogos = [
  { src: "https://drive.google.com/uc?export=view&id=14j2sZyJV1YATRiyJSg2E0_O9DjPk8-D6", alt: "Client 1" },
  { src: "https://drive.google.com/uc?export=view&id=1OAzH7GHcGCN6uL4BKLX9p8y5iZSRZMvk", alt: "Client 2" },
  { src: "https://drive.google.com/uc?export=view&id=1Y9ZIuky4ZjFZ1-VanWgVjRIzvPHXC5ST", alt: "Client 3" },
  { src: "https://drive.google.com/uc?export=view&id=19gJl3oMZllb5sM3D7N8eTmk6wilyJt3A", alt: "Client 4" },
  { src: "https://drive.google.com/uc?export=view&id=1O0XMxmIkw4H0OcKXAsOAWvxtlfnM8df5", alt: "Client 5" },
  { src: "https://drive.google.com/uc?export=view&id=1KJ5dH544HRp4MALUuHvcbdYTk1pHkq0F", alt: "Client 6" },
  { src: "https://drive.google.com/uc?export=view&id=1d7KIVO44tAxicBtKHyl38-N2DCbUC_Ww", alt: "Client 7" },
  { src: "https://drive.google.com/uc?export=view&id=1FtVMODKP_rrtPliRW_JBsTA5YTyVgNNI", alt: "Client 8" },
  { src: "https://drive.google.com/uc?export=view&id=1_Vjppvim9Ug8jWFP3FYcreN2IvyuS_VF", alt: "Client 9" },
];

export default function OurClients() {
  const extendedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-primary text-3xl md:text-5xl font-bold tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
            Our Clients
          </h2>
          <div
            className="relative flex overflow-x-hidden"
          >
            <div className="py-2 animate-marquee-slow whitespace-nowrap flex">
              {extendedLogos.map((logo, index) => (
                <div key={index} className="mx-8 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={75}
                    className="object-contain h-16 w-auto"
                  />
                </div>
              ))}
            </div>

            <div className="absolute top-0 py-2 animate-marquee2-slow whitespace-nowrap flex">
              {extendedLogos.map((logo, index) => (
                <div key={index} className="mx-8 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={75}
                    className="object-contain h-16 w-auto"
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

    