"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Target,
  Megaphone,
  Rocket,
  TrendingUp,
  Repeat,
} from "lucide-react";
import { cn } from "@/lib/utils";

const roadmapSteps = [
  {
    icon: FileText,
    title: "Phase 1: Market Research & Validation",
    description:
      "Deep dive into market trends, customer personas, and competitive analysis to validate your product-market fit.",
  },
  {
    icon: Target,
    title: "Phase 2: Positioning & Messaging",
    description:
      "Craft a compelling brand story and unique value proposition that resonates with your target audience.",
  },
  {
    icon: Megaphone,
    title: "Phase 3: Pre-Launch Buzz",
    description:
      "Build anticipation through strategic content, PR, and influencer outreach to create a ready-to-buy audience.",
  },
  {
    icon: Rocket,
    title: "Phase 4: Product Launch",
    description:
      "Execute a multi-channel launch campaign to maximize reach and drive initial user acquisition.",
  },
  {
    icon: TrendingUp,
    title: "Phase 5: Growth & Acquisition",
    description:
      "Implement scalable growth loops and paid acquisition strategies to accelerate customer base expansion.",
  },
  {
    icon: Repeat,
    title: "Phase 6: Iterate & Optimize",
    description:
      "Analyze data, gather feedback, and continuously optimize your product and marketing for long-term success.",
  },
];

export default function GtmRoadmap() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timers = roadmapSteps.map((_, index) =>
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 250)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"
        aria-hidden="true"
      ></div>

      <div className="space-y-16">
        {roadmapSteps.map((step, index) => {
          const isVisible = visibleItems.includes(index);
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={cn(
                "relative flex items-center transition-all duration-700",
                isEven ? "justify-start" : "justify-end",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              )}
            >
              <div
                className={cn(
                  "w-1/2",
                  isEven ? "pr-8 text-right" : "pl-8 text-left"
                )}
              >
                <div
                  className={cn(
                    "inline-block p-6 bg-card rounded-lg shadow-md border max-w-sm w-full",
                    isEven
                      ? "animate-in slide-in-from-left-12"
                      : "animate-in slide-in-from-right-12"
                  )}
                >
                  <h3 className="font-headline text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
