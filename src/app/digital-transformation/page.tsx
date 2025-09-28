
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Zap, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "What is digital transformation?",
        answer: "Digital transformation is the process of integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo and experiment."
    },
    {
        question: "Where do we start with digital transformation?",
        answer: "Our process begins with a comprehensive audit of your current processes and technology stack. From there, we work with you to create a prioritized roadmap that focuses on high-impact areas for transformation, ensuring a smooth and successful journey."
    },
]

export default function DigitalTransformationPage() {
  const pageData = {
    title: "Digital Transformation",
    description: "Modernize your operations, automate processes, and embrace a data-driven culture to stay ahead of the curve.",
    heroImage: "https://picsum.photos/seed/business-modernization/1920/1080",
    heroHint: "digital business",
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
                <h2 className="text-3xl font-bold font-headline mb-4">Evolve Your Business for the Digital Age</h2>
                <p>
                 To stay competitive, businesses must adapt. Our digital transformation services help you modernize legacy systems, automate manual processes, and leverage the power of cloud computing and data analytics. We guide you through every step of the journey, from strategy and planning to implementation and change management, ensuring a successful transition to a more agile and efficient organization.
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
