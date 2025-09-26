
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { ShieldCheck, MessageSquare, Star, Search, CheckCircle } from "lucide-react";

export default function OnlineReputationManagementPage() {
  const pageData = {
    title: "Online Reputation Management",
    description: "Shape your brand's narrative, build trust, and protect your online image with our proactive reputation management services.",
    heroImage: "https://picsum.photos/seed/reputation-hero/1920/1080",
    heroHint: "brand trust",
    features: [
      {
        icon: Search,
        title: "Reputation Monitoring",
        description: "We keep a close watch on mentions, reviews, and conversations about your brand across the web, social media, and review sites.",
      },
      {
        icon: MessageSquare,
        title: "Review Management",
        description: "Encourage positive reviews from satisfied customers and professionally address negative feedback to mitigate damage and show you care.",
      },
      {
        icon: Star,
        title: "Brand Image Building",
        description: "Proactively build a positive online presence through strategic content creation, PR, and positive sentiment generation.",
      },
      {
        icon: ShieldCheck,
        title: "Crisis Response",
        description: "In the event of a reputation crisis, we act swiftly to control the narrative, manage communications, and restore public trust.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
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
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold font-headline mb-4">Your Reputation is Your Greatest Asset</h2>
                <p>
                  In the digital age, your online reputation is paramount. A single negative review or misplaced comment can have a significant impact on your bottom line. Our Online Reputation Management (ORM) services are designed to build, protect, and maintain a positive brand image that fosters trust and credibility with your audience.
                </p>
                <p>
                  We take a proactive, 360-degree approach, monitoring online conversations, managing reviews, and creating a buffer of positive content that ensures your brand is always seen in the best possible light.
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
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><ShieldCheck className="w-7 h-7 text-primary"/>Why ORM is Crucial:</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Over 90% of consumers read online reviews before visiting a business.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>A one-star increase in Yelp rating leads to a 5-9% increase in revenue.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Building trust is key to customer loyalty and long-term success.</span></li>
                  </ul>
               </div>

            </div>
            <div className="md:col-span-1">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
