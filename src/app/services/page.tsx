
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    points: [
      "Social-First Strategy Development",
      "Platform Management",
      "Community Building + Engagement",
      "Campaign Creation + Execution",
      "Social Listening",
      "Brand Positioning",
      "Content Analysis + Auditing",
      "Competitive Analysis",
      "Co-branded Partnerships",
      "Audience + Persona Development",
    ],
    image: "https://drive.google.com/uc?export=view&id=1DDddv8fnkOXtN8VvDIA3UNhve401V93J",
    imageAlt: "Social Media Marketing",
    link: "#",
  },
  {
    id: "branding",
    title: "Creative and Branding Services",
    points: [
      "Branding & Creative Strategy",
      "Graphic Design",
      "Illustration",
      "Copywriting",
      "Full Production: Photo Shoots + Video Shoots",
    ],
    image: "https://drive.google.com/uc?export=view&id=1jY1qGWPlCndtNUQGCWiTInrFUkCSgoxJ",
    imageAlt: "Creative and Branding Services",
    link: "#",
  },
   {
    id: "web-tech",
    title: "Digital - Website / Technology",
    points: [
      "Responsive Web Design",
      "UI/UX Design",
      "E-commerce Solutions",
      "Shopify Development",
      "Custom Web Applications",
      "Mobile App Development",
    ],
    image: "https://drive.google.com/uc?export=view&id=1WMGmsDafpB6VFzOkNwBAH_oy7YCUXWMn",
    imageAlt: "Digital - Website / Technology",
    link: "/web-solutions",
  },
  {
    id: "b2b",
    title: "B2B Marketing",
    points: [
      "Account-Based Marketing (ABM)",
      "Lead Generation & Nurturing",
      "B2B Content Strategy",
      "Marketing & Sales Analytics",
      "LinkedIn & Email Marketing",
    ],
    image: "https://drive.google.com/uc?export=view&id=1KdwlOUV8FycrA09pJk_WwxX-nCiFKlK2",
    imageAlt: "B2B Marketing",
    link: "/b2b",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://drive.google.com/uc?export=view&id=1t_TXcMnPTHoBkeRjQ4gE0w72lgzAquqW"
          alt="Services background"
          fill
          className="object-cover"
          priority
          data-ai-hint="creative workspace"
        />
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            A complete suite of digital services to elevate your brand.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-32" style={{ backgroundImage: `url('https://picsum.photos/seed/services-bg/1920/1080')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-20 md:space-y-32">
            {servicesData.map((service, index) => (
              <div
                key={service.title}
                id={service.id}
                className={`grid md:grid-cols-2 gap-y-12 items-center ${
                  index % 2 === 0 ? "gap-x-28" : "gap-x-20"
                }`}
              >
                <div
                  className={`animate-in fade-in duration-700 overflow-hidden rounded-lg shadow-xl ${
                    index % 2 !== 0 ? "md:order-2 slide-in-from-right-10" : "slide-in-from-left-10"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div
                  className={`animate-in fade-in duration-700 ${
                    index % 2 !== 0 ? "md:order-1 slide-in-from-left-10" : "slide-in-from-right-10"
                  }`}
                >
                  <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6 text-primary">
                    {service.title}
                  </h2>
                  <ul className="space-y-2 mb-8">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="group rounded-lg"
                    variant="default"
                  >
                    <Link href={service.link}>
                      View More{" "}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
