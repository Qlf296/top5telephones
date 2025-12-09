import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

export function Pill({ children, className = '', icon }: Props) {
  return (
    <span
      className={[
        'ios-chip',
        'text-sm text-slate-800',
        'shadow-[0_10px_24px_rgba(0,0,0,0.06)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon}
      {children}
    </span>
  );
}

