
"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Check, Target, Lightbulb, Heart, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const timelineEvents = [
  {
    year: "2019",
    title: "The Spark of an Idea",
    description: "A small team of passionate creatives, developers, and marketers unites with a single mission: to bridge the gap between brilliant ideas and flawless digital execution.",
    image: {
      src: "https://ik.imagekit.io/ggelm1lwa/sparkofidea.webp?updatedAt=1759495968572",
      hint: "bright lightbulb",
    }
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Landed our first major retail client, delivering a comprehensive e-commerce and branding strategy that resulted in a 200% increase in their online sales within the first year.",
     image: {
      src: "https://ik.imagekit.io/ggelm1lwa/first%20client.jpg?updatedAt=1759496287545",
      hint: "business handshake",
    }
  },
  {
    year: "2023",
    title: "Expanding Our Services",
    description: "Launched our dedicated B2B marketing and Go-To-Market strategy divisions, helping SaaS and tech companies make a powerful impact from day one.",
     image: {
      src: "https://ik.imagekit.io/ggelm1lwa/service%20expanding.jpg?updatedAt=1759496382759",
      hint: "growth chart",
    }
  }
];

const coreValues = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We are relentless in our pursuit of new ideas, challenging the status quo to create groundbreaking digital experiences.",
        image: {
          src: "https://picsum.photos/seed/vibrant-light/600/400",
          hint: "vibrant abstract",
        }
    },
    {
        icon: Users,
        title: "Partnership",
        description: "We work as an extension of your team, fostering deep collaboration and aligning our success with yours.",
         image: {
          src: "https://picsum.photos/seed/vibrant-network/600/400",
          hint: "colorful connections",
        }
    },
    {
        icon: Heart,
        title: "Passion",
        description: "Our work is our craft. We pour our hearts into every project, driven by a genuine love for what we do.",
         image: {
          src: "https://picsum.photos/seed/vibrant-energy/600/400",
          hint: "colorful energy",
        }
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "Creativity is only half the story. We are obsessed with data, measuring our success by the tangible results we deliver.",
         image: {
          src: "https://picsum.photos/seed/vibrant-success/600/400",
          hint: "colorful graphs",
        }
    }
];

const teamMembers = [
    // Row 1
    { name: 'Kristin Watson', title: 'Team Member', imageId: '1s5ADPTtVthtutqydr-2jPSU-qQgLEOJk' },
    { name: 'Mubbasher Yasin', title: 'Web Designer', imageId: '1HUudFYwCkR5WFgOW2QEnWzZBxU8BBvQI' },
    { name: 'Robertson', title: 'Marketing Coordinator', imageId: '1-B1a7qr1ybkVKsagzQP91pTLfmIDAaXp' },
    { name: 'Mehak Steward', title: 'SEO Specialist', imageId: '1sURQD1WwpnFKNOhyVuiY08KTFmCcdScE' },
    // Row 2
    { name: 'Atul Srivastava', title: 'Director & CEO', imageId: '1l3aXBS4uG7PQur9FLqXgLTCx2T-xTqoc' },
    { name: 'Ali', title: 'Web Designer', imageId: '1FhOvgIXw_3rHdB9CL_KMTLSbBVf2sxxy' },
    { name: 'Ichcha', title: 'Developer', imageId: '1ewP71AMnXgQWmfiBTCYKKWrpsE_LR95h' },
    { name: 'Anchal', title: 'Member', imageId: '1uXpCfuBPRgeyB1v3tC4yamkVY7z8eR7P' },
    // Row 3
    { name: 'Arpita', title: 'Corporate Affairs', imageId: '1DsRA9C6eGN-1rl0m9J5YQBLMo_JjBpyx' },
    { name: 'Aaditya', title: 'Team', imageId: '1d-ouV02fKu-8_9FrrkALO9btr-7FWUmD' },
    { name: 'Priyanka', title: 'Team', imageId: '1T0pqC9Ugnwan9wU6ZAqwDsNbeOZMq_Re' },
    { name: 'Aleena Chenail', title: 'Member', imageId: '14RRr3Fne2qOOAN_pOzuhgQ9cWx_vjjOp' },
];

const testimonials = [
  {
    quote: "Their data-driven approach and creative execution have been instrumental in our success. We've seen a significant ROI since partnering with them.",
    name: "Sarah Jennings",
    company: "Luxe Retail Co.",
    image: "https://picsum.photos/seed/testi-sarah/200",
  },
  {
    quote: "The team's dedication and expertise are second to none. They took our vision and turned it into a reality that exceeded all expectations.",
    name: "Michael Chen",
    company: "Innovate Tech",
    image: "https://picsum.photos/seed/testi-michael/200",
  },
  {
    quote: "Working with them was a game-changer for our brand. Their strategic insights helped us connect with our audience in a much more meaningful way.",
    name: "Laura Rodriguez",
    company: "Gourmet Foods Inc.",
    image: "https://picsum.photos/seed/testi-laura/200",
  }
];


export default function StoryPage() {
  return (
    <>
      <section className="relative h-[70vh] w-full bg-secondary">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center w-full">
            <div className="relative z-20 px-4 text-center md:text-left container mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700">
                <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-foreground mb-4">
                    Our Story
                </h1>
                <p className="text-lg md:text-2xl text-foreground/90 max-w-3xl">
                    We ignite brands with ideas that transform behaviour
                </p>
            </div>
            <div className="relative h-full w-full hidden md:block">
                 <Image
                    src="https://ik.imagekit.io/ggelm1lwa/mastering%20platform.jpg?updatedAt=1759592307831"
                    alt="Mastering Platform"
                    fill
                    className="object-cover"
                    data-ai-hint="mastering platform"
                    priority
                />
            </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-32 bg-background"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="animate-in fade-in slide-in-from-left-10 duration-700 space-y-8 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">About Us</h2>
                 <p className="text-lg text-muted-foreground text-justify">
                   Nexstar Media India Pvt Ltd is an active Indian company founded in 2019. Based in Noida, Uttar Pradesh, it specializes in the media entertainment and IT service sectors. The company offers a wide range of services in digital media solutions, website and app development, and IT service management. As a privately held organization, it serves an international clientele and is focused on delivering quality leads and premier digital solutions to businesses worldwide.
                 </p>
             </div>
             <div className="animate-in fade-in slide-in-from-right-10 duration-700 flex justify-center">
                <div className="relative aspect-square w-full max-w-xs rounded-lg overflow-hidden">
                    <Image
                      src="https://ik.imagekit.io/ggelm1lwa/NexstarMedia-Logo.png?updatedAt=1759845284932"
                      alt="Team discussing a project on a whiteboard"
                      fill
                      className="object-contain"
                      data-ai-hint="team collaboration"
                    />
                </div>
             </div>
          </div>
        </div>
      </section>
      
      <section 
        className="relative py-20 md:py-32 bg-secondary"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Our Journey So Far</h2>
            <p className="text-lg text-muted-foreground mt-4">A timeline of our milestones and achievements.</p>
          </div>

          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-primary/20 h-full border" style={{left: '50%'}}></div>
            {timelineEvents.map((event, index) => (
               <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-sm text-primary-foreground">{index + 1}</h1>
                </div>
                <div className="order-1 bg-card/80 backdrop-blur-sm rounded-lg shadow-xl w-5/12 max-w-sm overflow-hidden animate-in fade-in zoom-in-90 duration-500">
                  <div className="relative w-full h-48">
                    <Image src={event.image.src} alt={event.title} fill className="object-contain" data-ai-hint={event.image.hint} />
                  </div>
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
        className="relative py-20 md:py-32 bg-background"
      >
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Our Core Values</h2>
            <p className="text-lg text-muted-foreground mt-4">The principles that guide everything we do.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
               <Card key={index} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-bottom-5 duration-500" style={{animationDelay: '${index * 150}ms'}}>
                  <Image src={value.image.src} alt={value.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={value.image.hint} />
                  <div className="absolute inset-0 bg-black/30" />
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
        className="py-20 md:py-32 bg-secondary"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-full mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground mx-auto max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Meet the leaders driving our mission forward. A dedicated team committed to excellence, innovation, and delivering unparalleled value to our partners and audiences.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
                <div key={member.name} className="text-center animate-in fade-in slide-in-from-bottom-7 duration-500" style={{animationDelay: '${index * 100}ms'}}>
                    <div className="relative aspect-square w-full max-w-[200px] mx-auto mb-4 overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={`https://drive.google.com/uc?export=download&id=${member.imageId}`}
                            alt={member.name}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <h3 className="text-lg font-bold font-headline text-accent">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold">{member.title}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      
      <section 
        className="py-20 md:py-32 relative bg-background"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-5 duration-500">Client's Success Is Our Success</h2>
            <p className="text-lg text-muted-foreground mt-4 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">Hear from the partners we've helped along the way.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-in fade-in slide-in-from-bottom-7 duration-500"
                style={{animationDelay: '${index * 150}ms'}}
              >
              <Card className="bg-primary/5 text-foreground backdrop-blur-md border-primary/20 h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <p className="text-5xl text-primary/20 -ml-2">"</p>
                  <blockquote className="italic mb-6 flex-grow border-l-2 border-primary/30 pl-4">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-primary/30">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold font-headline text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
