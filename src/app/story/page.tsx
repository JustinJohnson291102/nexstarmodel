
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
      src: "https://ik.imagekit.io/ggelm1lwa/sparkofidea.webp?updatedAt=1759495968572",
      hint: "bright lightbulb",
    }
  },
  {
    year: "2014",
    title: "First Major Client",
    description: "Landed our first major retail client, delivering a comprehensive e-commerce and branding strategy that resulted in a 200% increase in their online sales within the first year.",
     image: {
      src: "https://ik.imagekit.io/ggelm1lwa/first%20client.jpg?updatedAt=1759496287545",
      hint: "business handshake",
    }
  },
  {
    year: "2018",
    title: "Expanding Our Services",
    description: "Launched our dedicated B2B marketing and Go-To-Market strategy divisions, helping SaaS and tech companies make a powerful impact from day one.",
     image: {
      src: "https://ik.imagekit.io/ggelm1lwa/service%20expanding.jpg?updatedAt=1759496382759",
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
    { name: 'Atul Srivastava', title: 'Director &amp; CEO', imageId: '1l3aXBS4uG7PQur9FLqXgLTCx2T-xTqoc' },
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
    &lt;&gt;
      &lt;section className="relative h-[70vh] w-full flex items-center justify-center text-center"&gt;
        &lt;Image
          src="https://drive.google.com/uc?export=download&amp;id=1OqAyh5AJXjw63hlhWy3koRpY8GXgoGe6"
          alt="Group of people collaborating"
          fill
          className="object-cover"
          priority
        /&gt;
        &lt;div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700"&gt;
          &lt;h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4"&gt;
            Our Story
          &lt;/h1&gt;
          &lt;p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto"&gt;
            We ignite brands with ideas that transform behaviour
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section
        className="relative py-20 md:py-32 bg-background"
      &gt;
        &lt;div className="container mx-auto px-4 relative z-10"&gt;
          &lt;div className="grid md:grid-cols-2 gap-16 items-center"&gt;
             &lt;div className="animate-in fade-in slide-in-from-left-10 duration-700 space-y-8 text-center md:text-left"&gt;
                &lt;h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight"&gt;About Us&lt;/h2&gt;
                 &lt;p className="text-lg text-muted-foreground text-justify"&gt;
                   Nexstar Media India Pvt Ltd is an active Indian company, founded in 2019 and based in Noida, Uttar Pradesh, that specializes in the media entertainment and IT service sectors. The company offers services in digital media solutions, website and app development, and IT service management, serving clients internationally from its global headquarters in Delaware, US. It is a private company owned by ERAFAV LLC and focuses on providing quality leads and digital solutions to businesses.
                 &lt;/p&gt;
             &lt;/div&gt;
             &lt;div className="animate-in fade-in slide-in-from-right-10 duration-700"&gt;
                &lt;div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"&gt;
                    &lt;Image
                      src="https://picsum.photos/seed/mission-image/800/600"
                      alt="Team discussing a project on a whiteboard"
                      fill
                      className="object-cover"
                      data-ai-hint="team collaboration"
                    /&gt;
                &lt;/div&gt;
             &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      
      &lt;section 
        className="relative py-20 md:py-32 bg-secondary"
      &gt;
        &lt;div className="container mx-auto px-4 relative z-10"&gt;
          &lt;div className="max-w-3xl mx-auto text-center mb-16"&gt;
            &lt;h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight"&gt;Our Journey So Far&lt;/h2&gt;
            &lt;p className="text-lg text-muted-foreground mt-4"&gt;A timeline of our milestones and achievements.&lt;/p&gt;
          &lt;/div&gt;

          &lt;div className="relative wrap overflow-hidden p-10 h-full"&gt;
            &lt;div className="absolute border-primary/20 h-full border" style={{left: '50%'}}&gt;&lt;/div&gt;
            {timelineEvents.map((event, index) =&gt; (
               &lt;div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}&gt;
                &lt;div className="order-1 w-5/12"&gt;&lt;/div&gt;
                &lt;div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full"&gt;
                  &lt;h1 className="mx-auto font-semibold text-sm text-primary-foreground"&gt;{index + 1}&lt;/h1&gt;
                &lt;/div&gt;
                &lt;div className="order-1 bg-card/80 backdrop-blur-sm rounded-lg shadow-xl w-5/12 overflow-hidden animate-in fade-in zoom-in-90 duration-500"&gt;
                  &lt;Image src={event.image.src} alt={event.title} width={600} height={400} className="w-full h-auto object-contain" data-ai-hint={event.image.hint} /&gt;
                  &lt;div className="p-6"&gt;
                    &lt;p className="mb-3 text-sm text-primary font-semibold"&gt;{event.year}&lt;/p&gt;
                    &lt;h3 className="mb-3 font-bold text-foreground text-xl"&gt;{event.title}&lt;/h3&gt;
                    &lt;p className="text-sm leading-snug tracking-wide text-muted-foreground text-opacity-100"&gt;{event.description}&lt;/p&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section
        className="relative py-20 md:py-32 bg-background"
      &gt;
        &lt;div className="container mx-auto px-4 relative z-10"&gt;
           &lt;div className="max-w-3xl mx-auto text-center mb-16"&gt;
            &lt;h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight"&gt;Our Core Values&lt;/h2&gt;
            &lt;p className="text-lg text-muted-foreground mt-4"&gt;The principles that guide everything we do.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"&gt;
            {coreValues.map((value, index) =&gt; (
               &lt;Card key={index} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-bottom-5 duration-500" style={{animationDelay: `${index * 150}ms`}}&gt;
                  &lt;Image src={value.image.src} alt={value.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={value.image.hint} /&gt;
                  &lt;div className="absolute inset-0 bg-black/30" /&gt;
                  &lt;CardContent className="relative z-10 p-6 text-center text-white flex flex-col items-center justify-center h-full"&gt;
                      &lt;div className="inline-block p-4 bg-white/10 text-white rounded-full mb-4"&gt;
                          &lt;value.icon className="h-8 w-8" /&gt;
                      &lt;/div&gt;
                      &lt;h3 className="text-2xl font-bold font-headline mb-2"&gt;{value.title}&lt;/h3&gt;
                      &lt;p className="text-white/80"&gt;{value.description}&lt;/p&gt;
                  &lt;/CardContent&gt;
               &lt;/Card&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section 
        className="py-20 md:py-32 bg-secondary"
      &gt;
        &lt;div className="container mx-auto px-4 relative z-10"&gt;
          &lt;div className="max-w-full mx-auto text-center"&gt;
            &lt;h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-5 duration-500"&gt;
              Our Team
            &lt;/h2&gt;
            &lt;p className="text-lg text-muted-foreground mx-auto max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100"&gt;
              Meet the leaders driving our mission forward. A dedicated team committed to excellence, innovation, and delivering unparalleled value to our partners and audiences.
            &lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12"&gt;
            {teamMembers.map((member, index) =&gt; (
                &lt;div key={member.name} className="text-center animate-in fade-in slide-in-from-bottom-7 duration-500" style={{animationDelay: `${index * 100}ms`}}&gt;
                    &lt;div className="relative aspect-square w-full max-w-[200px] mx-auto mb-4 overflow-hidden rounded-lg shadow-lg group"&gt;
                        &lt;Image
                            src={`https://drive.google.com/uc?export=download&amp;id=${member.imageId}`}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        /&gt;
                         &lt;div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /&gt;
                    &lt;/div&gt;
                    &lt;h3 className="text-lg font-bold font-headline text-accent"&gt;{member.name}&lt;/h3&gt;
                    &lt;p className="text-sm text-primary font-semibold"&gt;{member.title}&lt;/p&gt;
                &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
      
      &lt;section 
        className="py-20 md:py-32 relative bg-background"
      &gt;
        &lt;div className="container mx-auto px-4 relative z-10"&gt;
          &lt;div className="max-w-3xl mx-auto text-center mb-16"&gt;
            &lt;h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-5 duration-500"&gt;Client's Success Is Our Success&lt;/h2&gt;
            &lt;p className="text-lg text-muted-foreground mt-4 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100"&gt;Hear from the partners we've helped along the way.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"&gt;
            {testimonials.map((testimonial, index) =&gt; (
              &lt;div 
                key={index}
                className="animate-in fade-in slide-in-from-bottom-7 duration-500"
                style={{animationDelay: `${index * 150}ms`}}
              &gt;
              &lt;Card className="bg-primary/5 text-foreground backdrop-blur-md border-primary/20 h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300"&gt;
                &lt;CardContent className="p-8 flex flex-col h-full"&gt;
                  &lt;p className="text-5xl text-primary/20 -ml-2"&gt;"&lt;/p&gt;
                  &lt;blockquote className="italic mb-6 flex-grow border-l-2 border-primary/30 pl-4"&gt;"{testimonial.quote}"&lt;/blockquote&gt;
                  &lt;div className="flex items-center mt-auto"&gt;
                    &lt;Avatar className="h-12 w-12 mr-4 border-2 border-primary/30"&gt;
                        &lt;AvatarImage src={testimonial.image} alt={testimonial.name} /&gt;
                        &lt;AvatarFallback&gt;{testimonial.name.charAt(0)}&lt;/AvatarFallback&gt;
                    &lt;/Avatar&gt;
                    &lt;div&gt;
                      &lt;p className="font-bold font-headline text-primary"&gt;{testimonial.name}&lt;/p&gt;
                      &lt;p className="text-sm text-muted-foreground"&gt;{testimonial.company}&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/CardContent&gt;
              &lt;/Card&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/&gt;
  );
}
 