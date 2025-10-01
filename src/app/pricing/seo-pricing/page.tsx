"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
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

const basicFeatures = {
  "Local & National, International SEO": true,
  "Minimum 20 Keywords": true,
  "Top 10 Guarantee - 50%*": true,
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
  "Schema for Contact": true,
  "Google Search Console": true,
  "Bing Webmaster Tools": true,
  "Google Analytics": true,
  "HTML Code Cleanup & Optimization": true,
  "Location Based Page Optimization": true,
  "Local SEO": true,
  "Google My Business Setup and Verification": true,
  "Google Places Optimization": true,
  "Google My Business Customer Reviews/ratings": true,
  "Bing local listing": true,
  "Off Page SEO": true,
  "Content Writing & Submission": true,
  "PDF/Doc Submission": true,
  "Classifieds": true,
  "Press Release Writing & Submission": true,
  "Q & A": true,
  "Informational Article Writing & Submission": true,
  "Blog Posting*": true,
  "Guest Blog Posting": true,
  "Infographic Creation & Distribution": true,
  "8 Blogs Posting*": true,
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

const enterpriseFeatures = {
  "Local & National, International SEO": true,
  "Minimum 40 Keywords": true,
  "Top 10 Guarantee - 50%*": true,
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
  "Schema for Contact": true,
  "Google Search Console": true,
  "Bing Webmaster Tool": true,
  "Google Analytics": true,
  "HTML Code Cleanup & Optimization": true,
  "Location Based Page Optimization": true,
  "Local SEO": true,
  "Google My Business Setup and Verification": true,
  "Google Places Optimization": true,
  "Google My Business Customer Reviews/ratings": true,
  "Bing Local Listing": true,
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
  "12 Blogs Posting*": true,
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

const businessFeatures = {
    "Local & National, International SEO": true,
    "Minimum 60 Keywords": true,
    "Top 10 Guarantee - 70%*": true,
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
    "Schema for Contact": true,
    "Google Search Console": true,
    "Bing Webmaster Tool": true,
    "Google Analytics": true,
    "HTML Code Cleanup & Optimization": true,
    "Location Based Page Optimization": true,
    "Local SEO": true,
    "Google My Business Setup and Verification": true,
    "Google Places Optimization": true,
    "Google My Business Customer Reviews/ratings": true,
    "Bing Local Listing": true,
    "Off Page SEO": true,
    "Content Writing & Submission": true,
    "PDF/Doc Submission": true,
    "Classifieds": true,
    "Blog Commenting": true,
    "Q & A": true,
    "Informational Article Writing & Submission": true,
    "Guest Blog Posting": true,
    "Infographic Creation & Distribution": true,
    "15 Blogs Posting*": true,
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
    priceYearly: 299,
    features: starterFeatures,
    image: "https://drive.google.com/uc?export=download&id=1IfD7fT1xciArdh3tv7vf1rNEiCtuHbyY",
    highlight: false,
  },
  {
    name: "Basic Plan",
    priceMonthly: 699,
    priceYearly: 499,
    features: basicFeatures,
    image: "https://drive.google.com/uc?export=download&id=1nAgNXV4xyznq9D515yopCYigQwB9kLLV",
    highlight: true,
  },
  {
    name: "Enterprise",
    priceMonthly: 899,
    priceYearly: 699,
    features: enterpriseFeatures,
    image: "https://drive.google.com/uc?export=download&id=1nAgNXV4xyznq9D515yopCYigQwB9kLLV",
    highlight: false,
  },
  {
    name: "Business Plan",
    priceMonthly: 999,
    priceYearly: 899,
    features: businessFeatures,
    image: "https://drive.google.com/uc?export=download&id=1t5M5S-pC7AkWXXznpa8oWlmVY0pe_IAv",
    highlight: false,
  },
];


export default function SEOPricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/seo-pricing-hero/1920/1080')` }}
        data-ai-hint="seo growth chart"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              SEO Pricing Plans
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Choose the perfect plan to boost your organic growth and dominate search rankings.
            </p>
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
                <div className="relative w-full h-24 my-4">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-4xl font-bold text-primary pt-4">
                   ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                   <span className="text-lg font-medium text-muted-foreground">/mo</span>
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {Object.entries(plan.features).map(([feature, value]) => (
                     <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="flex-grow">{feature.replace(/-\s\d+%?\*?/, '')}</span>
                      </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Button className="w-full">Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
