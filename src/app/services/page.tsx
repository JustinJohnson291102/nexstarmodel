import Image from "next/image";
import {
  ShoppingCart,
  Rocket,
  TrendingUp,
  FileText,
  Mic,
  Palette,
  ArrowRight,
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description:
      "Custom Shopify themes and apps that are fast, beautiful, and built to convert.",
    href: "/shopify",
  },
  {
    icon: Rocket,
    title: "GTM Strategy",
    description:
      "Data-driven Go-To-Market strategies that ensure your product launch is a resounding success.",
    href: "/gtm-strategy",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description:
      "Boost your visibility and climb the ranks with our expert SEO and performance optimization services.",
    href: "#",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Engaging content that tells your story, builds your audience, and drives conversions.",
    href: "#",
  },
  {
    icon: Mic,
    title: "Podcast Production",
    description:
      "From concept to distribution, we handle everything to make your podcast a hit.",
    href: "/podcast",
  },
  {
    icon: Palette,
    title: "Branding & UI/UX",
    description:
      "Crafting unique brand identities and intuitive user experiences that captivate and delight.",
    href: "#",
  },
];

export default function ServicesPage() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "services-hero"
  );

  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Services background"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            A complete suite of digital services to elevate your brand.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={service.href} className="h-full block">
                  <Card className="h-full group transition-all duration-300 ease-in-out hover:border-primary hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-headline text-2xl">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}