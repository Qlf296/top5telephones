import React from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type LinkProps = CommonProps & {
  as: 'link';
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
};

type Props = ButtonProps | LinkProps;

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-transform duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ios-blue-500 relative z-10 cursor-pointer';

const sizeMap: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-5 py-3 text-lg',
};

const variantMap: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-[#0a84ff] to-[#0071e3] text-white border border-white/30 shadow-[0_12px_28px_rgba(10,132,255,0.25)] hover:shadow-[0_16px_32px_rgba(10,132,255,0.28)]',
  secondary:
    'bg-white/80 text-slate-900 border border-white/40 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.10)]',
  ghost:
    'bg-white/60 text-slate-900 border border-white/30 shadow-[0_8px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_26px_rgba(0,0,0,0.08)]',
};

export function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth,
    leftIcon,
    rightIcon,
    className = '',
    children,
    ...rest
  } = props as any;

  const classes = [
    base,
    sizeMap[size as Size],
    variantMap[variant as Variant],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ((props as LinkProps).as === 'link') {
    const linkProps = rest as LinkProps;
    return (
      <Link 
        href={linkProps.href} 
        target={linkProps.target} 
        rel={linkProps.rel} 
        className={`${classes} link-clickable-high`}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  const buttonProps = rest as ButtonProps;
  return (
    <button {...buttonProps} className={classes}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

