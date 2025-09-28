
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Rocket, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "How quickly can you launch a website?",
        answer: "Our rapid development process allows us to launch simple websites in as little as 1-2 weeks. The exact timeline depends on the complexity and your content readiness."
    },
    {
        question: "Is a rapidly developed website scalable?",
        answer: "Yes. We build on robust platforms like WordPress, which are highly scalable. You can start with a simple site and easily add more features, pages, and functionality as your business grows."
    },
]

export default function RapidWebsiteDevelopmentPage() {
  const pageData = {
    title: "Rapid Website Development",
    description: "Launch your online presence in record time with our efficient and agile website development services.",
    heroImage: "https://picsum.photos/seed/fast-launch/1920/1080",
    heroHint: "rocket launch",
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
                <h2 className="text-3xl font-bold font-headline mb-4">Go from Idea to Launch, Faster Than Ever</h2>
                <p>
                  A rapid development method is a relatively new method designed to make software development processes run more smoothly and faster. It is lighter and less labor intensive than traditional software development methods. Our rapid development service is perfect for startups, marketing campaigns, or businesses needing to get online quickly without compromising on quality.
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

    