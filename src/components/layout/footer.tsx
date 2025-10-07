
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/b2b', label: 'B2B Marketing' },
    { href: '/search-marketing', label: 'Search Marketing' },
    { href: '/social-media', label: 'Social Media' },
    { href: '/web-solutions', label: 'Web Solutions' },
    { href: '/ecommerce-development', label: 'E-commerce' },
  ];

  const socialLinks = [
    { href: '#', label: 'Facebook', icon: Facebook },
    { href: '#', label: 'Twitter', icon: Twitter },
    { href: '#', label: 'LinkedIn', icon: Linkedin },
    { href: '#', label: 'Instagram', icon: Instagram },
    { href: '#', label: 'YouTube', icon: Youtube },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-4 flex flex-col items-start -mt-16">
            <Link href="/" className="mb-2">
               <Image
                src="https://drive.google.com/uc?export=download&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
                alt="Nexstar Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mt-2">
              Innovating the digital space, one pixel at a time. We are the
              architects of your digital success.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Top Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <h4 className="font-bold text-lg mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={link.label}>
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
         <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Nexstar. All rights reserved. | <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </p>
          </div>
      </div>
    </footer>
  );
}
