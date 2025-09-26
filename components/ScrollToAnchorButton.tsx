"use client";

import React from 'react';
import { Button } from './ui/button';

interface ScrollToAnchorButtonProps {
  targetId: string;
  className?: string;
  children: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>["variant"];
}

// Small isolated client component so server components can include a smooth-scroll button
// without embedding event handlers directly (which causes RSC build errors).
export function ScrollToAnchorButton({ targetId, className, children, variant }: ScrollToAnchorButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      try {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        // Fallback for very old browsers
        window.location.hash = `#${targetId}`;
      }
    }
  };
  return (
    <Button variant={variant} className={className} onClick={handleClick} type="button">
      {children}
    </Button>
  );
}

export default ScrollToAnchorButton;
