import StoreShowcase from "@/components/shopify/store-showcase";
import Testimonials from "@/components/shopify/testimonials";

export default function ShopifyPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              World-Class Shopify Stores
            </h1>
            <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              We design and develop beautiful, high-converting Shopify stores
              that customers love. Check out some of our work.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200">
            <StoreShowcase />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              What Our Clients Say
            </h2>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
            <Testimonials />
          </div>
        </div>
      </section>
    </div>
  );
}
