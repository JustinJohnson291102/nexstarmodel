import GtmRoadmap from "@/components/gtm/roadmap";

export default function GtmStrategyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          Your Go-To-Market Launchpad
        </h1>
        <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
          We turn great ideas into market-leading products. Our Go-To-Market
          (GTM) strategy is a comprehensive roadmap designed to navigate the
          complexities of launching and scaling your venture successfully.
        </p>
      </div>
      <GtmRoadmap />
    </div>
  );
}
