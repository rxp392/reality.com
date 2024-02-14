import React from 'react';
import { RouterProvider } from 'react-router-dom';

import routes from './routes';

function App() {
  const router = routes();

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
