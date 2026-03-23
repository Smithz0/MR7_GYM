'use client';

import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedMR7');
    if (hasVisited) {
      setLoading(false);
      setVisible(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        setTimeout(() => setVisible(false), 500); // 500ms fade out
        sessionStorage.setItem('hasVisitedMR7', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {visible && (
        <div
          className={`fixed inset-0 z-[9999] bg-black-deep flex items-center justify-center transition-opacity duration-500 ${
            loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative text-center z-10">
            <div className="inline-block relative">
              <img 
                src="/images/logo.png" 
                alt="MR7 Fitness Loading" 
                className="h-24 md:h-32 w-auto relative z-10 mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gold blur-2xl opacity-20 animate-pulse rounded-full z-0 transform scale-150"></div>
            </div>
            <p className="mt-4 text-gray-400 font-semibold tracking-widest uppercase text-sm animate-pulse z-10 relative">
              Loading
            </p>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
