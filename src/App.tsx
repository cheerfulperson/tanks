import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Vehicles } from "views/Vehicles/Vehicles";
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
    <QueryClientProvider client={queryClient}>
      <Vehicles />
    </QueryClientProvider>
  );
}

export default App;
