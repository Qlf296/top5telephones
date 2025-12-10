import React from 'react';
import Link from 'next/link';

type Props = {
  as?: 'div' | 'a' | 'link';
  href?: string;
  className?: string;
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
};

const paddingMap = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function GlassCard({
  as = 'div',
  href,
  className = '',
  padding = 'md',
  children,
  target,
  rel,
}: Props) {
  const baseClasses = [
    'glass-card',
    'backdrop-blur-2xl',
    'border border-white/25',
    'shadow-[0_10px_28px_rgba(0,0,0,0.08)]',
    'transition-all duration-200',
    paddingMap[padding],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'link' && href) {
    return (
      <Link 
        href={href} 
        className={`${baseClasses} link-clickable`}
        target={target} 
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  if (as === 'a' && href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} link-clickable`}
        target={target} 
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}

