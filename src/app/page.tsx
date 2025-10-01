
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
    src: "https://drive.google.com/uc?export=download&id=1Dr2V-q3ZFyhPXSR9uP-1dHWAxF5NSXSS",
    alt: "Hero Image 1",
    hint: "team brainstorming",
  },
  {
    src: "https://drive.google.com/uc?export=download&id=1AfTs2l2K095QR7q17gzL2eMtfRgIC3y4",
    alt: "Hero Image 2",
    hint: "digital marketing",
  },
  {
    src: "https://drive.google.com/uc?export=download&id=1SuutNluGyzd-wJChk9VFu-wJ0arkx19X",
    alt: "Hero Image 3",
    hint: "business collage",
  },
  {
    src: "https://drive.google.com/uc?export=download&id=1S7D9GO56ZmKdoLWU9FVOI8dsDTBRgz94",
    alt: "Hero Image 4",
    hint: "technology collage",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full">
        <section className="relative h-[130vh] w-full">
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
                  <div className="relative h-[130vh] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain w-full h-full"
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
            <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              Innovate. Create. Elevate.
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
              We are the architects of your digital success story.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 group"
            >
              <Link href="/services">
                Our Services{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      <section className="relative bg-background text-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                Driving Digital Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Nexstar Media, we blend creativity with technology to deliver comprehensive digital solutions. From crafting compelling brand narratives to deploying cutting-edge web technologies, our mission is to elevate your brand's digital presence and drive measurable success.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <video
                      src="https://drive.google.com/uc?export=download&id=1zmqioP8bzyWC68vRS-iQKueqe2RpFA_f"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    ></video>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative bg-secondary text-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10 space-y-20 md:space-y-32">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
               <Image
                 src="https://picsum.photos/seed/ad-agency-professional/800/400"
                 alt="Advertising Agency"
                 width={800}
                 height={400}
                 data-ai-hint="advertising agency"
                 className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
               />
            </div>
             <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
               <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                 As an Advertising Agency
               </h2>
               <ul className="space-y-3 text-lg text-muted-foreground mb-8 list-disc pl-5">
                 <li>We are a hybrid with the chutzpah of a millennial and the experience of a Gen X.</li>
                 <li>We are agile and connect the dots quicker.</li>
                 <li>We believe the future of Communications lies in the 4Es of Engagement, Exclusivity, Emotion, and Experience.</li>
               </ul>
               <Button asChild size="lg" className="group" variant="outline">
                 <Link href="/story">
                   Our Story{" "}
                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </Button>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://picsum.photos/seed/service-gamut-professional/800/400"
                alt="Gamut of Services"
                width={800}
                height={400}
                data-ai-hint="marketing services"
                className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                Our Gamut of Services
              </h2>
              <ul className="space-y-3 text-lg text-muted-foreground mb-8 list-disc pl-5">
                 <li>We offer a comprehensive suite to build, grow, and sustain your brand's presence.</li>
                 <li>From compelling brand identities to robust web solutions and targeted marketing.</li>
                 <li>Our expertise covers the full spectrum of digital marketing.</li>
              </ul>
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

      <section className="relative py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 animate-in fade-in slide-in-from-bottom-5 duration-500">
              WHO WE ARE
            </h3>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
              A Dynamic Fusion of Creativity &amp; Technology
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              At Nexstar, we are more than just an IT &amp; Media company—we are a
              team of passionate innovators, thinkers, and creators. Our strength
              lies in blending technology with creativity to deliver solutions
              that don't just solve problems, but inspire and engage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <Card className="flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200 bg-card/70">
              <CardHeader className="p-0">
                <Image
                  src="https://picsum.photos/seed/team-passion-professional/800/400"
                  width={800}
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
                  src="https://picsum.photos/seed/team-collab-professional/800/400"
                  width={800}
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
                  src="https://picsum.photos/seed/global-reach-professional/800/400"
                  width={800}
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
