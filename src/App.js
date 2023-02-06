import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import './SASS/main.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Urlvalue from "./components/Urlvalue";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Urlvalue/>}/> */}
          <Route path="/:home" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
