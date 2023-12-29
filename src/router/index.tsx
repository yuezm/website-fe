import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const LazyNote = lazy(() => import("../view/notes"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyNote></LazyNote>,
  },
]);
