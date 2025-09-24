import { cn } from '@/lib/utils';

type MarqueeProps = {
  text: string;
  className?: string;
};

export default function Marquee({ text, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground relative flex overflow-x-hidden',
        className
      )}
    >
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
      </div>

      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
         <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
      </div>
    </div>
  );
}
