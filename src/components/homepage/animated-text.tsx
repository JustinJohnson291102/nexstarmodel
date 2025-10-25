


import { useEffect } from 'react';

export default function AnimatedText() {
  
  return (
    <div className="animated-text-container">
      <span className="prefix mb-4 md:mb-12" style={{ color: 'white' }}>We offer</span>
      <div className="message">
        <div className="word1 word-animation" style={{color: 'white'}}>Web Development</div>
        <div className="word2 word-animation" style={{color: 'white'}}>Digital Marketing</div>
        <div className="word3 word-animation" style={{color: 'white'}}>B2B Marketing</div>
        <div className="word4 word-animation" style={{color: 'white'}}>Augmented Reality</div>
      </div>
    </div>
  );
}
