
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Users, Megaphone, BarChart, PenTool, CheckCircle, HelpCircle, ThumbsUp, MessageCircle, Share2, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    {
        question: "Which social media platforms are best for my business?",
        answer: "The best platforms depend on your target audience and industry. We conduct thorough research to identify where your customers are most active, whether it's Instagram for visual brands, LinkedIn for B2B, or TikTok for reaching a younger demographic."
    },
    {
        question: "How do you measure the ROI of social media marketing?",
        answer: "We track key performance indicators (KPIs) like engagement rate, reach, website clicks, lead generation, and ultimately, sales conversions. We use custom tracking and analytics to tie social media activity directly to your business goals."
    },
    {
        question: "How often will you post on our accounts?",
        answer: "Our posting frequency is based on a custom strategy designed for each platform and your specific goals. Consistency is key. We'll develop a content calendar that ensures a steady stream of high-quality content to keep your audience engaged."
    },
    {
        question: "Can you manage customer service inquiries on social media?",
        answer: "Yes, community management is a core part of our service. We handle comments, messages, and reviews promptly and professionally, turning your social media channels into a valuable customer support tool."
    }
]

const alternatingContent = [
    {
        title: "Content That Connects",
        description: "We develop and create high-quality content that tells your brand's story, educates your audience, and inspires action. From stunning visuals and engaging videos to compelling copy, our content is designed to stop the scroll.",
        points: [
            "Monthly content calendar and strategy.",
            "Professional graphic design, photography, and videography.",
            "Compelling copywriting that matches your brand voice.",
            "Content tailored for each platform's algorithm and audience."
        ],
        image: {
            src: "https://picsum.photos/seed/yellow-content/800/600",
            hint: "yellow content creation"
        }
    },
    {
        title: "Targeted Advertising Campaigns",
        description: "We go beyond organic reach to connect you with your ideal customers through highly targeted social media advertising campaigns. We manage everything from audience research and ad creation to budget optimization and performance tracking.",
        points: [
            "Audience segmentation and lookalike audience creation.",
            "A/B testing of ad creatives and copy for optimal performance.",
            "Pixel and conversion tracking for measurable ROI.",
            "Detailed performance reporting and insights."
        ],
        image: {
            src: "https://picsum.photos/seed/yellow-social-ads/800/600",
            hint: "yellow social ads"
        }
    }
];

const platformCards = [
    { platform: "Instagram", description: "Visually-driven storytelling for brands.", image: { src: "https://picsum.photos/seed/yellow-instagram/600/400", hint: "yellow instagram feed" }},
    { platform: "Facebook", description: "Broad audience reach and community building.", image: { src: "https://picsum.photos/seed/yellow-facebook/600/400", hint: "yellow facebook page" }},
    { platform: "LinkedIn", description: "Professional networking and B2B leadership.", image: { src: "https://picsum.photos/seed/professional-linkedin/600/400", hint: "professional linkedin" }},
    { platform: "TikTok", description: "Engaging short-form video and trend-setting.", image: { src: "https://picsum.photos/seed/colorful-tiktok/600/400", hint: "colorful tiktok" }},
];

export default function SocialMediaPage() {
  const pageData = {
    title: "Social Media Marketing",
    description: "We build and nurture online communities, turning followers into fans and fans into customers.",
    heroImage: "https://ik.imagekit.io/ggelm1lwa/social%20media%20marketing.jpg?updatedAt=1759469318952",
    heroHint: "social media marketing",
    features: [
      {
        icon: Users,
        title: "Community Building & Engagement",
        description: "We foster authentic connections with your audience, building a loyal community around your brand through active engagement and conversation.",
      },
      {
        icon: Megaphone,
        title: "Campaign Creation & Execution",
        description: "From viral contests to targeted ad campaigns, we design and execute strategies that capture attention and drive measurable action.",
      },
      {
        icon: BarChart,
        title: "Social Listening & Analytics",
        description: "We monitor conversations around your brand, track performance, and use data-driven insights to refine your strategy and capitalize on trends.",
      },
      {
        icon: PenTool,
        title: "Content Strategy & Creation",
        description: "Our creative team develops compelling content—from stunning visuals to engaging copy—that tells your brand's story and resonates with your audience.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
        data-ai-hint={pageData.heroHint}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold font-headline mb-4">Engage, Excite, and Expand Your Reach</h2>
                <p>
                  Social media is more than just posting updates; it's about building a vibrant community, telling your brand's story, and creating meaningful connections with your audience. In a world where attention is the most valuable currency, a powerful social media presence is non-negotiable. It's your direct line to your customers, a platform for authentic engagement, and a powerful driver of business growth.
                </p>
                <p>
                  Our approach to social media is holistic and strategy-first. We dive deep to understand your audience, your brand voice, and your business objectives. From there, we craft a custom strategy that combines compelling content, targeted advertising, and proactive community management to deliver results that go beyond likes and follows. We help you create a social presence that is not just active, but influential.
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
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><CheckCircle className="w-7 h-7 text-primary"/>Our Social Media Services Include:</h3>
                  <ul className="space-y-3 columns-1 sm:columns-2">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Social Strategy Development</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Content Creation (Photo, Video, Graphics)</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Community Management</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Paid Social Advertising</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Influencer Marketing</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Analytics and Reporting</span></li>
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
        style={{ backgroundImage: `url('https://picsum.photos/seed/colorful-professional-office/1920/1080')`}}
        data-ai-hint="colorful professional office"
       >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">Mastering Every Platform</h2>
             <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">We speak the language of every social platform to ensure your brand's voice is heard everywhere.</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformCards.map(card => (
                  <Card key={card.platform} className="bg-background/10 border-white/20 group overflow-hidden">
                    <div className="relative aspect-video">
                        <Image src={card.image.src} alt={card.platform} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={card.image.hint} />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-headline text-xl font-bold mb-1">{card.platform}</h3>
                        <p className="text-sm text-white/70">{card.description}</p>
                    </div>
                  </Card>
              ))}
             </div>
          </div>
        </div>
       </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 space-y-24">
            {alternatingContent.map((item, index) => (
                <div key={item.title} className="grid md:grid-cols-2 gap-16 items-center">
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
                        <h3 className="text-3xl font-bold font-headline mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6">{item.description}</p>
                        <ul className="space-y-3">
                            {item.points.map(point => (
                                <li key={point} className="flex items-start">
                                   <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                            ))}
                        </ul>
                         <Button asChild className="mt-6 group">
                            <Link href="/pricing/smo-pricing">
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
              Why Choose Us for Social Media Marketing?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              We're a blend of creative storytellers and data-driven strategists. We understand that success on social media requires both artistry and analytics. We're committed to creating a social presence for your brand that not only looks great but also contributes directly to your bottom line.
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
              Your top questions about social media marketing, answered.
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

    