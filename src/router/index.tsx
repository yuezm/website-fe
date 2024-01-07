import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LazyNote = lazy(() => import('../view/notes'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyNote></LazyNote>,
  },
]);
