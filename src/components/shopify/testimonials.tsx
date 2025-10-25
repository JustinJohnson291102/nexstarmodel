


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Luxe Fashion Co.",
    quote:
      "Digitale Agency transformed our online presence. Our sales have skyrocketed, and we couldn't be happier with the beautiful store they built for us.",
    avatarId: "testimonial-avatar-1",
  },
  {
    name: "Mike Chen",
    company: "Artisan Roast",
    quote:
      "The team's attention to detail and strategic insights were invaluable. They are true partners in our growth.",
    avatarId: "testimonial-avatar-2",
  },
  {
    name: "Jessica Williams",
    company: "Glow Skincare",
    quote:
      "Working with them was a seamless experience. They understood our vision perfectly and delivered beyond our expectations.",
    avatarId: "testimonial-avatar-3",
  },
];

export default function Testimonials() {
  return (
    <Carousel
      className="w-full max-w-5xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial, index) => {
          const avatarImage = PlaceHolderImages.find(
            (img) => img.id === testimonial.avatarId
          );
          return (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-between">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      {avatarImage && (
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage
                            src={avatarImage.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={avatarImage.imageHint}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
