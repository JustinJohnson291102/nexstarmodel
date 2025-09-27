
"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Scaling,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OurClients from "@/components/homepage/our-clients";

const carouselImages = [
  {
    src: "https://drive.google.com/uc?export=view&id=1AfTs2l2K095QR7q17gzL2eMtfRgIC3y4",
    alt: "Hero Image 1",
    hint: "team brainstorming",
  },
  {
    src: "https://drive.google.com/uc?export=download&id=1SuutNluGyzd-wJChk9VFu-wJ0arkx19X",
    alt: "Hero Image 2",
    hint: "business collage",
  },
  {
    src: "https://drive.google.com/uc?export=download&id=13ktX4VyT7daPwQE1vJGb8gkNd3beWNJt",
    alt: "Hero Image 3",
    hint: "technology collage",
  },
  {
    src: "https://drive.google.com/uc?export=download&id=1H1Raqxyy4go2eLbMchu0yeuEPJ_eO7Am",
    alt: "Hero Image 4",
    hint: "marketing collage",
  },
];

export default function Home() {
  const adAgencyImage = PlaceHolderImages.find(
    (img) => img.id === "service-branding"
  );
  const gamutOfServicesImage = PlaceHolderImages.find(
    (img) => img.id === "service-content"
  );

  return (
    <>
      <section className="relative h-[140vh] w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {carouselImages.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[140vh] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover w-full h-full"
                    priority={index === 0}
                    data-ai-hint={img.hint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
            Innovate. Create. Elevate.
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            We are the architects of your digital success story.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 group animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200"
          >
            <Link href="/services">
              Our Services{" "}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* The rest of your component logic follows: */}
      
      <section className="relative bg-background text-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://picsum.photos/seed/agency/600/400"
                alt="Advertising Agency"
                width={600}
                height={400}
                data-ai-hint="creative team"
                className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
                As an Advertising Agency, We Ignite Brands with Ideas that
                Transform Behaviour
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Across mediums, we have taken both fledgling and legacy brands to
                a new level of success.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/story">
                  View More{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              {gamutOfServicesImage && (
                <Image
                  src={gamutOfServicesImage.imageUrl}
                  alt="Gamut of Services"
                  width={600}
                  height={400}
                  data-ai-hint={gamutOfServicesImage.imageHint}
                  className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
            <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight mb-4">
                Our Gamut of Services are as Diverse as they are Effective
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer a comprehensive suite of services designed to build,
                grow, and sustain your brand's presence. From crafting compelling
                brand identities and driving engagement on social media, to
                developing robust web solutions and executing targeted B2B and
                performance marketing campaigns, our expertise covers the full
                spectrum of digital marketing.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/services">
                  View More{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 animate-in fade-in slide-in-from-bottom-5 duration-500">
              WHO WE ARE
            </h3>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
              A Dynamic Fusion of Creativity & Technology
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              At Nexstar, we are more than just an IT & Media company—we are a
              team of passionate innovators, thinkers, and creators. Our strength
              lies in blending technology with creativity to deliver solutions
              that don't just solve problems, but inspire and engage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <Card className="flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200 bg-card/70">
              <CardHeader className="p-0">
                <Image
                  src="https://picsum.photos/seed/team-passion/600/400"
                  width={600}
                  height={400}
                  alt="Passionate Team"
                  data-ai-hint="passionate team"
                  className="rounded-t-lg object-cover aspect-video"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="font-headline mb-3 flex items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-primary" /> Our Philosophy
                </CardTitle>
                <p className="text-muted-foreground flex-grow">
                  We thrive on challenges and innovation. From cutting-edge IT
                  development to digital marketing, media production, and brand
                  storytelling, our team's diverse expertise ensures we deliver
                  not just services, but experiences that create real impact.
                </p>
                <Button asChild size="sm" className="group mt-4 w-fit">
                  <Link href="/story">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300 bg-card/70">
              <CardHeader className="p-0">
                <Image
                  src="https://picsum.photos/seed/team-collab/600/400"
                  width={600}
                  height={400}
                  alt="Team Collaboration"
                  data-ai-hint="team collaboration"
                  className="rounded-t-lg object-cover aspect-video"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="font-headline mb-3 flex items-center gap-3">
                  <Users className="w-7 h-7 text-primary" /> Our Approach
                </CardTitle>
                <p className="text-muted-foreground flex-grow">
                  We believe in collaboration, growth, and pushing boundaries. We
                  work as an extension of your team, ensuring that our solutions
                  are perfectly aligned with your vision and goals to help you
                  achieve lasting success in today’s digital-first world.
                </p>
                <Button asChild size="sm" className="group mt-4 w-fit">
                  <Link href="/contact">
                    Partner with Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-500 delay-400 bg-card/70">
              <CardHeader className="p-0">
                <Image
                  src="https://picsum.photos/seed/global-reach/600/400"
                  width={600}
                  height={400}
                  alt="Global Reach"
                  data-ai-hint="global network"
                  className="rounded-t-lg object-cover aspect-video"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="font-headline mb-3 flex items-center gap-3">
                  <Scaling className="w-7 h-7 text-primary" /> Our Global
                  Presence
                </CardTitle>
                <p className="text-muted-foreground flex-grow">
                  With our headquarters in New York, and specialized offices in
                  the UK and India, we unite creativity, technology, and
                  strategic intelligence to serve diverse international markets
                  and fuel innovation on a worldwide scale.
                </p>
                <Button asChild size="sm" className="group mt-4 w-fit">
                  <Link href="/story">
                    More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <OurClients />

      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight text-white mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
            Architects of Digital Success
          </h1>
          <p className="max-w-3xl mx-auto text-white/90 md:text-xl mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-200">
            From groundbreaking strategies to stunning Shopify stores, we are the
            architects of your digital success. Explore our services and see how
            we can elevate your brand.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/services">
                Our Services{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
