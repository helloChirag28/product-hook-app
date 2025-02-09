// providers/ReactQueryProvider.tsx
"use client"; // 👈 Must be a client component

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface ReactQueryProviderProps {
  children: ReactNode;
}

export default function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const [queryClient] = useState(() => new QueryClient()); // 👈 Ensure stable QueryClient instance

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
