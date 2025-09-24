import Hero from "@/components/homepage/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            Let's build your digital future.
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-200">
            From groundbreaking strategies to stunning Shopify stores, we are the architects of your digital success. Explore our services and see how we can elevate your brand.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300">
            <Button asChild size="lg" className="group">
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
