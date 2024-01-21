import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LazyMain = lazy(() => import('../views/main'));
const LazyMindList = lazy(() => import('../views/mind'));
const LazyMindDetail = lazy(() => import('../views/mind/Detail'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyMain></LazyMain>,
  },
  {
    path: '/mind',
    element: <LazyMindList></LazyMindList>,
  },
  {
    path: '/mind/:id',
    element: <LazyMindDetail></LazyMindDetail>,
  },
]);
