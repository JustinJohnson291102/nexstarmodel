
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Starter Plan",
    priceMonthly: 399,
    features: [
      "Instagram Account Set-Up",
      "Write applicable posts",
      "Maintain profile",
      "#Hashtag Trend Research",
      "FB Page Creation",
      "FB Regular Updates",
      "Twitter Page Creation",
      "Twitter Regular Updates",
    ],
    highlight: false,
  },
  {
    name: "Basic Plan",
    priceMonthly: 599,
    features: [
        "Instagram Marketing",
        "Instagram Account Set-Up",
        "Write applicable posts",
        "Instagram Followers/M - 10%",
        "Monthly Post Regular Updates",
        "Maintain profile",
        "#Hashtag Trend Research",
        "Instagram Posts Like",
        "Query Reply on Social Media",
        "Instagram Analytics Monitoring",
        "Instagram Paid Ads*",
        "Facebook Marketing",
        "FB Page Creation",
        "FB Regular Updates",
        "FB Application Integration",
        "FB Page Likes/M - 10%",
        "FB Timeline Design",
        "FB Profile Design",
        "Boost Post & Advert*",
        "Twitter Marketing",
        "Twitter Page Creation",
        "Twitter Regular Updates",
        "Twitter Profile Design Intergration",
        "Twitter Tweet Favourite",
        "Twitter List Management",
        "Twitter Followers/M - 10%",
        "Pinterest Marketing",
        "Pinterest Account Creation",
        "Sourcing of pin board content",
        "Creation of custom business URL",
        "Pinterest Followers",
        "Re-pinning of relevant content",
        "Updating of pin boards",
        "Following of relevant Pinners",
        "Linkedin Marketing",
        "Linkedin Business Page Creation",
        "Linkedin Account Management",
        "Linkedin Regular Updates",
        "Linkedin Profile Maintenance",
        "Linkedin Advertisement*",
        "Youtube Marketing",
        "You Tube Channel Creation",
        "You Tube Background Design",
        "Video Optimization",
        "Video Submission",
        "Video Like or Subscribers",
        "Video Views (Paid Ads)",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Plan",
    priceMonthly: 999,
    features: [
        "Includes all features from Basic Plan",
        "Dedicated Account Manager",
        "Advanced Analytics & Reporting",
        "Influencer Outreach (Basic)",
        "Bi-weekly Strategy Calls",
    ],
    highlight: false,
  },
  {
    name: "Business Plan",
    priceMonthly: 1599,
    features: [
        "Includes all features from Enterprise Plan",
        "Advanced Influencer Marketing",
        "Full-scale Paid Ad Management",
        "Weekly Performance Reviews",
        "Custom Content Creation (Video & Graphics)",
    ],
    highlight: false,
  },
];


export default function SMOPricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      <section 
        className="relative h-[50vh] w-full flex items-center justify-center text-center bg-primary text-primary-foreground"
      >
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              Social Media Pricing
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Boost your brand's social presence and engagement with our tailored SMO plans.
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
          <div className="relative flex items-center p-1 bg-primary rounded-lg">
             <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "relative z-10 w-32 py-2 text-sm font-semibold transition-colors duration-300 rounded-md",
                  billingCycle === "monthly" ? "text-primary bg-white" : "text-white bg-transparent"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "relative z-10 w-32 py-2 text-sm font-semibold transition-colors duration-300 rounded-md",
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
                  {plan.features.map((feature, index) => (
                     <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="flex-grow">{feature}</span>
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
