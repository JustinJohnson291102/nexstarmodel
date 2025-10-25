
import GetStartedForm from "@/components/shared/get-started-form";
import { ShoppingCart, Store, Code, Palette, Rocket, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card } from "@/components/ui/card";


const faqs = [
    {
        question: "Which e-commerce platform is right for me?",
        answer: "The best platform depends on your specific needs. Shopify is excellent for ease of use and quick setup, while WooCommerce (with WordPress) offers greater flexibility and customization. We'll help you choose the right fit during our initial consultation."
    },
    {
        question: "How long does it take to build an e-commerce website?",
        answer: "A typical e-commerce project takes between 6 to 12 weeks, depending on the complexity of the design, number of products, and custom features required. We'll provide a detailed timeline after our discovery phase."
    },
    {
        question: "Can you help me migrate my existing store?",
        answer: "Absolutely. We offer seamless migration services from platforms like Magento, BigCommerce, or any other system to Shopify or WooCommerce, ensuring no loss of data, SEO rankings, or customers."
    },
    {
        question: "Do you provide support after the website is launched?",
        answer: "Yes, we offer ongoing support and maintenance packages to ensure your store remains secure, up-to-date, and performing at its best. We can also provide training for your team on how to manage the store."
    }
]

const alternatingContent = [
    {
        title: "Optimized for Conversion",
        description: "A beautiful store isn't enough; it needs to convert. We meticulously design every step of the customer journey, from landing page to checkout, to maximize your sales. Our data-driven approach to Conversion Rate Optimization (CRO) ensures your store is a high-performance sales machine.",
        points: [
            "A/B testing of product pages, cart, and checkout flows.",
            "User behavior analysis to identify and eliminate friction points.",
            "Implementation of trust signals like reviews and security badges.",
            "Mobile-first design for a seamless shopping experience on any device."
        ],
        image: {
            src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsZWFkJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3NjIzOTQwODd8MA&ixlib=rb-4.0.3&q=80&w=1080",
            hint: "colorful professional sales funnel"
        }
    },
    {
        title: "Scalable &amp; Powerful Platforms",
        description: "We are experts in the world's leading e-commerce platforms, Shopify and WooCommerce. We'll help you choose the right one for your business and build a store that can scale with you. Whether you're a startup or an enterprise, we build solutions that last.",
        points: [
            "Expert development on Shopify, Shopify Plus, and WooCommerce.",
            "Custom app and plugin development to extend functionality.",
            "Seamless integration with your existing ERP, CRM, and marketing tools.",
            "Headless commerce solutions for ultimate flexibility and performance."
        ],
        image: {
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm93dGglMjBjaGFydHxlbnwwfHx8fDE3NjIyNDc5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
            hint: "colorful professional server infrastructure"
        }
    }
];

const platformLogos = [
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
    { name: "BigCommerce", logo: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg" },
    { name: "Magento", logo: "https://cdn.worldvectorlogo.com/logos/magento.svg" },
];

export default function EcommerceDevelopmentPage() {
  const pageData = {
    title: "E-commerce Website Design and Development",
    description: "We build beautiful, high-performing e-commerce websites that turn visitors into loyal customers.",
    heroImage: "https://ik.imagekit.io/ggelm1lwa/pexels-lisa-fotios-1279330.jpg?updatedAt=1759859556839",
    heroHint: "colorful professional online shopping",
    features: [
      {
        icon: Store,
        title: "Custom Storefront Design",
        description: "Your brand is unique, and your store should be too. We create bespoke designs that reflect your brand identity and offer an exceptional user experience.",
      },
      {
        icon: Code,
        title: "Platform Expertise (Shopify &amp; WooCommerce)",
        description: "Whether you need the power of Shopify or the flexibility of WooCommerce, our experts will build your store on the right platform for your needs.",
      },
      {
        icon: Palette,
        title: "Mobile-First and Responsive",
        description: "With the majority of online traffic coming from mobile, we design for a flawless experience on every device, from smartphones to desktops.",
      },
      {
        icon: Rocket,
        title: "Conversion Rate Optimization (CRO)",
        description: "A beautiful store is just the beginning. We optimize every element of your site—from product pages to checkout—to maximize sales.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center bg-white">
        <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlY29tbWVyY2UlMjBvcHRpbWl6YXRpb258ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="E-commerce Development"
            className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto px-4">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Build Your Digital Flagship</h2>
                <p>
                  Your e-commerce website is more than just a place to sell products; it's the heart of your online brand. It's your 24/7 salesperson, your primary marketing channel, and the most direct connection you have with your customers. We craft digital shopping experiences that are not only visually stunning but also engineered for performance, security, and scalability.
                </p>
                <p>
                  Our end-to-end e-commerce solutions cover everything from initial strategy and design to development, launch, and ongoing optimization. We don't just build stores; we build businesses. We are your dedicated partners in building a successful online retail business that thrives in a competitive market.
                </p>
              </div>

              <div className="space-y-8">
                {pageData.features.map(feature => (
                  <div key={feature.title} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
               <div className="bg-secondary p-6 md:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold font-headline mb-4 flex items-center gap-3"><ShoppingCart className="w-7 h-7 text-primary"/>Full-Service E-commerce Solutions</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Custom Theme Development &amp; Customization</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>App Integration and Custom Plugin Development</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Payment Gateway &amp; Shipping Integration</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>SEO &amp; Performance Optimization for E-commerce</span></li>
                       <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Headless Commerce &amp; API-driven Solutions</span></li>
                  </ul>
                   <Button asChild className="group mt-6">
                    <Link to="/shopify">Learn more about our Shopify Expertise <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
               </div>
            </div>
            <div className="md:col-span-1 sticky top-32">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://ik.imagekit.io/ggelm1lwa/pexels-lisa-fotios-1279330.jpg?updatedAt=1759859556839')` }}
        data-ai-hint="colorful abstract tech background"
      >
        <div className="absolute inset-0 bg-background/0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">Platform Agnostic, Results-Driven</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto px-4">We have deep expertise across all major e-commerce platforms.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {platformLogos.map((p) => (
              <Card key={p.name} className="p-6 md:p-8 flex justify-center items-center bg-card/70 backdrop-blur-sm h-24 md:h-32 transition-transform duration-300 hover:-translate-y-2">
                <img src={p.logo} alt={p.name} width={150} height={40} className="object-contain"  />
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 space-y-16 md:space-y-24">
            {alternatingContent.map((item, index) => (
                <div key={item.title} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-1 slide-in-from-left-10' : 'md:order-2 slide-in-from-right-10'}`}>
                        <img src={item.image.src}
                            alt={item.title}
                            width={800}
                            height={600}
                            data-ai-hint={item.image.hint}
                            className="w-full h-full w-full h-auto object-rounded-lg transition-transform duration-500 hover:scale-105"
                         />
                    </div>
                    <div className={`animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-2 slide-in-from-right-10' : 'md:order-1 slide-in-from-left-10'}`}>
                        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">{item.title}</h3>
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

      <OurClients />

      <section 
        className="relative py-20 md:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us as Your E-commerce Partner?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              We're not just developers; we're e-commerce strategists dedicated to your growth. We focus on building scalable, secure, and sales-driven online stores that become valuable assets for your business. Our expertise ensures you get a site that not only looks great but also performs flawlessly and delivers a tangible return on investment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
             <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12 px-4">
              Have questions? We have answers. Here are some common inquiries about our e-commerce development services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
