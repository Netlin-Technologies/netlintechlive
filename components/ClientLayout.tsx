'use client';

import React from 'react';

// Minimal client boundary kept in case future client-only wrappers are needed.
export const ClientLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <>{children}</>;
};
