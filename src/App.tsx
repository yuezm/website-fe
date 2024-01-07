import { memo } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import Footer from './view/Footer';
import Header from './view/Header';

const App = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header></Header>

      <main className="flex-auto h-full w-full">
        <RouterProvider router={router}></RouterProvider>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default memo(App);
