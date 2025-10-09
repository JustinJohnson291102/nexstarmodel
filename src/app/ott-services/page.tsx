"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, HelpCircle, Tv, Film, AppWindow, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GetStartedForm from "@/components/shared/get-started-form";
import OurClients from "@/components/homepage/our-clients";

const services = [
    {
        icon: AppWindow,
        title: "Custom OTT App Development",
        description: "We build branded streaming apps for all major platforms, including iOS, Android, Roku, Apple TV, Android TV, and web browsers.",
    },
    {
        icon: Film,
        title: "VOD & Live Streaming",
        description: "Robust solutions for both Video-On-Demand libraries and live event streaming, with secure DRM and multi-bitrate encoding.",
    },
    {
        icon: Tv,
        title: "Monetization Models",
        description: "Integrate various revenue models, including SVOD (subscriptions), AVOD (ads), and TVOD (pay-per-view) to maximize your revenue.",
    },
    {
        icon: PlayCircle,
        title: "Content Delivery & CMS",
        description: "A powerful backend to manage your content library, user data, and analytics, all delivered via a global CDN for a fast, reliable user experience.",
    },
];

const faqs = [
    {
        question: "What is an OTT platform?",
        answer: "OTT (Over-The-Top) refers to the delivery of video content directly to viewers over the internet, bypassing traditional cable or satellite providers. Examples include Netflix, Hulu, and Disney+. We help you build your own branded streaming service."
    },
    {
        question: "Which devices will my app work on?",
        answer: "We develop for a wide range of devices to ensure you can reach your audience everywhere. This includes smartphones (iOS & Android), web browsers, smart TVs (Apple TV, Android TV), and streaming devices like Roku and Amazon Fire TV."
    },
    {
        question: "How do I make money from my OTT service?",
        answer: "We can implement several monetization strategies. Subscription VOD (SVOD) like Netflix, Ad-supported VOD (AVOD) like YouTube, or Transactional VOD (TVOD) where users pay for specific content. We can also combine these models."
    },
    {
        question: "Can you handle secure video delivery?",
        answer: "Yes, security is a top priority. We implement Digital Rights Management (DRM) and robust security measures to protect your valuable content from piracy and unauthorized access."
    }
];

export default function OTTServicesPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[84vh] w-full flex items-center justify-center text-center bg-white">
                <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <Tv className="h-16 w-16 mx-auto mb-4 text-white" />
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 text-white">
                        OTT Platform Services
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto px-4">
                        Launch your own branded streaming service and deliver your content directly to a global audience.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
                        <div className="md:col-span-2 space-y-12">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Your Content. Your Platform. Your Audience.</h2>
                                <p>
                                    The way people consume video has changed forever. Viewers want to watch what they want, when they want, on any device. Our Over-the-Top (OTT) platform services empower you to build your own "Netflix-like" streaming service, giving you a direct-to-consumer channel to distribute and monetize your video content.
                                </p>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Build a direct relationship with your audience.</span></li>
                                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Create new, recurring revenue streams.</span></li>
                                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Gain valuable data and insights into viewer behavior.</span></li>
                                </ul>
                            </div>
                            <div className="bg-secondary p-6 md:p-8 rounded-lg">
                                <h3 className="text-2xl font-bold font-headline mb-6 text-center">End-to-End OTT Solutions</h3>
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
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
                data-ai-hint="colorful ott streaming"
            >
                <div className="absolute inset-0 bg-primary/90" />
                <div className="container mx-auto px-4 relative z-10 text-white text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Reach Your Audience on Every Screen</h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto px-4">
                        From mobile phones to big-screen TVs, we ensure a seamless and high-quality viewing experience across all devices.
                    </p>
                </div>
            </section>

            <OurClients />

            <section className="py-20 md:py-32 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <PlayCircle className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                            Launch Your Streaming Empire
                        </h2>
                        <p className="text-lg text-primary-foreground/80 mb-8 px-4">
                            Ready to take control of your content distribution? Let's build your OTT platform together.
                        </p>
                        <div>
                            <Button asChild size="lg" variant="secondary" className="group">
                                <Link href="/contact">
                                    Request a Free Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
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
