
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FileText,
  Target,
  Megaphone,
  Rocket,
  TrendingUp,
  Repeat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const roadmapSteps = [
  {
    icon: FileText,
    title: "Phase 1: Market Research & Validation",
    description:
      "Deep dive into market trends, customer personas, and competitive analysis to validate your product-market fit.",
    image: {
      src: "https://picsum.photos/seed/market-research/600/400",
      hint: "market research",
    },
  },
  {
    icon: Target,
    title: "Phase 2: Positioning & Messaging",
    description:
      "Craft a compelling brand story and unique value proposition that resonates with your target audience.",
    image: {
      src: "https://picsum.photos/seed/positioning/600/400",
      hint: "brand positioning",
    },
  },
  {
    icon: Megaphone,
    title: "Phase 3: Pre-Launch Buzz",
    description:
      "Build anticipation through strategic content, PR, and influencer outreach to create a ready-to-buy audience.",
    image: {
      src: "https://picsum.photos/seed/pre-launch/600/400",
      hint: "product launch",
    },
  },
  {
    icon: Rocket,
    title: "Phase 4: Product Launch",
    description:
      "Execute a multi-channel launch campaign to maximize reach and drive initial user acquisition.",
    image: {
      src: "https://picsum.photos/seed/launch-campaign/600/400",
      hint: "rocket launch",
    },
  },
  {
    icon: TrendingUp,
    title: "Phase 5: Growth & Acquisition",
    description:
      "Implement scalable growth loops and paid acquisition strategies to accelerate customer base expansion.",
    image: {
      src: "https://picsum.photos/seed/growth/600/400",
      hint: "growth chart",
    },
  },
  {
    icon: Repeat,
    title: "Phase 6: Iterate & Optimize",
    description:
      "Analyze data, gather feedback, and continuously optimize your product and marketing for long-term success.",
    image: {
      src: "https://picsum.photos/seed/optimize/600/400",
      hint: "optimization process",
    },
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
                  "w-full md:w-1/2",
                  isEven ? "md:pr-8 text-left md:text-right" : "md:pl-8 text-left"
                )}
              >
                <Card className={cn(
                    "group text-left bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 overflow-hidden",
                    isEven
                      ? "animate-in slide-in-from-left-12"
                      : "animate-in slide-in-from-right-12"
                  )}>
                  <CardHeader className="p-0">
                    <div className="relative aspect-video w-full">
                       <Image
                        src={step.image.src}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={step.image.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                       <div className="absolute bottom-4 left-4 flex items-start gap-3">
                        <div className="bg-primary/50 backdrop-blur-sm p-3 rounded-lg border border-primary-foreground/20">
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                     <CardTitle className="font-headline text-xl leading-tight mb-2">{step.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary hidden md:block">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
