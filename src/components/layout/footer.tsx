import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/b2b', label: 'B2B Marketing' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blogs' },
    { href: '/story#team', label: 'Team' },
    { href: '/services', label: 'TV' },
    { href: '/services', label: 'Print' },
    { href: '/services', label: 'Radio' },
  ];

  return (
    <footer className="bg-gray-200 text-black">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between md:col-span-1">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                 <Image
                  src="https://drive.google.com/uc?export=download&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
                  alt="Nexstar Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </Link>
              <p className="text-sm text-gray-700 max-w-sm">
                Innovating the digital space, one pixel at a time. We are the
                architects of your digital success.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg">Quick Links</h4>
              {footerLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-primary hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
               <h4 className="font-bold text-lg text-gray-200">.</h4>
              {footerLinks.slice(5, 10).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-primary hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-lg">Connect</h4>
               <a href="#" className="text-gray-700 hover:text-primary hover:underline transition-colors">Facebook</a>
               <a href="#" className="text-gray-700 hover:text-primary hover:underline transition-colors">LinkedIn</a>
               <a href="#" className="text-gray-700 hover:text-primary hover:underline transition-colors">Twitter</a>
               <a href="#" className="text-gray-700 hover:text-primary hover:underline transition-colors">Instagram</a>
               <a href="#" className="text-gray-700 hover:text-primary hover:underline transition-colors">YouTube</a>
            </div>
          </div>
        </div>
         <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-600">
            <p>
              &copy; {currentYear} Nexstar. All rights reserved. | <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </p>
          </div>
      </div>
    </footer>
  );
}
