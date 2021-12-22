import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Universities from "./Component/Universities/Universities";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="universities/:countryName" element={<Universities />} />
      </Routes>
    </div>
  );
}

export default App;
