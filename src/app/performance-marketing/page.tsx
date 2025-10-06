"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { DollarSign, Target, BarChart, TrendingUp, CheckCircle, HelpCircle, Lightbulb, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

const benefits = [
    {
        icon: DollarSign,
        title: "Measurable ROI",
        description: "Track every dollar spent and see a clear return on your investment. We focus on campaigns that deliver tangible results.",
    },
    {
        icon: Target,
        title: "Targeted Campaigns",
        description: "Reach your ideal customers with laser precision based on demographics, interests, and online behavior.",
    },
    {
        icon: BarChart,
        title: "Data-Driven Decisions",
        description: "We use advanced analytics to continuously optimize your campaigns for better performance and higher efficiency.",
    },
    {
        icon: TrendingUp,
        title: "Scalability",
        description: "Start small and scale your campaigns as your business grows. Our strategies are built for long-term success.",
    },
];

const includedServices = [
    { title: "Paid Search Advertising (PPC)", description: "Capture high-intent customers on Google and Bing at the exact moment they're searching for your services." },
    { title: "Social Media Advertising", description: "Engage your target audience on platforms like Facebook, Instagram, and LinkedIn with compelling ad creative." },
    { title: "Display Advertising", description: "Build brand awareness and retarget interested users across the web with visually engaging display ads." },
    { title: "Affiliate Marketing", description: "Leverage a network of partners to drive sales and traffic, paying only for results." },
    { title: "Conversion Rate Optimization (CRO)", description: "We analyze and optimize your landing pages and funnels to turn more visitors into customers." },
];

const whyChooseUsFeatures = [
    {
        icon: Lightbulb,
        title: "Holistic Strategy",
        description: "We don't just run ads. We develop a comprehensive performance marketing strategy that integrates with your overall business goals.",
    },
    {
        icon: Users,
        title: "Transparent Reporting",
        description: "You'll always know how your campaigns are performing with our clear, detailed, and easy-to-understand reports and dashboards.",
    },
    {
        icon: TrendingUp,
        title: "Continuous Optimization",
        description: "The digital landscape is always changing. We are relentlessly testing and optimizing to stay ahead of the curve and maximize your results.",
    }
];

const alternatingContent = [
    {
        title: "Full-Funnel Advertising",
        description: "We create and manage campaigns that target users at every stage of the customer journey, from awareness and consideration to conversion and loyalty. Our integrated approach ensures a seamless experience for your customers and maximum impact for your brand.",
        points: [
            "Top-of-funnel brand awareness campaigns.",
            "Mid-funnel consideration and lead generation.",
            "Bottom-of-funnel conversion and retargeting campaigns.",
            "Post-purchase loyalty and retention programs."
        ],
        image: {
            src: "https://picsum.photos/seed/colorful-professional-advertising-funnel/800/600",
            hint: "colorful professional marketing funnel"
        }
    },
    {
        title: "Landing Page & Conversion Optimization",
        description: "Driving traffic is only half the battle. We specialize in creating high-converting landing pages and optimizing your website's user experience to ensure that traffic turns into tangible business results. Through continuous A/B testing and data analysis, we maximize the value of every visitor.",
        points: [
            "Custom landing page design and development.",
            "A/B testing of headlines, copy, and calls-to-action.",
            "Heatmap and user session analysis to identify friction points.",
            "Optimization of checkout and form submission processes."
        ],
        image: {
            src: "https://picsum.photos/seed/colorful-professional-conversion-chart/800/600",
            hint: "colorful professional conversion chart"
        }
    }
];

const faqs = [
    {
        question: "What is performance marketing?",
        answer: "Performance marketing is a form of digital advertising where businesses only pay when a specific action is completed, such as a click, a lead, or a sale. It's a results-driven approach that focuses on measurable ROI."
    },
    {
        question: "How long does it take to see results?",
        answer: "With paid campaigns, you can start seeing traffic and results almost immediately. However, achieving optimal performance and a high ROI typically takes 1-3 months as we gather data, test, and refine your campaigns."
    },
    {
        question: "How much should I budget for performance marketing?",
        answer: "Your budget will depend on your industry, goals, and the competitiveness of the ad space. We work with you to establish a starting budget and a strategy to scale it effectively as we start generating a positive return."
    },
    {
        question: "What platforms do you specialize in?",
        answer: "We are experts across a wide range of platforms, including Google Ads (Search, Display, Shopping), Meta (Facebook & Instagram), LinkedIn Ads, and major affiliate networks. We select the platforms that are most relevant to your target audience."
    }
];

export default function PerformanceMarketingPage() {
  return (
    <>
      <section 
        className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-white"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 text-foreground animate-in fade-in slide-in-from-left-10 duration-700">
                Performance Marketing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-left-10 duration-700 delay-100">
                 Drive growth and maximize your return on investment with our data-driven performance marketing strategies. We create, manage, and optimize campaigns that deliver measurable results.
              </p>
               <div className="mt-8 md:mt-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                <Image 
                    src="https://picsum.photos/seed/colorful-professional-marketing-dashboard/1200/600"
                    alt="Dashboard showing marketing performance"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="colorful professional marketing analytics dashboard"
                />
               </div>
            </div>
            <div className="md:col-span-1 sticky top-32 animate-in fade-in slide-in-from-right-10 duration-700">
               <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">The Benefits of Performance Marketing</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto px-4">An approach focused on action, measurement, and results.</p>
            </div>
             <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg border border-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-5" style={{animationDelay: `${index*100}ms`}}>
                        <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                            <benefit.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">What's Included in Our Performance Marketing Package?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                   We offer a full-funnel approach to paid media, ensuring we're reaching your customers at every stage of their journey.
                </p>
                <div className="space-y-4">
                    {includedServices.map((service) => (
                         <div key={service.title} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/20">
                            <div className="bg-primary/10 text-primary p-2 rounded-md mt-1">
                               <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                <Image 
                    src="https://picsum.photos/seed/colorful-professional-marketing-funnel/800/900"
                    alt="Marketing Funnel Diagram"
                    width={800}
                    height={900}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="colorful professional marketing funnel diagram"
                />
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
                            className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className={`animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-2 slide-in-from-right-10' : 'md:order-1 slide-in-from-left-10'}`}>
                        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">{item.title}</h3>
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
      
      <section 
        className="py-16 md:py-24 bg-background"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us for Performance Marketing?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              We're not just ad managers; we're your strategic growth partners. We dig deep into your data to unlock insights that drive real business impact.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
            {whyChooseUsFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-8 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold font-headline mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <OurClients />

      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
             <Rocket className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Boost Your Performance?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              Let's build a data-driven strategy that achieves your business objectives and delivers a powerful return on investment. Contact us for a free consultation.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
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
              Your top questions about our performance marketing services, answered.
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
    </>
  );
}

    