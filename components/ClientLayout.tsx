'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LoadingProvider, useLoading } from './LoadingContext';
import { LoadingOverlay } from './LoadingOverlay';

// Component to handle route changes and page loading
const RouteChangeHandler = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { stopLoading } = useLoading();
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // Reset page ready state when route changes
    setIsPageReady(false);
    
    // Wait for the page to be fully rendered
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 200); // Increased delay to ensure content is rendered

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (isPageReady) {
      // Reduced wait time for better UX (1.8s progress + buffer)
      const stopTimer = setTimeout(() => {
        stopLoading();
      }, 2000); // Faster loading for better user experience

      return () => clearTimeout(stopTimer);
    }
  }, [isPageReady, stopLoading]);

  // Also listen for when the document is ready
  useEffect(() => {
    const handleLoad = () => {
      setIsPageReady(true);
    };

    // If document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return <>{children}</>;
};

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps): JSX.Element => {
  return (
    <LoadingProvider>
      <LoadingOverlay />
      <RouteChangeHandler>
        {children}
      </RouteChangeHandler>
    </LoadingProvider>
  );
};
