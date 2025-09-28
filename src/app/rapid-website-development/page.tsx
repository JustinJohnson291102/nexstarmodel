
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Rocket, CheckCircle, HelpCircle, Clock, LayoutTemplate, Smartphone, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const rapidDevFeatures = [
    {
        icon: LayoutTemplate,
        title: "Template-Based Design",
        description: "We use a library of premium, customizable templates to create a professional design that fits your brand, saving weeks of design time."
    },
    {
        icon: Smartphone,
        title: "Mobile-First and Responsive",
        description: "Your site will be fully optimized for a flawless experience on all devices, ensuring you capture every potential customer."
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "Our streamlined process means we can go from concept to a live website in a fraction of the time of a custom build."
    },
     {
        icon: CheckCircle,
        title: "Quality Assured",
        description: "Rapid doesn't mean rushed. We follow a rigorous quality assurance process to ensure your site is bug-free, secure, and reliable."
    },
];

const faqs = [
    {
        question: "How quickly can you launch a website?",
        answer: "Our rapid development process allows us to launch simple marketing or brochure websites in as little as 1-2 weeks. The exact timeline depends on the complexity and your readiness to provide content (text, images)."
    },
    {
        question: "Is a rapidly developed website scalable?",
        answer: "Yes. We build on robust and popular platforms like WordPress, which are highly scalable. You can start with a simple site and easily add more features, pages, e-commerce functionality, and custom integrations as your business grows."
    },
    {
        question: "What's the difference between rapid development and custom development?",
        answer: "Rapid development prioritizes speed and cost-effectiveness by using pre-built templates and established frameworks. Custom development is a longer, more expensive process that involves designing and coding a website from scratch, offering unlimited flexibility. Rapid development is perfect for MVPs, marketing sites, and businesses needing to get online quickly, while custom development is for complex, unique web applications."
    },
     {
        question: "What do I need to provide to get started?",
        answer: "To start, we'll need your logo, brand colors, and the content (text and images) for your main pages (like Home, About, Services, Contact). If you don't have content ready, our copywriting and stock photo sourcing services can help."
    }
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
          <Rocket className="h-16 w-16 mx-auto mb-4" />
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
                <h2 className="text-3xl font-bold font-headline mb-4">Go from Idea to Launch, Faster Than Ever</h2>
                <p>
                  Need a professional, high-quality website without the long wait times and high costs of a fully custom project? Our rapid development service is the perfect solution. Ideal for startups, marketing campaigns, small businesses, or anyone needing to establish a powerful online presence quickly, we've streamlined the development process to deliver exceptional websites in record time.
                </p>
                <ul className="space-y-4 mt-6">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Launch your Minimum Viable Product (MVP) to test your market.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Create stunning landing pages for your marketing campaigns.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Get your new business online with a professional brochure site.</span></li>
                </ul>
              </div>
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold font-headline text-center">How We Do It</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rapidDevFeatures.map(feature => (
                         <Card key={feature.title} className="p-6 bg-secondary">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold font-headline">{feature.title}</h4>
                            </div>
                            <p className="text-muted-foreground text-sm">{feature.description}</p>
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

      <OurClients />

       <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
             <Rocket className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Launch at Lightning Speed?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Don't let a long development timeline hold you back. Let's get your website live and start attracting customers now.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Get Your Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
