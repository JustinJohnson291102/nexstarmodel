
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mic, Headphones, PlayCircle, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const episodes = [
  {
    title: "The Future of Digital Marketing",
    category: "Marketing Trends",
    description: "An in-depth discussion on how AI, machine learning, and data analytics are shaping the future of the marketing industry.",
    image: { src: "https://picsum.photos/seed/podcast-future/800/600", hint: "futuristic marketing" },
    tags: ["AI", "Data Analytics", "Marketing"],
    episodeNumber: "Ep. 12",
  },
  {
    title: "Building a Brand That Lasts",
    category: "Branding",
    description: "Experts share their secrets on creating a strong brand identity that resonates with audiences and stands the test of time.",
    image: { src: "https://picsum.photos/seed/podcast-branding/800/600", hint: "brand identity" },
    tags: ["Branding", "Strategy", "Storytelling"],
    episodeNumber: "Ep. 11",
  },
  {
    title: "The Art of Conversion Rate Optimization",
    category: "E-commerce",
    description: "Learn the techniques and tools used by top professionals to turn website visitors into loyal customers.",
    image: { src: "https://picsum.photos/seed/podcast-cro/800/600", hint: "conversion optimization" },
    tags: ["CRO", "E-commerce", "UX"],
    episodeNumber: "Ep. 10",
  },
  {
    title: "Navigating the World of B2B Marketing",
    category: "B2B",
    description: "A deep dive into the unique challenges and opportunities in the B2B marketing landscape, with a focus on ABM and lead nurturing.",
    image: { src: "https://picsum.photos/seed/podcast-b2b/800/600", hint: "b2b strategy" },
    tags: ["B2B", "ABM", "Lead Generation"],
    episodeNumber: "Ep. 09",
  },
    {
    title: "Mastering Social Media Engagement",
    category: "Social Media",
    description: "Explore strategies for creating authentic connections and fostering a vibrant community around your brand on social media.",
    image: { src: "https://picsum.photos/seed/podcast-social/800/600", hint: "social media engagement" },
    tags: ["Community", "Engagement", "Content"],
    episodeNumber: "Ep. 08",
  },
   {
    title: "The Power of Video Storytelling",
    category: "Video Production",
    description: "Discover how to leverage video to tell compelling stories that capture attention and drive action.",
    image: { src: "https://picsum.photos/seed/podcast-video/800/600", hint: "video storytelling" },
    tags: ["Video", "Storytelling", "Production"],
    episodeNumber: "Ep. 07",
  },
];

const featuredGuests = [
  {
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    image: { src: "https://picsum.photos/seed/guest-jane/400", hint: "business woman" },
  },
  {
    name: "John Smith",
    title: "Marketing Guru & Author",
    image: { src: "https://picsum.photos/seed/guest-john/400", hint: "marketing expert" },
  },
  {
    name: "Emily White",
    title: "Head of UX, Creative Solutions",
    image: { src: "https://picsum.photos/seed/guest-emily/400", hint: "ux designer" },
  },
];

export default function PodcastPage() {
  return (
    <div className="bg-background text-foreground">
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center"
      >
        <Image
          src="https://drive.google.com/uc?export=view&id=1eT9LRdRF581FRDSpAeWrdlKlOMuMpYOv"
          alt="Podcast hero background"
          fill
          className="object-cover"
          priority
          data-ai-hint="podcast setup"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Mic className="h-20 w-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
            Nexstar Insights
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your weekly dose of digital marketing trends, strategies, and success stories.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-secondary">
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ backgroundImage: `url('https://picsum.photos/seed/colorful-bg/1920/1080')`}}
          data-ai-hint="colorful abstract"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
              Latest Episodes
            </h2>
            <p className="text-lg text-muted-foreground mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              Tune in to our latest conversations with industry leaders and innovators.
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {episodes.map((episode, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card 
                      className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 h-full flex flex-col"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <CardHeader className="p-0">
                          <div className="relative aspect-video">
                            <Image
                              src={episode.image.src}
                              alt={episode.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={episode.image.hint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                             <div className="absolute top-4 left-4">
                              <Badge variant="secondary">{episode.category}</Badge>
                            </div>
                             <div className="absolute bottom-4 right-4">
                               <div className="bg-primary/50 text-primary-foreground p-3 rounded-full backdrop-blur-sm border border-primary-foreground/20">
                                <Headphones className="h-6 w-6" />
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold text-muted-foreground">{episode.episodeNumber}</span>
                          </div>
                          <CardTitle className="font-headline text-xl mb-3 leading-tight">{episode.title}</CardTitle>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{episode.description}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 mt-auto">
                           <Button className="w-full group/button">
                             <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover/button:scale-110" /> Listen Now
                           </Button>
                        </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          </Carousel>

        </div>
      </section>

      <section
        className="relative py-20 md:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
              Featured Guests
            </h2>
            <p className="text-lg text-white/80 mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              We've had the pleasure of hosting some of the brightest minds in the industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredGuests.map((guest, index) => (
              <div 
                key={guest.name} 
                className="group relative overflow-hidden rounded-lg shadow-2xl animate-in fade-in slide-in-from-bottom-6 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-square">
                    <Image
                        src={guest.image.src}
                        alt={guest.name}
                        fill
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={guest.image.hint}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-headline text-2xl font-bold text-white mb-1">{guest.name}</h3>
                  <p className="text-white/80 text-sm">{guest.title}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-7 duration-500 delay-300">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Become a Guest <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
