"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";
import { generateImage } from "@/ai/flows/generate-image-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [prompt, setPrompt] = useState("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateImage = async () => {
    if (!prompt) {
      toast({
        variant: "destructive",
        title: "Prompt is required",
        description: "Please enter a prompt to generate an image.",
      });
      return;
    }

    startTransition(async () => {
      try {
        const result = await generateImage(prompt);
        if (result && result.imageUrl) {
          const newImage: HeroImage = {
            id: `generated-${Date.now()}`,
            imageUrl: result.imageUrl,
            description: prompt,
          };
          setImages((prevImages) => [...prevImages, newImage]);
          toast({
            title: "Image Generated!",
            description: "The new image has been added to the carousel.",
          });
          setPrompt("");
        } else {
          throw new Error("Image generation failed to return a valid image.");
        }
      } catch (error) {
        console.error("Image generation error:", error);
        toast({
          variant: "destructive",
          title: "Image Generation Failed",
          description:
            "Something went wrong while generating the image. Please try again.",
        });
      }
    });
  };


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
          {images.map((img) => (
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

      <div className="container mx-auto px-4 py-8">
          <div className="max-w-xl mx-auto flex flex-col gap-4">
              <h2 className="text-2xl font-headline font-bold text-center">Generate a New Hero Image</h2>
              <div className="flex w-full items-center space-x-2">
                  <Input
                      type="text"
                      placeholder="e.g., A futuristic cityscape at sunset"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      disabled={isPending}
                  />
                  <Button onClick={handleGenerateImage} disabled={isPending}>
                      {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isPending ? 'Generating...' : 'Generate'}
                  </Button>
              </div>
          </div>
      </div>
    </section>
  );
}
