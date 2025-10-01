"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Starter Plan",
    price: "$305",
    priceSuffix: "/mo",
    image: "https://drive.google.com/uc?export=download&id=1IfD7fT1xciArdh3tv7vf1rNEiCtuHbyY",
    features: [
      "Ad Budget Less than INR 1 Lakh/M",
      "Any 1 Network Account Set-up (Google Ads, Facebook/Instagram)",
      "Upto 50 Keywords",
      "Contract Min. 30 Days",
      "Text Ads",
      "Display Ads",
      "Shopping Ads",
      "App Installation Ads",
      "Landing Page Selection",
      "GEO Targeting Setup",
      "Setup Conversion Code",
      "Keyword Optimization",
      "Ad Copy Optimization",
      "Keyword Bid Optimization",
      "Landing Page Optimization Consultation",
      "Keyword Refinements (if required)",
      "Bid Refinements (if required)",
      "Google Analytics Setup Basic",
      "Google Ads Conversion Setup",
      "Weekly Reports",
      "Monthly Reports",
      "Advanced Reports",
      "Shared Account Manager",
      "Support: Email, Chat &amp; Call",
      "Landing Page Creation INR 3500 Extra",
    ],
    highlight: false,
  },
  {
    name: "Basic Plan",
    price: "10%",
    priceSuffix: "/Total Budget",
    image: "https://drive.google.com/uc?export=download&id=1nAgNXV4xyznq9D515yopCYigQwB9kLLV",
    features: [
      "Ad Budget 3 Lakh/M",
      "All Network Account Set-up (Google Ads, Facebook)",
      "Upto 100 Keywords",
      "Contract Min. 30 Days",
      "Text Ads",
      "Display Ads",
      "Shopping Ads",
      "App Installation Ads",
      "Landing Page Selection",
      "GEO Targeting Setup",
      "Setup Conversion Code",
      "Competitor Analysis",
      "Keyword Optimization",
      "Ad Copy Optimization",
      "Keyword Bid Optimization",
      "Landing Page Optimization Consultation",
      "CTR Analysis",
      "Keyword Refinements (if required)",
      "Bid Refinements (if required)",
      "Google Analytics Setup Basic",
      "Google Adwords Conversion Setup",
      "Weekly Reports",
      "Monthly Reports",
      "Advanced Reports",
      "Support: Email, Chat and call",
      "Landing Page Creation INR 3500 Extra",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "15%",
    priceSuffix: "/Total Budget",
    image: "https://drive.google.com/uc?export=download&id=1nAgNXV4xyznq9D515yopCYigQwB9kLLV",
    features: [
      "Ad Budget More Than 4 Lakh/M",
      "All Network Account Set-up (Google Ads, Facebook/Instagram)",
      "Unlimited Keywords",
      "Text Ads",
      "Display Ads",
      "Shopping Ads",
      "App Installation Ads",
      "Landing Page Selection",
      "GEO Targeting Setup",
      "Setup Conversion Code",
      "Competitor Analysis",
      "Keyword Optimization",
      "Ad Copy Optimization",
      "Keyword Bid Optimization",
      "Landing Page Optimization Consultation",
      "Landing page design",
      "CTR Analysis",
      "A/B Testing",
      "Keyword Refinements (if required)",
      "Bid Refinements (if required)",
      "Google Analytics Setup Basic",
      "Google Adwords Conversion Setup",
      "Weekly Reports",
      "Monthly Reports",
      "Advanced Reports",
      "Dedicated Account Manager",
      "Support: Email and Chat",
      "Landing Page Creation INR 3500 Extra",
    ],
    highlight: false,
  },
];


export default function PPCPricingPage() {
  return (
    <>
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/ppc-pricing-hero/1920/1080')` }}
        data-ai-hint="ppc advertising"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              PPC Pricing
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Get immediate, targeted traffic with our Pay-Per-Click campaign management plans.
            </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-20">
         <div className="text-center mb-12">
          <p className="text-primary font-semibold text-lg">Best Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mt-2">
            Our PPC Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={cn("flex flex-col h-full", plan.highlight ? "border-primary border-2 shadow-primary/20" : "")}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                <div className="relative w-full h-24 my-4">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-4xl font-bold text-primary pt-4">
                   {plan.price}
                   <span className="text-lg font-medium text-muted-foreground">{plan.priceSuffix}</span>
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {plan.features.map((feature, index) => (
                     <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="flex-grow">{feature}</span>
                      </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Button className="w-full">Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
