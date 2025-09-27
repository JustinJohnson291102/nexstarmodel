
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
];

const serviceLinks = [
    { href: "/social-media", label: "Social Media" },
    { href: "/creative-branding", label: "Creative & Branding" },
    { href: "/b2b", label: "B2B Marketing" },
    { href: "/search-marketing", label: "Search Marketing" },
    { href: "/video-production", label: "Video Production" },
    { href: "/online-reputation-management", label: "Online Reputation Management" },
    { href: "/ecommerce-development", label: "E-commerce Development" },
];

const webSolutionLinks = [
    { href: "/web-solutions", label: "Web/Tech Solutions" },
    { href: "/shopify", label: "Shopify Expertise" },
]

const otherLinks: { href: string, label: string }[] = [
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({
    href,
    label,
    className = "",
  }: {
    href: string;
    label: string;
    className?: string;
  }) => (
    <Link
      href={href}
      className={cn(
        "text-xl font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-foreground",
        className
      )}
       onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
           <Image
            src="https://drive.google.com/uc?export=view&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
            alt="Nexstar Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-center">
          <nav className="hidden md:flex md:gap-6 items-center">
            {mainLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Link
                    href="/services"
                    className={cn(
                      "flex items-center text-xl font-medium text-foreground transition-colors hover:text-primary focus:outline-none",
                       pathname.startsWith('/services') || pathname.startsWith('/social-media') || pathname.startsWith('/creative-branding') || pathname.startsWith('/b2b') || pathname.startsWith('/search-marketing') || pathname.startsWith('/video-production') || pathname.startsWith('/online-reputation-management') || pathname.startsWith('/ecommerce-development') ? 'text-primary' : ''
                    )}
                  >
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                 <DropdownMenuItem asChild>
                    <Link href="/services">All Services</Link>
                  </DropdownMenuItem>
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <button
                    className={cn(
                      "flex items-center text-xl font-medium text-foreground transition-colors hover:text-primary focus:outline-none",
                       pathname.startsWith('/web-solutions') || pathname.startsWith('/shopify') ? 'text-primary' : ''
                    )}
                  >
                  Web Solutions <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {webSolutionLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {otherLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center mr-8">
           <Button asChild className="rounded-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                   <Image
                    src="https://drive.google.com/uc?export=view&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
                    alt="Nexstar Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
              <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
                {[...mainLinks, {href: "/services", label: "Services"}, {href: "/web-solutions", label: "Web Solutions"}, ...otherLinks].map(
                  ({ href, label }) => (
                    <NavLink key={href} href={href} label={label} className="text-lg" />
                  )
                )}
              </div>
              <Button asChild>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
