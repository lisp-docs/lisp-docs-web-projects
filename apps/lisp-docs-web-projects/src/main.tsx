import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app/app';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/hello',
//     element: <div>this is a test, hello world!</div>,
//   }
// ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
