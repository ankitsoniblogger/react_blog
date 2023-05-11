import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Articls from "./Articls";
import ArticlsList from "./ArticlsList";
import Navbar from "./components/Navbar";
import Ankit from "./ankit/index";
import Header from "./ankit/Header";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Header />
      <div className="mx-auto pt-20 mb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Articls />} />
          <Route path="/article-list" element={<ArticlsList />} />
          <Route path="/ankit" element={<Ankit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
