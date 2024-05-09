"use client";

import React, { ReactNode, useCallback, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  CartProvider  from "@/contexts/CartContext";

export interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const memoizedQueryClient = useCallback(() => queryClient, [queryClient]);

  return (
    <QueryClientProvider client={memoizedQueryClient()}>
      <CartProvider>
        {children}
        </CartProvider>
    </QueryClientProvider>
  );
};

export default Provider;
