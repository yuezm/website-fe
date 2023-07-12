import Footer from './pages/components/Footer';
import Header from './pages/components/Header';

import { RouterProvider } from 'react-router-dom';
import { routers } from './router';

function App() {
  return (
    <div>
      <Header></Header>
      <main className="mt-20">
        <RouterProvider router={routers}></RouterProvider>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
