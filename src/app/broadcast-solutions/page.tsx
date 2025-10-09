
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, HelpCircle, Server, RadioTower, Video, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GetStartedForm from "@/components/shared/get-started-form";
import OurClients from "@/components/homepage/our-clients";

const services = [
    {
        icon: RadioTower,
        title: "Playout & Automation",
        description: "Reliable, 24/7 automated playout solutions for television channels, ensuring seamless content delivery with dynamic graphics and branding.",
    },
    {
        icon: Video,
        title: "Live Streaming & Encoding",
        description: "High-quality, low-latency live streaming solutions for events, news, and sports, delivered to any device, anywhere.",
    },
    {
        icon: Server,
        title: "Media Asset Management (MAM)",
        description: "Centralize, manage, and distribute your media assets efficiently with our robust MAM systems, designed for fast-paced broadcast environments.",
    },
    {
        icon: Zap,
        title: "Broadcast Infrastructure",
        description: "End-to-end design and implementation of broadcast facilities, from small studios to large-scale network operations centers.",
    },
];

const faqs = [
    {
        question: "What is broadcast automation?",
        answer: "Broadcast automation involves using technology to automate the process of playing out television or radio content. This includes scheduling programs, commercials, and other assets, ensuring a seamless and error-free broadcast 24/7."
    },
    {
        question: "Can you handle live event streaming?",
        answer: "Yes, we specialize in high-quality, low-latency live streaming for a variety of events, including sports, news conferences, and corporate town halls. We manage the entire workflow from encoding to delivery."
    },
    {
        question: "What is Media Asset Management (MAM)?",
        answer: "MAM is a system for managing large volumes of media files (video, audio, images). It helps broadcasters organize, search, retrieve, and distribute their content efficiently, streamlining workflows and saving time."
    },
    {
        question: "Do you provide support for the systems you install?",
        answer: "Absolutely. We offer comprehensive support and maintenance packages to ensure your broadcast infrastructure runs smoothly. Our support team is available to assist with any technical issues that may arise."
    }
];

export default function BroadcastSolutionsPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[30vh] w-full flex items-center justify-center text-center">
                <Image
                    src="https://images.unsplash.com/photo-1593352222493-2591461f1c7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Broadcast control room"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="broadcast control room"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
                        Broadcast Solutions
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto px-4">
                        Engineering the future of media delivery with robust and innovative broadcast solutions.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
                        <div className="md:col-span-2 space-y-12">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Reliable. Scalable. Future-Proof.</h2>
                                <p>
                                    In the fast-evolving media landscape, a reliable broadcast infrastructure is the backbone of any successful media operation. We provide end-to-end broadcast solutions, from system design and integration to playout automation and media asset management. Our expertise ensures your content reaches your audience with the highest quality and reliability, every time.
                                </p>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Maximize operational efficiency with automated workflows.</span></li>
                                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Ensure high-quality, uninterrupted content delivery.</span></li>
                                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Build a scalable infrastructure that grows with your needs.</span></li>
                                </ul>
                            </div>
                            <div className="bg-secondary p-6 md:p-8 rounded-lg">
                                <h3 className="text-2xl font-bold font-headline mb-6 text-center">Our Core Broadcast Services</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {services.map(service => (
                                        <Card key={service.title} className="p-6 flex gap-4 items-start">
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
            
            <section
                className="py-20 md:py-32 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586933777559-80860538a712?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
                data-ai-hint="colorful broadcast control room"
            >
                <div className="absolute inset-0 bg-primary/90" />
                <div className="container mx-auto px-4 relative z-10 text-white text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Powering the Media Industry</h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto px-4">
                        We provide the technical foundation for broadcasters, content creators, and media houses to thrive in the digital age.
                    </p>
                </div>
            </section>

            <OurClients />

            <section className="py-20 md:py-32 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <Zap className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                            Engineer Your Broadcast Success
                        </h2>
                        <p className="text-lg text-primary-foreground/80 mb-8 px-4">
                            Let's discuss how our broadcast solutions can elevate your media operations.
                        </p>
                        <div>
                            <Button asChild size="lg" variant="secondary" className="group">
                                <Link href="/contact">
                                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
