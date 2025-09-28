
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Palette, CheckCircle, HelpCircle, PenTool, MessageSquare, Link as LinkIcon, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const digitalBrandingServices = [
    {
        icon: Palette,
        title: "Online Brand Identity",
        description: "We define how your logo, color palette, and typography are applied across all digital platforms for a consistent look and feel."
    },
    {
        icon: MessageSquare,
        title: "Digital Content Strategy",
        description: "Develop a content plan that tells a cohesive story, establishes thought leadership, and engages your audience on the right channels."
    },
    {
        icon: PenTool,
        title: "Brand Voice & Messaging",
        description: "Craft a unique and authentic voice that resonates with your target audience and is applied consistently in all digital communications."
    },
    {
        icon: LinkIcon,
        title: "Digital Brand Guidelines",
        description: "We create a comprehensive guide for your team to ensure brand consistency across your website, social media, emails, and digital ads."
    }
];

const faqs = [
    {
        question: "What's the difference between branding and digital branding?",
        answer: "While traditional branding sets the overall strategy and identity, digital branding focuses specifically on how your brand is expressed and experienced online. This includes your website, social media profiles, digital content, and online advertising, ensuring a consistent and compelling brand experience across all digital touchpoints."
    },
    {
        question: "Why is a digital brand guide important?",
        answer: "A digital brand guide is essential for maintaining consistency across all your online channels. It provides clear rules for using your logo, colors, fonts, and brand voice in a digital context. This consistency is crucial for building a strong, recognizable, and trustworthy brand identity online."
    },
    {
        question: "We already have a brand. Can you help us adapt it for digital?",
        answer: "Absolutely. A core part of our service is helping established brands translate their identity effectively to the digital world. We'll analyze your existing brand and create a strategy to ensure it thrives online, considering the nuances of digital platforms and user behavior."
    },
    {
        question: "How does digital branding affect SEO?",
        answer: "A strong, consistent digital brand builds authority and trust, which are positive signals for search engines. Consistent branding across your website, social media, and other online profiles strengthens your digital footprint, making it easier for search engines to understand who you are and what you do, which can improve your rankings."
    }
]

const alternatingContent = [
    {
        title: "Cohesive Digital Experience",
        description: "We ensure your brand identity is consistently applied across every digital touchpoint. From your website's favicon to the tone of your social media posts, we create a unified and memorable brand experience that builds recognition and trust.",
        points: [
            "Consistent visual identity across all platforms.",
            "Unified brand voice and messaging strategy.",
            "Seamless user experience from social media to website.",
            "Digital asset optimization for different channels."
        ],
        image: {
            src: "https://picsum.photos/seed/digital-experience/800/600",
            hint: "digital interface"
        }
    },
    {
        title: "Content That Builds Your Brand",
        description: "Your content is your brand's voice in the digital world. We develop a content strategy that not only attracts your target audience but also reinforces your brand's values and expertise. We create content that tells your story and builds a loyal community.",
        points: [
            "Content pillar and theme development.",
            "Creation of blog posts, articles, and social media content.",
            "Video and visual content production.",
            "Content distribution strategy to maximize reach."
        ],
        image: {
            src: "https://picsum.photos/seed/brand-content/800/600",
            hint: "content creation"
        }
    }
];

export default function DigitalBrandingPage() {
  const pageData = {
    title: "Digital Branding",
    description: "Craft a consistent and compelling brand identity across all your digital touchpoints.",
    heroImage: "https://picsum.photos/seed/digital-brand-id/1920/1080",
    heroHint: "digital identity",
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
          <Palette className="h-16 w-16 mx-auto mb-4" />
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
                <h2 className="text-3xl font-bold font-headline mb-4">Build a Brand That Thrives Online</h2>
                <p>
                 In the digital world, your brand is more than a logo; it's an experience. It's the sum of every interaction a customer has with you online. Our digital branding services focus on creating a cohesive and powerful brand presence across your website, social media, and all other digital channels. We develop your online brand identity, content strategy, and digital brand guidelines to ensure you connect with your audience in a meaningful and memorable way.
                </p>
                <ul className="space-y-4 mt-6">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Create a memorable and recognizable online presence.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Build trust and credibility with a consistent brand message.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Differentiate yourself from the competition in a crowded digital space.</span></li>
                </ul>
              </div>

               <div className="space-y-8">
                <h3 className="text-2xl font-bold font-headline text-center">Our Digital Branding Services</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {digitalBrandingServices.map(service => (
                        <Card key={service.title} className="p-6 flex gap-6 items-start bg-secondary">
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
             <Palette className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Define Your Digital Identity
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Ready to build a brand that commands attention online? Let's craft a digital identity that sets you apart.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/creative-branding">
                  Explore Our Creative Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
