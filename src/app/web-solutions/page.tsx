import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WebSolutionsPage() {
  return (
    <>
      <section className="w-full">
        <Image
          src="https://drive.google.com/uc?export=view&id=19z7bdrKLhhYaQgu88_2M_IGzXidSUlLo"
          alt="Web Solutions Hero Banner"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </section>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            Comprehensive Web Solutions
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
            From custom websites to powerful e-commerce platforms, we build digital experiences that drive growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
            <h2 className="text-3xl font-bold font-headline mb-4">Web Development</h2>
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
         <div className="grid md:grid-cols-2 gap-8 items-center mt-24">
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
    </>
  );
}
