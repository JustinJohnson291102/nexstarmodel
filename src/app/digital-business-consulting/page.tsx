
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Lightbulb, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "What is digital business consulting?",
        answer: "It's a strategic service designed to help businesses leverage technology and digital channels to achieve their goals. This includes developing digital transformation roadmaps, advising on technology stacks, and improving operational efficiency through digital solutions."
    },
    {
        question: "How can consulting benefit my business?",
        answer: "Our consulting services can help you identify new growth opportunities, optimize your existing processes, gain a competitive edge, and ensure a higher ROI on your technology investments."
    },
]

export default function DigitalBusinessConsultingPage() {
  const pageData = {
    title: "Digital Business Consulting",
    description: "Navigate the complexities of the digital landscape with our expert guidance and strategic insights.",
    heroImage: "https://picsum.photos/seed/business-consulting/1920/1080",
    heroHint: "business consulting",
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
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
                <h2 className="text-3xl font-bold font-headline mb-4">Your Strategic Partner in Digital Growth</h2>
                <p>
                 In today's fast-paced market, having a clear digital strategy is crucial for success. Our digital business consulting services provide you with the expertise and roadmap needed to thrive. We help you navigate digital transformation, choose the right technologies, and optimize your operations for maximum efficiency and growth.
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

    