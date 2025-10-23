
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Palette, PenTool, ImageIcon, Type, CheckCircle, HelpCircle, Eye, BrainCircuit, Heart } from "lucide-react";
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

const alternatingContent = [
    {
        title: "Strategic Brand Identity",
        description: "We don't just create pretty logos. We delve deep into your business to build a strategic brand identity that communicates your core values, differentiates you from the competition, and resonates deeply with your target audience.",
        points: [
            "In-depth brand discovery and market research.",
            "Development of a unique brand voice and messaging.",
            "Creation of a comprehensive visual identity system.",
            "Detailed brand guidelines to ensure consistency."
        ],
        image: {
            src: "https://ik.imagekit.io/asnkt5q09/CBS.png?updatedAt=1761218924248",
            hint: "colorful professional brand strategy"
        }
    },
    {
        title: "Full-Service Creative Production",
        description: "Our in-house production team brings your brand to life through stunning visuals. From professional photography to cinematic video production, we create high-quality content that tells your story and engages your audience across all platforms.",
        points: [
            "Concept development and storyboarding.",
            "Professional photo and video shoots.",
            "Post-production including editing, color grading, and sound design.",
            "Content optimized for web, social media, and advertising."
        ],
        image: {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwaG90byUyMHByb2R1Y3Rpb258ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
            hint: "colorful professional photo shoot"
        }
    }
];

const processSteps = [
    { icon: Eye, title: "Discovery & Research", description: "Understanding your vision and market." },
    { icon: BrainCircuit, title: "Strategy & Concept", description: "Building the strategic foundation." },
    { icon: PenTool, title: "Design & Creation", description: "Bringing the brand to life visually." },
    { icon: Heart, title: "Refinement & Delivery", description: "Perfecting and launching your new identity." },
];

export default function CreativeBrandingPage() {
  const pageData = {
    title: "Creative & Branding Services",
    description: "We craft unforgettable brand identities that tell your story, captivate your audience, and build lasting loyalty.",
    heroImage: "https://ik.imagekit.io/ggelm1lwa/pexels-antoni-shkraba-4348401.jpg?updatedAt=1759859066487",
    heroHint: "colorful professional creative branding",
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
        className="relative w-full flex items-center justify-center text-center bg-white"
        style={{ height: 'calc(60vh - 30px)' }}
      >
        <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwaG90byUyMHByb2R1Y3Rpb258ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Creative & Branding"
            fill
            className="object-fill"
            priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto px-4">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Your Brand is Your Story. Let's Tell it Beautifully.</h2>
                <p>
                  In a crowded market, a strong brand is your most valuable asset. It's more than just a logo or a color scheme; it's the feeling you evoke, the story you tell, and the promise you make to your customers. It's what separates you from the competition and builds a tribe of loyal advocates. Our creative and branding services are designed to uncover your unique identity and translate it into a powerful, cohesive brand experience.
                </p>
                <p>
                  We are a team of strategists, designers, writers, and producers who are passionate about building brands with soul. Our process is collaborative, strategic, and creative, ensuring that every element of your brand works in harmony to communicate your message and connect with your audience on an emotional level.
                </p>
              </div>

              <div className="space-y-8">
                {pageData.features.map(feature => (
                  <div key={feature.title} className="flex flex-col sm:flex-row gap-6 items-start text-center sm:text-left">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg mx-auto sm:mx-0">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
               <div className="bg-secondary p-6 md:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold font-headline mb-4 flex items-center gap-3 justify-center md:justify-start"><CheckCircle className="w-7 h-7 text-primary"/>Our Creative Services Include:</h3>
                  <ul className="space-y-3 columns-1 sm:columns-2 text-left">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Brand Guidelines</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Graphic Design</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Illustration</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Packaging Design</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Print &amp; Digital Ads</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Presentations &amp; Pitch Decks</span></li>
                  </ul>
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
        style={{ backgroundImage: `url('https://ik.imagekit.io/ggelm1lwa/pexels-antoni-shkraba-4348401.jpg?updatedAt=1759859066487')`}}
        data-ai-hint="colorful abstract design"
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">Our Branding Process</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto px-4">A collaborative journey to uncover your brand's true identity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center p-6 bg-card/80 rounded-lg shadow-lg border border-border/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${index * 150}ms`}}>
                <div className="bg-primary/10 text-primary rounded-full p-4 inline-block mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
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
                            className="w-full h-auto object-fill rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className={`animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-2 slide-in-from-right-10' : 'md:order-1 slide-in-from-left-10'} text-center md:text-left`}>
                        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6">{item.description}</p>
                        <ul className="space-y-3 inline-block text-left">
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

      <section 
        className="relative py-20 md:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us for Creative & Branding?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              We believe that great branding is a blend of strategic thinking and artistic expression. Our team doesn't just design; we solve business problems creatively. We immerse ourselves in your world to create a brand identity that is authentic, memorable, and designed to help you achieve your goals.
            </p>
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
            <p className="text-lg text-muted-foreground mb-12 px-4">
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
