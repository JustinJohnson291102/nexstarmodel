

import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";

type HeroImage = {
  id: string;
  imageUrl: string;
  description: string;
  imageHint?: string;
};

export default function Hero() {
  const initialImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("hero-")
  );
  
  const [images, setImages] = useState<HeroImage[]>(initialImages);
  
  return (
    <section className="w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            playOnInit: true,
          }),
        ]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.id}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <img
                  src={img.imageUrl}
                  alt={img.description}
                 
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                  loading="eager"={img.id === "hero-1"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
