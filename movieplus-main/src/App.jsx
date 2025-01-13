import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Movie } from "./pages/Movie/Movie";
import { NotFound } from "./pages/NotFound/NotFound";
import { Search } from "./pages/Search/Search";
import { About } from "./pages/About/About";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
