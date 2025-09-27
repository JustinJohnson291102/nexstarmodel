
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Palette, PenTool, ImageIcon, Type, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "What is included in a branding package?",
        answer: "Our typical branding package includes brand strategy, logo design (with variations), color palette, typography selection, and a comprehensive brand style guide. We can also include elements like business card design, social media templates, and packaging design based on your needs."
    },
    {
        question: "How long does the branding process take?",
        answer: "A full branding project usually takes 4-8 weeks. This includes research, strategy, design exploration, revisions, and final delivery of all assets. The timeline can vary depending on the scope and complexity of the project."
    },
    {
        question: "Can you help us rebrand our existing business?",
        answer: "Absolutely. We specialize in brand refreshes and complete rebrands. We'll start by auditing your current brand and market position to develop a strategy that honors your heritage while positioning you for future growth."
    },
    {
        question: "What if I don't like the initial design concepts?",
        answer: "Our process is highly collaborative and includes several rounds of revisions. We present multiple initial concepts to gauge your preferences and work closely with you to refine the chosen direction until it perfectly aligns with your vision."
    }
]

export default function CreativeBrandingPage() {
  const pageData = {
    title: "Creative & Branding Services",
    description: "We craft unforgettable brand identities that tell your story, captivate your audience, and build lasting loyalty.",
    heroImage: "https://picsum.photos/seed/branding-hero/1920/1080",
    heroHint: "creative branding design",
    features: [
      {
        icon: Palette,
        title: "Brand Strategy & Positioning",
        description: "We define your unique value proposition, target audience, and competitive landscape to build a brand that stands out and resonates.",
      },
      {
        icon: PenTool,
        title: "Logo Design & Visual Identity",
        description: "From the logo to the color palette and typography, we create a cohesive and memorable visual system that represents your brand's essence.",
      },
      {
        icon: ImageIcon,
        title: "Full-Service Production (Photo & Video)",
        description: "Our in-house production team creates stunning photography and videography that brings your brand story to life with cinematic quality.",
      },
      {
        icon: Type,
        title: "Copywriting & Brand Voice",
        description: "We develop a unique and consistent brand voice, crafting compelling copy for your website, social media, and marketing materials.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
        <div className="relative z-20 px-4 text-primary animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl text-primary/90 max-w-3xl mx-auto">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold font-headline mb-4">Your Brand is Your Story. Let's Tell it Beautifully.</h2>
                <p>
                  In a crowded market, a strong brand is your most valuable asset. It's more than just a logo or a color scheme; it's the feeling you evoke, the story you tell, and the promise you make to your customers. It's what separates you from the competition and builds a tribe of loyal advocates. Our creative and branding services are designed to uncover your unique identity and translate it into a powerful, cohesive brand experience.
                </p>
                <p>
                  We are a team of strategists, designers, writers, and producers who are passionate about building brands with soul. Our process is collaborative, strategic, and creative, ensuring that every element of your brand works in harmony to communicate your message and connect with your audience on an emotional level.
                </p>
              </div>

              <div className="space-y-8">
                {pageData.features.map(feature => (
                  <div key={feature.title} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
               <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><CheckCircle className="w-7 h-7 text-primary"/>Our Creative Services Include:</h3>
                  <ul className="space-y-3 columns-1 sm:columns-2">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Brand Guidelines</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Graphic Design</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Illustration</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Packaging Design</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Print & Digital Ads</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Presentations & Pitch Decks</span></li>
                  </ul>
               </div>

            </div>
            <div className="md:col-span-1">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <OurClients />

      <section 
        className="relative py-20 md:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us for Creative & Branding?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              We believe that great branding is a blend of strategic thinking and artistic expression. Our team doesn't just design; we solve business problems creatively. We immerse ourselves in your world to create a brand identity that is authentic, memorable, and designed to help you achieve your goals.
            </p>
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
            <p className="text-lg text-muted-foreground mb-12">
              Your questions about our branding and creative process, answered.
            </p>
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

    