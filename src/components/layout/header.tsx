
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
];

const serviceLinks = [
    { href: "/services", label: "All Services" },
    { href: "/social-media", label: "Social Media" },
    { href: "/creative-branding", label: "Creative & Branding" },
    { href: "/b2b", label: "B2B Marketing" },
    { href: "/search-marketing", label: "Search Marketing" },
    { href: "/video-production", label: "Video Production" },
    { href: "/online-reputation-management", label: "Online Reputation Management" },
    { href: "/ecommerce-development", label: "E-commerce Development" },
    { href: "/web-solutions", label: "Website Development" },
    { href: "/mobile-app-development", label: "Mobile App Development" },
    { href: "/augmented-reality", label: "Augmented Reality" },
    { href: "/gtm-strategy", label: "GTM Strategy"},
    { href: "/performance-marketing", label: "Performance Marketing" },
    { href: "/rapid-website-development", label: "Rapid Website Development" },
    { href: "/backend-frontend-outsource", label: "Backend & Frontend Outsource" },
    { href: "/whatsapp-chatbots", label: "WhatsApp Chatbots" },
    { href: "/digital-business-consulting", label: "Digital Business Consulting" },
    { href: "/digital-branding", label: "Digital Branding" },
    { href: "/xtrack", label: "XTrack Analytics" },
    { href: "/digital-transformation", label: "Digital Transformation" },
];

const webSolutionLinks = [
    { href: "/web-solutions", label: "Web/Tech Solutions" },
    { href: "/shopify", label: "Shopify Expertise" },
]

const pagesLinks = [
    { href: "/pricing/seo-pricing", label: "SEO Pricing" },
    { href: "/pricing/smo-pricing", label: "SMO Pricing" },
    { href: "/pricing/ppc-pricing", label: "PPC Pricing" },
]

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
        "text-base font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-foreground",
        className
      )}
       onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  const isServiceActive = serviceLinks.some(link => pathname.startsWith(link.href));
  const isWebSolutionActive = webSolutionLinks.some(link => pathname.startsWith(link.href));
  const isPricingActive = pagesLinks.some(link => pathname.startsWith(link.href));

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[4.5rem] md:h-28 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
           <Image
            src="https://drive.google.com/uc?export=download&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
            alt="Nexstar Logo"
            width={180}
            height={60}
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
                      "flex items-center text-base font-medium text-foreground transition-colors hover:text-primary focus:outline-none",
                       isServiceActive ? 'text-primary' : ''
                    )}
                  >
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-96 overflow-y-auto w-56">
                {serviceLinks.map((link, index) => (
                  <DropdownMenuItem key={`${link.href}-${index}`} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <button
                    className={cn(
                      "flex items-center text-base font-medium text-foreground transition-colors hover:text-primary focus:outline-none",
                       isWebSolutionActive ? 'text-primary' : ''
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <button
                    className={cn(
                      "flex items-center text-base font-medium text-foreground transition-colors hover:text-primary focus:outline-none",
                       isPricingActive ? 'text-primary' : ''
                    )}
                  >
                  Pricing <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {pagesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink href="/podcast" label="Podcast" />
          </nav>
        </div>
        <div className="hidden md:flex items-center ml-auto">
           <Button asChild className="rounded-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-6 border-b">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                   <Image
                    src="https://drive.google.com/uc?export=download&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
                    alt="Nexstar Logo"
                    width={180}
                    height={60}
                    className="object-contain"
                  />
                </Link>
              </div>
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto pt-4">
                {mainLinks.map(({ href, label }) => (
                  <NavLink key={href} href={href} label={label} className="text-lg p-2" />
                ))}

                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className="p-2 text-lg font-medium hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col gap-2">
                        {serviceLinks.map(link => (
                          <NavLink key={link.href} href={link.href} label={link.label} className="text-base p-2" />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="web-solutions" className="border-b-0">
                    <AccordionTrigger className="p-2 text-lg font-medium hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                      Web Solutions
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                       <div className="flex flex-col gap-2">
                        {webSolutionLinks.map(link => (
                          <NavLink key={link.href} href={link.href} label={link.label} className="text-base p-2" />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="pricing" className="border-b-0">
                    <AccordionTrigger className="p-2 text-lg font-medium hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                      Pricing
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                       <div className="flex flex-col gap-2">
                        {pagesLinks.map(link => (
                          <NavLink key={link.href} href={link.href} label={link.label} className="text-base p-2" />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <NavLink href="/podcast" label="Podcast" className="text-lg p-2" />
                 <NavLink href="/portfolio" label="Portfolio" className="text-lg p-2" />
              </div>
              <Button asChild className="mt-4 rounded-full">
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
