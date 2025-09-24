import Hero from "@/components/homepage/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const adAgencyImage = PlaceHolderImages.find(
    (img) => img.id === "service-branding"
  );
  return (
    <>
      <Hero />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700">
              {adAgencyImage && (
                <Image
                  src={adAgencyImage.imageUrl}
                  alt="Advertising agency creative process"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full h-auto"
                  data-ai-hint={adAgencyImage.imageHint}
                />
              )}
            </div>
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">
                As an Advertising Agency, We Ignite Brands with Ideas that
                Transform Behaviour
              </h2>
              <p className="text-muted-foreground md:text-lg mb-8">
                Across mediums, we have taken both fledgling and legacy brands
                to a new level of success.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/story">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
            Innovate. Create. Elevate.
          </h1>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-200">
            From groundbreaking strategies to stunning Shopify stores, we are
            the architects of your digital success. Explore our services and see
            how we can elevate your brand.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300">
            <Button asChild size="lg" className="group">
              <Link href="/services">
                Our Services{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
