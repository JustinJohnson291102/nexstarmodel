
"use client";

import { useEffect } from 'react';

export default function AnimatedText() {
  useEffect(() => {
    const message = document.querySelector('.message');
    if (!message) return;

    const createSparkle = (element: HTMLElement) => {
      const sparkle = document.createElement('span');
      sparkle.textContent = '✨';
      sparkle.style.position = 'absolute';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animation = 'sparkle 1s forwards';
      sparkle.style.pointerEvents = 'none';
      element.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    const handleDblClick = () => {
      createSparkle(message as HTMLElement);
    };

    message.addEventListener('dblclick', handleDblClick);

    const words = document.querySelectorAll('.word1, .word2, .word3, .word4');
    const handleClick = (event: Event) => {
        const word = event.currentTarget as HTMLElement;
        word.style.transform = 'scale(1.1)';
        setTimeout(() => {
            word.style.transform = 'scale(1)';
        }, 200);
    };

    words.forEach(word => {
        word.addEventListener('click', handleClick);
    });

    return () => {
      message.removeEventListener('dblclick', handleDblClick);
      words.forEach(word => {
        word.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="animated-text-container">
      <h1 className="flex items-center">
        <span className="prefix">We offer</span>
        <div className="message ml-1">
          <div className="word1">Web Development</div>
          <div className="word2">Digital Marketing</div>
          <div className="word3">B2B Marketing</div>
          <div className="word4">Augmented Reality</div>
        </div>
      </h1>
    </div>
  );
}
