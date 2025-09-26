"use client";
import { useEffect, useRef } from 'react';

export function useInViewFade<T extends HTMLElement>(options: IntersectionObserverInit = { rootMargin: '0px 0px -80px 0px', threshold: 0.15 }) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.classList.contains('in-view')) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);
  return ref;
}

export const InViewFade: React.FC<{ delay?: number; className?: string; as?: keyof JSX.IntrinsicElements; children: React.ReactNode; }> = ({ delay = 0, className = '', as = 'div', children }) => {
  const ref = useInViewFade<HTMLElement>();
  const Comp: any = as;
  return (
    <Comp ref={ref} style={{ ['--delay' as any]: `${delay}s` }} className={`fade-in-observe ${className}`}>{children}</Comp>
  );
};
