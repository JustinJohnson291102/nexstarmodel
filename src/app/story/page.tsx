
"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Check, Target, Lightbulb, Heart, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
];

const teamMembers = [
    { name: 'Kristin Watson', title: 'Team Member', imageId: 'person1' },
    { name: 'Mubbasher Yasin', title: 'Web Designer', imageId: 'person2' },
    { name: 'Robertson', title: 'Marketing Coordinator', imageId: 'person3' },
    { name: 'Mehak Steward', title: 'SEO Specialist', imageId: 'person4' },
    { name: 'Atul Srivastava', title: 'Director & CEO', imageId: 'person5' },
    { name: 'Ali', title: 'Web Designer', imageId: 'person6' },
    { name: 'Ichcha', title: 'Developer', imageId: 'person7' },
    { name: 'Anchal', title: 'Member', imageId: 'person8' },
    { name: 'Arpita', title: 'Corporate Affairs', imageId: 'person9' },
    { name: 'Aaditya', title: 'Team', imageId: 'person10' },
    { name: 'Priyanka', title: 'Team', imageId: 'person11' },
    { name: 'Aleena Chenail', title: 'Member', imageId: 'person12' },
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
                   Founded on the principle of innovation, Nexstar Media Group was born from a desire to bridge the gap between creative vision and digital execution. We saw a world brimming with incredible ideas that just needed the right strategy and technical expertise to come to life.
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
              Meet the leaders driving our mission forward. A dedicated team committed to excellence, innovation, and delivering unparalleled value to our partners and audiences.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
                <div key={member.name} className="text-center animate-in fade-in slide-in-from-bottom-7 duration-500" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="relative aspect-square w-full max-w-[200px] mx-auto mb-4 overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={`https://picsum.photos/seed/${member.imageId}/200/200`}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
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
        className="py-20 md:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/testimonials-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight text-white animate-in fade-in slide-in-from-bottom-5 duration-500">Client's Success Is Our Success</h2>
            <p className="text-lg text-white/80 mt-4 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">Hear from the partners we've helped along the way.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-in fade-in slide-in-from-bottom-7 duration-500"
                style={{animationDelay: `${index * 150}ms`}}
              >
              <Card className="bg-background/10 backdrop-blur-md border-white/20 h-full">
                <CardContent className="p-8 text-white flex flex-col h-full">
                  <p className="text-5xl text-white/30 -ml-2">"</p>
                  <p className="italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-white/30">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold font-headline">{testimonial.name}</p>
                      <p className="text-sm text-white/70">{testimonial.company}</p>
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

