
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Video, Film, Edit3, Mic, Users, CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";

const faqs = [
    {
        question: "What types of videos do you produce?",
        answer: "We produce a wide range of videos, including corporate brand films, TV commercials, social media content, animated explainer videos, product demonstrations, customer testimonials, and event coverage. We tailor the style and format to your specific goals and audience."
    },
    {
        question: "How much does a video cost?",
        answer: "Video production costs can vary widely based on factors like concept complexity, filming duration, location, crew size, and post-production requirements (e.g., animation, special effects). We provide custom quotes after a detailed consultation to understand your needs."
    },
    {
        question: "What is your video production process?",
        answer: "Our process is collaborative and structured in three main phases: 1) Pre-production (strategy, concept, scriptwriting, planning), 2) Production (filming on-location or in-studio), and 3) Post-production (editing, color grading, sound design, graphics, and final delivery)."
    },
    {
        question: "How involved do I need to be in the process?",
        answer: "Your level of involvement is up to you. We encourage collaboration, especially during the pre-production phase, to ensure your vision is captured. However, once the plan is set, you can trust our team to handle all the details, providing you with updates and versions for feedback at key milestones."
    }
]

export default function VideoProductionPage() {
  const pageData = {
    title: "Video Production",
    description: "From concept to completion, we create compelling video content that tells your story and engages your audience.",
    heroImage: "https://picsum.photos/seed/video-production-hero/1920/1080",
    heroHint: "video production setup",
    features: [
      {
        icon: Film,
        title: "Concept & Scriptwriting",
        description: "Every great video starts with a great idea. We collaborate with you to develop a concept and write a script that aligns with your message and goals.",
      },
      {
        icon: Video,
        title: "On-Location & Studio Filming",
        description: "Our professional crew uses state-of-the-art equipment to capture stunning footage, whether in-studio or on-location.",
      },
      {
        icon: Edit3,
        title: "Post-Production & Editing",
        description: "We bring it all together in the edit bay, adding graphics, color grading, sound design, and special effects to create a polished final product.",
      },
      {
        icon: Mic,
        title: "Animation & Motion Graphics",
        description: "Bring your brand to life with custom animations and motion graphics that explain complex ideas in a visually engaging way.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('${pageData.heroImage}')` }}
      >
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
                <h2 className="text-3xl font-bold font-headline mb-4">Content That Moves</h2>
                <p>
                  Video is the most powerful and engaging tool in the digital marketer's arsenal. It captures attention, evokes emotion, and drives action like no other medium. In a world saturated with content, a well-crafted video can cut through the noise and deliver your message with impact and clarity. Whether you need a cinematic brand anthem, a viral social media clip, a detailed product demo, or a heartfelt customer testimonial, our video production team has the creativity and technical expertise to deliver.
                </p>
                <p>
                  We are storytellers at heart. Our full-service approach means we handle the entire production process, from the initial spark of an idea to the final delivery of the polished file. We ensure a seamless workflow and a final product that not only exceeds your expectations but also achieves your critical business objectives.
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
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-3"><Users className="w-7 h-7 text-primary"/>Our Video Services Include:</h3>
                  <ul className="space-y-3 columns-1 sm:columns-2">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Corporate Videos</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Commercials & TV Ads</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Social Media Content</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Animated Explainer Videos</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Product Demos</span></li>
                       <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Customer Testimonials</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Event Coverage</span></li>
                       <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Documentary & Short Film</span></li>
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
              Why Choose Us as Your Video Production Partner?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              We believe video production is the perfect marriage of art and strategy. Our team consists of passionate filmmakers and sharp marketers, ensuring every frame we create is not only beautiful but also purposeful. We are committed to telling your unique story in the most compelling way possible, creating video assets that serve your brand for years to come.
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
              Answering your top questions about the video production process.
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

    