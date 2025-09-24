import { Code } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-6 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline text-accent inline-block">
                Digitale Agency
            </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Digitale Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
