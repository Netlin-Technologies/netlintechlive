'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from './LoadingContext';

export const LoadingOverlay = (): JSX.Element => {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0c15] via-[#0c0e14] to-[#0e1018]"
        >
          {/* Subtle background animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4d9aff]/5 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-8 md:gap-12 px-4">
            {/* Logo with luxury glow effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Outer glow rings */}
              <motion.div
                className="absolute inset-0 -m-6 md:-m-8 rounded-full border border-[#4d9aff]/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 -m-4 md:-m-6 rounded-full border border-[#4d9aff]/30"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <div className="flex items-center gap-4 md:gap-6 relative z-10">
                {/* Logo with subtle pulse */}
                <motion.div 
                  className="relative w-16 h-16 md:w-20 md:h-20"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Logo background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4d9aff]/20 to-[#4d9aff]/10 rounded-full blur-xl"></div>
                  <img
                    className="relative w-full h-full object-cover z-10 drop-shadow-2xl"
                    alt="Netlin logo"
                    src="/netlin-small-1-2.png"
                  />
                </motion.div>
                
                {/* Company name with elegant entrance */}
                <motion.div 
                  className="font-['Montserrat',Helvetica] font-normal text-white text-2xl md:text-3xl lg:text-4xl tracking-wide"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <span className="font-extrabold tracking-[0.2px] text-white">
                    NETLIN
                  </span>
                  <span className="font-medium tracking-[0.2px] text-white/90">TECH</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Modern loading indicator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-sm px-4"
            >
              {/* Elegant progress bar */}
              <div className="relative w-full max-w-64 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4d9aff] to-[#4d9aff] rounded-full shadow-lg shadow-[#4d9aff]/50"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.8,
                    ease: "easeOut",
                  }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-6 md:w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                  animate={{
                    x: ["-1.5rem", "calc(100% + 1.5rem)"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
              </div>
              
              {/* Minimalist loading text */}
              <motion.p
                className="text-white/70 font-sora font-light text-xs md:text-sm tracking-[0.3em] uppercase"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  letterSpacing: ["0.3em", "0.4em", "0.3em"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Loading
              </motion.p>
              
              {/* Sophisticated dot indicator */}
              <div className="flex gap-2 md:gap-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#4d9aff] rounded-full shadow-lg shadow-[#4d9aff]/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
