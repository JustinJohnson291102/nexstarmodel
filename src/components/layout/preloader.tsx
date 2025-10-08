"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="p-8">
        <Image
          src="https://ik.imagekit.io/ggelm1lwa/nexstar-logo-removebg-preview.png?updatedAt=1759921791444"
          alt="Nexstar Logo"
          width={800}
          height={500}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
