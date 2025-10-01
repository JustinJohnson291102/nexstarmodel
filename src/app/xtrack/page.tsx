
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BarChart2,
  Filter,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const features = [
  {
    icon: Activity,
    title: "Real-Time Analytics",
    description:
      "Monitor visitor activity as it happens. Understand user behavior and react to trends instantly.",
    image: {
      src: "https://picsum.photos/seed/real-time/600/400",
      hint: "live data",
    },
  },
  {
    icon: BarChart2,
    title: "Custom Dashboards",
    description:
      "Create personalized dashboards with the metrics that matter most to your business. No clutter, just clarity.",
    image: {
      src: "https://picsum.photos/seed/dashboard-ui/600/400",
      hint: "data dashboard",
    },
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description:
      "Segment your audience with powerful filters. Analyze data by demographics, location, behavior, and more.",
    image: {
      src: "https://picsum.photos/seed/data-filter/600/400",
      hint: "data filter",
    },
  },
  {
    icon: Users,
    title: "Audience Insights",
    description:
      "Get a deep understanding of your visitors. Learn where they come from and what they're looking for.",
    image: {
      src: "https://picsum.photos/seed/audience/600/400",
      hint: "audience analysis",
    },
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    description:
      "Track goals and funnels to optimize your conversion rates and maximize your ROI.",
    image: {
      src: "https://picsum.photos/seed/conversion/600/400",
      hint: "sales funnel",
    },
  },
  {
    icon: TrendingUp,
    title: "Performance Monitoring",
    description:
      "Keep an eye on your site's performance with detailed reports on page speed and user experience.",
    image: {
      src: "https://picsum.photos/seed/performance/600/400",
      hint: "performance chart",
    },
  },
];

export default function XtrackPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/images/xtrack.jpg')`,
        }}
      >
        <div className="relative z-20 px-4 container mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4">
            Meet XTrack
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            The Ultimate Analytics Solution to Understand, Engage, and Grow Your
            Audience.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 relative bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Clarity in Every Click
            </h2>
            <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              XTrack is more than just an analytics tool; it's your strategic
              partner. We provide you with the insights you need to make
              smarter decisions, create better experiences, and drive
              unprecedented growth. Move beyond vanity metrics and focus on
              what truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-secondary/50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Powerful Features, Simply Presented
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to become a data-driven powerhouse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full group text-left bg-card/70 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 overflow-hidden">
                   <CardHeader className="p-0">
                    <div className="relative aspect-video w-full">
                       <Image
                        src={feature.image.src}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={feature.image.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-start gap-3">
                        <div className="bg-primary/50 backdrop-blur-sm p-3 rounded-lg border border-primary-foreground/20">
                          <feature.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl leading-tight mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section 1 */}
      <section
        className="relative h-[70vh] bg-primary text-primary-foreground flex items-center justify-center"
      >
        <div className="relative z-20 text-center px-4 animate-in fade-in duration-1000">
          <Zap className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
            Data-Driven Decisions, Made Easy
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Our intuitive interface makes complex data accessible to everyone
            on your team, fostering a culture of informed decision-making.
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 md:py-32 relative bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
              Your Data, Beautifully Visualized
            </h2>
            <p className="text-lg text-muted-foreground">
              Interact with your data in ways you never thought possible. Our
              stunning visualizations turn numbers into narratives.
            </p>
          </div>
          <Card className="shadow-2xl shadow-primary/10 bg-card/70 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Monthly Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ChartContainer config={chartConfig} className="w-full h-full">
                  <AreaChart
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                     <defs>
                      <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-desktop)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-desktop)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-mobile)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-mobile)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="url(#fillDesktop)"
                      stroke="var(--color-desktop)"
                      stackId="a"
                    />
                    <Area
                      dataKey="mobile"
                      type="natural"
                      fill="url(#fillMobile)"
                      stroke="var(--color-mobile)"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

       {/* Parallax Section 2 */}
      <section
        className="relative min-h-[50vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/xtrack-parallax2/1920/1080')`,
        }}
      >
        <div className="relative z-20 container mx-auto px-4 py-20 text-white">
          <div className="max-w-2xl">
            <ShieldCheck className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Privacy-Focused Analytics
            </h2>
            <p className="text-lg">
              Gain insights without compromising user privacy. XTrack is designed to be compliant with GDPR, CCPA, and PECR from the ground up. You own your data, and your users' privacy is always respected.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Ready to Unlock Your Growth Potential?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Start your journey with XTrack today and see your business from a
              whole new perspective.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Request a Demo{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
