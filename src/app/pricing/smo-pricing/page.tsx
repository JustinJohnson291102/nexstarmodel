
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SMOPricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">
          SMO Pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Our Social Media Optimization plans are designed to increase your brand's presence and engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pricing Cards will go here */}
        <Card>
          <CardHeader>
            <CardTitle>Basic SMO</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Perfect for getting started on social media.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pro SMO</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Advanced strategies for growing your community.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise SMO</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Complete social media management for your brand.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    