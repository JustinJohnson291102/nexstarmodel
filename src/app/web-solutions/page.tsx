
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, Search, FileScan, LocateFixed, Users, Rocket, TrendingUp, Briefcase, Replace } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const approachFirstRow = [
  {
    icon: FileScan,
    text: "Audit your Digital Marketing & Communication",
  },
  {
    icon: Users,
    text: "Identify gaps in your digital assets & overall communication",
  },
  {
    icon: LocateFixed,
    text: "Dive deep into understanding your design & content",
  },
];

const approachSecondRow = [
   {
    icon: Rocket,
    text: "Execute campaign",
  },
  {
    icon: Replace,
    text: "Monitor, Maintain, Re-optimize",
  },
  {
    icon: Briefcase,
    text: "E-commerce Expertise",
  },
    {
    icon: TrendingUp,
    text: "Analyze Business Requirements",
  },
];

const shopifyServices = [
  {
    number: "01",
    text: "Shopify Store Maintenance, Adding Extensions, & Customizations",
  },
  {
    number: "02",
    text: "WooCommerce Store Setup, Configuration, & Customization",
  },
  {
    number: "03",
    text: "HTML5 Website Design, Development, & Maintenance",
  },
  {
    number: "04",
    text: "Web Development Services",
  },
];


export default function WebSolutionsPage() {
  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://drive.google.com/uc?export=view&id=19z7bdrKLhhYaQgu88_2M_IGzXidSUlLo"
          alt="Web Solutions Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white mb-4">
            Responsive Website <br /> Development Services
          </h1>
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Creating Intelligent Interfaces that Adapt to Changing Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              How can a website design adjust to your technology diversities? By being intelligent enough to adapt itself beautifully, we believe. Which is why, we design engagingly-simple, full-screen experiences, from a mobile-first perspective. We maximize the use of fluid grid concepts so that your content adapts itself fluidly to any browser size. Which means, all your worries of how your website will look on a new phone or tablet are completely taken care of.
            </p>
          </div>
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-around text-center p-8 rounded-lg">
              <div className="flex flex-col items-center p-4">
                <PenTool className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold font-headline">Design + Development</h3>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-20 mx-8 bg-blue-500" />
               <Separator className="md:hidden my-4 w-1/2 bg-blue-500" />
              <div className="flex flex-col items-center p-4">
                <Code className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold font-headline">UI/UX</h3>
              </div>
               <Separator orientation="vertical" className="hidden md:block h-20 mx-8 bg-blue-500" />
               <Separator className="md:hidden my-4 w-1/2 bg-blue-500" />
              <div className="flex flex-col items-center p-4">
                <Search className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold font-headline">Keywords</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-12 text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
            {approachFirstRow.map((item, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-colors duration-300">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-semibold">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
            {approachSecondRow.map((item, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-colors duration-300">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-semibold">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
           <div className="bg-sky-100 dark:bg-sky-900/30 p-8 md:p-12 rounded-lg relative overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                 <h3 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-8">
                  Shopify Store Setup, <br/>Configuration, & Customization
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {shopifyServices.map((service) => (
                    <div key={service.number} className="flex items-start gap-4">
                      <p className="text-5xl font-headline font-bold text-primary/50 -mt-2">{service.number}</p>
                      <p className="text-foreground">{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
             <div className="absolute -right-16 -top-10 md:right-4 md:top-4 w-64 h-64 opacity-50 md:opacity-100">
               <Image 
                src="https://drive.google.com/uc?export=view&id=11-Xo0IYsoGYRhld3EXBvkuJUY6OcjBYw"
                alt="Cartoon"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                <Image
                  src="https://picsum.photos/seed/websolutions/600/400"
                  alt="Web Solutions"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  data-ai-hint="web design"
                />
              </div>
              <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                <h2 className="text-3xl font-bold font-headline mb-4">Custom Web Development</h2>
                <p className="text-muted-foreground mb-6">
                  We create stunning, responsive, and user-friendly websites tailored to your brand. Our development process focuses on performance, scalability, and providing a seamless user experience across all devices. Whether you need a simple landing page or a complex web application, we have the expertise to deliver.
                </p>
                <Button asChild className="group">
                  <Link href="/contact">
                    Start a Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
             <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
              <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
                <Image
                  src="https://picsum.photos/seed/shopifydev/600/400"
                  alt="Shopify Development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  data-ai-hint="ecommerce development"
                />
              </div>
              <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
                <h2 className="text-3xl font-bold font-headline mb-4">Shopify Development</h2>
                <p className="text-muted-foreground mb-6">
                  As Shopify experts, we build beautiful and high-converting e-commerce stores. From theme customization to app integration, we provide end-to-end solutions to help you succeed in the competitive online market.
                </p>
                <Button asChild className="group">
                  <Link href="/shopify">
                    Learn about Shopify <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
