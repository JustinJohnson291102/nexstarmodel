
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { MessageCircle, Bot, Zap, TrendingUp, CheckCircle, HelpCircle, Users, ShoppingCart, BookOpen, Heart, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const chatbotFeatures = [
    {
        icon: Bot,
        title: "AI-Powered Conversations",
        description: "Utilize Natural Language Processing (NLP) to understand and respond to user queries in a human-like manner.",
    },
    {
        icon: Zap,
        title: "24/7 Automated Support",
        description: "Provide instant answers to common questions, freeing up your support team to handle more complex issues.",
    },
    {
        icon: TrendingUp,
        title: "Lead Generation & Qualification",
        description: "Engage potential customers, collect their information, and qualify leads automatically, right within WhatsApp.",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Integration",
        description: "Allow users to browse products, get recommendations, and even complete purchases without leaving the chat.",
    },
     {
        icon: Users,
        title: "CRM & System Integration",
        description: "Seamlessly sync conversation data with your CRM and other business systems for a unified customer view.",
    },
     {
        icon: MessageCircle,
        title: "Broadcast & Notifications",
        description: "Send personalized updates, promotions, and reminders to your audience at scale (in compliance with WhatsApp policies).",
    }
];

const useCases = [
    { icon: ShoppingCart, title: "E-commerce", description: "Order tracking, product recommendations, abandoned cart recovery." },
    { icon: Heart, title: "Healthcare", description: "Appointment scheduling, medication reminders, health tips." },
    { icon: BookOpen, title: "Education", description: "Course information, admission queries, student support." },
];

const processSteps = [
    { number: "01", title: "Discovery & Strategy", description: "We analyze your business needs and define the chatbot's goals and conversation flow." },
    { number: "02", title: "Development & AI Training", description: "Our team builds the chatbot and trains the AI model with relevant data to ensure accurate responses." },
    { number: "03", title: "Integration", description: "We integrate the chatbot with your existing systems like CRM, e-commerce platforms, and databases." },
    { number: "04", title: "Testing & Launch", description: "Rigorous testing is conducted before deploying the chatbot to your live WhatsApp Business account." },
    { number: "05", title: "Optimization", description: "We continuously monitor performance and refine the chatbot to improve user experience and effectiveness." },
];

const faqs = [
    {
        question: "Can the chatbot integrate with our CRM?",
        answer: "Yes, we can integrate your WhatsApp chatbot with most major CRMs (like Salesforce, HubSpot) and e-commerce platforms to automate lead capture, customer support, and sales processes."
    },
    {
        question: "How long does it take to build a chatbot?",
        answer: "A basic chatbot can be deployed in 2-4 weeks. More complex bots with advanced integrations and custom AI models may take longer. We'll provide a detailed timeline after understanding your requirements."
    },
    {
        question: "Is the chatbot compliant with WhatsApp's policies?",
        answer: "Absolutely. We build all our chatbots in strict adherence to the WhatsApp Business Platform policies to ensure your account remains in good standing. This includes guidelines around promotional messaging and user opt-ins."
    },
    {
        question: "How does the chatbot handle questions it doesn't understand?",
        answer: "We design our chatbots with a 'human handover' protocol. When the bot encounters a query it cannot answer, it can seamlessly transfer the conversation to a live agent, ensuring the user always gets the help they need."
    }
]

export default function WhatsappChatbotsPage() {
  const pageData = {
    title: "WhatsApp Chatbots",
    description: "Automate customer conversations and drive engagement with AI-powered WhatsApp chatbots.",
    heroImage: "https://picsum.photos/seed/colorful-professional-whatsapp-hero/1920/1080",
    heroHint: "colorful professional chatbot conversation",
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ 
            backgroundImage: `url('${pageData.heroImage}')`,
        }}
        data-ai-hint={pageData.heroHint}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative z-20 px-4 text-black animate-in fade-in slide-in-from-bottom-10 duration-700">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl text-black/90 max-w-3xl mx-auto px-4">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Engage Customers Where They Are</h2>
                <p>
                 With over 2 billion users, WhatsApp is the world's most popular messaging app. It offers a powerful, direct channel for businesses to connect with their customers. Our AI-powered WhatsApp Chatbots help you leverage this channel to automate conversations, provide 24/7 support, generate qualified leads, and even process orders directly within the app. Deliver a seamless and convenient experience that your customers will love.
                </p>
                <ul className="space-y-4 mt-6">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Increase customer engagement and satisfaction.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Reduce support costs with 24/7 automated assistance.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Boost sales with conversational commerce and lead generation.</span></li>
                </ul>
              </div>

               <div className="bg-secondary p-6 md:p-8 rounded-lg">
                  <h3 className="text-2xl font-bold font-headline mb-6 text-center">Chatbot Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {chatbotFeatures.map(feature => (
                          <div key={feature.title} className="flex flex-col items-center text-center gap-3 p-4 bg-card rounded-lg">
                              <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <feature.icon className="w-6 h-6" />
                              </div>
                              <h4 className="font-semibold text-sm md:text-base">{feature.title}</h4>
                              <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                      ))}
                  </div>
               </div>
            </div>
            <div className="md:col-span-1 sticky top-32">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Our Development Process</h2>
                  <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto px-4">From idea to implementation, we ensure a seamless journey.</p>
              </div>
              <div className="relative max-w-5xl mx-auto">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block"></div>
                  {processSteps.map((step, index) => (
                      <div key={index} className={`relative flex items-center mb-12 w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-16 text-left' : 'md:pr-16 text-right'}`}>
                          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-10" style={index % 2 === 0 ? {left: '-8px'} : {right: '-8px'}}></div>
                          <div className="w-full">
                              <p className="text-6xl font-bold text-primary/10">{step.number}</p>
                              <h3 className="text-2xl font-bold font-headline mb-2 mt-[-1rem]">{step.title}</h3>
                              <p className="text-muted-foreground">{step.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

       <section 
        className="py-20 md:py-24 bg-background bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/colorful-professional-whatsapp-parallax/1920/1080')`}}
        data-ai-hint="colorful abstract tech"
       >
          <div className="absolute inset-0 bg-background/90" />
          <div className="container mx-auto px-4 relative z-10">
               <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Industry Use Cases</h2>
                  <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto px-4">See how WhatsApp chatbots can transform various industries.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {useCases.map((useCase) => (
                      <Card key={useCase.title} className="text-center p-8 bg-card/70 backdrop-blur-sm">
                          <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                            <useCase.icon className="w-8 h-8" />
                          </div>
                          <CardTitle className="font-headline text-xl mb-2">{useCase.title}</CardTitle>
                          <CardContent>
                              <p className="text-muted-foreground">{useCase.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
       </section>

      <OurClients />

      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
             <Bot className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Automate Your Conversations?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              Let's build a powerful WhatsApp chatbot that delights your customers and drives business growth. Contact us for a free consultation.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
             <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
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
