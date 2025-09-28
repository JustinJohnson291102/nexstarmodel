
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { MessageCircle, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "Can the chatbot integrate with our CRM?",
        answer: "Yes, we can integrate your WhatsApp chatbot with most major CRMs and e-commerce platforms to automate lead capture, customer support, and sales processes."
    },
    {
        question: "How long does it take to build a chatbot?",
        answer: "A basic chatbot can be deployed in 2-4 weeks. More complex bots with advanced integrations may take longer. We'll provide a detailed timeline after understanding your requirements."
    },
]

export default function WhatsappChatbotsPage() {
  const pageData = {
    title: "WhatsApp Chatbots",
    description: "Automate customer conversations and drive engagement with AI-powered WhatsApp chatbots.",
    heroImage: "https://picsum.photos/seed/chatbot-interface/1920/1080",
    heroHint: "chatbot conversation",
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
                <h2 className="text-3xl font-bold font-headline mb-4">Engage Customers Where They Are</h2>
                <p>
                 With billions of users, WhatsApp is a powerful channel for customer engagement. Our AI-powered chatbots help you automate conversations, provide 24/7 support, generate leads, and even process orders directly within the app. Deliver a seamless and convenient experience that your customers will love.
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
