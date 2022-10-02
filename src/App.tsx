import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './pages/Blog';
import Footer from './pages/Footer';
import Header from './pages/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}
