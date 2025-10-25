
import GetStartedForm from "@/components/shared/get-started-form";
import { BarChart, Search, Target, TrendingUp, DollarSign, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";


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
];

const alternatingContent = [
    {
        title: "Dominating Organic Search with SEO",
        description: "Climb to the top of search engine rankings and capture valuable organic traffic. Our SEO strategies are comprehensive, covering everything from technical website optimization and on-page content to authoritative link building.",
        points: [
            "In-depth keyword research to target high-intent customers.",
            "Technical SEO to ensure your site is perfectly indexed.",
            "High-quality content creation that attracts and engages.",
            "Strategic link-building to boost your site's authority."
        ],
        image: {
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm93dGglMjBjaGFydHxlbnwwfHx8fDE3NjIyNDc5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
            hint: "colorful professional seo chart"
        }
    },
    {
        title: "Immediate Impact with PPC/SEM",
        description: "Get instant visibility and drive targeted traffic with our expert Pay-Per-Click (PPC) and Search Engine Marketing (SEM) campaigns. We manage your ad spend effectively to maximize your ROI.",
        points: [
            "Google Ads & Bing Ads campaign management.",
            "Compelling ad copy and landing page optimization.",
            "Strategic bid management and budget allocation.",
            "A/B testing for continuous performance improvement."
        ],
        image: {
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYWlkJTIwYWRzfGVufDB8fHx8fDE3NjIzOTQwODd8MA&ixlib=rb-4.0.3&q=80&w=1080",
            hint: "colorful professional ppc ads"
        }
    }
];

export default function SearchMarketingPage() {
  const pageData = {
    title: "Search Marketing (SEM & SEO)",
    description: "Dominate search engine results and drive targeted traffic to your website with our expert SEM and SEO strategies.",
    heroImage: "https://ik.imagekit.io/ggelm1lwa/pexels-george-milton-7014337.jpg?updatedAt=1759859066347",
    heroHint: "colorful professional search engine marketing concept",
    features: [
      {
        icon: Search,
        title: "Comprehensive SEO Audits",
        description: "We identify technical, on-page, and off-page SEO issues and opportunities to build a solid foundation for growth.",
        image: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm93dGglMjBjaGFydHxlbnwwfHx8fDE3NjIyNDc5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080", hint: "colorful professional seo analysis" }
      },
      {
        icon: BarChart,
        title: "Keyword Research & Strategy",
        description: "Target the right audience with in-depth keyword analysis, mapping user intent to your business goals.",
        image: { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYWlkJTIwYWRzfGVufDB8fHx8fDE3NjIzOTQwODd8MA&ixlib=rb-4.0.3&q=80&w=1080", hint: "colorful professional keyword strategy" }
      },
      {
        icon: Target,
        title: "PPC Campaign Management",
        description: "Maximize your ROI with meticulously managed Pay-Per-Click campaigns on Google Ads and Bing Ads.",
        image: { src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZXNlYXJjaCUyMGFuYWx5c2lzfGVufDB8fHx8MTc2MjI0NzU0OHww&ixlib-rb-4.0.3&q=80&w=1080", hint: "colorful professional ppc management" }
      },
      {
        icon: TrendingUp,
        title: "Content & Link Building",
        description: "Boost your authority and rankings with high-quality, SEO-optimized content and strategic link-building outreach.",
        image: { src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwc3RyYXRlZ3l8ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080", hint: "colorful professional content strategy" }
      }
    ]
  };

  return (
    <div className="bg-background">
      <section 
        className="relative h-[80vh] w-full flex items-center justify-center text-center bg-white"
      >
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm93dGglMjBjaGFydHxlbnwwfHx8fDE3NjIyNDc5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Search Marketing"
          className="w-full h-full object-cover" loading="eager" />
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
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Climb the Ranks, Capture the Clicks</h2>
                <p>
                  In today's digital marketplace, visibility is everything. If your customers can't find you on Google, you might as well not exist. More than 90% of online experiences begin with a search engine, and the top results capture the vast majority of traffic. Our Search Marketing services are designed to put your brand at the top of those results, connecting you with customers who are actively and intentionally looking for your products and services.
                </p>
                <p>
                  We don't believe in a one-size-fits-all approach. We combine the long-term, sustainable power of Search Engine Optimization (SEO) with the immediate, targeted impact of Search Engine Marketing (SEM) and Pay-Per-Click (PPC) advertising. This holistic strategy delivers both sustainable growth and quick wins, maximizing your visibility and return on investment.
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
                  <h3 className="text-xl md:text-2xl font-bold font-headline mb-4 flex items-center gap-3 justify-center md:justify-start"><DollarSign className="w-7 h-7 text-primary"/>Measurable Results, Tangible ROI</h3>
                  <ul className="space-y-3 text-left">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Increase organic traffic and generate high-quality leads.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Improve keyword rankings for valuable, high-intent terms.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Lower your cost-per-acquisition (CPA) with highly optimized ad campaigns.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Gain a significant competitive edge in the search landscape.</span></li>
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
        className="py-20 md:py-32 bg-cover bg-center bg-fixed bg-primary"
        data-ai-hint="colorful professional digital data stream"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">A Dual-Pronged Attack</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 px-4">We combine SEO and SEM for short-term wins and long-term dominance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-background/90 text-foreground backdrop-blur-md">
                    <CardContent className="p-8 text-center">
                        <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h3 className="text-2xl font-bold font-headline mb-3">SEO: The Foundation</h3>
                        <p className="text-muted-foreground">Building your brand's authority for sustainable, organic growth that lasts.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-background/90 text-foreground backdrop-blur-md">
                    <CardContent className="p-8 text-center">
                        <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h3 className="text-2xl font-bold font-headline mb-3">SEM: The Accelerator</h3>
                        <p className="text-muted-foreground">Driving immediate, targeted traffic to capture customers at the moment of intent.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 space-y-16 md:space-y-24">
            {alternatingContent.map((item, index) => (
                <div key={item.title} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-1 slide-in-from-left-10' : 'md:order-2 slide-in-from-right-10'}`}>
                        <img src={item.image.src}
                            alt={item.title}
                            width={800}
                            height={600}
                            data-ai-hint={item.image.hint}
                            className="w-full h-full w-full h-auto object-rounded-lg transition-transform duration-500 hover:scale-105"
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
                         <Button asChild className="mt-6 group">
                            <Link to={index === 0 ? '/pricing/seo-pricing' : '/pricing/ppc-pricing'}>
                              View Pricing <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
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
              Why Choose Us as Your Search Marketing Partner?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              Our approach to search marketing is both an art and a science. We are relentlessly data-driven, using advanced analytics to inform every decision. But we're also creative strategists who understand the human element of search. We build campaigns that not only please search engine algorithms but also resonate with your target audience, turning searchers into loyal customers.
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
