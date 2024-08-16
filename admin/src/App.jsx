import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AddCategory from "./pages/AddCategory";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-category" element={<AddCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
