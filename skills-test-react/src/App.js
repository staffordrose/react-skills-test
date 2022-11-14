import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BasicForm, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'todo',
    element: <BasicForm />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
