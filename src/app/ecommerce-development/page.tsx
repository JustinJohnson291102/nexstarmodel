
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { ShoppingCart, Store, Code, Palette, Rocket, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EcommerceDevelopmentPage() {
  const pageData = {
    title: "E-commerce Website Design and Development",
    description: "We build beautiful, high-performing e-commerce websites that turn visitors into loyal customers.",
    heroImage: "https://picsum.photos/seed/ecommerce-hero/1920/1080",
    heroHint: "online shopping",
    features: [
      {
        icon: Store,
        title: "Custom Storefront Design",
        description: "Your brand is unique, and your store should be too. We create bespoke designs that reflect your brand identity and offer an exceptional user experience.",
      },
      {
        icon: Code,
        title: "Platform Expertise (Shopify & WooCommerce)",
        description: "Whether you need the power of Shopify or the flexibility of WooCommerce, our experts will build your store on the right platform for your needs.",
      },
      {
        icon: Palette,
        title: "Mobile-First and Responsive",
        description: "With the majority of online traffic coming from mobile, we design for a flawless experience on every device, from smartphones to desktops.",
      },
      {
        icon: Rocket,
        title: "Conversion Rate Optimization (CRO)",
        description: "A beautiful store is just the beginning. We optimize every element of your site—from product pages to checkout—to maximize sales.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold font-headline mb-4">Build Your Digital Flagship</h2>
                <p>
                  Your e-commerce website is more than just a place to sell products; it's the heart of your online brand. We craft digital shopping experiences that are not only visually stunning but also engineered for performance, security, and scalability.
                </p>
                <p>
                  Our end-to-end e-commerce solutions cover everything from initial strategy and design to development, launch, and ongoing optimization. We are your dedicated partners in building a successful online retail business.
                </p>
              </div>

              <div className="space-y-8">
                {pageData.features.map(feature => (
                  <div key={feature.title} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
               <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><ShoppingCart className="w-7 h-7 text-primary"/>Full-Service E-commerce Solutions</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Custom Theme Development & Customization</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>App Integration and Custom Plugin Development</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Payment Gateway & Shipping Integration</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>SEO & Performance Optimization</span></li>
                  </ul>
                   <Button asChild className="group mt-6">
                    <Link href="/shopify">Learn more about our Shopify Expertise</Link>
                  </Button>
               </div>

            </div>
            <div className="md:col-span-1">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
