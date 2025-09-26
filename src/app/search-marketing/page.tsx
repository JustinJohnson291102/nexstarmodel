
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { BarChart, Search, Target, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

export default function SearchMarketingPage() {
  const pageData = {
    title: "Search Marketing (SEM & SEO)",
    description: "Dominate search engine results and drive targeted traffic to your website with our expert SEM and SEO strategies.",
    heroImage: "https://picsum.photos/seed/search-marketing-hero/1920/1080",
    heroHint: "search engine results",
    features: [
      {
        icon: Search,
        title: "Comprehensive SEO Audits",
        description: "We identify technical, on-page, and off-page SEO issues and opportunities to build a solid foundation for growth.",
        image: { src: "https://picsum.photos/seed/seo-audit/600/400", hint: "seo analysis" }
      },
      {
        icon: BarChart,
        title: "Keyword Research & Strategy",
        description: "Target the right audience with in-depth keyword analysis, mapping user intent to your business goals.",
        image: { src: "https://picsum.photos/seed/keyword-research/600/400", hint: "keyword strategy" }
      },
      {
        icon: Target,
        title: "PPC Campaign Management",
        description: "Maximize your ROI with meticulously managed Pay-Per-Click campaigns on Google Ads and Bing Ads.",
        image: { src: "https://picsum.photos/seed/ppc-campaign/600/400", hint: "ppc management" }
      },
      {
        icon: TrendingUp,
        title: "Content & Link Building",
        description: "Boost your authority and rankings with high-quality content and strategic link-building outreach.",
        image: { src: "https://picsum.photos/seed/link-building/600/400", hint: "content strategy" }
      }
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
                <h2 className="text-3xl font-bold font-headline mb-4">Climb the Ranks, Capture the Clicks</h2>
                <p>
                  In today's digital marketplace, visibility is everything. If your customers can't find you on Google, you might as well not exist. Our Search Marketing services are designed to put your brand at the top of search results, connecting you with customers who are actively looking for your products and services.
                </p>
                <p>
                  We combine the long-term power of Search Engine Optimization (SEO) with the immediate impact of Search Engine Marketing (SEM) to create a holistic strategy that delivers both sustainable growth and quick wins.
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
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><DollarSign className="w-7 h-7 text-primary"/>Measurable Results</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Increase organic traffic and leads.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Improve keyword rankings for valuable terms.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Lower your cost-per-acquisition (CPA) with optimized ad campaigns.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Gain a competitive edge in the search landscape.</span></li>
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
