
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Lightbulb, Users, BarChart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    points: [
      "Social-First Strategy Development",
      "Platform Management",
      "Community Building + Engagement",
      "Campaign Creation + Execution",
      "Social Listening & Brand Positioning",
      "Content Analysis & Auditing",
      "Competitive Analysis",
      "Co-branded Partnerships & Audience Development",
    ],
    image: "https://drive.google.com/uc?export=view&id=1DDddv8fnkOXtN8VvDIA3UNhve401V93J",
    imageAlt: "Social Media Marketing",
    link: "/social-media",
    imageHint: "social media analytics",
  },
  {
    id: "branding",
    title: "Creative and Branding Services",
    points: [
      "Branding & Creative Strategy",
      "Graphic Design & Illustration",
      "Copywriting & Content Creation",
      "Full Production: Photo Shoots",
      "Full Production: Video Shoots",
      "Brand Identity & Logo Design",
      "Style Guide Development",
      "Packaging Design",
    ],
    image: "https://drive.google.com/uc?export=view&id=1jY1qGWPlCndtNUQGCWiTInrFUkCSgoxJ",
    imageAlt: "Creative and Branding Services",
    link: "/creative-branding",
    imageHint: "branding strategy",
  },
  {
    id: "web-tech",
    title: "Web/Tech Solutions",
    points: [
      "Responsive Web Design & Development",
      "UI/UX Design & Prototyping",
      "E-commerce Solutions (Shopify, WooCommerce)",
      "Custom Web Applications",
      "Mobile App Development (iOS & Android)",
      "Content Management Systems (CMS)",
      "Website Maintenance & Support",
      "Performance Optimization",
    ],
    image: "https://drive.google.com/uc?export=view&id=1WMGmsDafpB6VFzOkNwBAH_oy7YCUXWMn",
    imageAlt: "Digital - Website / Technology",
    link: "/web-solutions",
    imageHint: "web development",
  },
  {
    id: "b2b",
    title: "B2B Marketing",
    points: [
      "Account-Based Marketing (ABM) Strategy",
      "Lead Generation & Nurturing Funnels",
      "B2B Content Strategy & Thought Leadership",
      "Marketing & Sales Analytics Integration",
      "LinkedIn & Email Marketing Campaigns",
      "Sales Enablement Materials",
      "Webinar & Event Marketing",
      "CRM Integration & Automation",
    ],
    image: "https://drive.google.com/uc?export=view&id=1KdwlOUV8FycrA09pJk_WwxX-nCiFKlK2",
    imageAlt: "B2B Marketing",
    link: "/b2b",
    imageHint: "b2b handshake",
  },
  {
    id: "search-marketing",
    title: "Search Marketing (SEO/SEM)",
    points: [
      "Comprehensive SEO Audits",
      "Keyword Research & Strategy",
      "On-Page, Off-Page, and Technical SEO",
      "PPC Campaign Management (Google & Bing)",
      "Content Marketing & Link Building",
      "Local SEO & Google My Business",
      "Analytics and Performance Reporting",
    ],
    image: "https://picsum.photos/seed/search-marketing-main/600/400",
    imageAlt: "Search Marketing",
    link: "/search-marketing",
    imageHint: "search marketing",
  },
  {
    id: "video-production",
    title: "Video Production",
    points: [
      "Concept Development & Scriptwriting",
      "On-Location & Studio Filming",
      "Post-Production & Editing",
      "Animation & Motion Graphics",
      "Corporate Videos & Commercials",
      "Social Media Content Creation",
      "Drone Videography",
    ],
    image: "https://picsum.photos/seed/video-production-main/600/400",
    imageAlt: "Video Production",
    link: "/video-production",
    imageHint: "video production",
  },
  {
    id: "orm",
    title: "Online Reputation Management",
    points: [
      "Brand & Keyword Monitoring",
      "Review Generation & Management",
      "Negative Content Suppression",
      "Crisis Response & Management",
      "Positive Content Creation & Promotion",
      "Search Engine Results Page (SERP) Control",
      "Social Media Profile Management",
    ],
    image: "https://picsum.photos/seed/orm-main/600/400",
    imageAlt: "Online Reputation Management",
    link: "/online-reputation-management",
    imageHint: "reputation management",
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    points: [
      "Custom E-commerce Website Design",
      "Shopify & WooCommerce Development",
      "Platform Migration Services",
      "Payment Gateway Integration",
      "Conversion Rate Optimization (CRO)",
      "Custom App & Plugin Development",
      "Maintenance & Support",
    ],
    image: "https://picsum.photos/seed/ecommerce-main/600/400",
    imageAlt: "E-commerce Development",
    link: "/ecommerce-development",
    imageHint: "ecommerce development",
  },
];

const whyChooseUsFeatures = [
    {
        icon: Lightbulb,
        title: "Strategic Creativity",
        description: "We blend innovative ideas with data-driven strategies to create campaigns that not only look great but also deliver measurable results.",
    },
    {
        icon: Users,
        title: "Client-Centric Approach",
        description: "Your success is our success. We work as an extension of your team, ensuring our goals are perfectly aligned with your business objectives.",
    },
    {
        icon: BarChart,
        title: "Data-Driven Results",
        description: "We are obsessed with analytics. Every decision is backed by data, and we continuously optimize for the best possible return on investment.",
    }
];


export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
        <Image
          src="https://drive.google.com/uc?export=view&id=1t_TXcMnPTHoBkeRjQ4gE0w72lgzAquqW"
          alt="Services background"
          fill
          className="object-cover"
          priority
          data-ai-hint="creative workspace"
        />
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            A complete suite of digital services to elevate your brand.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-20 md:space-y-32">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                <div
                  className={`animate-in fade-in duration-700 overflow-hidden rounded-lg shadow-xl ${
                    index % 2 !== 0 ? "md:order-2 slide-in-from-right-10" : "slide-in-from-left-10"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                     data-ai-hint={service.imageHint}
                  />
                </div>
                <div
                  className={`flex flex-col animate-in fade-in duration-700 ${
                    index % 2 !== 0
                      ? "md:order-1 slide-in-from-left-10"
                      : "md:items-end md:text-right slide-in-from-right-10"
                  }`}
                >
                  <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6 text-primary">
                    {service.title}
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {service.points.slice(0, 5).map((point) => (
                      <li key={point} className={`flex items-start ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {index % 2 !== 0 && <CheckCircle className={`h-5 w-5 text-primary mt-1 flex-shrink-0 mr-3`} />}
                        <span className="text-lg text-muted-foreground">{point}</span>
                         {index % 2 === 0 && <CheckCircle className="h-5 w-5 text-primary ml-3 mt-1 flex-shrink-0" />}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                    <Button asChild size="lg" className="group rounded-lg w-auto">
                      <Link href={service.link}>
                        View More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-20 md:py-24 bg-secondary"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              We are more than just a service provider; we are your dedicated partner in growth. Our approach is built on a foundation of collaboration, transparency, and a relentless pursuit of excellence.
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
      
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
             <Rocket className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Let's discuss how our services can be tailored to meet your unique goals. Contact us today for a free consultation and let's build something amazing together.
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

    </>
  );
}

    