// providers/Providers.tsx
"use client";
import { SessionProvider } from "next-auth/react";
import { Provider as JotaiProvider } from 'jotai';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <SessionProvider>
        {children}
      </SessionProvider>
    </JotaiProvider>
  );
};
