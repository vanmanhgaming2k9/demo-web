'use client';
 
import { ProgressProvider } from '@bprogress/next/app';

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

const ProgressProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const color = resolvedTheme === "dark" ? "#fff" : "#000";
  return (
    <ProgressProvider 
      height="4px"
      color={color}
      options={{ showSpinner: true }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};
 
export default ProgressProviders;