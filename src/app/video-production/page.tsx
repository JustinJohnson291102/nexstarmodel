
"use client";

import Image from "next/image";
import GetStartedForm from "@/components/shared/get-started-form";
import { Video, Film, Edit3, Mic, Users, CheckCircle } from "lucide-react";

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
                <h2 className="text-3xl font-bold font-headline mb-4">Content That Moves</h2>
                <p>
                  Video is the most powerful tool in the digital marketer's arsenal. It captures attention, evokes emotion, and drives action like no other medium. Whether you need a brand anthem, a product demo, a customer testimonial, or a series of social media shorts, our video production team has the creativity and technical expertise to deliver.
                </p>
                <p>
                  We handle the entire production process, ensuring a seamless workflow and a final product that exceeds your expectations and achieves your business objectives.
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
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Explainer Videos</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Product Demos</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Event Coverage</span></li>
                  </ul>
               </div>

            </div>
            <div className="md:col-span-1">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
