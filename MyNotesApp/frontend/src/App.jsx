import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import About from "./pages/About";
import Upload from "./pages/upload";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {isAuthenticated ? (
            <>
              <Route path="/search" element={<Search />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          <Route path="/about" element={<About />} />

          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
