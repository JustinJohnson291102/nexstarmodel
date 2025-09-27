
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Target, Megaphone, Rocket, TrendingUp, Repeat, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      src: "https://picsum.photos/seed/market-research/800/600",
      hint: "market research",
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
      src: "https://picsum.photos/seed/positioning/800/600",
      hint: "brand positioning",
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
      src: "https://picsum.photos/seed/pre-launch/800/600",
      hint: "product launch",
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
      src: "https://picsum.photos/seed/launch-campaign/800/600",
      hint: "rocket launch",
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
      src: "https://picsum.photos/seed/growth/800/600",
      hint: "growth chart",
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
      src: "https://picsum.photos/seed/optimize/800/600",
      hint: "optimization process",
    },
  },
];


export default function GtmStrategyPage() {
  return (
    <>
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/gtm-hero/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 px-4 text-white">
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
              Your Go-To-Market Launchpad
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
               We turn great ideas into market-leading products. Our Go-To-Market (GTM) strategy is a comprehensive roadmap designed to navigate the complexities of launching and scaling your venture successfully.
            </p>
        </div>
      </section>

      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/gtm-roadmap/1920/1080')` }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">Our Roadmap to Success</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">A phase-by-phase plan to ensure your product makes a powerful market entry and achieves sustained growth.</p>
          </div>

          <div className="space-y-24">
            {roadmapSteps.map((step, index) => (
              <div key={step.title} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-1 slide-in-from-left-10' : 'md:order-2 slide-in-from-right-10'}`}>
                    <Image 
                        src={step.image.src}
                        alt={step.title}
                        width={800}
                        height={600}
                        data-ai-hint={step.image.hint}
                        className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                    />
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
      
       <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
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
        </div>
      </section>
    </>
  );
}
