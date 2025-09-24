import Link from 'next/link';
import { Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'About Us' },
    { href: '#', label: 'Case Studies' },
    { href: '/services', label: 'Services' },
    { href: '#', label: 'D2C Marketing' },
    { href: '/xtrack', label: 'XTrack' },
    { href: '/shopify', label: 'Shopify' },
    { href: '/b2b', label: 'B2B Marketing' },
    { href: '/gtm-strategy', label: 'Go To Market' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold font-headline text-white">
                  Digitale Agency
                </span>
              </Link>
              <p className="text-sm text-gray-400 max-w-sm">
                Innovating the digital space, one pixel at a time. We are the architects of your digital success.
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-8 md:mt-0">
              &copy; {currentYear} Digitale Agency. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-3">
              {footerLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
              {footerLinks.slice(5).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
