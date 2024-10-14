import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
