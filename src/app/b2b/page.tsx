
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart, BrainCircuit, Goal, MessageCircle, Users, CheckCircle, TrendingUp, Zap, ShieldCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import OurClients from "@/components/homepage/our-clients";


const b2bServices = [
  {
    icon: Goal,
    title: "Account-Based Marketing (ABM)",
    description: "Target high-value accounts with personalized campaigns that treat individual accounts as markets in their own right.",
    image: {
      src: "https://picsum.photos/seed/colorful-professional-abm/600/400",
      hint: "colorful professional marketing target",
    }
  },
  {
    icon: Users,
    title: "Lead Generation & Nurturing",
    description: "Build a robust pipeline of qualified leads and nurture them through the sales funnel with targeted content and automation.",
    image: {
      src: "https://picsum.photos/seed/colorful-professional-lead-gen/600/400",
      hint: "colorful professional sales funnel",
    }
  },
  {
    icon: BrainCircuit,
    title: "B2B Content Strategy",
    description: "Establish thought leadership and attract your target audience with valuable, relevant, and consistent content.",
     image: {
      src: "https://picsum.photos/seed/colorful-professional-content-strategy/600/400",
      hint: "colorful professional content creation",
    }
  },
  {
    icon: BarChart,
    title: "Marketing & Sales Analytics",
    description: "Leverage data to optimize your marketing efforts, measure ROI, and align your sales and marketing teams.",
     image: {
      src: "https://picsum.photos/seed/professional-analytics-dashboard/600/400",
      hint: "professional data analytics",
    }
  },
];

const chartData = [
  { month: "Jan", leads: 45, qualified: 15 },
  { month: "Feb", leads: 60, qualified: 25 },
  { month: "Mar", leads: 75, qualified: 30 },
  { month: "Apr", leads: 90, qualified: 40 },
  { month: "May", leads: 80, qualified: 35 },
  { month: "Jun", leads: 110, qualified: 50 },
];

const chartConfig = {
  leads: {
    label: "Leads Generated",
    color: "hsl(var(--chart-2))",
  },
  qualified: {
    label: "Qualified Leads",
    color: "hsl(var(--chart-1))",
  },
};

const alternatingContent = [
    {
        title: "Targeted ABM Campaigns",
        description: "Our Account-Based Marketing strategies focus on high-value accounts, delivering personalized messaging and content that resonates with key decision-makers. We help you build deeper relationships and accelerate your sales cycle.",
        points: [
            "Ideal Customer Profile (ICP) and account list development.",
            "Personalized content creation and targeted ad campaigns.",
            "Multi-channel outreach across email, LinkedIn, and display.",
            "Sales and marketing team alignment for seamless follow-up."
        ],
        image: {
            src: "https://picsum.photos/seed/colorful-professional-b2b-abm/800/600",
            hint: "colorful professional marketing focus"
        }
    },
    {
        title: "Content That Converts",
        description: "We create high-value content that establishes your brand as a thought leader and drives inbound leads. From in-depth whitepapers to engaging webinars, our content is designed to attract, educate, and convert your target audience.",
        points: [
            "Comprehensive content audits and strategy development.",
            "Creation of whitepapers, case studies, and blog posts.",
            "Webinar and video production for deeper engagement.",
            "Content distribution and promotion strategies."
        ],
        image: {
            src: "https://picsum.photos/seed/colorful-professional-b2b-content/800/600",
            hint: "colorful professional content writing"
        }
    }
];

const stats = [
    { value: "3x", label: "Higher ROI on Marketing Spend" },
    { value: "50%", label: "Increase in Qualified Leads" },
    { value: "2x", label: "Faster Sales Cycles" }
];


export default function B2BPage() {
  return (
    <>
      <section 
        className="relative h-[60vh] md:h-[70vh] w-full"
      >
       <Image
          src="https://picsum.photos/seed/colorful-professional-b2b-banner/1920/1080"
          alt="B2B Marketing Banner"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </section>

      <section 
        className="relative py-16 md:py-24 bg-secondary"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Our Core B2B Services
            </h2>
            <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              We craft bespoke marketing strategies that connect you with your ideal customers, shorten sales cycles, and deliver measurable results. Our approach is built on a deep understanding of your industry, your business objectives, and your customers' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full group text-left bg-card/70 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video w-full">
                       <Image
                        src={service.image.src}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={service.image.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-start gap-3">
                        <div className="bg-primary/50 backdrop-blur-sm p-3 rounded-lg border border-primary-foreground/20">
                          <service.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                     <CardTitle className="font-headline text-xl leading-tight mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-24 bg-cover bg-center bg-fixed"
        style={{backgroundImage: "url('https://picsum.photos/seed/colorful-professional-b2b-parallax/1920/1080')"}}
        data-ai-hint="colorful professional business success"
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10 text-primary-foreground">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map(stat => (
              <div key={stat.label} className="p-6 bg-black/10 rounded-lg">
                <p className="text-5xl md:text-6xl font-bold font-headline">{stat.value}</p>
                <p className="text-base md:text-lg text-primary-foreground/80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
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
        className="relative py-16 md:py-24 bg-secondary"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700">
               <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">Data-Driven Insights</h2>
               <p className="text-lg text-muted-foreground mb-8">
                We don't guess, we measure. Our B2B strategies are powered by robust analytics to ensure every marketing dollar is spent effectively. We track lead generation, qualification rates, and campaign performance to continuously optimize for ROI.
               </p>
               <ul className="space-y-4">
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-primary mr-3" /> <span className="text-lg">Real-time performance dashboards</span></li>
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-primary mr-3" /> <span className="text-lg">Funnel analysis and optimization</span></li>
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-primary mr-3" /> <span className="text-lg">Predictive analytics for lead scoring</span></li>
               </ul>
            </div>
             <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Lead Generation Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] sm:h-[300px] w-full">
                    <ChartContainer config={chartConfig} className="w-full h-full">
                      <AreaChart data={chartData} margin={{ left: -20, right: 20, top: 10, bottom: 0 }}>
                        <defs>
                          <linearGradient id="fillLeads" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-leads)" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="var(--color-leads)" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="fillQualified" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-qualified)" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="var(--color-qualified)" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                        <Area dataKey="leads" type="natural" fill="url(#fillLeads)" stroke="var(--color-leads)" stackId="a" />
                        <Area dataKey="qualified" type="natural" fill="url(#fillQualified)" stroke="var(--color-qualified)" stackId="a" />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <OurClients />

      <section 
        className="relative py-16 md:py-24 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Our B2B Approach is Different
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              We go beyond conventional marketing tactics to build meaningful relationships and drive sustainable growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
                <div className="bg-background/10 p-4 rounded-full mb-4 border-2 border-white/20">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Growth-Focused</h3>
                <p className="text-white/80 text-center">Our strategies are designed for scalability, ensuring we're not just hitting targets, but building a foundation for long-term success.</p>
              </div>
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-7 duration-500 delay-300">
                <div className="bg-background/10 p-4 rounded-full mb-4 border-2 border-white/20">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Tech-Powered</h3>
                <p className="text-white/80 text-center">We leverage the latest marketing technology and automation to create hyper-efficient campaigns and personalized customer journeys.</p>
              </div>
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-7 duration-500 delay-400">
                <div className="bg-background/10 p-4 rounded-full mb-4 border-2 border-white/20">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Partnership-Driven</h3>
                <p className="text-white/80 text-center">We work as an extension of your team, fostering deep collaboration to ensure our goals are perfectly aligned with your vision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Elevate Your B2B Strategy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              Let's talk about how we can help you achieve your business goals. Whether you're looking to generate more leads, increase brand awareness, or drive revenue, our team of B2B marketing experts is here to help.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
