import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
