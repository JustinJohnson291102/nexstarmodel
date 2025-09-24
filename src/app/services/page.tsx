import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import ServiceCard from "@/components/services/service-card";

const services = [
  {
    image: "service-branding",
    title: "Branding",
    description:
      "We're a branding agency that helps you connect with your audience on a deeper level by creating a brand that speaks to them. We help you create a unique identity that will set you apart from your competitors.",
    href: "#",
  },
  {
    image: "service-social-media",
    title: "Social Media",
    description:
      "We're a social media agency that knows how to get your brand noticed on the most popular platforms. We'll create engaging content that will get people talking about your brand.",
    href: "#",
  },
  {
    image: "service-website",
    title: "Digital - Website / Technology",
    description:
      "Our website development services are designed to help you create a website that is not only visually appealing but also easy to navigate and user-friendly. We also provide app development services.",
    href: "#",
  },
  {
    image: "service-b2b",
    title: "B2B",
    description:
      "Our B2B marketing services are designed to help you generate leads and close sales. We'll help you create a marketing strategy that will reach your target audience and get them interested in your products or services.",
    href: "/b2b",
  },
  {
    image: "service-performance-marketing",
    title: "Performance Marketing",
    description:
      "We're a performance marketing agency that knows how to get the most out of your marketing budget. We'll help you create campaigns that will generate a high return on investment.",
    href: "#",
  },
  {
    image: "service-content",
    title: "Content Marketing",
    description:
      "As a content marketing agency, we know how to create content that will engage your audience and drive them to take action. We'll help you create a content strategy that will get you the results you're looking for.",
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
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(
                (img) => img.id === service.image
              );
              return (
                <div
                  key={service.title}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={service.href} className="h-full block">
                    <ServiceCard
                      image={serviceImage}
                      title={service.title}
                      description={service.description}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}