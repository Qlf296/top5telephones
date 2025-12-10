"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProductPageShellProps {
  children: ReactNode;
}

export function ProductPageShell({ children }: ProductPageShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 sm:space-y-16"
    >
      {children}
    </motion.div>
  );
}

