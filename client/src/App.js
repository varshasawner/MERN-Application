import React from "react";
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Route>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;
