
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Palette, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "What's the difference between branding and digital branding?",
        answer: "While traditional branding sets the overall strategy, digital branding focuses on how your brand is expressed online. This includes your website, social media profiles, digital content, and online advertising, ensuring a consistent and compelling brand experience across all digital touchpoints."
    },
    {
        question: "Why is a digital brand guide important?",
        answer: "A digital brand guide ensures consistency across all your online channels. It provides clear rules for using your logo, colors, fonts, and brand voice in a digital context, which is crucial for building a strong, recognizable brand identity."
    },
]

export default function DigitalBrandingPage() {
  const pageData = {
    title: "Digital Branding",
    description: "Craft a consistent and compelling brand identity across all your digital touchpoints.",
    heroImage: "https://picsum.photos/seed/digital-brand-id/1920/1080",
    heroHint: "digital identity",
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
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
                <h2 className="text-3xl font-bold font-headline mb-4">Build a Brand That Thrives Online</h2>
                <p>
                 In the digital world, your brand is more than a logo; it's an experience. Our digital branding services focus on creating a cohesive and powerful brand presence across your website, social media, and all other digital channels. We develop your online brand identity, content strategy, and digital brand guidelines to ensure you connect with your audience in a meaningful and memorable way.
                </p>
              </div>

            </div>
            <div className="md:col-span-1">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <OurClients />

       <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
             <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
