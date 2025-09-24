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
      <section className="relative h-[60vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="B2B Marketing"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </section>

      <section className="relative py-20 md:py-32">
         <Image
          src="https://picsum.photos/seed/b2b-bg/1920/1080"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Strategic B2B Marketing to Fuel Your Growth
            </h2>
            <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              In the complex world of B2B, a one-size-fits-all approach doesn't work. We craft bespoke marketing strategies that connect you with your ideal customers, shorten sales cycles, and deliver measurable results. Our approach is built on a deep understanding of your industry, your business objectives, and your customers' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {b2bServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full text-left bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
                    </div>
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

      <section className="relative py-20 md:py-32 bg-secondary/50">
        <Image
          src="https://drive.google.com/uc?export=view&id=1-NnbDMh4fjyoWcOOvCa9UiUHCqi5J0lJ"
          alt="Integrated Solutions"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
              Integrated B2B Marketing Solutions Tailored to Your Brand
            </h2>
            <div className="text-lg text-muted-foreground space-y-6">
              <p>
                At Xebec, we specialize in GTM -Go to Market Strategy , helping B2B and technology companies launch their products or service and achieve their goals with customized digital marketing strategies rooted in their brand's purpose.
              </p>
              <p>
                Our approach combines real-world objectives, data-driven insights, relatable and relevant content ,out of the box creativity, and ROI-focused strategies to deliver results that matter. We believe in breaking down silos to create cohesive, sustainable marketing plans that ensure all efforts work together seamlessly.
              </p>
            </div>
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