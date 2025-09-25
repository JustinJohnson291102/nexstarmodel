
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
  { href: "/story", label: "Our Story" },
];

const serviceLinks = [
    { href: "/services#social-media", label: "Social Media" },
    { href: "/services#branding", label: "Creative & Branding" },
    { href: "/services#web-tech", label: "Web/Tech" },
    { href: "/services#b2b", label: "B2B Marketing" },
]

const webSolutionsLinks = [
  { href: "/web-solutions", label: "Web Solutions" },
  { href: "/shopify", label: "Shopify" },
];

const otherLinks = [
  { href: "/b2b", label: "B2B Marketing" },
  { href: "/xtrack", label: "XTrack" },
  { href: "/podcast", label: "Podcast" },
  { href: "/gtm-strategy", label: "Go To Market", isNew: true },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({
    href,
    label,
    isNew,
    className = "",
  }: {
    href: string;
    label: string;
    isNew?: boolean;
    className?: string;
  }) => (
    <Link
      href={href}
      className={cn(
        "text-base font-medium transition-colors hover:text-primary flex flex-col items-center",
        pathname === href ? "text-primary" : "text-foreground",
        className
      )}
    >
      {label}
      {isNew && (
        <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full mt-1">
          NEW
        </span>
      )}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
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
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-base font-medium text-foreground transition-colors hover:text-primary focus:outline-none">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-base font-medium text-foreground transition-colors hover:text-primary focus:outline-none">
                Web Solutions <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {webSolutionsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {otherLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isNew={link.isNew}
              />
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
              <div className="flex-1 flex flex-col gap-4">
                {[...mainLinks, {href: "/services", label: "Services"}, ...webSolutionsLinks, ...otherLinks].map(
                  ({ href, label, isNew }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {label}
                      {isNew && (
                         <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full ml-2">
                          NEW
                        </span>
                      )}
                    </Link>
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
