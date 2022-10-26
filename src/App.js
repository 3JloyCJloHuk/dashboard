import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts";
import Home from "./page/home";
import Product from "./page/Product";
import Customers from "./page/Customers";
import Income from "./page/Income";
import Promote from "./page/Promote";
import Help from "./page/Help";
import NotFoundPage from "./page/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='customers' element={<Customers />} />
        <Route path='income' element={<Income />} />
        <Route path='promote' element={<Promote />} />
        <Route path='help' element={<Help />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
