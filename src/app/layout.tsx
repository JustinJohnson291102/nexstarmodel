
"use client";

import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Marquee from "@/components/layout/marquee";
import { useState, useEffect } from "react";
import Preloader from "@/components/layout/preloader";
import Chatbot from "@/components/layout/chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

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
         <title>Nexstar</title>
        <meta name="description" content="Innovating the digital space, one pixel at a time." />
      </head>
      <body className="font-body antialiased">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <main className="pt-4">{children}</main>
            <Footer />
            <Marquee text="Attention: Beware of Scams! Scamsters are illegally using our name and logo - Xebec Communications to deceive unsuspecting job seekers and others. WhatsApp groups are being created for online tasks, YouTube reviews, crypto trading, etc. Please be vigilant and do not join any groups. Exit such groups immediately and report to Cybercrime. We do not offer online tasks nor do we do business through WhatsApp. Stay safe!" />
            <Chatbot />
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}

    