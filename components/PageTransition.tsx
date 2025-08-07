'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Listen for route change start
    const handleStart = () => {
      setIsLoading(true);
    };

    // Listen for route change complete
    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay to show the animation
    };

    // Since Next.js 13+ doesn't have built-in router events for app directory,
    // we'll handle this differently by intercepting navigation
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Logo with animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="relative w-16 h-16"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      alt="Netlin logo"
                      src="/netlin-small-1-2.png"
                    />
                  </motion.div>
                  <div className="font-['Montserrat',Helvetica] font-normal text-white text-2xl tracking-[0.77px] leading-5">
                    <span className="font-extrabold tracking-[0.17px]">NETLIN</span>
                    <span className="font-medium tracking-[0.17px]">TECH</span>
                  </div>
                </div>
              </motion.div>

              {/* Loading dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex gap-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-[#4d9aff] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};
