import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {  QueryClient, QueryClientProvider } from 'react-query';

import routes from './routes.jsx';

function App() {
  const queryClient = new QueryClient()
  const router = routes();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
