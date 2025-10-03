"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OurClients from "@/components/homepage/our-clients";

const carouselImages = [
  {
    src: "https://ik.imagekit.io/ggelm1lwa/photo-collage.png%20(5).png?updatedAt=1759316955631",
    alt: "Hero Image 1",
    hint: "team brainstorming",
  },
  {
    src: "https://ik.imagekit.io/ggelm1lwa/photo-collage.png%20(3).png?updatedAt=1759317268835",
    alt: "Hero Image 2",
    hint: "digital marketing",
  },
  {
    src: "https://ik.imagekit.io/ggelm1lwa/xebec%20yellow%20banner.jpg?updatedAt=1759468229202",
    alt: "Hero Image 4",
    hint: "yellow banner"
  },
  {
    src: "https://drive.google.com/uc?export=download&id=1AfTs2l2K095QR7q17gzL2eMtfRgIC3y4",
    alt: "Hero Image 3",
    hint: "modern office",
  }
];

const whoWeAreCards = [
    {
      title: "Our Philosophy",
      imageSrc: "https://ik.imagekit.io/ggelm1lwa/philosophy.png?updatedAt=1759315996360",
      imageHint: "passionate team",
      description: "We thrive on challenges and innovation. From cutting-edge IT development to digital marketing, media production, and brand storytelling, our team's diverse expertise ensures we deliver not just services, but experiences that create real impact.",
      link: "/story",
      linkText: "Learn More"
    },
    {
      title: "Our Approach",
      imageSrc: "https://ik.imagekit.io/ggelm1lwa/our%20appraoch.jpg?updatedAt=1759316106995",
      imageHint: "team collaboration",
      description: "We believe in collaboration, growth, and pushing boundaries. We work as an extension of your team, ensuring that our solutions are perfectly aligned with your vision and goals to help you achieve lasting success in today’s digital-first world.",
      link: "/contact",
      linkText: "Partner with Us"
    },
    {
      title: "Our Global Presence",
      imageSrc: "https://ik.imagekit.io/ggelm1lwa/global-business-7042756.webp?updatedAt=1759316191989",
      imageHint: "global network",
      description: "With our headquarters in New York, and specialized offices in the UK and India, we unite creativity, technology, and strategic intelligence to serve diverse international markets and fuel innovation on a worldwide scale.",
      link: "/story",
      linkText: "More About Us"
    },
    {
      title: "Agile Methodology",
      imageSrc: "https://picsum.photos/seed/agile-professional/800/520",
      imageHint: "agile process",
      description: "We embrace an agile and iterative workflow, allowing us to adapt quickly to change, deliver value faster, and ensure a flexible and responsive development process that keeps you ahead of the curve.",
      link: "/story",
      linkText: "Our Process"
    },
    {
      title: "Client-Centric Focus",
      imageSrc: "https://picsum.photos/seed/client-focus/800/520",
      imageHint: "customer satisfaction",
      description: "Your success is our ultimate goal. We are deeply committed to understanding your needs and building strong, lasting relationships based on trust, transparency, and mutual respect.",
      link: "/contact",
      linkText: "Get in Touch"
    },
    {
      title: "Sustainable Growth",
      imageSrc: "https://picsum.photos/seed/growth-eco/800/520",
      imageHint: "sustainable business",
      description: "We focus on building long-term value. Our strategies are designed not just for immediate impact but for sustainable growth, ensuring your digital assets remain effective and relevant for years to come.",
      link: "/services",
      linkText: "Explore Services"
    }
  ];


export default function Home() {
  return (
    <>
       <div className="flex w-full">
        <section className="relative h-[91vh] w-[70%]">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full h-full"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {carouselImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[91vh] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-fill w-full h-full"
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
          </div>
        </section>
        <div className="w-[5%]" />
        <div className="relative w-[25%] h-[91vh] border border-gray-300 rounded-lg overflow-hidden">
          <video 
            src="https://ik.imagekit.io/ggelm1lwa/WhatsApp%20Video%202025-09-30%20at%2010.23.22%20PM.mp4?updatedAt=1759313283558"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      
      <section 
        className="relative bg-cover bg-center bg-fixed text-foreground py-20 md:py-32"
        style={{ backgroundImage: "url('https://ik.imagekit.io/ggelm1lwa/gettyimages-978350096-612x612.jpg?updatedAt=1759319192199')" }}
        >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10 space-y-20 md:space-y-32">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
               <Image
                 src="https://ik.imagekit.io/ggelm1lwa/advertising%20agency%20pics.jpg?updatedAt=1759315547035"
                 alt="Advertising Agency"
                 width={2636}
                 height={4160}
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
                src="https://ik.imagekit.io/ggelm1lwa/advetising%20services.jpg?updatedAt=1759315133641"
                alt="Gamut of Services"
                width={2636}
                height={4160}
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

           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
               <Image
                 src="https://ik.imagekit.io/ggelm1lwa/user%20centric%20designs.jpg?updatedAt=1759315636870"
                 alt="UI/UX Design"
                 width={2636}
                 height={4160}
                 data-ai-hint="colorful ui ux"
                 className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
               />
            </div>
             <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
               <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                 User-Centric Design
               </h2>
               <ul className="space-y-3 text-lg text-muted-foreground mb-8 list-disc pl-5">
                 <li>We create intuitive and beautiful user interfaces that delight users.</li>
                 <li>Our UI/UX process is driven by research and focused on user needs.</li>
                 <li>We design experiences that are not just functional but also memorable.</li>
               </ul>
               <Button asChild size="lg" className="group" variant="outline">
                 <Link href="/web-solutions">
                   See Our Process{" "}
                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </Button>
             </div>
          </div>
          
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://ik.imagekit.io/ggelm1lwa/data%20driven%20startegies.jpg?updatedAt=1759315702177"
                alt="Data-Driven Strategies"
                width={2636}
                height={4160}
                data-ai-hint="vibrant data"
                className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                Data-Driven Strategies
              </h2>
              <ul className="space-y-3 text-lg text-muted-foreground mb-8 list-disc pl-5">
                 <li>We leverage data to make informed decisions and optimize for success.</li>
                 <li>Our analytics-first approach ensures every campaign is measurable.</li>
                 <li>Unlock powerful insights and achieve a higher return on investment.</li>
              </ul>
              <Button asChild size="lg" className="group">
                <Link href="/xtrack">
                  Explore XTrack{" "}
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

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
             plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {whoWeAreCards.map((card, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200 bg-card/70 h-full">
                      <CardHeader className="p-0">
                        <Image
                          src={card.imageSrc}
                          width={800}
                          height={520}
                          alt={card.title}
                          data-ai-hint={card.imageHint}
                          className="rounded-t-lg object-cover aspect-video"
                        />
                      </CardHeader>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <CardTitle className="font-headline mb-3 flex items-center gap-3">
                          <Lightbulb className="w-7 h-7 text-primary" /> {card.title}
                        </CardTitle>
                        <p className="text-muted-foreground flex-grow">
                         {card.description}
                        </p>
                        <Button asChild size="sm" className="group mt-4 w-fit">
                          <Link href={card.link}>
                            {card.linkText}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden xl:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden xl:flex" />
          </Carousel>
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
