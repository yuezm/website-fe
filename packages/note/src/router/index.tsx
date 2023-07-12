import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const List = lazy(() => import('../pages/list'));
const Detail = lazy(() => import('../pages/detail'));

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <List></List>,
  },
  {
    path: '/:id',
    element: <Detail></Detail>,
  },
]);
