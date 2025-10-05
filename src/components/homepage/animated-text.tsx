
"use client";

import { useEffect } from 'react';

export default function AnimatedText() {
  
  return (
    <div className="animated-text-container">
      <span className="prefix mb-4 md:mb-12 text-4xl md:text-6xl" style={{ color: 'red' }}>We offer</span>
      <div className="message">
        <div className="word1 word-animation">Web Development</div>
        <div className="word2 word-animation">Digital Marketing</div>
        <div className="word3 word-animation">B2B Marketing</div>
        <div className="word4 word-animation">Augmented Reality</div>
      </div>
    </div>
  );
}
