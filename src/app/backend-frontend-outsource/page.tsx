
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Users, CheckCircle, HelpCircle, Code, Layers, Rocket, Handshake, ArrowRight, Server, Brush } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const engagementModels = [
    {
        icon: Users,
        title: "Dedicated Teams",
        description: "A full, self-managed team of developers, PMs, and QA engineers committed exclusively to your project for long-term needs."
    },
    {
        icon: Layers,
        title: "Staff Augmentation",
        description: "Extend your in-house team with our skilled developers who work under your direct management and seamlessly integrate into your workflow."
    },
    {
        icon: Rocket,
        title: "Project-Based",
        description: "We take full responsibility for the end-to-end development of your project, delivering a turn-key solution on time and on budget."
    }
];

const technologies = ["React", "Next.js", "Node.js", "Python", "Django", "Vue.js", "Angular", "Ruby on Rails", "PHP", "Laravel", "Java", ".NET", "iOS (Swift)", "Android (Kotlin)", "Flutter"];

const faqs = [
    {
        question: "What engagement models do you offer?",
        answer: "We offer flexible engagement models to fit your specific needs and budget, including Dedicated Teams, Staff Augmentation, and Project-Based work. We can discuss which model is the best fit for you."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "Our team has expertise in a wide range of modern technologies, including React, Next.js, Node.js, Python, Java, and native mobile development (Swift/Kotlin). We have a large talent pool and can match the right expertise to your tech stack."
    },
    {
        question: "How do you ensure code quality and security?",
        answer: "We follow industry best practices, including regular code reviews, automated testing, and adherence to strict coding standards. Security is integrated into every stage of our development lifecycle, from design to deployment."
    },
    {
        question: "How do you handle communication and time zone differences?",
        answer: "We use agile methodologies with regular stand-ups, demos, and retrospectives. Our project managers ensure clear and constant communication through tools like Slack, Jira, and video conferencing. We establish overlapping work hours to ensure seamless collaboration regardless of time zone."
    }
]

const alternatingContent = [
    {
        title: "Seamless Frontend Development",
        description: "Our frontend developers are experts in creating beautiful, responsive, and intuitive user interfaces. We use modern frameworks like React, Next.js, and Vue.js to build fast, scalable, and engaging web applications.",
        points: [
            "Pixel-perfect implementation of UI/UX designs.",
            "Component-based architecture for maintainability.",
            "Performance optimization for fast load times.",
            "Cross-browser compatibility and accessibility compliance."
        ],
        image: {
            src: "https://picsum.photos/seed/colorful-professional-frontend/800/600",
            hint: "colorful frontend code"
        }
    },
    {
        title: "Robust Backend Engineering",
        description: "We build secure, scalable, and reliable backend systems to power your applications. Our expertise spans Node.js, Python, Java, and more, ensuring we choose the right technology for your specific needs.",
        points: [
            "RESTful and GraphQL API development.",
            "Database design and optimization (SQL & NoSQL).",
            "Microservices and serverless architecture.",
            "Third-party service and API integration."
        ],
        image: {
            src: "https://picsum.photos/seed/colorful-professional-backend/800/600",
            hint: "colorful server room"
        }
    }
];

export default function BackendFrontendOutsourcePage() {
  const pageData = {
    title: "Backend & Frontend Outsourcing",
    description: "Scale your development capabilities with our expert, dedicated teams.",
    heroImage: "https://picsum.photos/seed/colorful-professional-outsource/1920/1080",
    heroHint: "colorful dark coding abstract",
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Code className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto px-4">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Extend Your Team with Our Expertise</h2>
                <p>
                 Finding, hiring, and retaining top development talent is a significant challenge. Our outsourcing services provide you with immediate access to a pool of highly skilled, pre-vetted backend and frontend developers who can seamlessly integrate with your team. Whether you need to augment your staff for a specific project, build a new product from scratch, or require a fully dedicated team for long-term development, we have a flexible and cost-effective solution for you.
                </p>
                <ul className="space-y-4 mt-6">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Access top-tier talent without the overhead of hiring.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Scale your development team up or down based on project demands.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Reduce time-to-market and accelerate your product roadmap.</span></li>
                </ul>
              </div>

               <div className="bg-secondary p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-headline mb-6 text-center">Flexible Engagement Models</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {engagementModels.map(model => (
                         <Card key={model.title} className="p-6 text-center">
                            <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                                <model.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-bold font-headline mb-2">{model.title}</h4>
                            <p className="text-muted-foreground text-sm">{model.description}</p>
                         </Card>
                    ))}
                </div>
              </div>

               <div>
                    <h3 className="text-2xl font-bold font-headline mb-6 text-center">Our Technology Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {technologies.map(tech => (
                            <div key={tech} className="bg-secondary text-secondary-foreground font-medium py-2 px-3 md:px-4 rounded-lg text-sm md:text-base">{tech}</div>
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

      <section
        className="py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/colorful-professional-network/1920/1080')`}}
        data-ai-hint="colorful global network"
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Full-Stack Capabilities</h2>
              <p className="text-lg text-muted-foreground">From pixel-perfect frontends to robust and scalable backends, our developers cover the entire stack.</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <Card className="bg-card/70 backdrop-blur-sm p-6 flex items-center gap-6">
                <Brush className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-headline">Frontend Development</h3>
                  <p className="text-muted-foreground">Engaging user interfaces built with modern frameworks like React, Vue, and Angular.</p>
                </div>
              </Card>
              <Card className="bg-card/70 backdrop-blur-sm p-6 flex items-center gap-6">
                <Server className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-headline">Backend Development</h3>
                  <p className="text-muted-foreground">Secure and scalable server-side solutions using Node.js, Python, Java, and more.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 space-y-16 md:space-y-24">
            {alternatingContent.map((item, index) => (
                <div key={item.title} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
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
                        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">{item.title}</h3>
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
             <Handshake className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Build Your Dream Team Today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              Stop the endless search for talent. Let us provide the skilled developers you need to bring your vision to life.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
          <div className="max-w-3xl mx-auto mt-8 md:mt-0">
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
