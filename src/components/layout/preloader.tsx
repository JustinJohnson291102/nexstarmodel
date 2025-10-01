
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
      <div>
        <Image
          src="https://drive.google.com/uc?export=download&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
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
