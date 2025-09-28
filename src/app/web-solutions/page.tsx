
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, Search, FileScan, LocateFixed, Users, Rocket, TrendingUp, Briefcase, Replace, ShoppingCart, Smartphone, Tablet, CheckCircle } from "lucide-react";
import GetStartedForm from "@/components/shared/get-started-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const wordpressBenefits = [
    {
        icon: Users,
        title: "User-Friendly",
        description: "Easily manage and update your website content without any coding knowledge through its intuitive dashboard."
    },
    {
        icon: PenTool,
        title: "Highly Customizable",
        description: "With thousands of themes and plugins, WordPress allows for endless customization to fit your brand's unique needs."
    },
    {
        icon: Search,
        title: "SEO-Friendly",
        description: "WordPress is built with search engines in mind, and its robust plugin ecosystem helps you optimize your site for better rankings."
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
                Rapid Website Development
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-left-10 duration-700 delay-100">
                A rapid development method is a relatively new method designed to make software development processes run more smoothly and faster. It is lighter and less labor-intensive than traditional software development methods.
              </p>
               <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                <Image 
                    src="https://picsum.photos/seed/rapid-dev/1200/600"
                    alt="Rapid Website Development"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="agile development"
                />
               </div>
            </div>
            <div className="md:col-span-1 sticky top-28 animate-in fade-in slide-in-from-right-10 duration-700">
               <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Why Rapid Development is Superior to Traditional Methods</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Compared to traditional software development's rigid structure and long timelines, rapid development offers a flexible, iterative approach. This means you get a working product faster, can provide feedback earlier, and can adapt to market changes on the fly. It reduces risk, lowers costs, and ensures the final product is exactly what you need.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Faster time-to-market for a competitive edge.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Greater flexibility to adapt to changing requirements.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>More client involvement for a better end product.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Reduced development costs and higher ROI.</span></li>
                    </ul>
                </div>
                 <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                    <Image 
                        src="https://picsum.photos/seed/agile-vs-waterfall/800/600"
                        alt="Agile vs Traditional Development"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="agile process"
                    />
                 </div>
            </div>
          </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">The Power of WordPress</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">We leverage the world's most popular content management system to build powerful, scalable, and easy-to-manage websites.</p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {wordpressBenefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 bg-card/50 rounded-lg border border-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-5" style={{animationDelay: `${index*150}ms`}}>
                        <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                            <benefit.icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                ))}
            </div>
             <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start Your WordPress Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
        </div>
      </section>

    </>
  );
}
