
import { cn } from '@/lib/utils';

type MarqueeProps = {
  text: string;
  className?: string;
};

export default function Marquee({ text, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground fixed bottom-0 left-0 right-0 z-50 flex w-full overflow-x-hidden',
        className
      )}
    >
      <div className="flex w-max animate-marquee-slow flex-shrink-0 py-2">
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
        <span className="mx-4 font-semibold">{text}</span>
      </div>
    </div>
  );
}
