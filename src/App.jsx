import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Detels from "./Pages/Detels";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import img from "././../public/mylogo.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img className="imgg" src={img} alt="" />
            <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
              {/* <NavLink to="/Home">
                <ul>
                  <li>Home</li>
                </ul>
              </NavLink> */}
              <NavLink to="/about">
                <ul>
                  <li>About</li>
                </ul>
              </NavLink>
              <NavLink to="/contact">
                <ul>
                  <li>Contact</li>
                </ul>
              </NavLink>
              {/* <NavLink to="/register">
                <ul>
                  <li>Register</li>
                </ul>
              </NavLink> */}
            </div>
            <div>
              <div class="input-group">
                <input
                  placeholder="Enter new item here"
                  type="text"
                  id="input-field"
                />
                <button className="submit-button">
                  <span>ADD</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="products/:id" element={<Detels />}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
