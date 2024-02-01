import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LazyHome = lazy(() => import('../views/home'));
const LazyMindList = lazy(() => import('../views/mind'));
const LazyMindDetail = lazy(() => import('../views/mind/Detail'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyHome></LazyHome>,
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
