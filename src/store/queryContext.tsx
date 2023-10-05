"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface QueryContextProviderProps {
  children: React.ReactNode;
}

const QueryContextProvider: React.FC<QueryContextProviderProps> = (props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            staleTime: 1000 * 30, // 30 secs - Keep data fresh for this long
          },
        },
      })
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </>
  );
};

export default QueryContextProvider;
