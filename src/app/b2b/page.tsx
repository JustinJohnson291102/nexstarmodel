
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart, BrainCircuit, Goal, MessageCircle, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const b2bServices = [
  {
    icon: Goal,
    title: "Account-Based Marketing (ABM)",
    description: "Target high-value accounts with personalized campaigns that treat individual accounts as markets in their own right.",
    image: {
      src: "https://picsum.photos/seed/abm/600/400",
      hint: "marketing target",
    }
  },
  {
    icon: Users,
    title: "Lead Generation & Nurturing",
    description: "Build a robust pipeline of qualified leads and nurture them through the sales funnel with targeted content and automation.",
    image: {
      src: "https://picsum.photos/seed/lead-gen/600/400",
      hint: "sales funnel",
    }
  },
  {
    icon: BrainCircuit,
    title: "B2B Content Strategy",
    description: "Establish thought leadership and attract your target audience with valuable, relevant, and consistent content.",
     image: {
      src: "https://picsum.photos/seed/content-strategy/600/400",
      hint: "content creation",
    }
  },
  {
    icon: BarChart,
    title: "Marketing & Sales Analytics",
    description: "Leverage data to optimize your marketing efforts, measure ROI, and align your sales and marketing teams.",
     image: {
      src: "https://picsum.photos/seed/analytics/600/400",
      hint: "data analytics",
    }
  },
];

const heroImages = [
    { id: "b2b-hero-user", src: "https://drive.google.com/uc?export=view&id=1AE28XsAlQULX_HMzq7K9a67Ks316H9Dq", alt: "Business meeting" },
    { id: "b2b-hero-2", src: "https://picsum.photos/seed/b2b-hero-2/1920/1080", alt: "Data analytics dashboard" },
    { id: "b2b-hero-3", src: "https://picsum.photos/seed/b2b-hero-3/1920/1080", alt: "Team collaborating" },
]


export default function B2BPage() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "b2b-hero"
  );

  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
        <Carousel
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
          className="absolute inset-0 w-full h-full"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {heroImages.map((img) => (
              <CarouselItem key={img.id}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 px-4 text-white">
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
              B2B Marketing
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
              Fueling Growth with Strategic Connections
            </p>
        </div>
      </section>

      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/b2b-services/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Strategic B2B Marketing to Fuel Your Growth
            </h2>
            <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              In the complex world of B2B, a one-size-fits-all approach doesn't work. We craft bespoke marketing strategies that connect you with your ideal customers, shorten sales cycles, and deliver measurable results. Our approach is built on a deep understanding of your industry, your business objectives, and your customers' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full group text-left bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video w-full">
                       <Image
                        src={service.image.src}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={service.image.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-start gap-3">
                        <div className="bg-primary/50 backdrop-blur-sm p-3 rounded-lg border border-primary-foreground/20">
                          <service.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                     <CardTitle className="font-headline text-xl leading-tight mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/b2b-solutions/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
              Integrated B2B Marketing Solutions Tailored to Your Brand
            </h2>
            <div className="text-lg text-white/90 space-y-6">
              <p>
                At Xebec, we specialize in GTM -Go to Market Strategy , helping B2B and technology companies launch their products or service and achieve their goals with customized digital marketing strategies rooted in their brand's purpose.
              </p>
              <p>
                Our approach combines real-world objectives, data-driven insights, relatable and relevant content ,out of the box creativity, and ROI-focused strategies to deliver results that matter. We believe in breaking down silos to create cohesive, sustainable marketing plans that ensure all efforts work together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Elevate Your B2B Strategy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Let's talk about how we can help you achieve your business goals. Whether you're looking to generate more leads, increase brand awareness, or drive revenue, our team of B2B marketing experts is here to help.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
