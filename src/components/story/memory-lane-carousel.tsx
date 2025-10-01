"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const images = [
  "https://drive.google.com/uc?export=download&id=1dxWqXHY_etcuQGpjAui9V_mTsV5CtaQk",
  "https://drive.google.com/uc?export=download&id=1uv0gk9SPWCyStyE8qt1uCFceH4FG6yoz",
  "https://drive.google.com/uc?export=download&id=1fuVNxekxY3OFM_P7OjHoBnSAb1lP0b0I",
];

const MemoryLaneCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/3 pl-2"
            >
              <div
                className={cn(
                  "relative aspect-video transition-transform duration-500 ease-out",
                  index === selectedIndex ? "scale-110" : "scale-75 opacity-50"
                )}
              >
                <Image
                  src={src}
                  alt={`Memory lane image ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryLaneCarousel;
