
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
      <div className="animate-pulse">
        <Image
          src="https://drive.google.com/uc?export=view&id=1XjSM_V5ocR-4hD3rzvX33PnP3jRonadV"
          alt="Nexstar Logo"
          width={300}
          height={100}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
