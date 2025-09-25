
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Store, Brush, Rocket, ShoppingCart, Settings, Repeat } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StoreShowcase from "@/components/shopify/store-showcase";
import Testimonials from "@/components/shopify/testimonials";

const shopifyFeatures = [
  {
    icon: Store,
    title: "Custom Store Design",
    description: "We create stunning, on-brand Shopify themes from scratch that capture your audience and reflect your identity.",
    image: { src: "https://picsum.photos/seed/shopify-design/600/400", hint: "web design" }
  },
  {
    icon: Brush,
    title: "Theme Customization",
    description: "Modify existing themes to match your specific needs, adding custom features and functionality for a unique feel.",
    image: { src: "https://picsum.photos/seed/shopify-theme/600/400", hint: "ui customization" }
  },
  {
    icon: Rocket,
    title: "App Integration & Development",
    description: "Extend your store's capabilities with custom Shopify apps or seamless integration of third-party solutions.",
    image: { src: "https://picsum.photos/seed/shopify-apps/600/400", hint: "app development" }
  },
  {
    icon: ShoppingCart,
    title: "Conversion Rate Optimization",
    description: "We analyze user behavior and optimize your store's layout and funnels to turn more visitors into customers.",
    image: { src: "https://picsum.photos/seed/shopify-cro/600/400", hint: "sales funnel" }
  },
  {
    icon: Settings,
    title: "Migration to Shopify",
    description: "Seamlessly migrate your existing e-commerce store from any platform to Shopify with zero data loss.",
    image: { src: "https://picsum.photos/seed/shopify-migrate/600/400", hint: "data migration" }
  },
  {
    icon: Repeat,
    title: "Ongoing Support & Maintenance",
    description: "Keep your store running smoothly with our reliable support, updates, and performance monitoring services.",
    image: { src: "https://picsum.photos/seed/shopify-support/600/400", hint: "customer support" }
  },
];

const heroImages = [
    { id: "shopify-hero-1", src: "https://picsum.photos/seed/shopify-hero-1/1920/1080", alt: "E-commerce website on a laptop" },
    { id: "shopify-hero-2", src: "https://picsum.photos/seed/shopify-hero-2/1920/1080", alt: "Online shopping experience" },
    { id: "shopify-hero-3", src: "https://picsum.photos/seed/shopify-hero-3/1920/1080", alt: "Person holding a credit card" },
];

export default function ShopifyPage() {
  return (
    <div className="bg-background">
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
              Expert Shopify Development
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
              From stunning storefronts to powerful back-end solutions, we build Shopify experiences that sell.
            </p>
        </div>
      </section>

       <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/shopify-services-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Our Shopify Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              We offer a complete suite of Shopify services to launch, manage, and grow your e-commerce business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopifyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full group text-left bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 overflow-hidden">
                   <CardHeader className="p-0">
                    <div className="relative aspect-video w-full">
                       <Image
                        src={feature.image.src}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={feature.image.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-start gap-3">
                        <div className="bg-primary/50 backdrop-blur-sm p-3 rounded-lg border border-primary-foreground/20">
                          <feature.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl leading-tight mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              Beautiful Stores, Built to Convert
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              We design and develop beautiful, high-converting Shopify stores
              that customers love. Check out some of our work.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200">
            <StoreShowcase />
          </div>
        </div>
      </section>

       <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/shopify-testimonials-bg/1920/1080')` }}
       >
         <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              What Our Clients Say
            </h2>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
            <Testimonials />
          </div>
        </div>
      </section>

       <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Build Your Shopify Empire?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Let's talk about your project. Whether you're starting from scratch or looking to optimize your existing store, our Shopify experts are ready to help you succeed.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
