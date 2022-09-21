import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path="/" element={ <Home /> }></Route>

        <Route path="/about" element={ <About /> }></Route>

        <Route path="/contact" element={ <Contact /> }></Route>

        <Route path="/login" element={ <Login /> }></Route>

        <Route path="/register" element={ <Registration /> }></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
