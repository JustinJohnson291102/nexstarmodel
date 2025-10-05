
"use client";

import { useEffect } from 'react';

export default function AnimatedText() {
  
  return (
    <div className="animated-text-container">
      <span className="prefix mb-4 md:mb-12">We offer</span>
      <div className="message">
        <div className="word1">Web Development</div>
        <div className="word2">Digital Marketing</div>
        <div className="word3">B2B Marketing</div>
        <div className="word4">Augmented Reality</div>
      </div>
    </div>
  );
}
