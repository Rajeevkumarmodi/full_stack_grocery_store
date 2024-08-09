import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Shop from "./pages/shop/Shop";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
