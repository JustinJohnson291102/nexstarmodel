
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'marquee-slow': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'chat-bubble': {
          '0%, 100%': { opacity: '0', transform: 'translateY(0) scale(0.5)' },
          '15%': { opacity: '1', transform: 'translateY(-100%) scale(1)' },
          '85%': { opacity: '1', transform: 'translateY(-100%) scale(1)' },
          '95%': { opacity: '0', transform: 'translateY(0) scale(0.5)' },
        },
        typing: {
          '0%': {
            width: '0',
            'border-right-color': 'hsl(var(--primary-foreground))',
          },
          '99%': { 'border-right-color': 'hsl(var(--primary-foreground))' },
          '100%': { width: '100%', 'border-right-color': 'transparent' },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 3s ease-in-out infinite',
        'marquee-slow': 'marquee-slow 120s linear infinite',
        'chat-bubble': 'chat-bubble 6s ease-in-out infinite',
        typing: 'typing 2s steps(27) forwards',
        blink: 'blink 1s infinite step-start',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const animationDelay = theme('animationDelay');
      if (animationDelay) {
        Object.entries(animationDelay).forEach(([key, value]) => {
          newUtilities[`.animation-delay-\\[${key}\\]`] = {
            'animation-delay': value,
          };
        });
      }
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

    