
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const starterFeatures = {
  "Local & National SEO": true,
  "Minimum 8 Keywords": true,
  "Top 10 Guarantee - 40%*": true,
  "Initial Research And Analysis": true,
  "Business Analysis": true,
  "In-depth Website Study": true,
  "Competitor Analysis": true,
  "Content Duplicacy Check": true,
  "Initial Backlinks Analysis": true,
  "Google Penalty Check": true,
  "Website Speed Analysis": true,
  "Keyword Research": true,
  "Canonicalization": true,
  "Website Page Load Optimization": true,
  "Initial Report": true,
  "On Page SEO": true,
  "Title Tags Optimization": true,
  "URL Optimization": true,
  "Internal linking & Optimization": true,
  "Image & ALT Tag Optimization": true,
  "Content Optimization": true,
  "Robots.txt Creation": true,
  "HTML & XML Sitemap Submission": true,
  "Schema For Contact": true,
  "Google Search Console": true,
  "Bing Webmaster Tools": true,
  "Google Analytics": true,
  "HTML Code Cleanup & Optimization": true,
  "Location Based Page Optimisation": true,
  "Local SEO": true,
  "Google My Business Setup and Verification": true,
  "Google Places Optimization": true,
  "Google My Business Customer Reviews/ratings": true,
  "Bing local listing": true,
  "Off Page SEO": true,
  "Content Writing & Submission": true,
  "PDF/Doc Submission": true,
  "Classifieds": true,
  "Blog Commenting": true,
  "Q & A": true,
  "Informational Article Writing & Submission": true,
  "Press Release Writing & Submission": true,
  "Guest Blog Posting": true,
  "Infographic Creation & Distribution": true,
  "4 Blogs Posting*": true,
  "Social Bookmarking": true,
  "Status And Report": true,
  "Search Engine Rank Report": true,
  "SEO Reports": true,
  "Google Analytics Report": true,
  "Activitiy Report": true,
  "Monthly Action Plan": true,
  "Email/Chat/Online": true,
  "24/7 Live Project Tracking": true,
};

const pricingPlans = [
  {
    name: "Starter Plan",
    priceMonthly: 499,
    features: starterFeatures,
    highlight: false,
  },
  {
    name: "Basic Plan",
    priceMonthly: 799,
    features: { ...starterFeatures, "Minimum 8 Keywords": "Minimum 15 Keywords", "Top 10 Guarantee - 40%*": "Top 10 Guarantee - 60%*", "Guest Blog Posting": 2, "4 Blogs Posting*": "8 Blogs Posting*" },
    highlight: true,
  },
  {
    name: "Enterprise Plan",
    priceMonthly: 1299,
    features: { ...starterFeatures, "Minimum 8 Keywords": "Minimum 25 Keywords", "Top 10 Guarantee - 40%*": "Top 10 Guarantee - 80%*", "Guest Blog Posting": 4, "4 Blogs Posting*": "12 Blogs Posting*", "Infographic Creation & Distribution": 2  },
    highlight: false,
  },
  {
    name: "Business Plan",
    priceMonthly: 1999,
    features: { ...starterFeatures, "Minimum 8 Keywords": "Minimum 40 Keywords", "Top 10 Guarantee - 40%*": "Top 10 Guarantee - 90%*", "Guest Blog Posting": 6, "4 Blogs Posting*": "16 Blogs Posting*", "Infographic Creation & Distribution": 4 },
    highlight: false,
  },
];


export default function SEOPricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      <section 
        className="relative h-[50vh] w-full flex items-center justify-center text-center bg-primary text-primary-foreground"
      >
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              Flexible Pricing Plans
            </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-lg">Best Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mt-2">
            Our Pricing Plans
          </h2>
        </div>
        
        <div className="flex justify-center items-center mb-12">
          <div className="relative flex items-center p-1 bg-primary rounded-full">
             <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "relative z-10 w-32 py-2 text-sm font-semibold transition-colors duration-300 rounded-full",
                  billingCycle === "monthly" ? "text-primary bg-white" : "text-white bg-transparent"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "relative z-10 w-32 py-2 text-sm font-semibold transition-colors duration-300 rounded-full",
                  billingCycle === "yearly" ? "text-primary bg-white" : "text-white bg-transparent"
                )}
              >
                Yearly
              </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={cn("flex flex-col h-full", plan.highlight ? "border-primary border-2 shadow-primary/20" : "")}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                <p className="text-4xl font-bold text-primary pt-4">
                   ${billingCycle === "monthly" ? plan.priceMonthly : Math.round(plan.priceMonthly * 12 * 0.9)}
                   <span className="text-lg font-medium text-muted-foreground">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {Object.entries(plan.features).map(([feature, value]) => (
                     <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="flex-grow">{feature.replace(/-\s\d+%?\*?/, '')}: <span className="font-semibold text-foreground">{typeof value === 'boolean' ? '' : String(value).replace(/.+:\s/, '')}</span></span>
                      </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6">
                <Button className="w-full">Buy Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
