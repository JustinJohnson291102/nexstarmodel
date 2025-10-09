
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Target, Megaphone, Rocket, TrendingUp, Repeat, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetStartedForm from "@/components/shared/get-started-form";
import { Card, CardContent } from "@/components/ui/card";

const roadmapSteps = [
  {
    icon: FileText,
    title: "Phase 1: Market Research & Validation",
    points: [
        "Deep dive into market trends and competitive landscapes.",
        "Develop detailed customer personas and journey maps.",
        "Conduct surveys and interviews to validate product-market fit.",
        "Analyze pricing models and potential revenue streams."
    ],
    image: {
      src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZXNlYXJjaCUyMGFuYWx5c2lzfGVufDB8fHx8MTc2MjI0NzU0OHww&ixlib=rb-4.0.3&q=80&w=1080",
      hint: "colorful professional market research",
    },
  },
  {
    icon: Target,
    title: "Phase 2: Positioning & Messaging",
    points: [
        "Craft a unique value proposition that stands out.",
        "Develop a consistent brand story and messaging framework.",
        "Define key messaging pillars for different audience segments.",
        "Create a comprehensive brand style guide."
    ],
    image: {
      src: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBtZXNzYWdpbmd8ZW58MHx8fHwxNzYyMjQ3NzEyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      hint: "colorful professional brand positioning",
    },
  },
  {
    icon: Megaphone,
    title: "Phase 3: Pre-Launch Buzz",
    points: [
        "Develop a content marketing plan to build authority.",
        "Execute a PR and influencer outreach strategy.",
        "Build a community on social media and relevant forums.",
        "Launch a coming-soon landing page to capture leads."
    ],
    image: {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwciUyMGxhdW5jaHxlbnwwfHx8fDE3NjIyNDc4MTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      hint: "colorful professional product launch",
    },
  },
  {
    icon: Rocket,
    title: "Phase 4: Product Launch",
    points: [
        "Coordinate a multi-channel launch day campaign.",
        "Execute email marketing campaigns to your waitlist.",
        "Run targeted ad campaigns on social and search platforms.",
        "Secure launch coverage on product discovery sites like Product Hunt."
    ],
    image: {
      src: "https://images.unsplash.com/photo-1563050854-43d9a7845014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxyb2NrZXQlMjBsYXVuY2h8ZW58MHx8fHwxNzYyMjQ3ODg2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      hint: "colorful professional rocket launch",
    },
  },
  {
    icon: TrendingUp,
    title: "Phase 5: Growth & Acquisition",
    points: [
        "Implement and optimize marketing automation funnels.",
        "Develop scalable paid acquisition strategies (PPC, Social Ads).",
        "Focus on SEO to drive long-term organic growth.",
        "Establish key partnerships and affiliate programs."
    ],
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm93dGglMjBjaGFydHxlbnwwfHx8fDE3NjIyNDc5NTN8MA&ixlib-rb-4.0.3&q=80&w=1080",
      hint: "colorful professional growth chart",
    },
  },
  {
    icon: Repeat,
    title: "Phase 6: Iterate & Optimize",
    points: [
        "Analyze campaign data and key performance indicators (KPIs).",
        "Gather customer feedback through surveys and reviews.",
        "A/B test landing pages, ads, and email copy.",
        "Continuously refine product features and marketing strategies."
    ],
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxvcHRpbWl6YXRpb24lMjBwcm9jZXNzfGVufDB8fHx8fDE3NjIyNDgwMTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      hint: "colorful professional optimization process",
    },
  },
];

const stats = [
    { value: "50%", label: "Faster Time-to-Market" },
    { value: "2x", label: "Higher Adoption Rates" },
    { value: "40%", label: "Reduction in Customer Acquisition Cost" }
];


export default function GtmStrategyPage() {
  return (
    <>
      <section 
        className="relative py-20 md:py-32 w-full flex items-center justify-center text-center bg-cover bg-center"
      >
        <Image 
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtYXJrZXRpbmclMjBsYXVuY2h8ZW58MHx8fHwxNzYyMjQ4MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080'
          alt="Go-To-Market Launchpad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              Your Go-To-Market Launchpad
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto px-4">
               We turn great ideas into market-leading products. Our Go-To-Market (GTM) strategy is a comprehensive roadmap designed to navigate the complexities of launching and scaling your venture successfully.
            </p>
        </div>
      </section>

      <section 
        className="relative py-16 md:py-32 bg-background"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">Our Roadmap to Success</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4">A phase-by-phase plan to ensure your product makes a powerful market entry and achieves sustained growth.</p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {roadmapSteps.map((step, index) => (
              <div key={step.title} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={`overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-1 slide-in-from-left-10' : 'md:order-2 slide-in-from-right-10'}`}>
                    <div className="relative aspect-video w-full">
                        <Image 
                            src={step.image.src}
                            alt={step.title}
                            fill
                            data-ai-hint={step.image.hint}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
                <div className={`animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-2 slide-in-from-right-10' : 'md:order-1 slide-in-from-left-10'}`}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                           <step.icon className="h-6 w-6" />
                        </div>
                         <h3 className="text-2xl md:text-3xl font-bold font-headline">{step.title}</h3>
                    </div>
                    <ul className="space-y-3">
                        {step.points.map(point => (
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
        </div>
      </section>

      <section
        className="py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm93dGglMjBjaGFydHxlbnwwfHx8fDE3NjIyNDc5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080')"}}
        data-ai-hint="colorful professional launch success"
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight text-white">Measurable Impact</h2>
                <p className="text-lg mt-4 px-4 text-white/80">Our GTM strategies deliver tangible results.</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map(stat => (
              <div key={stat.label} className="p-8">
                <p className="text-6xl font-bold font-headline text-white">{stat.value}</p>
                <p className="text-lg mt-2 text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       <section className="py-16 md:py-32 bg-secondary">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
                Ready to Launch?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
                Our GTM experts are ready to build your custom roadmap to success. Let's discuss your product and how we can make its launch a landmark event.
              </p>
              <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Plan Your Launch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="sticky top-32">
              <GetStartedForm />
            </div>
          </div>
      </section>
    </>
  );
}
    

    