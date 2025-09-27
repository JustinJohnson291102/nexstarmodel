
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { BarChart, Search, Target, TrendingUp, DollarSign, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";


const faqs = [
    {
        question: "What's the difference between SEO and SEM?",
        answer: "SEO (Search Engine Optimization) involves optimizing your website to get 'free,' organic traffic from search engines. SEM (Search Engine Marketing) is a broader term that includes SEO as well as paid advertising methods like Pay-Per-Click (PPC). We combine both for a comprehensive strategy."
    },
    {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. While some improvements can be seen in as little as a few weeks, it typically takes 4-6 months to see significant, sustainable results in rankings and organic traffic. The timeline depends on your industry's competitiveness, your website's current state, and the intensity of the campaign."
    },
    {
        question: "Is PPC worth the investment?",
        answer: "Absolutely. PPC offers immediate visibility and highly targeted traffic. It's an excellent way to generate leads and sales quickly while your long-term SEO strategy is building momentum. We focus on optimizing campaigns for a high Return On Ad Spend (ROAS)."
    },
    {
        question: "How do you measure the success of a search marketing campaign?",
        answer: "We track a variety of Key Performance Indicators (KPIs), including keyword rankings, organic traffic, click-through rates (CTR), conversion rates, cost per acquisition (CPA), and overall ROI. We provide detailed monthly reports to show you exactly how our efforts are impacting your bottom line."
    }
]

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
        description: "Boost your authority and rankings with high-quality, SEO-optimized content and strategic link-building outreach.",
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
                  In today's digital marketplace, visibility is everything. If your customers can't find you on Google, you might as well not exist. More than 90% of online experiences begin with a search engine, and the top results capture the vast majority of traffic. Our Search Marketing services are designed to put your brand at the top of those results, connecting you with customers who are actively and intentionally looking for your products and services.
                </p>
                <p>
                  We don't believe in a one-size-fits-all approach. We combine the long-term, sustainable power of Search Engine Optimization (SEO) with the immediate, targeted impact of Search Engine Marketing (SEM) and Pay-Per-Click (PPC) advertising. This holistic strategy delivers both sustainable growth and quick wins, maximizing your visibility and return on investment.
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
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><DollarSign className="w-7 h-7 text-primary"/>Measurable Results, Tangible ROI</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Increase organic traffic and generate high-quality leads.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Improve keyword rankings for valuable, high-intent terms.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Lower your cost-per-acquisition (CPA) with highly optimized ad campaigns.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Gain a significant competitive edge in the search landscape.</span></li>
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
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/search-marketing-choose/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us as Your Search Marketing Partner?
            </h2>
            <p className="text-lg text-white/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Our approach to search marketing is both an art and a science. We are relentlessly data-driven, using advanced analytics to inform every decision. But we're also creative strategists who understand the human element of search. We build campaigns that not only please search engine algorithms but also resonate with your target audience, turning searchers into loyal customers.
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
              Everything you need to know about our SEO and SEM services.
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
