import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LazyNote = lazy(() => import('../view/notes'));
const LazyMind = lazy(() => import('../view/mind'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyNote></LazyNote>,
  },
  {
    path: '/mind',
    element: <LazyMind></LazyMind>,
  },
]);
