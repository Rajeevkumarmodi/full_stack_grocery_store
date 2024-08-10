import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Shop from "./pages/shop/Shop";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { context, contextProvider } from "./context/Context";
// import { contextProvider } from "./context/Context";

function App() {
  const { showHeaderFooter } = contextProvider();

  return (
    <div>
      <BrowserRouter>
        {showHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {showHeaderFooter && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
