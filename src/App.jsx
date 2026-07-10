import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Apply from "./Pages/Apply";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";


function App() {
  return(
    <Router>
      <div className="App">
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;