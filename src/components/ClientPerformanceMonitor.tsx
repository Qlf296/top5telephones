'use client';

import dynamic from 'next/dynamic';

// Wrapper client pour PerformanceMonitor
const PerformanceMonitor = dynamic(() => import('@/components/PerformanceMonitor'), {
  ssr: false,
});

export default function ClientPerformanceMonitor() {
  return <PerformanceMonitor />;
}

