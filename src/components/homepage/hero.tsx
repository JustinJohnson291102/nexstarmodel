"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const heroImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("hero-")
  );

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-0">
          {heroImages.map((img) => (
            <CarouselItem key={img.id} className="pl-0">
              <div className="relative h-full w-full">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                  priority={img.id === "hero-1"}
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
            Innovate. Create. Elevate.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            We are a digital agency that builds amazing experiences.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-16 duration-700 delay-400">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Get Started{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
