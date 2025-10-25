

import { useEffect, useState } from 'react';

const WavyHeader = () => {
  const [bubbles, setBubbles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 40 }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        const distance = 6 + Math.random() * 4;
        const position = -5 + Math.random() * 110;
        const time = 2 + Math.random() * 2;
        const delay = -1 * (2 + Math.random() * 2);

        return (
          <div
            key={i}
            className="bubble"
            style={
              {
                '--size': `${size}rem`,
                '--distance': `${distance}rem`,
                '--position': `${position}%`,
                '--time': `${time}s`,
                '--delay': `${delay}s`,
                '--bubble-color': 'hsl(var(--background))',
              } as React.CSSProperties
            }
          />
        );
      });
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="relative z-40">
      <div
        className="absolute top-0 left-0 right-0 h-4 bg-background"
        style={{ filter: 'url(#blob)' }}
      >
        {bubbles}
      </div>
    </div>
  );
};

export default WavyHeader;
