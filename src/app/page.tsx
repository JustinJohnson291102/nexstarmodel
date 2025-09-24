import Hero from "@/components/homepage/hero";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const adAgencyImage = PlaceHolderImages.find(
    (img) => img.id === "service-branding"
  );
  const gamutOfServicesImage = PlaceHolderImages.find(
    (img) => img.id === "service-content"
  );

  const servicesList = [
    "Branding",
    "Social Media",
    "Digital - Website / Technology",
    "B2B",
    "Performance Marketing",
  ];

  const driveImages = [
    "1uU61ubKLUMHjhEhjC-YSCgADt3gp8Fm-", // small 1
    "1OvONtlQCC-uAkTzLJ10Xf8u59Eo6wSBu", // small 2
    "1anV4fJQo5ijo_xNkxuqx64Z_uPALtLOU", // big 1 (vertical)
    "1qD7RE55BkSvD6YpZua4hyD4DXFIP_Osu", // big 2 (vertical)
    "18jdLAB6UVCxDq1PPSvl7YJprshpRHNDV", // small 3
    "1OgeTSulBgpPo1PCdnAu_jtxmVpH8RKsO", // small 4
  ];

  return (
    <>
      <Hero />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              {adAgencyImage && (
                <Image
                  src={adAgencyImage.imageUrl}
                  alt="Advertising agency creative process"
                  width={600}
                  height={450}
                  className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={adAgencyImage.imageHint}
                />
              )}
            </div>
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight mb-6">
                As an Advertising Agency, We Ignite Brands with Ideas that
                Transform Behaviour
              </h2>
              <p className="text-muted-foreground md:text-lg mb-8">
                Across mediums, we have taken both fledgling and legacy brands
                to a new level of success.
              </p>
              <Button asChild size="lg" className="group rounded-lg">
                <Link href="/story">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 animate-in fade-in slide-in-from-right-10 duration-700 overflow-hidden rounded-lg shadow-xl">
              {gamutOfServicesImage && (
                <Image
                  src={gamutOfServicesImage.imageUrl}
                  alt="Diverse and effective services"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={gamutOfServicesImage.imageHint}
                />
              )}
            </div>
            <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our Gamut of Services are as Diverse as they are Effective
              </h2>
              <ul className="space-y-4 mb-8">
                {servicesList.map((service) => (
                  <li key={service} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent mr-3" />
                    <Link
                      href="/services"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="group rounded-lg">
                <Link href="/services">
                  View Our Services{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
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
            <p className="text-muted-foreground md:text-lg text-justify animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100 mb-12">
              Xebec Communications is a hybrid marketing company with the
              chutzpah of a millennial combined with the experience of Gen X. We
              bring to the table the best of cutting-edge ideas, a wealth of
              insights, the robustness of experience and the magic of agility.
              We connect the dots quicker, so you benefit faster. From branding
              to advertising, we offer solutions which are truly 360 degrees in
              nature. Because we truly believe that the future of Communications
              lies in the 4Es - Engagement, Exclusivity, Emotion and Experience.
            </p>
            <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 flex flex-col gap-4">
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in slide-in-from-left-10 duration-700">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[0]}`}
                      alt="Drive Image 1"
                      width={320}
                      height={240}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in slide-in-from-left-10 duration-700 delay-100">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[1]}`}
                      alt="Drive Image 2"
                      width={320}
                      height={240}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 overflow-hidden rounded-lg shadow-xl animate-in fade-in slide-in-from-right-10 duration-700">
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${driveImages[2]}`}
                    alt="Drive Image 3"
                    width={640}
                    height={960}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 overflow-hidden rounded-lg shadow-xl animate-in fade-in slide-in-from-left-10 duration-700">
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${driveImages[3]}`}
                    alt="Drive Image 4"
                    width={640}
                    height={960}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="md:col-span-1 flex flex-col gap-4">
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in slide-in-from-right-10 duration-700">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[4]}`}
                      alt="Drive Image 5"
                      width={320}
                      height={240}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl animate-in fade-in slide-in-from-right-10 duration-700 delay-100">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${driveImages[5]}`}
                      alt="Drive Image 6"
                      width={320}
                      height={240}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
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
