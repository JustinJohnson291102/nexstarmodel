
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Backup, Blockchain & Crypto",
    category: "Cyber Security",
    description: "Developed a decentralized backup solution using blockchain technology, ensuring immutable and secure data storage for crypto assets.",
    image: { src: "https://picsum.photos/seed/blockchain-security/800/600", hint: "blockchain security" },
    tags: ["Blockchain", "Cyber Security", "Go"],
  },
  {
    title: "App Design for Local Agency",
    category: "UI/UX Design",
    description: "Redesigned a mobile application for a local government agency, improving user engagement by 40% through an intuitive, human-centered interface.",
    image: { src: "https://picsum.photos/seed/app-design-agency/800/600", hint: "mobile app design" },
    tags: ["UI/UX", "Figma", "React Native"],
  },
  {
    title: "The New in Upcoming Design Think",
    category: "UI/UX Design",
    description: "A forward-thinking exploration of future design trends, culminating in a conceptual prototype for a next-generation mixed-reality interface.",
    image: { src: "https://picsum.photos/seed/design-thinking/800/600", hint: "design thinking" },
    tags: ["AR/VR", "Prototyping", "UX Research"],
  },
  {
    title: "Branding for American IT",
    category: "IT Consultancy",
    description: "Crafted a new brand identity for a major American IT firm, positioning them as an innovative leader in a competitive market.",
    image: { src: "https://picsum.photos/seed/it-branding/800/600", hint: "corporate branding" },
    tags: ["Branding", "Strategy", "Marketing"],
  },
  {
    title: "World Best Available Scope",
    category: "Data Analytics",
    description: "Executed a global market analysis project, identifying key growth opportunities and providing actionable insights through advanced data modeling.",
    image: { src: "https://picsum.photos/seed/market-analysis/800/600", hint: "global data" },
    tags: ["Data Science", "Tableau", "Python"],
  },
  {
    title: "Software License Management",
    category: "IT Consultancy",
    description: "Implemented a comprehensive software license management system for a Fortune 500 company, saving them over $2M annually.",
    image: { src: "https://picsum.photos/seed/software-license/800/600", hint: "software management" },
    tags: ["ITAM", "SaaS", "Optimization"],
  },
];

const similarProjects = [
  {
    title: "AI-Powered Threat Detection",
    description: "A real-time cybersecurity platform that uses machine learning to predict and neutralize threats before they can cause damage.",
    image: { src: "https://picsum.photos/seed/ai-threat/800/600", hint: "ai security" },
  },
  {
    title: "E-commerce Personalization Engine",
    description: "A data-driven recommendation engine that increased average order value by 25% for a major online retailer.",
    image: { src: "https://picsum.photos/seed/ecommerce-ai/800/600", hint: "ecommerce analytics" },
  },
  {
    title: "IoT Smart City Dashboard",
    description: "A UI/UX project to visualize complex city-wide data from IoT sensors, enabling better urban planning and resource management.",
    image: { src: "https://picsum.photos/seed/smart-city/800/600", hint: "smart city" },
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-primary text-primary-foreground"
      >
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Briefcase className="h-20 w-20 mx-auto mb-4 text-primary-foreground" />
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            A showcase of our commitment to excellence, innovation, and impactful results.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
              Recent Case Studies
            </h2>
            <p className="text-lg text-muted-foreground mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              Transforming challenges into triumphs. Here's a look at how we've helped our clients succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.title} 
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={study.image.src}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={study.image.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/20 text-white backdrop-blur-sm">{study.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2 leading-tight">{study.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{study.description}</p>
                   <div className="flex flex-wrap gap-2">
                    {study.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                   <Button variant="secondary" className="w-full">
                     <Eye className="mr-2 h-4 w-4" /> View Case Study
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
              Our Similar Projects
            </h2>
            <p className="text-lg text-white/80 mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              A glimpse into our technical expertise and innovative solutions across various domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="group relative overflow-hidden rounded-lg shadow-2xl animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={project.image.src}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.image.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-headline text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">{project.title}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-7 duration-500 delay-300">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Discuss Your Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}

    