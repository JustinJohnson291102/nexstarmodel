
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Camera, Smartphone, Sparkles, ThumbsUp, Layers, CheckCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GetStartedForm from "@/components/shared/get-started-form";
import OurClients from "@/components/homepage/our-clients";

const videoCards = [
  {
    title: "Product Visualization",
    description: "See products in your space before you buy.",
    videoSrc: "https://videos.pexels.com/video-files/5406087/5406087-sd_640_360_25fps.mp4",
    image: { src: "https://picsum.photos/seed/ar-product-viz/800/450", hint: "ar product" },
  },
  {
    title: "Interactive Filters",
    description: "Engage users with fun, shareable brand filters.",
    videoSrc: "https://videos.pexels.com/video-files/7578508/7578508-sd_640_360_25fps.mp4",
    image: { src: "https://picsum.photos/seed/ar-filter/800/450", hint: "ar social" },
  },
  {
    title: "AR Portals",
    description: "Step into a new world with immersive brand portals.",
    videoSrc: "https://videos.pexels.com/video-files/4429377/4429377-sd_540_960_30fps.mp4",
    image: { src: "https://picsum.photos/seed/ar-portal/800/450", hint: "ar portal" },
  },
];

const arFeatures = [
    {
        icon: Box,
        title: "Immersive 3D Models",
        description: "From furniture to fashion, we create photorealistic 3D models that users can interact with in their own environment."
    },
    {
        icon: Smartphone,
        title: "WebAR & App-Based Solutions",
        description: "We develop both app-less WebAR experiences for instant access and full-featured native AR apps for deeper engagement."
    },
    {
        icon: Camera,
        title: "Custom Social Media Filters",
        description: "Go viral with custom-branded AR filters for Instagram, Snapchat, and TikTok that boost user-generated content."
    },
    {
        icon: Sparkles,
        title: "Interactive Animations",
        description: "Bring your products and stories to life with captivating animations and effects that respond to user interaction."
    }
];

const whyArFilters = [
    {
        icon: ThumbsUp,
        title: "Boost Social Engagement",
        description: "AR filters are inherently shareable, turning your audience into brand ambassadors."
    },
    {
        icon: Layers,
        title: "Increase Brand Recall",
        description: "Interactive experiences create a stronger, more memorable connection to your brand."
    },
    {
        icon: ArrowRight,
        title: "Drive User-Generated Content",
        description: "Encourage users to create and share content featuring your brand, amplifying your reach organically."
    }
];

const alternatingContent = [
    {
        title: "AR for E-commerce",
        description: "Revolutionize the online shopping experience with AR. Allow customers to virtually try on clothes, visualize furniture in their living room, or see how a new gadget looks on their desk. AR reduces returns and increases conversion rates by giving buyers more confidence in their purchase decisions.",
        points: [
            "Virtual try-on solutions for fashion and cosmetics.",
            "Product visualization for furniture, electronics, and more.",
            "Interactive 3D models that showcase every detail.",
            "Seamless integration with Shopify, WooCommerce, and other platforms."
        ],
        image: {
            src: "https://picsum.photos/seed/ar-ecommerce/800/600",
            hint: "ar shopping"
        }
    },
    {
        title: "AR for Marketing & Events",
        description: "Create unforgettable marketing campaigns and event experiences with augmented reality. From interactive print ads that come to life, to AR-powered scavenger hunts at trade shows, we help you create buzz and leave a lasting impression.",
        points: [
            "AR-enabled packaging and print materials.",
            "Immersive brand experiences for events and product launches.",
            "Gamified AR promotions to drive engagement.",
            "WebAR portals that transport users to virtual worlds."
        ],
        image: {
            src: "https://picsum.photos/seed/ar-marketing/800/600",
            hint: "ar event"
        }
    }
];


export default function AugmentedRealityPage() {
  return (
    <>
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/augmented-reality-vibrant/1920/1080')` }}
        >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            Augmented Reality Services
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-xl mx-auto md:mx-0">
            Blur the lines between digital and reality. We craft AR experiences that captivate, engage, and convert.
          </p>
          <Button asChild size="lg" className="mt-8 group" variant="secondary">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Transform Your Brand Experience with an Expert Augmented Reality Agency</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">See how our AR solutions are already making an impact.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videoCards.map((card, index) => (
                    <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="p-0">
                            <div className="relative aspect-video bg-black">
                                <video
                                    src={card.videoSrc}
                                    poster={card.image.src}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                ></video>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                                <div className="absolute bottom-4 left-4">
                                  <div className="bg-primary/50 backdrop-blur-sm p-3 rounded-lg border border-primary-foreground/20">
                                    <Video className="h-6 w-6 text-primary-foreground" />
                                  </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="font-headline text-xl mb-2">{card.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 space-y-24">
            {alternatingContent.map((item, index) => (
                <div key={item.title} className="grid md:grid-cols-2 gap-16 items-center">
                    <div className={`overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-1 slide-in-from-left-10' : 'md:order-2 slide-in-from-right-10'}`}>
                        <Image 
                            src={item.image.src}
                            alt={item.title}
                            width={800}
                            height={600}
                            data-ai-hint={item.image.hint}
                            className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className={`animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-2 slide-in-from-right-10' : 'md:order-1 slide-in-from-left-10'}`}>
                        <h3 className="text-3xl font-bold font-headline mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6">{item.description}</p>
                        <ul className="space-y-3">
                            {item.points.map(point => (
                                <li key={point} className="flex items-start">
                                   <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>  
            ))}
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-700">
               <Image 
                src="https://picsum.photos/seed/webar-concept/800/600"
                alt="WebAR on multiple devices"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint="web ar devices"
               />
            </div>
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
               <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Enhance Your Website with WebAR</h2>
               <p className="text-lg text-muted-foreground mb-8">
                Deliver augmented reality experiences directly through the web browser—no app download required. WebAR removes the friction, allowing users to instantly engage with your products and brand stories. It's the most accessible way to bring AR to the widest possible audience.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Instant access via QR code or link.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Compatible across iOS and Android devices.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Perfect for marketing campaigns, e-commerce, and events.</span></li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Build Your AR Dream Experience</h2>
                  <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">From concept to launch, we provide end-to-end AR development services.</p>
              </div>
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  {arFeatures.map((feature, index) => (
                      <div key={index} className="flex gap-6 items-start p-6 bg-card/50 rounded-lg border border-border/20">
                          <div className="text-primary bg-primary/10 p-4 rounded-lg">
                              <feature.icon className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                              <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">Why AR Filters Are a Game-Changer</h2>
              <p className="text-lg text-muted-foreground mb-8">
                AR filters on social media are more than a gimmick; they're a powerful marketing tool that places your brand directly in the hands of your audience.
              </p>
              <div className="space-y-6">
                {whyArFilters.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        <div className="p-3 bg-primary/10 rounded-full">
                           <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
            <div>
                <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <OurClients />
    </>
  );
}

    

    