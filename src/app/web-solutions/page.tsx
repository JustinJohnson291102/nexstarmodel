
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, Search, HelpCircle, Users, Rocket, TrendingUp, Briefcase, Replace, ShoppingCart, Smartphone, Tablet, CheckCircle, Scale, ShieldCheck } from "lucide-react";
import GetStartedForm from "@/components/shared/get-started-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OurClients from "@/components/homepage/our-clients";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const coreFeatures = [
    {
        icon: Search,
        title: "SEO-Friendly",
        description: "We build websites with search engine optimization at their core, ensuring you rank higher and attract more organic traffic."
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Your website will look and perform flawlessly on all devices, from desktops to tablets and smartphones."
    },
    {
        icon: Scale,
        title: "Scalable Architecture",
        description: "Our websites are built on a solid foundation that can grow with your business, handling increased traffic and new features with ease."
    },
    {
        icon: ShieldCheck,
        title: "Secure & Reliable",
        description: "We prioritize security, implementing best practices to protect your website and your customers' data from threats."
    }
];

const processSteps = [
    { title: "Discovery & Planning", description: "We start by understanding your business, goals, and audience to create a strategic plan." },
    { title: "IA & Design", description: "We map out the user journey and create a stunning, user-friendly design prototype." },
    { title: "Development", description: "Our developers bring the design to life with clean, efficient, and scalable code." },
    { title: "Testing", description: "We rigorously test every aspect of the site to ensure a bug-free, seamless experience." },
    { title: "Launch", description: "We manage the deployment process for a smooth launch and provide post-launch support." }
];

const webPackages = [
    { icon: Briefcase, title: "Competition Analysis" },
    { icon: Smartphone, title: "Responsive Web Design" },
    { icon: ShoppingCart, title: "E-commerce Development" },
    { icon: Replace, title: "CMS Development" },
    { icon: Rocket, title: "Landing Page Design" },
    { icon: Users, title: "User Experience (UX) Design" },
];

const whyChooseUsFeatures = [
    {
        icon: Lightbulb,
        title: "Strategic Approach",
        description: "We don't just build websites; we build digital experiences that are aligned with your business objectives and drive results.",
    },
    {
        icon: Users,
        title: "Collaborative Process",
        description: "We work as your partners, involving you in every step to ensure the final product is a perfect reflection of your vision.",
    },
    {
        icon: TrendingUp,
        title: "Focus on ROI",
        description: "Our goal is to create a website that is not just a cost center, but a powerful asset that generates leads and revenue.",
    }
];

const faqs = [
    {
        question: "How long will it take to build my website?",
        answer: "The timeline depends on the complexity of the project. A standard informational site can take 4-6 weeks, while a custom e-commerce site may take 8-12 weeks or more. We'll provide a detailed timeline after the discovery phase."
    },
    {
        question: "How much does a website cost?",
        answer: "Website costs vary widely. We provide custom quotes based on your specific needs. We can work with you to find a solution that fits your budget, from simple landing pages to complex, custom-built platforms."
    },
    {
        question: "Will I be able to update the website myself?",
        answer: "Yes. We typically build websites on a Content Management System (CMS) like WordPress, which allows you to easily update content, images, and blog posts without any coding knowledge. We provide training to ensure you're comfortable managing your site."
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Absolutely. We offer a range of support and maintenance packages to keep your website secure, updated, and running smoothly. We see ourselves as your long-term digital partner."
    }
];

export default function WebSolutionsPage() {
  return (
    <>
      <section 
        className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 text-primary animate-in fade-in slide-in-from-left-10 duration-700">
                Website Design & Development
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-left-10 duration-700 delay-100">
                We build beautiful, high-performance websites that are not only visually stunning but also engineered for performance, security, and scalability. Your website is your digital flagship—we make sure it stands out.
              </p>
               <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                <Image 
                    src="https://picsum.photos/seed/web-dev-hero/1200/600"
                    alt="Modern Website Design on a laptop"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="website design laptop"
                />
               </div>
            </div>
            <div className="md:col-span-1 sticky top-32 animate-in fade-in slide-in-from-right-10 duration-700">
               <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Built for the Modern Web</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Every website we create is built on a foundation of cutting-edge technology and best practices.</p>
            </div>
             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg border border-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-5" style={{animationDelay: `${index*100}ms`}}>
                        <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                            <feature.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

       <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Our Proven Development Process</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">A streamlined, transparent process that ensures your project is delivered on time and to the highest standards.</p>
            </div>
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block"></div>
                {processSteps.map((step, index) => (
                    <div key={index} className={`relative flex items-center mb-12 w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:pr-16'}`}>
                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-10" style={index % 2 === 0 ? {left: '-8px'} : {right: '-8px'}}></div>
                        <Card className="w-full shadow-lg hover:shadow-primary/20 transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <div className="bg-primary/10 text-primary p-2 rounded-md">
                                        <span className="font-bold text-xl">{index + 1}</span>
                                    </div>
                                    <span className="font-headline text-2xl">{step.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </section>

      <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Full-Spectrum Web Solutions</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    We offer a wide array of web development services to meet your unique business needs. Whether you need a simple landing page or a complex e-commerce platform, our team has the expertise to deliver.
                </p>
                 <div className="grid grid-cols-2 gap-6">
                    {webPackages.map((pkg) => (
                        <div key={pkg.title} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/20">
                            <pkg.icon className="w-8 h-8 text-primary" />
                            <h3 className="font-semibold">{pkg.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
             <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                <Image 
                    src="https://picsum.photos/seed/web-solutions-grid/800/700"
                    alt="Web Solutions Collage"
                    width={800}
                    height={700}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="web design grid"
                />
             </div>
          </div>
      </section>

      <section 
        className="py-20 md:py-24 bg-background"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              We are more than just developers; we are your strategic partners in digital growth.
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

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
             <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Your questions about our web development process, answered.
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
