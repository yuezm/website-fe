import { memo, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import Footer from './views/Footer';
import Header from './views/Header';

const App = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header></Header>
      <main className="flex-auto w-full h-0">
        <Suspense>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default memo(App);
