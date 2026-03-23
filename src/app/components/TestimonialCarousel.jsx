'use client';

import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel({ reviews }) {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;
    const speed = 0.03; // pixels per ms to keep subtle and readable

    const scroll = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isHovered && !isDragging && scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += speed * deltaTime;

        // Loop seamlessly
        if (
          scrollContainerRef.current.scrollLeft >=
          scrollContainerRef.current.scrollWidth / 3
        ) {
          scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.scrollWidth / 3;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  // Drag to scroll logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch logic for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // We duplicate the reviews array to create an infinite scroll effect (3 copies guarantees wide screens stay filled)
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradients to fade out edges */}
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-black-elevated to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-black-elevated to-transparent z-10 pointer-events-none"></div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-8 px-4 sm:px-[10vw] cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: 'auto' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {duplicatedReviews.map((review, idx) => (
          <div
            key={idx}
            className="w-[85vw] sm:w-[350px] md:w-[400px] flex-shrink-0"
          >
            <TestimonialCard {...review} />
          </div>
        ))}
      </div>
    </div>
  );
}
