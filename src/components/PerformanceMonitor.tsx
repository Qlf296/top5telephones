'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        if (lastEntry) {
          const lcpValue = lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime;
          // Send to analytics if needed
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lcpValue),
            });
          }
        }
      });
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback si non supporté
      }

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        // Send CLS to analytics
        if (typeof window !== 'undefined' && (window as any).gtag && clsValue > 0) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
          });
        }
      });
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Fallback si non supporté
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          const fidValue = entry.processingStart - entry.startTime;
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(fidValue),
            });
          }
        }
      });
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Fallback si non supporté
      }

      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as any;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
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
        try {
          lcpObserver.disconnect();
          clsObserver.disconnect();
          fidObserver.disconnect();
        } catch (e) {
          // Ignore errors on cleanup
        }
      };
    }
  }, []);

  return null; // This component doesn't render anything
} 