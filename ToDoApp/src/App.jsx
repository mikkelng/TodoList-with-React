// import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Sidebar from "../src/components/Sidebar";
// import Container from "../src/components/Container"
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ItemDetailPage } from "./components/ItemDetailsPage";
import { NotFoundPage } from "./components/NotFoundPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
 
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/itemdetails" element={<ItemDetailPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Sidebar />
      <Footer/>
    </div>
  );
};

export default App;
