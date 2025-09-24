import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart, BrainCircuit, Goal, MessageCircle, Users } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const b2bServices = [
  {
    icon: Goal,
    title: "Account-Based Marketing (ABM)",
    description: "Target high-value accounts with personalized campaigns that treat individual accounts as markets in their own right.",
  },
  {
    icon: Users,
    title: "Lead Generation & Nurturing",
    description: "Build a robust pipeline of qualified leads and nurture them through the sales funnel with targeted content and automation.",
  },
  {
    icon: BrainCircuit,
    title: "B2B Content Strategy",
    description: "Establish thought leadership and attract your target audience with valuable, relevant, and consistent content.",
  },
  {
    icon: BarChart,
    title: "Marketing & Sales Analytics",
    description: "Leverage data to optimize your marketing efforts, measure ROI, and align your sales and marketing teams.",
  },
];


export default function B2BPage() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "b2b-hero"
  );

  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="B2B Marketing"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4">
            B2B Marketing Solutions
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            Driving Growth and Building Relationships in the Business-to-Business Arena.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Strategic B2B Marketing to Fuel Your Growth
            </h2>
            <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              In the complex world of B2B, a one-size-fits-all approach doesn't work. We craft bespoke marketing strategies that connect you with your ideal customers, shorten sales cycles, and deliver measurable results. Our approach is built on a deep understanding of your industry, your business objectives, and your customers' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl pt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Elevate Your B2B Strategy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Let's talk about how we can help you achieve your business goals. Whether you're looking to generate more leads, increase brand awareness, or drive revenue, our team of B2B marketing experts is here to help.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}