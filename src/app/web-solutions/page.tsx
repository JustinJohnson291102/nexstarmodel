
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, Search, FileScan, LocateFixed, Users, Rocket, TrendingUp, Briefcase, Replace, ShoppingCart, Smartphone, Tablet } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const approachSteps = [
  {
    icon: FileScan,
    text: "Audit & Discovery",
    description: "We audit your digital marketing, communication, and assets to identify gaps."
  },
  {
    icon: LocateFixed,
    text: "Strategy & Design",
    description: "We dive deep into understanding your brand to craft a tailored design and content strategy."
  },
  {
    icon: Rocket,
    text: "Development & Execution",
    description: "Our team executes the campaign with precision, bringing your vision to life."
  },
  {
    icon: Replace,
    text: "Optimization & Maintenance",
    description: "We continuously monitor, maintain, and re-optimize for peak performance."
  },
];

const shopifyServices = [
  {
    number: "01",
    text: "Shopify Store Maintenance, adding extensions, & customizations.",
  },
  {
    number: "02",
    text: "WooCommerce Store Setup, configuration, & customization.",
  },
  {
    number: "03",
    text: "HTML5 Website Design, development, & maintenance.",
  },
  {
    number: "04",
    text: "Full-stack Web Development services for custom applications.",
  },
];

const webTechFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "We prioritize a seamless experience on mobile, ensuring your site looks perfect on any device.",
  },
  {
    icon: Tablet,
    title: "Responsive Layouts",
    description: "Our fluid grid concepts ensure your content adapts beautifully to any browser size or screen.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Expertise",
    description: "From Shopify to WooCommerce, we build online stores that are both beautiful and profitable.",
  }
];


export default function WebSolutionsPage() {
  return (
    <>
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/web-solutions-hero/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white mb-4">
            Responsive Website <br /> Development Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Creating intelligent interfaces that adapt to a changing technological landscape.
          </p>
        </div>
      </section>
      
      <section 
        className="py-20 md:py-24 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/web-interfaces/1920/1080')` }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Creating Intelligent Interfaces that Adapt
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              How can a website design adjust to your technology diversities? By being intelligent enough to adapt itself beautifully. We design engagingly-simple, full-screen experiences from a mobile-first perspective, using fluid grid concepts so your content adapts fluidly to any browser size.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
            {webTechFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold font-headline mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-20 md:py-24 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/web-approach/1920/1080')` }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-16 text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
            Our Strategic Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
            {approachSteps.map((item, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg font-headline mb-2">{item.text}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="bg-sky-100 dark:bg-sky-900/30 p-8 md:p-12 rounded-lg relative overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                 <h3 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-8">
                  E-commerce & Web Development Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {shopifyServices.map((service) => (
                    <div key={service.number} className="flex items-start gap-4 group">
                      <p className="text-5xl font-headline font-bold text-primary/30 transition-colors duration-300 group-hover:text-primary/70 -mt-2">{service.number}</p>
                      <p className="text-foreground mt-1">{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
               <div className="relative w-full h-64 md:h-full hidden md:block">
                 <Image 
                  src="https://drive.google.com/uc?export=view&id=11-Xo0IYsoGYRhld3EXBvkuJUY6OcjBYw"
                  alt="E-commerce cartoon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 md:py-24 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/web-custom/1920/1080')` }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                <Image
                  src="https://picsum.photos/seed/websolutions/600/400"
                  alt="Web Solutions"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  data-ai-hint="web design"
                />
              </div>
              <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                <h2 className="text-3xl font-bold font-headline mb-4">Custom Web Development</h2>
                <p className="text-muted-foreground mb-6">
                  We create stunning, responsive, and user-friendly websites tailored to your brand. Our development process focuses on performance, scalability, and providing a seamless user experience across all devices. Whether you need a simple landing page or a complex web application, we have the expertise to deliver.
                </p>
                <Button asChild className="group">
                  <Link href="/contact">
                    Start a Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
             <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
              <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
                <Image
                  src="https://picsum.photos/seed/shopifydev/600/400"
                  alt="Shopify Development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  data-ai-hint="ecommerce development"
                />
              </div>
              <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
                <h2 className="text-3xl font-bold font-headline mb-4">Shopify Development</h2>
                <p className="text-muted-foreground mb-6">
                  As Shopify experts, we build beautiful and high-converting e-commerce stores. From theme customization to app integration, we provide end-to-end solutions to help you succeed in the competitive online market.
                </p>
                <Button asChild className="group">
                  <Link href="/shopify">
                    Learn about Shopify <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
