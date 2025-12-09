import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className = '' }: Props) {
  return (
    <div
      className={[
        'min-h-screen',
        'bg-[radial-gradient(120%_120%_at_20%_20%,#f8fbff_0%,#eef3ff_35%,#e7efff_60%,#eaf2ff_100%)]',
        'text-slate-900',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">{children}</div>
    </div>
  );
}

