"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Lightweight, dependency-free top progress indicator triggered on pathname change.
export const RouteProgress: React.FC = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start on route change
    setVisible(true);
    setProgress(10);

    const step1 = setTimeout(() => setProgress(55), 120);
    const step2 = setTimeout(() => setProgress(78), 260);
    const step3 = setTimeout(() => setProgress(92), 500);

    // Complete shortly after paint/hydration
    const finish = setTimeout(() => {
      setProgress(100);
      const hide = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(hide);
    }, 800);

    return () => {
      clearTimeout(step1); clearTimeout(step2); clearTimeout(step3); clearTimeout(finish);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#2d85ff] via-[#4d9aff] to-[#7fb8ff] shadow-[0_0_8px_#4d9aff88] transition-[width] ease-out duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default RouteProgress;