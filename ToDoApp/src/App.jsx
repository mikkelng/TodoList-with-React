// import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Sidebar from "../src/components/Sidebar";
import Container from "../src/components/Container"
// import tasksData from '../src/task.json'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Sidebar />
      <Footer/>
    </div>
  );
};

export default App;
