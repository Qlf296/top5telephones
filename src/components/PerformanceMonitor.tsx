'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          // Send to analytics if needed
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime),
            });
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as any;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page Load Time:', loadTime);
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(loadTime),
            });
          }
        }
      });

      // Cleanup observers on unmount
      return () => {
        lcpObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
} 