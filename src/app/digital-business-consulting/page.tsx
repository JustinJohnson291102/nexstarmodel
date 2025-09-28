
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Lightbulb, CheckCircle, HelpCircle, Target, BarChart, Route, Zap, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const consultingServices = [
    {
        icon: Route,
        title: "Digital Transformation Roadmap",
        description: "We craft a clear, actionable roadmap to guide your business through digital change, ensuring you adopt the right technologies at the right time."
    },
    {
        icon: Zap,
        title: "Technology Stack Advisory",
        description: "Receive expert guidance on the best software, tools, and platforms to build a scalable and efficient technology infrastructure."
    },
    {
        icon: BarChart,
        title: "Market Entry & Growth Strategy",
        description: "Leverage our insights to identify and penetrate new markets, develop effective go-to-market strategies, and achieve rapid growth."
    },
    {
        icon: Target,
        title: "Operational Efficiency",
        description: "We analyze your current workflows and identify opportunities to automate processes and improve productivity through digital solutions."
    }
];

const faqs = [
    {
        question: "What is digital business consulting?",
        answer: "It's a strategic service designed to help businesses leverage technology and digital channels to achieve their goals. This includes developing digital transformation roadmaps, advising on technology stacks, and improving operational efficiency through digital solutions."
    },
    {
        question: "How can consulting benefit my business?",
        answer: "Our consulting services can help you identify new growth opportunities, optimize your existing processes, gain a competitive edge, and ensure a higher ROI on your technology investments. We provide an external, expert perspective to help you navigate complex challenges."
    },
    {
        question: "Who is this service for?",
        answer: "Our consulting services are for any business looking to harness the power of digital, from startups planning their technology foundation to established enterprises seeking to modernize and stay ahead of the competition."
    },
    {
        question: "How do you start a consulting engagement?",
        answer: "We begin with a deep-dive discovery session to understand your business, challenges, and objectives. Based on this, we prepare a detailed proposal outlining the scope, deliverables, and timeline for the consulting engagement."
    }
]

const alternatingContent = [
    {
        title: "Strategic Technology Planning",
        description: "Choosing the right technology is critical for long-term success. We help you evaluate and select the optimal technology stack for your business, ensuring it's scalable, secure, and aligned with your budget and goals.",
        points: [
            "Comprehensive audit of your current technology stack.",
            "Evaluation of SaaS, PaaS, and IaaS solutions.",
            "Guidance on building a scalable and cost-effective infrastructure.",
            "Vendor selection and negotiation support."
        ],
        image: {
            src: "https://picsum.photos/seed/tech-planning/800/600",
            hint: "technology strategy"
        }
    },
    {
        title: "Data-Driven Growth Strategies",
        description: "Unlock the power of your data. We help you implement the right analytics tools and processes to gather actionable insights. Our strategies turn data into a competitive advantage, driving customer acquisition, retention, and growth.",
        points: [
            "Implementation of advanced analytics and business intelligence tools.",
            "Development of custom dashboards and KPI tracking.",
            "Customer segmentation and behavior analysis.",
            "Data-driven marketing and sales funnel optimization."
        ],
        image: {
            src: "https://picsum.photos/seed/data-growth/800/600",
            hint: "data analytics"
        }
    }
];

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
        className="relative h-[60vh] w-full flex items-center justify-center text-center"
      >
        <Image
          src={pageData.heroImage}
          alt={pageData.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={pageData.heroHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Lightbulb className="h-16 w-16 mx-auto mb-4" />
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
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold font-headline mb-4">Your Strategic Partner in Digital Growth</h2>
                <p>
                 In today's fast-paced market, having a clear digital strategy is crucial for success. Our digital business consulting services provide you with the expertise and roadmap needed to thrive. We help you navigate digital transformation, choose the right technologies, and optimize your operations for maximum efficiency and growth. We act as your trusted advisors, turning challenges into opportunities.
                </p>
                <ul className="space-y-4 mt-6">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Gain clarity and a competitive edge in your market.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Make informed decisions backed by data and expert analysis.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Optimize your technology investments for maximum ROI.</span></li>
                </ul>
              </div>
                <div className="space-y-8">
                <h3 className="text-2xl font-bold font-headline text-center">Our Consulting Services</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {consultingServices.map(service => (
                        <Card key={service.title} className="p-6 flex gap-6 items-start">
                           <div className="bg-primary/10 text-primary p-3 rounded-lg mt-1">
                             <service.icon className="w-6 h-6" />
                           </div>
                           <div>
                            <h4 className="text-lg font-bold font-headline mb-2">{service.title}</h4>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                           </div>
                        </Card>
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

       <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 space-y-24">
            {alternatingContent.map((item, index) => (
                <div key={item.title} className="grid md:grid-cols-2 gap-16 items-center">
                    <div className={`overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-1 slide-in-from-left-10' : 'md:order-2 slide-in-from-right-10'}`}>
                        <Image 
                            src={item.image.src}
                            alt={item.title}
                            width={800}
                            height={600}
                            data-ai-hint={item.image.hint}
                            className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className={`animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-2 slide-in-from-right-10' : 'md:order-1 slide-in-from-left-10'}`}>
                        <h3 className="text-3xl font-bold font-headline mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6">{item.description}</p>
                        <ul className="space-y-3">
                            {item.points.map(point => (
                                <li key={point} className="flex items-start">
                                   <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>  
            ))}
        </div>
      </section>

      <OurClients />

      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
             <Target className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Unlock Your Business Potential
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Let's work together to create a digital strategy that drives growth and positions you as a leader in your industry.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Book a Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
