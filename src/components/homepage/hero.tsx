"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const heroImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("hero-")
  );

  return (
    <section className="w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {heroImages.map((img) => (
            <CarouselItem key={img.id}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                  priority={img.id === "hero-1"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
