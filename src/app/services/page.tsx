import ServiceCard from "@/components/services/service-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    image: PlaceHolderImages.find((img) => img.id === "service-shopify"),
    title: "Shopify Development",
    description:
      "Custom Shopify themes and apps that are fast, beautiful, and built to convert.",
  },
  {
    image: PlaceHolderImages.find((img) => img.id === "service-gtm"),
    title: "GTM Strategy",
    description:
      "Data-driven Go-To-Market strategies that ensure your product launch is a resounding success.",
  },
  {
    image: PlaceHolderImages.find((img) => img.id === "service-seo"),
    title: "SEO & Performance",
    description:
      "Boost your visibility and climb the ranks with our expert SEO and performance optimization services.",
  },
  {
    image: PlaceHolderImages.find((img) => img.id === "service-content"),
    title: "Content Marketing",
    description:
      "Engaging content that tells your story, builds your audience, and drives conversions.",
  },
  {
    image: PlaceHolderImages.find((img) => img.id === "service-podcast"),
    title: "Podcast Production",
    description:
      "From concept to distribution, we handle everything to make your podcast a hit.",
  },
  {
    image: PlaceHolderImages.find((img) => img.id === "service-branding"),
    title: "Branding & UI/UX",
    description:
      "Crafting unique brand identities and intuitive user experiences that captivate and delight.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
          We offer a complete suite of digital services designed to help your
          brand thrive in the digital age.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="animate-in fade-in slide-in-from-bottom-6 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}
