'use client';

import React, { useState, useRef } from 'react';

export default function TransformationSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    
    // Support both mouse and touch events
    let clientX;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    if (clientX === undefined) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    handleDrag(e);
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    handleDrag(e);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] max-w-2xl mx-auto rounded-lg overflow-hidden select-none touch-none group hover:cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleDrag}
    >
      {/* Before Image */}
      <img
        src={beforeImage}
        alt="Before transformation"
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* Before Label */}
      <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-semibold backdrop-blur-sm shadow-sm transition-opacity group-hover:opacity-100 opacity-70">
        Before
      </div>
      
      {/* After Image */}
      <div
        className="absolute inset-0 right-0 w-full h-full break-normal"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={afterImage}
          alt="After transformation"
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />
        
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-semibold backdrop-blur-sm shadow-sm transition-opacity group-hover:opacity-100 opacity-70">
          After
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
