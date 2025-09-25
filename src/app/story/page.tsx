
"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import MemoryLaneCarousel from "@/components/story/memory-lane-carousel";
import { Check, Target, Lightbulb, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2010",
    title: "The Spark of an Idea",
    description: "A small team of passionate creatives, developers, and marketers unites with a single mission: to bridge the gap between brilliant ideas and flawless digital execution.",
    image: {
      src: "https://picsum.photos/seed/spark/600/400",
      hint: "bright lightbulb",
    }
  },
  {
    year: "2014",
    title: "First Major Client",
    description: "Landed our first major retail client, delivering a comprehensive e-commerce and branding strategy that resulted in a 200% increase in their online sales within the first year.",
     image: {
      src: "https://picsum.photos/seed/client-win/600/400",
      hint: "business handshake",
    }
  },
  {
    year: "2018",
    title: "Expanding Our Services",
    description: "Launched our dedicated B2B marketing and Go-To-Market strategy divisions, helping SaaS and tech companies make a powerful impact from day one.",
     image: {
      src: "https://picsum.photos/seed/expand/600/400",
      hint: "growth chart",
    }
  },
  {
    year: "2023",
    title: "Launching XTrack",
    description: "Introduced our proprietary analytics platform, XTrack, providing clients with unparalleled insights into their digital performance and user behavior.",
    image: {
      src: "https://picsum.photos/seed/xtrack-launch/600/400",
      hint: "data analytics",
    }
  }
];

const coreValues = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We are relentless in our pursuit of new ideas, challenging the status quo to create groundbreaking digital experiences.",
        image: {
          src: "https://picsum.photos/seed/value-innovation/600/400",
          hint: "abstract innovation",
        }
    },
    {
        icon: Users,
        title: "Partnership",
        description: "We work as an extension of your team, fostering deep collaboration and aligning our success with yours.",
         image: {
          src: "https://picsum.photos/seed/value-partnership/600/400",
          hint: "team collaboration",
        }
    },
    {
        icon: Heart,
        title: "Passion",
        description: "Our work is our craft. We pour our hearts into every project, driven by a genuine love for what we do.",
         image: {
          src: "https://picsum.photos/seed/value-passion/600/400",
          hint: "creative passion",
        }
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "Creativity is only half the story. We are obsessed with data, measuring our success by the tangible results we deliver.",
         image: {
          src: "https://picsum.photos/seed/value-results/600/400",
          hint: "success target",
        }
    }
]

export default function StoryPage() {
  return (
    <>
      <section className="relative h-[70vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://drive.google.com/uc?export=view&id=1OqAyh5AJXjw63hlhWy3koRpY8GXgoGe6"
          alt="Group of people collaborating"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            We ignite brands with ideas that transform behaviour
          </p>
        </div>
      </section>

      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/vision-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="animate-in fade-in slide-in-from-left-10 duration-700 space-y-8 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Our Mission & Vision</h2>
                 <p className="text-lg text-muted-foreground">
                   Founded on the principle of innovation, Digitale Agency was born from a desire to bridge the gap between creative vision and digital execution. We saw a world brimming with incredible ideas that just needed the right strategy and technical expertise to come to life.
                 </p>
                 <p className="text-lg text-muted-foreground">
                   Our vision is to be the leading partner for brands brave enough to shape the future, empowering them to connect with their audiences in more meaningful and impactful ways. We believe in the power of collaboration, the magic of creativity, and the impact of technology.
                 </p>
             </div>
             <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="https://picsum.photos/seed/mission-image/800/600"
                      alt="Team discussing a project on a whiteboard"
                      fill
                      className="object-cover"
                      data-ai-hint="team collaboration"
                    />
                </div>
             </div>
          </div>
        </div>
      </section>
      
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/timeline-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Our Journey So Far</h2>
            <p className="text-lg text-muted-foreground mt-4">A timeline of our milestones and achievements.</p>
          </div>

          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-primary/20 h-full border" style={{left: '50%'}}></div>
            {timelineEvents.map((event, index) => (
               <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-sm text-primary-foreground">{index + 1}</h1>
                </div>
                <div className="order-1 bg-card/80 backdrop-blur-sm rounded-lg shadow-xl w-5/12 overflow-hidden animate-in fade-in zoom-in-90 duration-500">
                  <Image src={event.image.src} alt={event.title} width={600} height={400} className="w-full h-auto object-cover" data-ai-hint={event.image.hint} />
                  <div className="p-6">
                    <p className="mb-3 text-sm text-primary font-semibold">{event.year}</p>
                    <h3 className="mb-3 font-bold text-foreground text-xl">{event.title}</h3>
                    <p className="text-sm leading-snug tracking-wide text-muted-foreground text-opacity-100">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/values-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Our Core Values</h2>
            <p className="text-lg text-muted-foreground mt-4">The principles that guide everything we do.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
               <Card key={index} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-bottom-5 duration-500" style={{animationDelay: `${index * 150}ms`}}>
                  <Image src={value.image.src} alt={value.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={value.image.hint} />
                  <div className="absolute inset-0 bg-black/50" />
                  <CardContent className="relative z-10 p-6 text-center text-white flex flex-col items-center justify-center h-full">
                      <div className="inline-block p-4 bg-white/10 text-white rounded-full mb-4">
                          <value.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold font-headline mb-2">{value.title}</h3>
                      <p className="text-white/80">{value.description}</p>
                  </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-20 md:py-32 bg-secondary relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/team-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-full mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground mx-auto max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Our highly-enthusiastic team is a fantastic mix of energy, ideas, experience and new thinking, who work hand-in-hand to create stand-out work. From creative to strategy, business to digital marketing, media to interactive – we’re always raring to go!
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center animate-in fade-in slide-in-from-left-10 duration-700">
              <div className="inline-block">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1sHb5vgWug43sY7N9TWDoZfnsTvCBFvSb"
                  alt="Kiran Bhat"
                  width={280}
                  height={280}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-2xl font-bold font-headline text-accent mt-4">
                  Kiran Bhat
                </h3>
                <p className="text-lg text-primary font-semibold">CMD</p>
              </div>
            </div>
            <div className="text-muted-foreground prose prose-lg text-justify animate-in fade-in slide-in-from-right-10 duration-700 space-y-4">
              <p>
                Kiran Bhat is not only an advertising and strategy maestro, she's a veritable force when it comes to busting stereotypes. An Industrial Psychologist by qualification, Kiran went on to get her Executive Education from Harvard Business School.
              </p>
              <p>
                She is also Co-author of the hugely successful book on entrepreneurship - 'No Holy Cows in Business' - she continues to serve as guest faculty in several of India's top management schools. Frequently invited to speak on several industry panels across India.
              </p>
              <p>
                She started Xebec Communications Pvt Ltd in 1992. A rich experience of 28 years stands her in good stead as she continues to steer and build successful brands across diverse verticals.
              </p>
            </div>
          </div>
          
          <div className="mt-20 md:mt-32">
            <Separator className="my-16 bg-primary/20" />
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div className="md:order-2 text-center animate-in fade-in slide-in-from-right-10 duration-700">
                <div className="inline-block">
                  <Image
                    src="https://drive.google.com/uc?export=view&id=18bldZBErWmnA1HsjR2UmZIkqnVqRo-qg"
                    alt="Anil Bhat"
                    width={280}
                    height={280}
                    className="rounded-lg shadow-lg"
                  />
                  <h3 className="text-2xl font-bold font-headline text-accent mt-4">
                    Anil Bhat
                  </h3>
                  <p className="text-lg text-primary font-semibold">Director & CEO</p>
                </div>
              </div>
              <div className="md:order-1 text-muted-foreground prose prose-lg text-justify animate-in fade-in slide-in-from-left-10 duration-700 space-y-4">
                <p>
                  Anil Bhat lives, sleeps, talks and breathes Digital Marketing. Having completed his Graduation in Engineering, Anil went on to become a Certified Digital Marketing Specialist with a Google Black Belt certification.
                </p>
                <p>
                  As a specialist in the field, he has the expertise to deliver solutions that extend over the entire gamut of E-Commerce, CRM, Lead Generation, Digital Media Planning, Media Buying, Marketing Strategy and Technology.
                </p>
              </div>
            </div>
          </div>
            <div className="mt-20 md:mt-32 animate-in fade-in duration-700">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1yccbQERS1sPGFOwT51wAZddfr_x50-Lx"
                  alt="Team Banner"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-normal text-left tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-5 duration-500 text-muted-foreground">
              Down the memory lane
            </h2>
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              <MemoryLaneCarousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

