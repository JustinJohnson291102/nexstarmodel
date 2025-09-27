
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PPCPricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">
          PPC Pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get immediate, targeted traffic with our Pay-Per-Click campaign management plans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pricing Cards will go here */}
        <Card>
          <CardHeader>
            <CardTitle>Basic PPC</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ideal for small campaigns and local businesses.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pro PPC</CardTitle>
          </CardHeader>
          <CardContent>
            <p>For businesses looking to maximize their ad spend.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise PPC</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Comprehensive campaign management at scale.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    