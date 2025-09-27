"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Smartphone, ShieldCheck, TrendingUp, Brush, Server, Users, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "How much does it cost to build a mobile app?",
        answer: "App development costs vary greatly depending on complexity, features, and platform (iOS, Android, cross-platform). After an initial consultation to understand your requirements, we provide a detailed, custom quote for your project."
    },
    {
        question: "How long does it take to develop an app?",
        answer: "A typical mobile app project can take anywhere from 3 to 9 months. This includes discovery, design, development, testing, and launch. We'll create a detailed project timeline once the scope is finalized."
    },
    {
        question: "Do you develop for both iOS and Android?",
        answer: "Yes, we offer native development for both iOS and Android to provide the best performance and user experience. We also offer cross-platform development solutions using frameworks like React Native for faster time-to-market and broader reach."
    },
    {
        question: "Will you help me submit my app to the app stores?",
        answer: "Absolutely. Our service includes managing the entire submission process for both the Apple App Store and Google Play Store, ensuring your app meets all guidelines and is successfully launched."
    }
]

export default function MobileAppDevelopmentPage() {
  const pageData = {
    title: "Mobile App Development",
    description: "We build intuitive, high-performance mobile apps that engage users, drive business growth, and bring your ideas to life.",
    heroImage: "https://drive.google.com/uc?export=download&id=1DKmfa5nUGosaeJGjtEFNXY5EWwYG",
    heroHint: "mobile app development",
    features: [
      {
        icon: Smartphone,
        title: "Native iOS & Android Development",
        description: "We build high-performance, platform-specific apps that deliver the best possible user experience on both iOS and Android devices.",
      },
      {
        icon: Brush,
        title: "Stunning UI/UX Design",
        description: "Our design process is human-centric, focusing on creating intuitive, beautiful interfaces that are a joy to use and drive user engagement.",
      },
      {
        icon: Server,
        title: "Robust Backend & API Integration",
        description: "We develop scalable and secure back-end systems and seamlessly integrate with third-party services to power your app's functionality.",
      },
      {
        icon: Users,
        title: "User-Centric Strategy",
        description: "From concept to launch, we focus on your target users, ensuring the final product meets their needs and solves their problems effectively.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section className="relative bg-primary pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left text-primary-foreground animate-in fade-in slide-in-from-left-10 duration-700">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
                {pageData.title}
              </h1>
              <p className="text-lg md:text-2xl text-primary-foreground/90 max-w-xl mx-auto md:mx-0">
                {pageData.description}
              </p>
            </div>
            <div className="relative h-[50vh] w-full animate-in fade-in slide-in-from-right-10 duration-700">
                <Image
                    src={pageData.heroImage}
                    alt={pageData.title}
                    fill
                    className="object-contain"
                    data-ai-hint={pageData.heroHint}
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold font-headline mb-4">Your Vision, In the Palm of Their Hand</h2>
                <p>
                  A mobile app is the most direct and personal way to connect with your customers. It's an immersive brand experience, a powerful business tool, and a permanent presence on the device they use most. In a mobile-first world, a well-designed app is essential for building loyalty, driving engagement, and creating a competitive advantage.
                </p>
                <p>
                  Our full-service app development process takes you from a rough idea to a polished product in the app store. We are a team of expert strategists, designers, and engineers who are passionate about building apps that are not only functional and reliable but also beautiful and delightful to use. We partner with you at every stage to ensure your vision is realized and your business goals are met.
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
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><CheckCircle className="w-7 h-7 text-primary"/>Our App Development Lifecycle</h3>
                  <ul className="space-y-3 columns-1 sm:columns-2">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Strategy & Discovery</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>UI/UX Design & Prototyping</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Agile Development & Coding</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Rigorous Quality Assurance</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>App Store Deployment</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Ongoing Support & Maintenance</span></li>
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
        className="relative py-20 md:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us as Your App Development Partner?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              We build more than just apps; we build business solutions. Our team focuses on creating scalable, secure, and engaging mobile experiences that deliver a clear return on investment. We are your long-term partner, committed to your app's success from launch and beyond.
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
              Your most common questions about our mobile app development process, answered.
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
