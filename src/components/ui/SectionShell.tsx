import React from 'react';

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({ eyebrow, title, subtitle, actions, children, className = '', id }: Props) {
  return (
    <section id={id} className={['space-y-6', className].filter(Boolean).join(' ')}>
      {(eyebrow || title || subtitle || actions) && (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                <span className="w-8 h-[1px] bg-slate-300" />
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">{title}</h2>}
            {subtitle && <p className="text-base sm:text-lg text-slate-600">{subtitle}</p>}
          </div>
          {actions && <div className="flex gap-3">{actions}</div>}
        </div>
      )}
      <div className="grid gap-4 sm:gap-6">{children}</div>
    </section>
  );
}

