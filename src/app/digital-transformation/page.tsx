
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Zap, CheckCircle, HelpCircle, Cloud, ShieldCheck, Repeat, Cpu, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const transformationServices = [
    {
        icon: Repeat,
        title: "Legacy System Modernization",
        description: "We refactor or replace outdated software with modern, scalable, and maintainable solutions without disrupting your business operations."
    },
    {
        icon: Cpu,
        title: "Business Process Automation",
        description: "Identify and automate repetitive, manual tasks to increase efficiency, reduce errors, and free up your team for more strategic work."
    },
    {
        icon: Cloud,
        title: "Cloud Migration & Strategy",
        description: "Seamlessly migrate your infrastructure and applications to the cloud (AWS, GCP, Azure) for enhanced scalability, security, and cost-effectiveness."
    },
    {
        icon: ShieldCheck,
        title: "Data-Driven Culture Implementation",
        description: "We help you implement the tools and processes needed to collect, analyze, and act on data, turning insights into a competitive advantage."
    }
];

const faqs = [
    {
        question: "What is digital transformation?",
        answer: "Digital transformation is the process of integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo and experiment."
    },
    {
        question: "Where do we start with digital transformation?",
        answer: "Our process begins with a comprehensive audit of your current processes, technology stack, and business goals. From there, we work with you to create a prioritized roadmap that focuses on high-impact areas for transformation, ensuring a smooth and successful journey."
    },
    {
        question: "Is digital transformation only for large enterprises?",
        answer: "Not at all. Businesses of all sizes can benefit from digital transformation. For small businesses, it can be about adopting cloud-based tools to improve efficiency. For larger companies, it might be a more comprehensive overhaul of legacy systems. We tailor our approach to your size and needs."
    },
     {
        question: "How do you manage the change within the organization?",
        answer: "Change management is a critical component of our digital transformation services. We work with your team to ensure clear communication, provide thorough training, and demonstrate the value of new processes and tools to foster adoption and minimize resistance."
    }
]

const alternatingContent = [
    {
        title: "Automate for Efficiency",
        description: "Unlock significant productivity gains by automating repetitive and time-consuming business processes. We identify key areas for automation, from marketing and sales to customer service and back-office operations, allowing your team to focus on high-value, strategic work.",
        points: [
            "Workflow analysis and optimization.",
            "Implementation of robotic process automation (RPA).",
            "Integration of marketing automation platforms.",
            "Automated reporting and data entry solutions."
        ],
        image: {
            src: "https://picsum.photos/seed/automation-professional/800/600",
            hint: "business automation"
        }
    },
    {
        title: "Embrace the Cloud",
        description: "Modernize your infrastructure by migrating to the cloud. We help you choose the right cloud platform (AWS, Google Cloud, Azure) and develop a migration strategy that ensures security, scalability, and cost-efficiency. The cloud enables greater flexibility and innovation.",
        points: [
            "Cloud readiness assessment and strategy.",
            "Seamless migration of applications and data.",
            "Serverless architecture and containerization (Docker, Kubernetes).",
            "Ongoing cloud management and cost optimization."
        ],
        image: {
            src: "https://picsum.photos/seed/cloud-infra-professional/800/600",
            hint: "cloud infrastructure"
        }
    }
];

const impactStats = [
    { value: "40%", label: "Increase in Operational Efficiency" },
    { value: "30%", label: "Reduction in Costs" },
    { value: "50%", label: "Improvement in Customer Satisfaction" },
];

export default function DigitalTransformationPage() {
  const pageData = {
    title: "Digital Transformation",
    description: "Modernize your operations, automate processes, and embrace a data-driven culture to stay ahead of the curve.",
    heroImage: "/images/digital-transformation.jpg",
    heroHint: "abstract digital transformation",
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Zap className="h-16 w-16 mx-auto mb-4" />
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
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold font-headline mb-4">Evolve Your Business for the Digital Age</h2>
                <p>
                 To stay competitive in a rapidly changing world, businesses must adapt. Digital transformation is no longer an option—it's a necessity. Our services help you shed outdated legacy systems, automate time-consuming manual processes, and leverage the power of cloud computing and data analytics. We guide you through every step of the journey, from strategy and planning to implementation and change management, ensuring a successful transition to a more agile, efficient, and resilient organization.
                </p>
                 <ul className="space-y-4 mt-6">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Increase operational efficiency and reduce costs.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Enhance customer experience with modern, digital-first services.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Unlock new revenue streams and business models.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" /> <span>Improve decision-making with real-time data and analytics.</span></li>
                </ul>
              </div>

               <div className="bg-secondary p-8 rounded-lg">
                    <h3 className="text-2xl font-bold font-headline mb-6 text-center">Our Core Transformation Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {transformationServices.map((service) => (
                             <Card key={service.title} className="p-6 flex flex-col items-center text-center">
                                 <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
                                   <service.icon className="w-7 h-7" />
                                 </div>
                                 <h4 className="text-lg font-bold font-headline mb-2">{service.title}</h4>
                                 <p className="text-muted-foreground text-sm">{service.description}</p>
                             </Card>
                        ))}
                    </div>
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
        style={{ backgroundImage: `url('https://picsum.photos/seed/dt-parallax-vibrant/1920/1080')`}}
        data-ai-hint="colorful data visualization"
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">The Impact of Transformation</h2>
            <p className="text-lg text-white/80 mt-4">Driving measurable improvements across your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={stat.label} className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-in fade-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                <p className="text-6xl font-bold font-headline">{stat.value}</p>
                <p className="text-lg text-white/80 mt-2">{stat.label}</p>
              </div>
            ))}
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
                    </div>
                </div>  
            ))}
        </div>
      </section>

      <OurClients />

      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
             <Zap className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Future-Proof Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              The future is digital. Let us help you build a more agile, resilient, and competitive business. Contact us to begin your transformation journey.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Start Your Transformation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
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
