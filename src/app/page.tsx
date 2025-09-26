
"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const servicesData = [
  {
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
    link: "/services",
  },
  {
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
    link: "/services",
  },
];


export default function Home() {
  const adAgencyImage = PlaceHolderImages.find(
    (img) => img.id === "service-branding"
  );
  const gamutOfServicesImage = PlaceHolderImages.find(
    (img) => img.id === "service-content"
  );

  const heroImages = [
    {
      id: "hero-main-1",
      src: "https://picsum.photos/seed/office-setup/1920/1080",
      alt: "Modern office setup",
      hint: "office setup",
    },
    {
      id: "hero-main-2",
      src: "https://picsum.photos/seed/laptop-desk/1920/1080",
      alt: "Laptop setup on a desk",
      hint: "laptop desk",
    },
    {
      id: "hero-main-3",
      src: "https://picsum.photos/seed/media-desk/1920/1080",
      alt: "Media editing desk setup",
      hint: "media desk",
    },
  ];

  const driveImages = [
    "1uU61ubKLUMHjhEhjC-YSCgADt3gp8Fm-", // small 1
    "1OvONtlQCC-uAkTzLJ10Xf8u59Eo6wSBu", // small 2
    "1anV4fJQo5ijo_xNkxuqx64Z_uPALtLOU", // big 1 (vertical)
    "1aH4QgARvTOu9nwMXZA2OH4WOM1ad9Co1", // big 2 (vertical) -> REPLACED
    "18jdLAB6UVCxDq1PPSvl7YJprshpRHNDV", // small 3
    "1OgeTSulBgpPo1PCdnAu_jtxmVpH8RKsO", // small 4
  ];

  return (
    <>
      <section className="w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              playOnInit: true,
            }),
          ]}
          className="w-full"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {heroImages.map((img) => (
              <CarouselItem key={img.id}>
                <div className="relative h-[60vh] md:h-[100vh] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover w-full h-auto"
                    priority={img.id === "hero-main-1"}
                    data-ai-hint={img.hint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      
       <section
        className="relative bg-cover bg-center bg-fixed text-white py-20 md:py-32"
        style={{ backgroundImage: `url('https://picsum.photos/seed/bright-office/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-primary/80 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="https://picsum.photos/seed/agency/600/400"
                    alt="Advertising Agency"
                    width={600}
                    height={400}
                    data-ai-hint="creative team"
                    className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
                    As an Advertising Agency, We Ignite Brands with Ideas that Transform Behaviour
                  </h1>
                  <p className="text-lg text-white/90 mb-8">
                    Across mediums, we have taken both fledgling and legacy brands to a new level of success.
                  </p>
                  <Button asChild size="lg" className="group rounded-lg" variant="secondary">
                    <Link href="/story">
                      View More{" "}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
          
              <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
                <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700 overflow-hidden rounded-lg shadow-xl">
                  {gamutOfServicesImage && <Image
                    src={gamutOfServicesImage.imageUrl}
                    alt="Gamut of Services"
                    width={600}
                    height={400}
                    data-ai-hint={gamutOfServicesImage.imageHint}
                    className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />}
                </div>
                <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight mb-4">
                    Our Gamut of Services are as Diverse as they are Effective
                  </h2>
                   <ul className="space-y-2 text-lg text-white/90">
                    <li>Branding</li>
                    <li>Social Media</li>
                    <li>Digital - Website / Technology</li>
                    <li>B2B</li>
                    <li>Performance Marketing</li>
                  </ul>
                </div>
              </div>
          
        </div>
      </section>
      
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h2 className="font-headline text-primary text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
              We're Changing the Way you View Communications
            </h2>
            <p className="text-muted-foreground md:text-lg text-justify animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              Xebec Communications is a hybrid marketing company with the
              chutzpah of a millennial combined with the experience of Gen X. We
              bring to the table the best of cutting-edge ideas, a wealth of
              insights, the robustness of experience and the magic of agility.
              We connect the dots quicker, so you benefit faster. From branding
              to advertising, we offer solutions which are truly 360 degrees in
              nature. Because we truly believe that the future of Communications
              lies in the 4Es - Engagement, Exclusivity, Emotion and Experience.
            </p>
             <div className="grid grid-cols-1 gap-4 mt-12 [perspective:1000px]">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 flex flex-col gap-4">
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in-0 [transform:rotateY(-20deg)] slide-in-from-left-20 duration-1000">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[0]}`}
                      alt="Drive Image 1"
                      width={256}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in-0 [transform:rotateY(-20deg)] slide-in-from-left-20 duration-1000 delay-100">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[1]}`}
                      alt="Drive Image 2"
                      width={256}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 overflow-hidden rounded-lg shadow-xl animate-in fade-in-0 [transform:rotateY(20deg)] slide-in-from-right-20 duration-1000">
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${driveImages[2]}`}
                    alt="Communications grid image"
                    width={512}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 overflow-hidden rounded-lg shadow-xl animate-in fade-in-0 [transform:rotateY(-20deg)] slide-in-from-left-20 duration-1000">
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${driveImages[3]}`}
                    alt="Drive Image 4"
                    width={512}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="md:col-span-1 flex flex-col gap-4">
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in-0 [transform:rotateY(20deg)] slide-in-from-right-20 duration-1000">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[4]}`}
                      alt="Drive Image 5"
                      width={256}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in-0 [transform:rotateY(20deg)] slide-in-from-right-20 duration-1000 delay-100">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[5]}`}
                      alt="Drive Image 6"
                      width={256}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-background relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://picsum.photos/seed/bright-office-setup/1920/1080')` }}>
        <div className="absolute inset-0 bg-background/80 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
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


    

    
