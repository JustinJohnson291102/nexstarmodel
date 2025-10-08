
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
import { useState, useEffect } from "react";
import AnimatedText from "@/components/homepage/animated-text";

const newServices = [
    {
      icon: "https://ik.imagekit.io/ggelm1lwa/link%20building.png?updatedAt=1759574875462",
      name: "Link Building",
      description: "Enhance your site’s authority with our strategic link-building services, designed to secure high-quality, relevant links that boost your SEO and online presence.",
    },
    {
      icon: "https://ik.imagekit.io/ggelm1lwa/web%20development.png?updatedAt=1759574875611",
      name: "Web Development",
      description: "Build a tailored, responsive website with our web development services, focusing on user experience, functionality, and modern design to meet your business needs",
    },
    {
      icon: "https://ik.imagekit.io/ggelm1lwa/digital%20marketing.png?updatedAt=1759574875809",
      name: "Digital Marketing",
      description: "Increase your reach with our digital marketing strategies, utilizing cutting-edge tools in social media, email, and content marketing to engage and expand your audience.",
    },
  ];

const baseCarouselImages = [
  {
    src: "https://ik.imagekit.io/ggelm1lwa/xebec%20yellow%20banner.jpg?updatedAt=1759468229202",
    alt: "Hero Image 4",
    hint: "yellow banner"
  },
  {
    src: "https://ik.imagekit.io/ggelm1lwa/mastering%20platform.jpg?updatedAt=1759592307831",
    alt: "Office hero banner",
    hint: "office banner"
  },
  {
    src: "https://ik.imagekit.io/ggelm1lwa/WhatsApp%20Image%202025-10-04%20at%2012.45.11%20PM.jpeg?updatedAt=1759580256883",
    alt: "Office hero banner",
    hint: "office banner"
  },
  {
    src: "https://ik.imagekit.io/ggelm1lwa/officehero1.jpeg?updatedAt=1759562749267",
    alt: "Office hero banner",
    hint: "office banner"
  },
  
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
      imageSrc: "https://ik.imagekit.io/ggelm1lwa/agile%20methodlogy.avif?updatedAt=1759839301965",
      imageHint: "agile process",
      description: "We embrace an agile and iterative workflow, allowing us to adapt quickly to change, deliver value faster, and ensure a flexible and responsive development process that keeps you ahead of the curve.",
      link: "/story",
      linkText: "Our Process"
    },
    {
      title: "Client-Centric Focus",
      imageSrc: "https://ik.imagekit.io/ggelm1lwa/client%20centric%20focus.jpg?updatedAt=1759839371473",
      imageHint: "customer satisfaction",
      description: "Your success is our ultimate goal. We are deeply committed to understanding your needs and building strong, lasting relationships based on trust, transparency, and mutual respect.",
      link: "/contact",
      linkText: "Get in Touch"
    },
    {
      title: "Sustainable Growth",
      imageSrc: "https://ik.imagekit.io/ggelm1lwa/sustainable%20growth.webp?updatedAt=1759839439643",
      imageHint: "sustainable business",
      description: "We focus on building long-term value. Our strategies are designed not just for immediate impact but for sustainable growth, ensuring your digital assets remain effective and relevant for years to come.",
      link: "/services",
      linkText: "Explore Services"
    }
  ];

export default function Home() {

  return (
    <>
      <section className="w-full flex flex-col md:grid md:grid-cols-5 bg-background">
        <div className="relative w-full md:col-span-2 flex items-center justify-center">
          <video 
            src="https://ik.imagekit.io/ggelm1lwa/WhatsApp%20Video%202025-10-08%20at%206.14.02%20PM.mp4?updatedAt=1759927469651"
            className="absolute z-0 top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="relative z-10 flex justify-center items-center h-full py-20 md:py-0">
            <AnimatedText />
          </div>
        </div>
        
        <div className="relative w-full md:col-span-3">
          <Image 
            src="https://ik.imagekit.io/ggelm1lwa/Screenshot%20(52).png?updatedAt=1759926016148" 
            alt="Office hero banner" 
            width={1920}
            height={1080}
            className="object-contain w-full h-auto" 
            data-ai-hint="office banner"
            priority
            quality={100}
          />
        </div>
      </section>
        
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12 max-w-4xl mx-auto">
            Our services cater to clients in India and globally, delivering tailored strategies for effective results.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="relative h-20 w-20 mb-4">
                  <Image src={service.icon} alt={service.name} fill className="object-contain" priority/>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
           <div className="mt-12 relative">
             <video 
              src="https://ik.imagekit.io/ggelm1lwa/6007968_4k_Beautiful_1280x720.mp4?updatedAt=1759927250287"
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex items-center justify-end pr-16">
              <p className="font-cursive text-white text-6xl font-bold">winter glamour</p>
            </div>
          </div>
        </div>
      </section>

       <div className="w-full py-12 bg-white flex justify-center">
        <section className="relative w-full bg-white">
          <div className="text-center pt-2 pb-12 md:pt-4 md:pb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
              Our <span className="text-blue-600">Creative Canvas</span>
            </h2>
            <p className="text-2xl text-foreground mx-auto mt-4 px-4 text-justify max-w-4xl">
              A visual journey through our culture, process, and the moments that define our commitment to building exceptional brands. This is where innovation comes to life.
            </p>
          </div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {baseCarouselImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[720px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`${
                        img.hint === "yellow banner" ? "object-cover" : "object-fill"
                      } w-full h-full`}
                      priority
                      data-ai-hint={img.hint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </div>
      
      <section 
        className="relative text-foreground py-12 md:py-20 bg-background"
        >
        <div className="container mx-auto px-4 relative z-10 space-y-12 md:space-y-20">
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
               <Image
                 src="https://ik.imagekit.io/ggelm1lwa/5bbc85f4895a1.jpg?updatedAt=1759850326755"
                 alt="Advertising Agency"
                 width={2636}
                 height={4160}
                 data-ai-hint="advertising agency"
                 className="rounded-lg w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                 priority
               />
            </div>
             <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
               <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
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

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://ik.imagekit.io/ggelm1lwa/advetising%20services.jpg?updatedAt=1759315133641"
                alt="Gamut of Services"
                width={2636}
                height={4160}
                data-ai-hint="marketing services"
                className="rounded-lg w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
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

           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
               <Image
                 src="https://ik.imagekit.io/ggelm1lwa/pexels-pixabay-221185.jpg?updatedAt=1759850785263"
                 alt="UI/UX Design"
                 width={2636}
                 height={4160}
                 data-ai-hint="colorful ui ux"
                 className="rounded-lg w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                 priority
               />
            </div>
             <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
               <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
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
          
           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://ik.imagekit.io/ggelm1lwa/pexels-tima-miroshnichenko-7567595.jpg?updatedAt=1759849043340"
                alt="Data-Driven Strategies"
                width={2636}
                height={4160}
                data-ai-hint="vibrant data"
                className="rounded-lg w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
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

      <section className="relative py-8 bg-background overflow-hidden">
        <video 
            src="https://ik.imagekit.io/ggelm1lwa/WhatsApp%20Video%202025-10-01%20at%205.42.02%20PM.mp4?updatedAt=1759320826895"
            className="absolute z-0 top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 pt-8">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-primary mb-2 animate-in fade-in slide-in-from-bottom-5 duration-500">
              WHO WE ARE
            </h3>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
              A Dynamic Fusion of Creativity &amp; Technology
            </h2>
            <p className="text-foreground text-base md:text-lg max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
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
                    <Card className="flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200 bg-card/70 h-full rounded-xl">
                      <CardHeader className="p-0 overflow-hidden rounded-xl">
                        <div className="relative w-full aspect-video overflow-hidden">
                          <Image
                            src={card.imageSrc}
                            width={800}
                            height={520}
                            alt={card.title}
                            data-ai-hint={card.imageHint}
                            className='rounded-xl w-full h-full transition-transform duration-500 hover:scale-105 object-fill'
                            priority
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <CardTitle className="font-headline mb-3 flex items-center gap-3 text-xl md:text-2xl">
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
             <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          </Carousel>

        </div>
      </section>

      <OurClients />

      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
            Architects of Digital Success
          </h1>
          <p className="max-w-3xl mx-auto text-white/90 text-base md:text-xl mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-200">
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
