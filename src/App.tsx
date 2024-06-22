import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { defaultQueryFn } from "config/queryClient";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: defaultQueryFn,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}></QueryClientProvider>
  );
}

export default App;
