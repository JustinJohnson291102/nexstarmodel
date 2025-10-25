

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function StoreShowcase() {
  const shopifyImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("shopify-store-")
  );

  return (
    <Carousel
      className="w-full max-w-4xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {shopifyImages.map((image, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden group">
                <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                  <img
                    src={image.imageUrl}
                    alt={image.description}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
