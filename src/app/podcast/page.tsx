
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mic, Headphones, PlayCircle, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-primary text-primary-foreground"
      >
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Mic className="h-20 w-20 mx-auto mb-4 text-primary-foreground" />
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
            Nexstar Insights
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your weekly dose of digital marketing trends, strategies, and success stories.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
              Latest Episodes
            </h2>
            <p className="text-lg text-muted-foreground mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              Tune in to our latest conversations with industry leaders and innovators.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {episodes.map((episode, index) => (
              <Card 
                key={episode.title} 
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative aspect-video md:aspect-auto">
                    <Image
                      src={episode.image.src}
                      alt={episode.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={episode.image.hint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                       <div className="flex justify-between items-center">
                        <Badge variant="secondary">{episode.category}</Badge>
                        <span className="text-xs font-semibold text-muted-foreground">{episode.episodeNumber}</span>
                       </div>
                       <CardTitle className="font-headline text-xl mt-2 leading-tight">{episode.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{episode.description}</p>
                       <div className="flex flex-wrap gap-2">
                        {episode.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                       <Button className="w-full">
                         <PlayCircle className="mr-2 h-5 w-5" /> Listen Now
                       </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
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

    