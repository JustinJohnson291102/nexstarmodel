import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Marquee from "@/components/layout/marquee";

export const metadata: Metadata = {
  title: "Nexstar",
  description: "Innovating the digital space, one pixel at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
        <Marquee text="Attention: Beware of Scams! Scamsters are illegally using our name and logo - Xebec Communications to deceive unsuspecting job seekers and others. WhatsApp groups are being created for online tasks, YouTube reviews, crypto trading, etc. Please be vigilant and do not join any groups. Exit such groups immediately and report to Cybercrime. We do not offer online tasks nor do we do business through WhatsApp. Stay safe!" />
        <Toaster />
      </body>
    </html>
  );
}
