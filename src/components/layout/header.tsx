"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/shopify", label: "Shopify" },
  { href: "/gtm-strategy", label: "GTM Strategy" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block">
            Digitale Agency
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex md:gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
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
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Digitale</span>
                  </Link>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === href
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
