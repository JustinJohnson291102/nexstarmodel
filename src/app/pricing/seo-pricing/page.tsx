
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SEOPricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">
          SEO Pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan to boost your organic search visibility and
          drive more traffic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pricing Cards will go here */}
        <Card>
          <CardHeader>
            <CardTitle>Basic SEO</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A great starting point for small businesses.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pro SEO</CardTitle>
          </CardHeader>
          <CardContent>
            <p>For growing businesses looking to scale.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise SEO</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Comprehensive SEO for large-scale operations.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    